import tick from '../assets/tick.svg'

import { Fade } from "react-awesome-reveal";

const Success = () => {

  return (
    <Fade>
    <div className="flex flex-col gap-2 h-[95vh] text-center justify-center items-center">
        <div className="relative w-[200px] h-[200px] flex justify-center items-center">
            <div className="h-[150px] w-[150px] flex justify-center items-center bg-[#1565D8] rounded-full">
                <img src={tick} />
            </div>
            <div className='absolute w-[60px] h-[60px] top-0 left-4 rounded-[10px] bg-[#1565D8]/[0.5]' />
            <div className='absolute w-[38px] h-[38px] top-10 right-2 rounded-[10px] bg-[#1565D8]/[0.5]' />
            <div className='absolute w-[45px] h-[45px] bottom-5 right-4 rounded-[10px] bg-[#1565D8]/[0.5]' />
            <div className='absolute w-[41px] h-[41px] bottom-12 left-0 rounded-[10px] bg-[#1565D8]/[0.5]' />
        </div>
        <h1 className="text-[30px] font-[700]">Success</h1>
        <p className="w-[300px] md:w-[410px] text-[18px] font-[400] text-[#8692A6] leading-[28px]">You have received an email where you can read more about your account and setup your password.</p>
    </div>
    </Fade>
  )
}

export default Success