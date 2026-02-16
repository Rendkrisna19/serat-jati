import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { 
  Box, 
  Layers, 
  DoorOpen, 
  Maximize2, 
  Key, 
  Paintbrush, 
  AlignJustify,
  Home
} from 'lucide-react';

const WoodSpecifications = () => {
  const specs = [
    { 
      icon: <Home className="text-jati" size={28} />, 
      title: "Struktur Utama", 
      desc: "Rangka utama dan lantai menggunakan Kayu Puspa yang terkenal sangat kuat dan tahan beban." 
    },
    { 
      icon: <Layers className="text-jati" size={28} />, 
      title: "Dinding Kokoh", 
      desc: "Dinding menggunakan Kayu Meranti Merah pilihan dengan serat yang indah dan durabilitas tinggi." 
    },
    { 
      icon: <AlignJustify className="text-jati" size={28} />, 
      title: "Pagar & Ukiran", 
      desc: "Rendah pagar dihiasi ukiran khas dari Kayu Meranti Merah untuk menambah nilai artistik." 
    },
    { 
      icon: <DoorOpen className="text-jati" size={28} />, 
      title: "Pintu & Jendela", 
      desc: "Dibuat dari Kayu Meranti Merah berkualitas, menjamin presisi dan tidak mudah memuai." 
    },
    { 
      icon: <Maximize2 className="text-jati" size={28} />, 
      title: "Material Kaca", 
      desc: "Menggunakan kaca bening atau riben dengan ketebalan 5mm yang kokoh dan elegan." 
    },
    { 
      icon: <Key className="text-jati" size={28} />, 
      title: "Hardware Pintu", 
      desc: "Kunci dan engsel kualitas standar ke atas (Merk Soligen/Kodai) untuk keamanan maksimal." 
    },
    { 
      icon: <Paintbrush className="text-jati" size={28} />, 
      title: "Finishing Premium", 
      desc: "Finishing halus menggunakan sistem Waterbased yang ramah lingkungan dan menonjolkan serat kayu." 
    },
    { 
      icon: <Box className="text-jati" size={28} />, 
      title: "Plafon & Interior", 
      desc: "Plafon Lambersering Kayu Mersawa dikombinasikan dengan triplek sesuai kesepakatan." 
    }
  ];

  return (
    <section id="spesifikasi" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-stone-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 mb-4 bg-stone-100 px-4 py-1">
            <Layers size={16} className="text-jati" />
            <span className="text-jati font-bold tracking-[0.3em] text-[10px] uppercase">Standar Kualitas</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-stone-900 leading-none uppercase tracking-tighter mb-6">
            Spesifikasi <span className="text-jatiMuda italic">Material.</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed">
            Kami menggunakan kombinasi kayu hutan keras pilihan seperti <span className="text-jati font-semibold">Puspa, Meranti Merah, dan Mersawa</span> untuk memastikan setiap unit Raja Rumah Kayu memiliki ketahanan hingga puluhan tahun.
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((item, idx) => (
            <motion.div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(0,0,0,0.05)" 
              }}
              className="p-8 bg-stone-50 border-b-4 border-transparent hover:border-jati transition-all duration-300 group"
            >
              <div className="mb-6 inline-block p-4 bg-white shadow-sm group-hover:bg-jati group-hover:text-white transition-colors duration-300">
                {React.cloneElement(item.icon, { className: "group-hover:text-white transition-colors" })}
              </div>
              <h3 className="text-lg font-black text-stone-800 mb-3 uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed font-medium italic">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Info Tambahan / Footer Section */}
        <div 
          className="mt-16 p-8 md:p-12 bg-jati text-white flex flex-col md:flex-row items-center justify-between gap-8"
          data-aos="zoom-in"
        >
          <div className="max-w-xl">
            <h4 className="text-2xl font-bold mb-2 uppercase">Custom Spesifikasi?</h4>
            <p className="text-white/80 text-sm leading-relaxed font-light">
              Kami terbuka untuk diskusi jika Anda menginginkan jenis kayu lain (seperti Kayu Cempaka atau Jati Perhutani) sesuai dengan budget dan kebutuhan proyek Anda.
            </p>
          </div>
          <button className="bg-white text-jati px-10 py-5 font-bold tracking-widest text-xs hover:bg-stone-900 hover:text-white transition-all duration-300 shadow-xl">
            HUBUNGI TEKNISI KAMI
          </button>
        </div>

      </div>
    </section>
  );
};

export default WoodSpecifications;