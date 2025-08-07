import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Orangelogo from "../assets/orange logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["OUR SERVICES", "HOW TO START", "REVIEWS", "DOCUMENTS", "FAQ"];

  return (
    <nav className="w-full px-4 md:px-16 py-4 bg-white md:bg-transparent">
      {/* Top Navbar */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 bg-white px-4 py-2 h-[54px] md:h-[70px] rounded-full">
          <img src={Orangelogo} alt="Visaslots Logo" className="h-[36px] w-[36px] md:h-[44px] md:w-[44px]" />
          <p className="font-bold text-[16px] md:text-[24px] text-[#034833]">Visaslots</p>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center bg-white rounded-full px-8 py-2 h-[70px] space-x-10 text-[#053b35] text-[14px] font-medium">
          {navLinks.map((link) => (
            <a href="#" key={link} className="hover:text-[#F66F4D] transition">{link}</a>
          ))}
        </div>

        {/* Desktop TRY VISABOT */}
        <button className="hidden md:flex items-center space-x-3 px-6 py-4 bg-[#F66F4D] rounded-full text-[#FAF8ED] font-bold hover:scale-105 active:scale-95 transition duration-300">
          <span>TRY VISABOT</span>
          <ArrowUpRight className="stroke-white border-2 rounded-full h-[32px] w-[32px]" />
        </button>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-3 bg-[#F66F4D] rounded-full text-[#FAF8ED] font-bold text-sm hover:bg-[#d05e41] transition">
            TRY VISABOT
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#053b35]">
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 py-6 flex flex-col items-center space-y-6 text-[#053b35] text-[16px] font-medium bg-white rounded-xl">
          {navLinks.map((link) => (
            <a href="#" key={link} className="hover:text-[#F66F4D] transition">{link}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
