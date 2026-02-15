import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [index, setIndex] = useState(0);
  
  // Aset gambar lokal dari folder public
  const slides = [
    "/assets/images/hero1.png",
    "/assets/images/hero2.png",
    "/assets/images/hero3.png"
  ];

  // Logic Carousel Otomatis
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Framer Motion Variants untuk Typewriter Effect
  const sentence = "Estetika Alam, Kekuatan Abadi.";
  const letterVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 } 
    }
  };

  const childVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1, 
      transition: { duration: 0.1, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 } 
    }
  };

  return (
    <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden bg-stone-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img 
            src={slides[index]} 
            className="w-full h-full object-cover object-center" 
            alt="Koleksi Rumah Kayu Serat Jati" 
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-24">
        <div className="max-w-4xl" data-aos="fade-right">
          <span className="bg-jati text-white px-3 py-1 text-[10px] md:text-[12px] font-bold tracking-[0.2em] mb-4 inline-block uppercase">
            Penawaran Eksklusif 2026
          </span>
          
          {/* Judul yang Lebih Proporsional */}
          <h2 className="text-white text-3xl md:text-6xl font-extrabold mb-4 leading-tight uppercase tracking-tight">
            Karya Seni <br/> 
            <span className="text-jatiMuda italic">Arsitektur Kayu.</span>
          </h2>

          {/* Typewriter Effect tanpa henti */}
          <motion.div 
            variants={letterVariants}
            initial="initial"
            animate="animate"
            className="text-gray-200 text-base md:text-xl mb-8 font-medium flex gap-1 border-l-4 border-jati pl-4"
          >
            {sentence.split("").map((char, i) => (
              <motion.span key={i} variants={childVariants}>
                {char}
              </motion.span>
            ))}
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4" data-aos="zoom-in" data-aos-delay="400">
            <button className="bg-jati hover:bg-jatiMuda text-white px-8 py-4 font-bold tracking-widest text-xs transition-all shadow-xl active:scale-95">
              AMBIL PROMO MEI
            </button>
            <button className="border-2 border-white text-white px-8 py-4 font-bold tracking-widest text-xs hover:bg-white hover:text-jati transition-all backdrop-blur-sm">
              KONSULTASI GRATIS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;