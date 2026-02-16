import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  ChevronRight, 
  MessageCircle 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '#' },
    { name: 'Profil', href: '#tentang-kami' },
    { name: 'Produk', href: '#produk' },
    { name: 'Cara Pemesanan', href: '#cara-pemesanan' },
    { name: 'Galeri', href: '#galeri' },
    { name: 'Testimoni', href: '#testimoni' },
  ];

  return (
    <footer className="bg-stone-50 border-t border-stone-200 pt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-jati flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">SJ</span>
              </div>
              <div>
                <h3 className="text-xl font-black text-stone-900 leading-none uppercase tracking-tighter">Serat Jati</h3>
                <p className="text-[10px] text-jati font-bold uppercase tracking-widest mt-1">Wooden House Specialist</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              Produsen Rumah Kayu Knockdown yang profesional, berpengalaman, dan berbadan hukum legal. Mewujudkan hunian impian yang kuat dan estetik melampaui zaman.
            </p>
            <div className="flex gap-4">
              <motion.a whileHover={{ y: -3 }} href="#" className="w-10 h-10 bg-white shadow-sm border border-stone-100 flex items-center justify-center text-stone-600 hover:bg-jati hover:text-white transition-all">
                <Facebook size={18} />
              </motion.a>
              <motion.a whileHover={{ y: -3 }} href="#" className="w-10 h-10 bg-white shadow-sm border border-stone-100 flex items-center justify-center text-stone-600 hover:bg-jati hover:text-white transition-all">
                <Instagram size={18} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-black text-stone-900 uppercase tracking-[0.2em] mb-8 border-l-4 border-jati pl-4">Navigasi</h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-500 hover:text-jati text-sm font-bold flex items-center gap-2 transition-colors group">
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-black text-stone-900 uppercase tracking-[0.2em] mb-8 border-l-4 border-jati pl-4">Kontak Kami</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="text-jati mt-1"><Phone size={18} /></div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Telepon / WA</p>
                  <p className="text-stone-800 text-sm font-bold">+62 819-0335-5588</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="text-jati mt-1"><Mail size={18} /></div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Email Resmi</p>
                  <p className="text-stone-800 text-sm font-bold lowercase">cvceofurniturejepara@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Address Section */}
          <div>
            <h4 className="text-sm font-black text-stone-900 uppercase tracking-[0.2em] mb-8 border-l-4 border-jati pl-4">Alamat Workshop</h4>
            <div className="flex gap-4 mb-6">
              <div className="text-jati mt-1"><MapPin size={18} /></div>
              <div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Pusat Produksi</p>
                <p className="text-stone-800 text-sm font-medium leading-relaxed italic">
                  Desa Serikandang RT 01 RW 10, Kec. Bangsri, Kab. Jepara, Provinsi Jawa Tengah.
                </p>
              </div>
            </div>
            <div className="bg-white p-4 border border-stone-200 flex items-center justify-center gap-3">
              <MessageCircle className="text-green-500" />
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-tighter">Fast Response Service</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-jati py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-white">
          <p className="text-xs font-bold tracking-widest uppercase opacity-80">
            © {currentYear} Serat Jati - Raja Rumah Kayu. All rights reserved.
          </p>
          <p className="text-[10px] font-medium opacity-60 italic">
            Developed by Codifyhub.id
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;