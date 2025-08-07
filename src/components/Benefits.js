import BackgroundMap from '../assets/BackgroundMap.svg';
import Mockup from '../assets/Mockup.svg';
import { ArrowUpRight } from "lucide-react";

export default function Benefits() {
  return (
    <div className="w-full bg-green-950 relative mb-32 overflow-hidden">
      {/* Background Image */}
      <img
        src={BackgroundMap}
        alt="Background Map"
        className="w-full absolute top-0 left-0 z-0 object-cover h-full"
      />

      {/* Main Grid Container */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 z-10">

        {/* Left Column: Mockup Image */}
        <div className="col-span-1 flex items-center justify-center p-8">
          <div data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-easing="ease-in-out">
            <img src={Mockup} alt="Mockup" className="py-12 max-w-full h-auto hover:scale-105 transition duration-300"/>
          </div>
          
        </div>

        {/* Right Column: Details */}
        <div className="col-span-1 flex flex-col justify-center px-4 sm:px-8 md:px-16 py-8 space-y-8">

          {/* CTA Section */}
          <div className="flex flex-col items-start space-y-4">
            <p className="text-[#FAF8ED] font-bold text-[32px] sm:text-[48px] md:text-[64px] tracking-tighter leading-tight">
              Get your appointment
            </p>
            <p className="text-[#FAF8ED] text-[16px] sm:text-[18px] font-normal tracking-tight max-w-xl">
              Get instant email or push notifications when new appointments open up or get a slot auto-booked for you.
            </p>

            {/* Button */}
            <button className="flex items-center space-x-2 px-2 py-2 md:px-4 md:py-2 bg-[#F66F4D] rounded-full text-[#FAF8ED] font-bold hover:scale-105 transition duration-300 active:scale-95">
              <span className='px-2 md:px-4'>TRY VISABOT</span>
              <ArrowUpRight className="stroke-white border-2 rounded-full h-[44px] w-[44px] md:h-[54px] md:w-[54px] p-2" />
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "1,500+", label: "Routes" },
              { value: "50+", label: "Cities" },
              { value: "50+", label: "Premium Airlines" },
              { value: "12k+", label: "Happy Customers" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center bg-[#FAF8ED] rounded-2xl py-6"
              >
                <p className="text-[#034833] font-bold text-[28px] sm:text-[32px] md:text-[38px]">
                  {item.value}
                </p>
                <p className="text-[#5B5F62] font-medium text-[14px] sm:text-[16px]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
