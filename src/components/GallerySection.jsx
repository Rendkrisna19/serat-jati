import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronRight, Camera } from 'lucide-react';

const GallerySection = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    {
      id: 1,
      src: "/assets/images/hero1.png", // Pastikan file ada di public/assets/images/
      title: "Rumah Panggung Eksklusif",
      category: "Proyek Aceh"
    },
    {
      id: 2,
      src: "/assets/images/hero2.png",
      title: "Gazebo Jati Mewah",
      category: "Proyek Medan"
    },
    {
      id: 3,
      src: "/assets/images/hero3.png",
      title: "Villa Lumbung Modern",
      category: "Proyek Palembang"
    }
  ];

  return (
    <section id="galeri" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Galeri */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div data-aos="fade-right">
            <div className="flex items-center gap-2 mb-4">
              <Camera className="text-jati" size={20} />
              <span className="text-jati font-bold tracking-[0.3em] text-[10px] uppercase">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-stone-900 leading-none uppercase tracking-tighter">
              Jejak <span className="text-jatiMuda italic">Karya Kami.</span>
            </h2>
          </div>
          
          <motion.a 
            href="/galeri" // Nanti diarahkan ke halaman galeri penuh
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-jati font-bold text-xs tracking-widest uppercase border-b-2 border-jati pb-1"
            data-aos="fade-left"
          >
            Lihat Semua Proyek <ChevronRight size={16} />
          </motion.a>
        </div>

        {/* Grid Gambar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={img.id}
              data-aos="zoom-in"
              data-aos-delay={idx * 150}
              className="relative group cursor-pointer overflow-hidden aspect-[4/5] bg-stone-100"
              onClick={() => setSelectedImg(img)}
            >
              <img 
                src={img.src} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Hover */}
              <div className="absolute inset-0 bg-stone-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-jatiMuda text-[10px] font-bold tracking-[0.2em] uppercase mb-2">{img.category}</p>
                  <h3 className="text-white text-xl font-bold uppercase tracking-tight mb-4">{img.title}</h3>
                  <div className="w-10 h-10 bg-white flex items-center justify-center text-stone-900">
                    <Maximize2 size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Lightbox (Zoom In/Out) */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-stone-900/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-8 right-8 text-white hover:text-jati transition-colors">
              <X size={40} />
            </button>
            
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="relative max-w-5xl w-full h-auto max-h-full overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImg.src} 
                className="w-full h-full object-contain"
                alt="Zoomed View"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h4 className="text-white font-bold text-lg uppercase tracking-widest">{selectedImg.title}</h4>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;