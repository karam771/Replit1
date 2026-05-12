import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const { Jimp } = require('jimp');

const SRC  = 'attached_assets/logo_original_backup.png';
const DEST = 'attached_assets/antalya_logo_clean.png';

const img = await Jimp.read(SRC);
const { width, height } = img.bitmap;
const d = img.bitmap.data;

const idx  = (x, y) => (y * width + x) * 4;
const r    = (x, y) => d[idx(x, y)];
const g    = (x, y) => d[idx(x, y) + 1];
const b    = (x, y) => d[idx(x, y) + 2];
const a    = (x, y) => d[idx(x, y) + 3];
const setA = (x, y, v) => { d[idx(x, y) + 3] = v; };

const isWhite       = (x, y) => r(x,y) > 210 && g(x,y) > 210 && b(x,y) > 210 && a(x,y) > 30;
const isTransparent = (x, y) => a(x, y) < 30;

// Flood-fill from all edge pixels, propagating through transparent OR white pixels.
// Any white pixel reachable from outside = exterior artifact → remove it.
// Keep the bottom 12% of the image (white base/shadow the user wants to keep).
const PROTECT_Y = Math.floor(height * 0.88);

const visited = new Uint8Array(width * height);
const queue   = [];

const enq = (x, y) => {
  if (x < 0 || x >= width || y < 0 || y >= height) return;
  const i = y * width + x;
  if (visited[i]) return;
  if (!isTransparent(x, y) && !isWhite(x, y)) return;
  visited[i] = 1;
  queue.push(x, y);
};

for (let x = 0; x < width;  x++) { enq(x, 0); enq(x, height - 1); }
for (let y = 0; y < height; y++) { enq(0, y); enq(width - 1, y);  }

for (let head = 0; head < queue.length;) {
  const x = queue[head++], y = queue[head++];
  enq(x-1, y); enq(x+1, y); enq(x, y-1); enq(x, y+1);
}

// Erase reachable pure-white pixels above the protected zone
let n = 0;
for (let y = 0; y < PROTECT_Y; y++) {
  for (let x = 0; x < width; x++) {
    if (!visited[y * width + x]) continue;
    if (!isWhite(x, y)) continue;
    if (r(x,y) > 230 && g(x,y) > 230 && b(x,y) > 230) {
      setA(x, y, 0);
      n++;
    }
  }
}

console.log(`Removed ${n} pixels.`);
await img.write(DEST);
console.log(`Saved → ${DEST}`);
