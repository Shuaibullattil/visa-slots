import people from '../assets/Hero Section people.svg'


export default function Herosection() {
  return (
    <div className="grid grid-cols-2 px-2 py-4 h-[607px]">
      
      {/* Left column with 2 rows */}
      <div className="col-span-1 grid grid-rows-2 bg-green-300 p-4 gap-4">
        
        {/* Row 1 Tagline*/}
        <div className="flex flex-col items-start justify-start">
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
        <div className="flex flex-col items-start justify-start">
          
        </div>

      </div>

      {/* Right column */}
      <div className="col-span-1 bg-red-300 p-4 flex items-center justify-center">
        <img src={people} alt="Loading" className="h-[607px] w-[607px]" />
      </div>

    </div>
  );
}
