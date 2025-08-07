export default function HeroForm() {
  return (
    <div className="flex flex-col items-start justify-center space-y-4 w-full md:pr-32">
      {/* First row: Going to & Visa Type */}
      <div className="flex flex-col items-start justify-center space-y-4 w-full">
        <div className="flex flex-row gap-1 w-full">
          <div className="flex-[0_0_60%] relative">
            <select className="w-full px-4 py-3 rounded-full text-[14px] md:text-[16px] text-gray-600 bg-white h-[64px] md:h-[70px] appearance-none hover:border-[#F66F4D] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#F66F4D] pr-10">
              <option value="" disabled selected>Going to</option>
              <option value="estonia">🇪🇪 Estonia</option>
              <option value="ireland">🇮🇪 Ireland</option>
              <option value="netherland">🇳🇱 Netherlands</option>
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>

          <div className="flex-[0_0_37%] mx-2 relative">
            <select className="w-full px-2 py-3 rounded-full text-[14px] md:text-[16px] text-gray-600 bg-white h-[64px] md:h-[70px] appearance-none border-2 hover:border-[#F66F4D] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#F66F4D] pr-10">
              <option value="" disabled selected>Visa type</option>
              <option value="business">Business</option>
              <option value="others">Others (Except Tourism)</option>
              <option value="family">Family and Friends</option>
              <option value="tourism">Tourism</option>
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Second row: Application & City */}
      <div className="flex flex-row md:flex-row gap-4 w-full">
        <div className="flex-1 relative">
          <select className="w-full px-4 py-3 rounded-full text-[14px] md:text-[16px] text-gray-600 bg-white h-[64px] md:h-[70px] appearance-none border-2 hover:border-[#F66F4D] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#F66F4D] pr-10">
            <option value="" disabled selected>Select an application</option>
            <option value="finland">🇫🇮 Finland</option>
            <option value="france">🇫🇷 France</option>
            <option value="uk">🇬🇧 United Kingdom</option>
            <option value="ukraine">🇺🇦 Ukraine</option>
            <option value="italy">🇮🇹 Italy</option>
          </select>
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>

        <div className="flex-1 relative">
          <select className="w-full px-4 py-3 rounded-full text-[14px] md:text-[16px] text-gray-600 bg-white h-[64px] md:h-[70px] appearance-none border-2 hover:border-[#F66F4D] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#F66F4D] pr-10">
            <option value="" disabled selected>Select application city</option>
            <option value="birmingham">Birmingham</option>
            <option value="cardiff">Cardiff</option>
            <option value="edinburgh">Edinburgh</option>
            <option value="london">London</option>
            <option value="manchester">Manchester</option>
          </select>
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Third row: Button */}
      <div className="w-full">
        <button className="w-full bg-[#F66F4D] text-white py-3 rounded-full font-semibold shadow hover:scale-105 active:scale-95 transition duration-300 h-[64px] md:h-[70px]">
          Find Appointments
        </button>
      </div>
    </div>
  );
}
