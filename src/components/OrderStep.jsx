import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { 
  ClipboardList, 
  MapPin, 
  PlaneTakeoff, 
  Settings, 
  Truck, 
  CheckCircle 
} from 'lucide-react';

const OrderStep = () => {
  const steps = [
    {
      icon: <ClipboardList size={32} />,
      title: "Konsultasi & Desain",
      desc: "Diskusikan model rumah kayu, ukuran, dan spesifikasi material sesuai keinginan Anda."
    },
    {
      icon: <MapPin size={32} />,
      title: "Kunjungan Workshop",
      desc: "Datang langsung ke lokasi kami untuk melihat proses pengerjaan dan kualitas material."
    },
    {
      icon: <Settings size={32} />,
      title: "Proses Produksi",
      desc: "Pengerjaan unit oleh tenaga ahli kami dengan sistem knock-down yang presisi."
    },
    {
      icon: <Truck size={32} />,
      title: "Pengiriman & Rakit",
      desc: "Unit dikirim ke lokasi Anda dan dirakit langsung oleh tim teknisi profesional kami."
    }
  ];

  return (
    <section id="cara-pemesanan" className="py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-up">
          <div className="flex justify-center items-center gap-2 mb-4">
            <CheckCircle className="text-jati" size={20} />
            <span className="text-jati font-bold tracking-[0.3em] text-[10px] uppercase">Alur Kerja Kami</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-stone-900 leading-none uppercase tracking-tighter">
            Cara <span className="text-jatiMuda italic">Pemesanan.</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Garis Penghubung (Hanya Desktop) */}
          <div className="hidden lg:block absolute top-1/4 left-0 w-full h-[1px] bg-stone-200 z-0"></div>
          
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-white shadow-xl flex items-center justify-center text-stone-400 group-hover:bg-jati group-hover:text-white transition-all duration-500 mb-8 border border-stone-100">
                {step.icon}
              </div>
              <h3 className="text-xl font-black text-stone-900 mb-4 uppercase tracking-tighter">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Layanan Jemput Tamu (VIP Service) */}
        <motion.div 
          data-aos="zoom-in"
          className="mt-24 bg-white border-2 border-dashed border-jati/30 p-8 md:p-12 relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
            <div className="bg-jati/10 p-6">
              <PlaneTakeoff size={48} className="text-jati" />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h4 className="text-2xl font-black text-stone-900 mb-2 uppercase tracking-tight">
                Layanan Khusus Tamu Luar Kota
              </h4>
              <p className="text-stone-600 leading-relaxed font-medium">
                Apabila konsumen dari luar kota berminat datang langsung ke lokasi 
                <span className="text-jati font-bold italic"> Workshop Raja Rumah Kayu</span>, 
                sebagai penerima tamu kami siap <span className="underline decoration-jati decoration-2 underline-offset-4">menjemput dan antar di airport setempat</span> menuju lokasi kami.
              </p>
            </div>
            <button className="bg-stone-900 text-white px-10 py-5 font-bold tracking-widest text-xs hover:bg-jati transition-colors shadow-lg">
              KONFIRMASI KEDATANGAN
            </button>
          </div>
          
          {/* Decorative Plane Path */}
          <div className="absolute -bottom-10 -right-10 opacity-[0.05] pointer-events-none">
            <PlaneTakeoff size={250} />
          </div>
        </motion.div>

        {/* Alamat Dummy */}
        <div className="mt-16 text-center text-gray-400" data-aos="fade-up">
          <div className="flex flex-col items-center gap-2">
            <MapPin size={18} className="text-stone-300" />
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase">Lokasi Workshop (Dummy Address)</p>
            <p className="text-sm italic">Jl. Kayu Jati No. 123, Kawasan Industri Rumah Kayu, Palembang, Sumatera Selatan.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OrderStep;