import { useContext } from "react";
import { Context } from '../App'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import polygonWhite from '../assets/PolygonWhite.svg'
import polygonBlue from '../assets/PolygonBlue.svg'
import userBlue from '../assets/userBlue.svg'
import userWhite from '../assets/userWhite.svg'
import briefcaseBlue from '../assets/briefcaseBlue.svg'
import briefcaseWhite from '../assets/briefcaseWhite.svg'

import { Fade } from "react-awesome-reveal";

const AccountType = () => {

    const {stepNumber, setStepNumber, userData, setUserData} = useContext(Context)

    const handleSubmit = (accountType) => {
        userData.accountType = accountType;
        setStepNumber(stepNumber + 1);
    }


  return (
    <Fade>
    <div className="flex flex-col justify-center items-center h-[100vh] w-full text-left">
        <p className="absolute top-10 md:right-24 text-[18px] text-[#8692A6]">Already have an account? <span className="text-[#1565D8] font-[500] cursor-pointer hover:text-[#3467ad]">Sign In</span></p>
        <div className="flex md:block flex-col items-center w-[100%] md:w-[60%]">
            <h1 className="text-[30px] font-[700]">Join Us!</h1>
            <p className="w-[300px] md:w-[430px] text-[18px] text-[#8692A6] my-2 pr-10">To begin this journey, tell us what type of account you’d be opening.</p>
            <div className="flex flex-col gap-6">
                <div onClick={() => handleSubmit('Individual')} className="polygon w-[300px] md:w-[430px] h-[100px] flex items-center shadow-md rounded-[8px] border border-gray-50 hover:border-[#1565D8] hover:bg-[#F5F9FF] cursor-pointer">
                    <div className="relative w-[20%] flex justify-center items-center">
                        <div className="absolute flex justify-center items-center">
                            <img src={polygonWhite}/>
                            <img className="absolute h-[17px]" src={userBlue} />
                        </div>
                        <div className="hiddenItem absolute justify-center items-center">
                            <img src={polygonBlue}/>
                            <img className="absolute h-[20px]" src={userWhite} />
                        </div>
                    </div>
                    <div className="w-[65%] flex flex-col justify-center">
                        <p className="text-[16px] font-[500]">Individual</p>
                        <p className="text-[14px] text-[#8692A6]">Personal account to manage all you activities.</p>
                        
                    </div>
                    <div className="hiddenItem w-[15%] items-center">
                        <ArrowForwardIcon style={{ color: '#1565D8' }}/>
                    </div>    
                    
                </div>
                <div onClick={() => handleSubmit('Business')} className="polygon w-[300px] md:w-[430px] h-[100px] flex items-center shadow-md rounded-[8px] border border-gray-50 hover:border-[#1565D8] hover:bg-[#F5F9FF] cursor-pointer">
                    <div className="relative w-[20%] flex justify-center items-center">
                        <div className="absolute flex justify-center items-center">
                            <img src={polygonWhite}/>
                            <img className="absolute h-[17px]" src={briefcaseBlue} />
                        </div>
                        <div className="hiddenItem absolute justify-center items-center">
                            <img src={polygonBlue}/>
                            <img className="absolute h-[15px]" src={briefcaseWhite} />
                        </div>
                    </div>
                    <div className="w-[65%] flex flex-col justify-center">
                        <p className="text-[16px] font-[500]">Business</p>
                        <p className="text-[14px] text-[#8692A6]">Own or belong to a company, this is for you.</p>
                    </div>   
                    <div className="hiddenItem w-[15%] items-center">
                        <ArrowForwardIcon style={{ color: '#1565D8' }}/>
                    </div>      
                </div>
            </div>
        </div>
    </div>
    </Fade>
  )
}

export default AccountType