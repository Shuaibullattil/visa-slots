import Whitelogo from '../assets/white logo.svg'
import FacebookIcon from '../assets/facebookicon.svg'
import InstagramIcon from '../assets/instagram.svg'
import TwitterIcon from '../assets/twittericon.svg'

export default function () {
    return (
        <div className="w-full bg-[#034833] p-6 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-16 relative">
            {/* col 1 */}
            <div className="col-span-1 flex flex-col items-start justify-start space-y-4">
                <div className='flex items-center gap-2'>
                    <img src={Whitelogo} alt="loading" className="h-[44px] w-[44px]" />
                    <p className='font-bold text-[24px] text-[#FAF8ED]'>Visaslots</p>
                </div>
                <p className='font-[400] text-[#FAF8ED] leading-relaxed text-[16px] md:text-[20px] tracking-tight'>
                    Travelo is Southeast Asia’s travel and lifestyle app, we provide you with access to discover and purchase different type of travel needs.
                </p>
            </div>

            {/* col 2 with 3 inner columns */}
            <div className='col-span-1 grid grid-cols-1 md:grid-cols-3 gap-4'>
                <div className='col-span-1 text-[#FAF8ED] flex-col space-y-4 md:space-y-[24px]'>
                    <p className='font-semibold text-[18px] md:text-[24px] mt-2'>Products</p>
                    <p className='font-medium text-[16px] md:text-[18px]'>visaslots</p>
                    <p className='font-medium text-[16px] md:text-[18px]'>FAQ</p>
                    <p className='font-medium text-[16px] md:text-[18px]'>Blog</p>
                </div> 
                <div className='col-span-1 text-[#FAF8ED] flex-col space-y-4 md:space-y-[24px]'>
                    <p className='font-semibold text-[18px] md:text-[24px] mt-2'>Company</p>
                    <p className='font-medium text-[16px] md:text-[18px]'>About us</p>
                    <p className='font-medium text-[16px] md:text-[18px]'>Contact us</p>
                    <p className='font-medium text-[16px] md:text-[18px]'>For Visa Agencies</p>
                </div>
                <div className='col-span-1 text-[#FAF8ED] flex-col space-y-4 md:space-y-[24px]'>
                    <p className='font-semibold text-[18px] md:text-[24px] mt-2'>Resources</p>
                    <p className='font-medium text-[16px] md:text-[18px]'>Privacy Policy</p>
                    <p className='font-medium text-[16px] md:text-[18px]'>Terms and Conditions</p>
                    <p className='font-medium text-[16px] md:text-[18px]'>Cookie Settings</p>
                </div>
            </div>

            <div className='flex flex-row justify-between bg-[#0E6C4F] absolute bottom-[-70px] left-0 w-full px-16 h-[70px] items-center'>
                {/* Left: Social Media Icons */}
                <div className="flex items-center gap-[14px]">
                    <img src={FacebookIcon} alt="Facebook" className="h-[32px] w-[32px] border-white rounded-full" />
                    <img src={InstagramIcon} alt="Instagram" className="h-[32px] w-[32px]" />
                    <img src={TwitterIcon} alt="Twitter" className="h-[32px] w-[32px]" />
                </div>

                {/* Right: Copyright */}
                <p className='text-[#FAF8ED]'>© 2025 Visaslots</p>
                </div>

        </div>
    )
}
