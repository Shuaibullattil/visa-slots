

export default function HeroForm() {
  return (
    <div className="flex flex-col items-start justify-center space-y-4 w-full">
      {/* First row: Going to & Visa Type */}
      <div className="flex flex-col items-start justify-center space-y-4 w-full">
        <div className="flex flex-row gap-1 w-full">
          <input
            type="text"
            placeholder="Going to"
            className="flex-[0_0_60%] px-4 py-3 rounded-full text-[14px] md:text-[16px] text-gray-600 placeholder-gray-400 bg-white w-full h-[64px] md:h-[70px]"
          />
          <select className="flex-[0_0_37%] px-2 py-3 rounded-full text-[14px] md:text-[16px] text-gray-600 bg-white w-full h-[64px] md:h-[70px] mx-2">
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
  );
}
