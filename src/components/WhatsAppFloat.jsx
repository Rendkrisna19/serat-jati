import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, UserCheck } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const admins = [
    {
      name: 'Admin Jati 1',
      number: '+6281903355588',
      desc: 'Konsultasi Harga & Stok',
    },
    {
      name: 'Admin Jati 2',
      number: '082228337943',
      desc: 'Pemesanan & Custom Desain',
    },
  ];

  const handleChat = (number) => {
    const formattedNumber = number.replace(/\D/g, ''); // Membersihkan karakter non-angka
    window.open(`https://wa.me/${formattedNumber}?text=Halo Serat Jati, saya tertarik dengan rumah kayu...`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end">
      
      {/* Popup Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-72 bg-white shadow-2xl overflow-hidden border border-gray-100"
          >
            {/* Header Popup */}
            <div className="bg-jati p-4 text-white">
              <h3 className="font-bold text-sm uppercase tracking-wider">Pilih Admin Kami</h3>
              <p className="text-[10px] opacity-80">Kami siap melayani kebutuhan rumah kayu Anda.</p>
            </div>

            {/* Admin List */}
            <div className="p-2 space-y-2">
              {admins.map((admin, idx) => (
                <button
                  key={idx}
                  onClick={() => handleChat(admin.number)}
                  className="w-full flex items-center gap-4 p-3 hover:bg-stone-50 transition-colors text-left group border border-transparent hover:border-jati/20"
                >
                  <div className="w-10 h-10 bg-green-100 flex items-center justify-center text-green-600 group-hover:bg-green-500 group-hover:text-white transition-all">
                    <UserCheck size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-800 leading-none mb-1">{admin.name}</h4>
                    <p className="text-[10px] text-gray-500">{admin.desc}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="bg-gray-50 p-2 text-center">
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-tighter italic">Online 24/7 Fast Response</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? 'bg-red-500' : 'bg-green-500'
        } w-16 h-16 rounded-full flex items-center justify-center text-white shadow-2xl transition-colors duration-300 relative`}
      >
        {isOpen ? <X size={32} /> : (
          <>
            <MessageCircle size={32} fill="white" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-red-600 border-2 border-white rounded-full animate-ping"></span>
            <span className="absolute top-0 right-0 w-4 h-4 bg-red-600 border-2 border-white rounded-full"></span>
          </>
        )}
      </motion.button>
    </div>
  );
};

export default WhatsAppFloat;