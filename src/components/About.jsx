import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { PhoneCall, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="tentang-kami" className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Sisi Kiri: Gambar dengan Background Dekoratif */}
          <div className="relative w-full lg:w-1/2" data-aos="fade-right">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-jati/10 z-0"></div>
            <div className="relative z-10 border-[10px] border-white shadow-2xl">
              <img 
                src="/assets/images/about.png" // Ganti dengan gambar kamu
                alt="Proses Pembangunan Rumah Kayu" 
                className="w-full h-auto object-cover"
              />
              {/* Badge Pengalaman */}
              <div className="absolute -bottom-8 -right-8 bg-jati p-6 text-white hidden md:block shadow-xl">
                <p className="text-4xl font-black leading-none">15+</p>
                <p className="text-[10px] font-bold tracking-widest uppercase mt-1">Tahun <br/> Pengalaman</p>
              </div>
            </div>
          </div>

          {/* Sisi Kanan: Konten Teks */}
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-jati"></div>
              <span className="text-jati font-bold tracking-[0.3em] text-xs uppercase">Tentang Kami</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-stone-900 leading-tight mb-6 uppercase tracking-tighter">
              Dedikasi Tinggi Untuk <br/>
              <span className="text-jatiMuda italic">Hunian Kayu Impian.</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              <strong className="text-stone-800">Raja Rumah Kayu</strong> bukan sekadar produsen. Kami adalah mitra profesional yang mewujudkan hunian estetik dengan teknik <span className="text-jati font-semibold italic">knock-down</span> modern. Menggunakan material kayu jati tua pilihan untuk daya tahan melampaui zaman.
            </p>

            {/* List Keunggulan */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {['Material Jati Perhutani', 'Teknologi Anti Rayap', 'Pengerjaan Presisi', 'Garansi Perawatan'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-stone-700 font-medium">
                  <CheckCircle2 size={18} className="text-jati" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA yang Lebih Menarik */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-stone-900 text-white px-10 py-5 font-bold tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-jati transition-colors"
              >
                <PhoneCall size={18} />
                KONSULTASI DESAIN GRATIS
              </motion.button>
              
              <div className="text-center sm:text-left">
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Respon Cepat via WA</p>
                <p className="text-stone-800 font-bold text-sm">0813-7371-0030</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-[0.03] pointer-events-none hidden lg:block">
        <h2 className="text-[200px] font-black rotate-90">SERAT JATI</h2>
      </div>
    </section>
  );
};

export default About;