import BackgroundMap from '../assets/BackgroundMap.svg'
import Mockup from '../assets/Mockup.svg'
import { ArrowUpRight } from "lucide-react";



export default function Benefits(){
    return(
        <div className='w-full bg-green-950 relative'>
            <img src={BackgroundMap} alt="Loading.." className="w-full absolute top-0 left-0 z-0 object-cover h-full" />
            
            <div className="grid grid-cols-2 z-10">
                
                {/*  col 1 for mockup */}
                <div className="col-span-1 flex items-center justify-center">
                    <img src={Mockup} alt="Loading.." className="py-12" />
                </div>

                {/* col 2 for details */}
                <div className='col-span-1 flex-col'>

                    {/* row 1 CTA button and deatails */}
                    <div className='flex flex-col pr-16 m-16 items-start justify-start space-y-4'>
                        <p className='text-[#FAF8ED] font-700 text-[64px] tracking-tighter font-bold'>Get your appointment</p>
                        <p className='text-[#FAF8ED] font-400 text-[18px] tracking-tighter pr-16'>Get instant email or push notifications when new appointments open up or get a slot auto - booked for you</p>
                        <button className='relative flex space-x-4 px-8 py-2 bg-[#F66F4D] h-[70px] rounded-full text-[#FAF8ED] font-bold items-center justify-center'> <span className='pr-12'>TRY VISABOT</span>  <ArrowUpRight className='stroke-white border-2 rounded-full h-[52px] w-[52px] absolute right-2'/></button>

                    </div>

                    {/* row 2 to show numbers */}
                    <div>
                        
                    </div>
                </div>

            </div>
        </div>
        
    )
}