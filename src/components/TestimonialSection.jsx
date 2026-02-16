import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronRight, MessageSquare, Maximize2, X } from 'lucide-react';

const TestimonialSection = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Abesah",
      role: "Client Kami",
      image: "/assets/testimoni/testimoni1.jpeg", // Pastikan file ada di public/assets/images/
      rating: 5
    },
    {
      id: 2,
      name: "Ibu Maya Kartika",
      role: "Client Kami",
      image: "/assets/testimoni/testimoni2.jpeg",
      rating: 5
    },
    {
      id: 3,
      name: "Pak umang",
      role: "Client Kami",
      image: "/assets/testimoni/testimoni3.jpeg",
      rating: 5
    }
  ];

  return (
    <section id="testimoni" className="py-24 bg-stone-900 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 opacity-[0.03] text-white text-[150px] font-black -translate-x-20 -translate-y-20 pointer-events-none">
        PROYEK
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div data-aos="fade-right">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="text-jati" size={20} />
              <span className="text-jati font-bold tracking-[0.3em] text-[10px] uppercase">Kepuasan Pelanggan</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-none uppercase tracking-tighter">
              Klien <br/> <span className="text-jatiMuda italic">Puas.</span>
            </h2>
          </div>

          <motion.a 
            href="/testimoni" 
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-jati font-bold text-xs tracking-widest uppercase border-b-2 border-jati pb-1 mb-2"
            data-aos="fade-left"
          >
            Lihat Lebih Banyak <ChevronRight size={16} />
          </motion.a>
        </div>

        {/* Testimonials Grid Visual */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              onClick={() => setSelectedImg(item)}
              className="relative group cursor-pointer aspect-[4/5] bg-stone-800 overflow-hidden"
            >
              {/* Background Image */}
              <img 
                src={item.image} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" 
                alt={item.name} 
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent p-8 flex flex-col justify-end">
                <div className="flex gap-1 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={12} className="fill-jati text-jati" />
                  ))}
                </div>
                
                <h4 className="text-white font-bold uppercase tracking-widest text-lg mb-1">
                  {item.name}
                </h4>
                <p className="text-jati text-[10px] font-bold uppercase mb-4">
                  {item.role}
                </p>

                <div className="w-10 h-10 bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 self-start group-hover:bg-jati transition-colors">
                    <Maximize2 size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Mini */}
        <div className="mt-16 text-center" data-aos="zoom-in">
          <p className="text-gray-500 text-sm mb-6 uppercase tracking-[0.2em]">Siap membangun rumah kayu impian Anda?</p>
          <button className="bg-jati text-white px-10 py-5 font-bold tracking-widest text-xs hover:bg-white hover:text-stone-900 transition-all shadow-2xl">
            KONSULTASI SEKARANG
          </button>
        </div>
      </div>

      {/* Lightbox Modal (Zoom In/Out) */}
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
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImg.image} 
                className="w-full h-auto max-h-[70vh] object-contain shadow-2xl border border-white/10"
                alt="Zoomed Testimonial"
              />
              <div className="mt-6 text-center">
                <h4 className="text-white font-black text-2xl uppercase tracking-widest">{selectedImg.name}</h4>
                <p className="text-jati font-bold uppercase text-sm mt-1">{selectedImg.role}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TestimonialSection;