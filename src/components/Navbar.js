import { ArrowUpRight } from "lucide-react";
import Logo from "../assets/Logo.svg";

export default function Navbar() {
  return (
    <div className="w-full flex items-center justify-between px-8 py-4">
      {/* Left: Logo */}
      <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2">
        <img src={Logo} alt="Logo" className="h-70 w-242" />
      </div>

      {/* Center: Nav links */}
      <div className="hidden md:flex items-center bg-white rounded-full px-6 py-3 space-x-6 text-sm font-semibold text-[#053b35]">
        <a href="#">OUR SERVICES</a>
        <a href="#">HOW TO START</a>
        <a href="#">REVIEWS</a>
        <a href="#">DOCUMENTS</a>
        <a href="#">FAQ</a>
      </div>

      {/* Right: Button */}
      <div>
        <button className="w-242 flex items-center space-x-2 bg-[#f66f4d] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#e85e3d] transition">
          <span>TRY VISABOT</span>
          <ArrowUpRight size={18} className="stroke-white" />
        </button>
      </div>
    </div>
  );
}
