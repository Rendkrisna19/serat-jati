import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Menu, X } from 'lucide-react';
import logo from '../../public/assets/images/logo.png';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', active: true },
    { name: 'PROFIL' },
    { name: 'PRODUK' },
    { name: 'CARA PEMESANAN' },
    { name: 'GALERI' },
    { name: 'TESTIMONI' },
    { name: 'KONTAK KAMI' },
  ];

  return (
    <nav className={`sticky top-0 z-[100] bg-white transition-all duration-300 shadow-sm ${isScrolled ? 'py-2' : 'py-3'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo Kiri sesuai Gambar */}
        <div className="flex items-center gap-2">
          <img 
            src={logo} 
            alt="Raja Rumah Kayu" 
            className={`transition-all duration-300 ${isScrolled ? 'h-10' : 'h-14 md:h-16'}`}
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href="#"
              className={`text-[13px] font-bold tracking-tight transition-colors hover:text-jati ${link.active ? 'text-jatiMuda' : 'text-gray-600'}`}
            >
              {link.name}
            </a>
          ))}
          <button className="ml-4 text-gray-700 hover:text-jati">
            <Search size={20} strokeWidth={3} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <Search size={20} className="text-gray-700" />
          <button onClick={() => setIsOpen(!isOpen)} className="text-jati">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 top-[header-height] bg-white z-[90] flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                whileHover={{ scale: 1.1 }}
                onClick={() => setIsOpen(false)}
                className="text-xl font-bold text-gray-800 hover:text-jati"
                href="#"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;