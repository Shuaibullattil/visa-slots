import people from '../assets/Hero Section people.svg'


export default function Herosection() {
  return (
    <div className="grid grid-cols-2 px-8 py-8 h-[607px]">
      
      {/* Left column with 2 rows */}
      <div className="col-span-1 grid grid-rows-2 p-8">
        
        {/* Row 1 Tagline*/}
        <div className="flex flex-col items-start justify-center">
            <p className="text-base text-[#F66F4D] text-[20px] font-[700px] px-[24px] py-[16] bg-[rgba(246,111,77,0.1)] rounded-full">
                AI-Powered • Instant Results
            </p>
          <p className="text-[50px] font-bold mb-2 text-green-950">
            Book a Schengen Visa Appointment in <span className="text-[#F66F4D]">1 week</span>
          </p>
          <p className="text-base text-gray-700 text-[18px] font-[400]">
            Your Trusted Visa Bot for Instant Notifications and Auto-Booking.
          </p>
        </div>

        {/* Row 2 input and sumbit button*/}
        <div className="flex flex-col items-start justify-center space-y-4">
            {/* First row: Going to & Visa Type */}
            <div className="flex flex-row gap-4 w-full max-w-xl">
                <input
                type="text"
                placeholder="Going to"
                className="flex-1 px-4 py-3 rounded-full text-gray-600 placeholder-gray-400 bg-white shadow h-[64px]"
                />
                <select
                className="flex-2 px-4 py-3 rounded-full text-gray-600 placeholder-gray-400 bg-white shadow h-[64px]"
                >
                <option value="">Visa type</option>
                <option value="tourist">Tourist</option>
                <option value="student">Student</option>
                </select>
            </div>

            {/* Second row: Application & City */}
            <div className="flex flex-row gap-4 w-full max-w-xl">
                <input
                type="text"
                placeholder="Select an application"
                className="flex-1 px-4 py-3 rounded-full text-gray-600 placeholder-gray-400 bg-white shadow h-[64px]"
                />
                <input
                type="text"
                placeholder="Select application city"
                className="flex-1 px-4 py-3 rounded-full text-gray-600 placeholder-gray-400 bg-white shadow h-[64px]"
                />
            </div>

            {/* Third row: Button */}
            <div className="w-full max-w-xl">
                <button className="w-full bg-[#F66F4D] text-white py-3 rounded-full font-semibold shadow hover:opacity-90 transition h-[64px]">
                Find Appointments
                </button>
            </div>
            </div>


      </div>

      {/* Right column */}
      <div className="col-span-1 p-4 flex items-center justify-center">
        <img src={people} alt="Loading" className="h-[607px] w-[607px]" />
      </div>

    </div>
  );
}
