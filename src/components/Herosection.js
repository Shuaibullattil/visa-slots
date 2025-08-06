import people from '../assets/Hero Section people.svg';

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
          <p className="text-[28px] sm:text-[40px] md:text-[50px] font-bold text-green-950 leading-tight">
            Book a Schengen Visa Appointment in <span className="text-[#F66F4D]">1 week</span>
          </p>
          <p className="text-gray-700 text-[12px] sm:text-[18px] font-normal">
            Your Trusted Visa Bot for Instant Notifications and Auto-Booking.
          </p>
        </div>

        {/* Row 2 input and submit button */}
        <div className="flex flex-col items-start justify-center space-y-4 w-full">
          {/* First row: Going to & Visa Type */}
          <div className="flex flex-col items-start justify-center space-y-4 w-full">
            <div className="flex flex-row gap-4 w-full">
              <input
                type="text"
                placeholder="Going to"
                className="flex-[0_0_60%] px-4 py-3 rounded-full text-[14px] md:text-[16px] text-gray-600 placeholder-gray-400 bg-white w-full h-[64px] md:h-[70px]"
              />
              <select className="flex-[0_0_37%] px-4 py-3 rounded-full text-[14px] md:text-[16px] text-gray-600 bg-white w-full h-[64px] md:h-[70px] mx-2">
                <option value="">Visa type</option>
                <option value="tourist">Tourist</option>
                <option value="student">Student</option>
              </select>
            </div>
          </div>

          {/* Second row: Application & City */}
          <div className="flex flex-row  md:flex-row gap-4 w-full">
            <input
              type="text"
              placeholder="Select an application"
              className="flex-1 px-4 py-3 rounded-full text-[14px] md:text-[16px] text-gray-600 bg-white w-full h-[64px] md:h-[70px]"
            />
            <input
              type="text"
              placeholder="Select application city"
              className="flex-1 px-4 py-3 rounded-full text-[14px] md:text-[16px] text-gray-600 bg-white w-full h-[64px] md:h-[70px]"
            />
          </div>

          {/* Third row: Button */}
          <div className="w-full">
            <button className="w-full bg-[#F66F4D] text-white py-3 rounded-full font-semibold shadow hover:opacity-90 transition h-[64px] md:h-[70px]">
              Find Appointments
            </button>
          </div>
        </div>
      </div>

      {/* Right column */}
      <div className="col-span-1 flex items-center justify-center px-4 md:px-8">
        <img src={people} alt="People" className="w-full h-auto max-w-full object-contain" />
      </div>
    </div>
  );
}
