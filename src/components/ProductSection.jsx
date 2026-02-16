import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Zap, Trees } from 'lucide-react';

const products = [
  {
    id: 'rumah-panggung',
    title: 'Rumah Panggung Jati',
    category: 'Rumah Utama',
    desc: 'Desain limas klasik dengan struktur kayu puspa dan dinding meranti pilihan.',
    image: '/assets/images/hero1.png', // Sesuai folder public kamu
    features: ['Kayu Puspa', 'Atap Genteng Metal', 'Anti Rayap'],
    delay: 0.1
  },
  {
    id: 'gazebo-minimalis',
    title: 'Gazebo Segi Empat',
    category: 'Eksterior',
    desc: 'Tempat bersantai estetik untuk taman atau area resto dengan pengerjaan presisi.',
    image: '/assets/images/hero2.png',
    features: ['Knock Down', 'Finishing Glossy', 'Kayu Meranti'],
    delay: 0.3
  },
  {
    id: 'rumah-lumbung',
    title: 'Rumah Lumbung 4x6',
    category: 'Villa / Resort',
    desc: 'Unit villa ikonik dengan atap melengkung, plafon mersawa, dan kaca tebal 5mm.',
    image: '/assets/images/hero3.png',
    features: ['Plafon Mersawa', 'Kaca 5mm', 'Kunci Soligen'],
    delay: 0.5
  }
];

const ProductCard = ({ product }) => {
  return (
    <motion.div 
      data-aos="fade-up"
      data-aos-delay={product.delay * 1000}
      whileHover={{ y: -10 }}
      className="group relative bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      {/* Image Container dengan Zoom Effect */}
      <div className="relative h-72 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-jati text-white text-[10px] font-bold px-3 py-1 tracking-widest uppercase">
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-black text-stone-900 mb-2 uppercase tracking-tighter">
          {product.title}
        </h3>
        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
          {product.desc}
        </p>

        {/* Mini Features List */}
        <div className="flex flex-wrap gap-2 mb-8">
          {product.features.map((feat, i) => (
            <span key={i} className="text-[10px] bg-stone-50 text-stone-500 px-2 py-1 border border-stone-100 font-semibold uppercase">
              {feat}
            </span>
          ))}
        </div>

        {/* CTA Unik */}
        <button className="w-full py-4 bg-stone-900 text-white font-bold text-xs tracking-widest flex items-center justify-center gap-2 group-hover:bg-jati transition-colors">
          DETAIL SPESIFIKASI <ArrowUpRight size={16} />
        </button>
      </div>
    </motion.div>
  );
};

const ProductSection = () => {
  return (
    <section id="produk" className="py-24 bg-stone-50/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl" data-aos="fade-right">
            <div className="flex items-center gap-2 mb-4">
              <Trees className="text-jati" size={20} />
              <span className="text-jati font-bold tracking-[0.3em] text-xs uppercase">Katalog Produk</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-stone-900 leading-none uppercase tracking-tighter">
              Koleksi Produk <br/> <span className="text-jatiMuda italic">Terbaik Kami.</span>
            </h2>
          </div>
          <div className="hidden md:block" data-aos="fade-left">
            <p className="text-gray-400 text-sm text-right max-w-xs italic">
              "Setiap serat kayu menceritakan kualitas dan keahlian tangan profesional."
            </p>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Keunggulan Ringkas */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-stone-200 pt-12">
          {[
            { icon: <ShieldCheck />, label: 'Garansi Struktur' },
            { icon: <Zap />, label: 'Knock Down System' },
            { icon: <Trees />, label: 'Kayu Jati Tua' },
            { icon: <ArrowUpRight />, label: 'Kualitas Ekspor' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3" data-aos="zoom-in" data-aos-delay={i * 100}>
              <div className="text-jati">{item.icon}</div>
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;