import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Phone, MessageCircle, User, MapPin } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = {
    name: "Yusmar Aziz, S.Pd., M.Pd.",
    phone: "0813 7371 0030",
    wa: "0813 7371 0030",
    location: "Sumatera Utara, Indonesia"
  };

  return (
    <section id="kontak-kami" className="relative py-20 overflow-hidden">
      {/* Background Kayu dengan Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1680888758071-4a452f5929fa?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Wood Texture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/80 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div 
          className="bg-white/5 border border-white/10 p-8 md:p-12 shadow-2xl backdrop-blur-md"
          data-aos="zoom-in"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Info Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-12 bg-jati"></div>
                <span className="text-jati font-bold tracking-[0.3em] text-xs uppercase">Hubungi Kami</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-8 uppercase tracking-tighter">
                Konsultasi Langsung <br/>
                <span className="text-jatiMuda italic">Dengan Ahlinya.</span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-white/10 text-jati group-hover:bg-jati group-hover:text-white transition-all">
                    <User size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">Owner / Consultant</p>
                    <p className="text-white font-bold text-lg">{contactInfo.name}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-white/10 text-jati group-hover:bg-jati group-hover:text-white transition-all">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">Lokasi Workshop</p>
                    <p className="text-white font-bold text-lg">{contactInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons Section */}
            <div className="bg-white p-8 md:p-10 shadow-inner space-y-4">
              <div className="text-center mb-6">
                <p className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-2 italic">Fast Response Service</p>
                <div className="h-1 w-20 bg-jati mx-auto"></div>
              </div>

              <motion.a
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 w-full py-5 bg-red-600 text-white font-black text-xs tracking-[0.2em] shadow-lg hover:bg-red-700 transition-colors uppercase"
              >
                <Phone size={18} fill="white" /> Tanya Via Telpon
              </motion.a>

              <motion.a
                href={`https://wa.me/${contactInfo.wa.replace(/\s/g, '')}`}
                target="_blank"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 w-full py-5 bg-green-600 text-white font-black text-xs tracking-[0.2em] shadow-lg hover:bg-green-700 transition-colors uppercase"
              >
                <MessageCircle size={18} fill="white" /> Tanya Via WhatsApp
              </motion.a>

              <div className="pt-6 border-t border-gray-100 mt-6">
                <div className="flex justify-between text-stone-500 text-[11px] font-bold uppercase tracking-tighter">
                  <span>Telp: {contactInfo.phone}</span>
                  <span>WA: {contactInfo.wa}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;