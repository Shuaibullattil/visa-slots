import { ArrowUpRight, Moon } from "lucide-react";
import bell from "../assets/icons/bell.svg";
import calendar from "../assets/icons/calendar.svg";
import cash from "../assets/icons/cash.svg";
import clock from "../assets/icons/clock.svg";
import family from "../assets/icons/family.svg";
import halfmoon from "../assets/icons/halfmoon.svg";
import plusperson from "../assets/icons/plusperson.svg";
import smile from "../assets/icons/smile.svg";


export default function ServicesSection() {
  return (
    <div className=" px-8 md:px-16  bg-[#FAF8ED] my-4 md:my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="md:col-span-1 flex flex-col gap-6">
          <div>
            <h2 className="text-[46px] font-bold text-[#034833]">Our Services</h2>
            <p className="text-[#666] text-[16px] tracking-tight">
              “It is really hard to find a slot on VFS global. With VisaBot I have found the slot in 2 days. Thank you so much for such a good job!”
            </p>
          </div>

          {/* Testimonial */}
          <div className="bg-white p-4 rounded-md shadow">
            <div className="text-green-700 text-[24px] font-bold">“</div>
            <div className="text-sm text-[#333]">
              Best on the market
              <div className="flex items-center gap-2 mt-2">
                <img src="/path/to/trustpilot.png" alt="trustpilot" />
                <span className="text-xs text-gray-400">3 days ago</span>
              </div>
              <p className="mt-2">It is really hard to find a slot on VFS global. With VisaBot I have found the slot in 2 days. Thank you so much for such a good job.</p>
              <p className="mt-2 font-semibold">– Christy</p>
            </div>
          </div>
        </div>

        {/* Right Cards */}
        <div className="lg:col-span-2 md:col-span-2 col-span-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Notifications Card */}
            <div className="border border-[#034833] rounded-xl p-4 md:p-6 bg-white flex flex-col justify-between col-span-1">
            <div>
                <h3 className="text-[32px] font-semibold text-[#034833] tracking-tighter">Notifications</h3>
                <p className="text-[54px] font-bold md:mt-2 text-[#034833]">$99<span className="font-normal text-[#5B5F62] text-[20px]">/monthly</span></p>
                <p className="text-[12px] md:text-[16px] text-[#666] md:mt-1">Best for families and travelers on a budget</p>

                <div className="space-y-4 my-8 md:my-8">
                <div className="flex flex-row items-center gap-4">
                    <img src={cash} alt="bell icon" className="h-[42px] w-[42px]" />
                    <p className="text-[12px] md:text-sm text-[#333]">3–4 times cheaper than Schengen Visa agents</p>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <img src={calendar} alt="bell icon" className="h-[42px] w-[42px]" />
                    <p className="text-[12px] md:text-sm text-[#333]">You book an appointment on the next week</p>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <img src={family} alt="bell icon" className="h-[42px] w-[42px]" />
                    <p className="text-[12px] md:text-sm text-[#333]">1 subscription for all travelers</p>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <img src={clock} alt="bell icon" className="h-[42px] w-[42px]" />
                    <p className="text-[12px] md:text-sm text-[#333]">1 week – average time for booking an appointment</p>
                </div>
                </div>
            </div>
            <button className='relative flex space-x-4 px-2 md:px-8 py-2 bg-[#F66F4D] h-[54px] md:h-[70px] rounded-full text-[#FAF8ED] font-bold items-center justify-center'>
                <span className='pr-8 md:pr-12'>GET APPOINTMENT ALERT</span>
                <ArrowUpRight className='stroke-white border-2 rounded-full  h-[36px] w-[36px] md:h-[52px] md:w-[52px] absolute right-2' />
            </button>
            </div>

            {/* Auto Booking Card */}
            <div className="border border-[#034833] rounded-xl p-4 md:p-6 bg-white flex flex-col justify-between col-span-1">
            <div>
                <h3 className="text-[32px] font-semibold text-[#FF9000] tracking-tighter">Auto Booking</h3>
                <p className="text-[54px] font-bold mt-2 text-[#FF9000]">$100<span className="font-normal text-[#5B5F62] text-[20px]">/per applicant</span></p>
                <p className="text-[12px] md:text-[16px] text-[#666] mt-1">Best for families and travelers on a budget</p>

                <div className="my-8 space-y-4">
                <div className="flex flex-row items-center gap-4">
                    <img src={bell} alt="bell icon" className="h-[42px] w-[42px]" />
                    <p className="text-[12px] md:text-sm text-[#333]">Suitable if you can’t respond right away to notifications</p>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <img src={halfmoon} alt="bell icon" className="h-[42px] w-[42px]" />
                    <p className="text-[12px] md:text-sm text-[#333]">We book a slot for you, even when you sleep</p>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <img src={smile} alt="bell icon" className="h-[42px] w-[42px]" />
                    <p className="text-[12px] md:text-sm text-[#333]">You won’t have to think about booking—we’ll do everything</p>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <img src={plusperson} alt="bell icon" className="h-[42px] w-[42px]" />
                    <p className="text-[12px] md:text-sm text-[#333]">Can book a slot even for the next day</p>
                </div>
                </div>
            </div>
            <button className='relative flex space-x-4 px-8 py-2 bg-[#F66F4D] h-[54px] md:h-[70px] rounded-full text-[#FAF8ED] font-bold items-center justify-center'>
                <span className='pr-12'>TRY AUTO BOOKING</span>
                <ArrowUpRight className='stroke-white border-2 rounded-full h-[36px] w-[36px] md:h-[52px] md:w-[52px] absolute right-2' />
            </button>
            </div>

        </div>
      </div>
    </div>
  );
}
