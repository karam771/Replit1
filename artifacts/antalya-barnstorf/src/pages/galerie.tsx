import { motion } from 'framer-motion';
import { Images } from 'lucide-react';

import img1 from '@assets/22022e7a-f119-4196-8eea-68c1291acf53_(1)_1778665671247.jpeg';
import img2 from '@assets/2b552848-e3cd-4689-a99e-a97f283dc6f7_1778665671248.jpeg';
import img3 from '@assets/a11774da-ecbc-46ab-ac8a-dff381bc9b65_1778665671249.jpeg';
import img4 from '@assets/db5def46-08f9-4c6b-8ea2-800b3faa8082_1778665671249.jpeg';
import img5 from '@assets/b747f39f-e520-466e-8884-7e2fc8213d66_1778665671250.jpeg';
import img6 from '@assets/819e07bc-d690-4924-9691-67b7890fd8fc_1778665671251.jpeg';
import img7 from '@assets/6cffa310-624f-4339-b469-40ec440ef2ef_1778665671251.jpeg';
import img8 from '@assets/18f6bdd5-d620-4239-bd00-6458de312625_1778665671252.jpeg';
import img9 from '@assets/6466b9f9-1fd2-4460-ac3f-2140c4f1b082_1778665671252.jpeg';
import img10 from '@assets/IMG_0808_1778665671253.webp';
import img11 from '@assets/IMG_0832_1778665671253.webp';
import img12 from '@assets/aae54398-3156-4bac-941e-2a68fc40ebf1_1778665671254.jpeg';
import img13 from '@assets/IMG_0831_1778665438064.jpeg';
import img14 from '@assets/IMG_5031_1778665530912.jpeg';
import img15 from '@assets/ebede319-d185-4925-8b01-618799560c35_1778665671254.jpeg';

const photos = [
  { src: img13, alt: 'Tisch mit Backsteinwand' },
  { src: img2,  alt: 'Speisen an der Theke' },
  { src: img14, alt: 'Sitzbereich mit Kunstwerk' },
  { src: img1,  alt: 'Pizza mit Soßen' },
  { src: img15, alt: 'Restaurantbereich' },
  { src: img3,  alt: 'Pizza Spinat' },
  { src: img12, alt: 'Restaurant mit Pflanzen' },
  { src: img4,  alt: 'Döner Teller' },
  { src: img11, alt: 'Restaurantinnenraum' },
  { src: img5,  alt: 'Döner mit Beilagen' },
  { src: img6,  alt: 'Döner mit Cola' },
  { src: img9,  alt: 'Pizza auf Holzbrett' },
  { src: img7,  alt: 'Börek Rollen' },
  { src: img10, alt: 'Kebap Sandwich' },
  { src: img8,  alt: 'Döner mit Pommes' },
];

export default function Galerie() {
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* ── Compact header ── */}
      <div className="relative pt-16 overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(ellipse 80% 120% at 50% 120%, rgba(20,60,30,0.18) 0%, transparent 65%)' }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-10 md:py-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary tracking-[0.28em] uppercase text-[10px] font-medium block mb-2">
              Unser Restaurant
            </span>
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 border border-primary/40 flex items-center justify-center shrink-0">
                <Images className="w-4 h-4 text-primary" />
              </div>
              <h1
                className="text-3xl md:text-4xl tracking-wide"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Galerie
              </h1>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Photo grid ── */}
      <section className="py-8 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-0.5">
          {photos.map(({ src, alt }, i) => (
            <div
              key={i}
              className="overflow-hidden group aspect-[4/3]"
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading={i < 6 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
