import people from '../assets/Hero Section people.svg';
import HeroForm from './Heroform';

export default function Herosection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 px-2 sm:px-6 md:px-8 py-8 max-w-full overflow-hidden">
      
      {/* Left column with 2 rows */}
      <div className="col-span-1 grid grid-rows-2 gap-6 p-4 md:p-8">
        
        {/* Row 1 Tagline*/}
        <div className="flex flex-col items-start justify-center space-y-4">
          <p className="text-[#F66F4D] text-[12px] sm:text-[18px] md:text-[20px] px-4 py-2 bg-[rgba(246,111,77,0.1)] rounded-full">
            AI-Powered • Instant Results
          </p>
          <p className="text-[28px] sm:text-[40px] md:text-[50px] font-bold text-[#034833] leading-tight">
            Book a Schengen Visa Appointment in <span className="text-[#F66F4D]">1 week</span>
          </p>
          <p className="text-gray-700 text-[12px] sm:text-[18px] font-normal">
            Your Trusted Visa Bot for Instant Notifications and Auto-Booking.
          </p>
        </div>

        {/* Row 2 input and submit button */}
        <HeroForm />
      </div>

      {/* Right column */}
      <div className="col-span-1 flex items-center justify-center px-4 md:px-8">
        <img src={people} alt="People" className="w-full h-auto max-w-full object-contain" />
      </div>
    </div>
  );
}
