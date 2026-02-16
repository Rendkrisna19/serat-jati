import React, { useEffect } from 'react';
import Lenis from 'lenis';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Components
import Header from './components/Header';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatsAppFloat from './components/WhatsAppFloat';
import ProductSection from './components/ProductSection';
import { Contact } from 'lucide-react';
import ContactSection from './components/ContactSection';
import WoodSpecifications from './components/WoodSpecifications';
import OrderStep from './components/OrderStep';
import GallerySection from './components/GallerySection';
import TestimonialSection from './components/TestimonialSection';
import Footer from './components/Footer';


function App() {
  useEffect(() => {
    // 1. Inisialisasi Lenis (Smooth Scroll)
    const lenis = new Lenis({
      duration: 1.5,     // Durasi scroll (lebih besar = lebih lambat/lembut)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Fungsi easing biar smooth
      smoothWheel: true,
      wheelMultiplier: 1, 
      orientation: 'vertical',
      gestureOrientation: 'vertical',
    });

    // Loop animasi Lenis
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. Inisialisasi AOS (Scroll Animation)
    AOS.init({
      duration: 1000,
      once: false,       // Animasi akan jalan lagi kalau di-scroll ke atas (mirror)
      mirror: true,
      anchorPlacement: 'top-bottom',
    });

    // Cleanup saat component unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-white text-gray-900 selection:bg-jati selection:text-white">
      {/* Wrapper Utama */}
      <Header />
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProductSection />
        <ContactSection />
        <WoodSpecifications />
        <OrderStep />
        <GallerySection />
        <TestimonialSection />
        <Footer />
      </main>
      <WhatsAppFloat />
    </div>
  );
}

export default App;