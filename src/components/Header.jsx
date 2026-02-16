import React from 'react';
import { Phone, Mail, Facebook, Instagram } from 'lucide-react';

const Header = () => {
  return (
    <div className="bg-jati text-white py-2 px-6 md:px-12 flex justify-center md:justify-start items-center text-[10px] md:text-[12px] font-medium tracking-wide">
      <div className="flex flex-wrap justify-center gap-4 md:gap-8 w-full">
        <div className="flex items-center gap-2">
          <Phone size={14} className="fill-current" />
          <span>0819-0335-5588 / WA : 082228337943</span>
        </div>
        <div className="flex items-center gap-2 border-l border-white/30 pl-4">
          <Mail size={14} />
          <span>cvceofurniturejepara@gmail.com</span>
        </div>
        <div className="flex items-center gap-3 border-l border-white/30 pl-4">
          <Facebook size={14} className="cursor-pointer hover:opacity-70" />
          <Instagram size={14} className="cursor-pointer hover:opacity-70" />
        </div>
      </div>
    </div>
  );
};

export default Header;