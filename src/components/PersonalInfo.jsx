import { useState, useContext } from "react"
import YourInfoIsSafelySecured from './YourInfoIsSafelySecured'
import Alert from '@mui/material/Alert';
import { Context } from '../App'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import isEmailValid from '../utils/isEmailValid'
import isPasswordValid from "../utils/isPasswordValid";

import { Fade } from "react-awesome-reveal";

const PersonalInfo = () => {

    const {stepNumber, setStepNumber, userData, setUserData} = useContext(Context)

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [termsChecked, setTermsChecked] = useState(userData.terms);

    const [error, setError] = useState([]);

    const handleSubmit = () => {
        fullname.length > 4 ? userData.name = fullname : setError(error => [...error, "Name is too short."]);
        isEmailValid(email) ? userData.email = email : setError(error => [...error, "Email is not valid. "]); 
        isPasswordValid(password) ? userData.password = password : setError(error => [...error, "Password is not valid. "]);
        termsChecked ? userData.terms = termsChecked : setError(error => [...error, "Terms & conditions are not checked. "]); 

        if(fullname.length > 4 && isEmailValid(email) && isPasswordValid(password) && termsChecked){
            setStepNumber(stepNumber + 1);
        }
        setTimeout(function(){setError([])}, 3000)
    }

    const handleChange = () => {
        setTermsChecked(!termsChecked);
    }

    
    
  return (
  
    <Fade>
    <div className="flex flex-col justify-center items-center h-[100vh] w-full text-left">
        <div className="absolute right-10 bottom-10 flex flex-col gap-2">
            {error?.map((err, i) => {
                return(    
                    <Fade>      
                        <Alert className="relative" severity="error">{err}</Alert> 
                    </Fade>                         
                )
            })}
        </div>
        <div className="absolute w-[90%] md:w-[45vw] top-2 md:top-10 flex justify-between">
            <button onClick={() => setStepNumber(stepNumber - 1)} className="text-[16px] font-[600] text-[#8692A6]"><ArrowBackIosNewIcon style={{ marginRight: '6px', height: '20px' }}/>Back</button>
            <div>
                <p className="text-[14px] font-[500] text-[#BDBDBD]">STEP 01/03</p>
                <p className="text-[16px] font-[600] text-[#8692A6]">Personal Info.</p>
            </div>
        </div>
        
        <div className="mt-[150px] md:mt-10 flex md:block flex-col md:justify-center items-center w-[100%] md:w-[55%]">
            <h1 className="w-[300px] md:w-[430px] text-[30px] font-[700]">Register {userData.accountType} Account!</h1>
            <p className="w-[300px] md:w-[430px] text-[18px] text-[#8692A6] my-2 pr-10">For the purpose of industry regulation, your details are required.</p>
            <div className="w-[300px] md:w-[430px] border-[0.5px] border-[#F5F5F5] my-5"/>
            <div className="flex md:block flex-col md:items-center">
                <div className="flex md:block flex-col items-center">
                    <div className="w-[300px] md:w-[430px] mb-5">
                        <label className="block text-sm font-medium leading-6 text-[#696F79]">Your fullname*</label>
                        <div className="mt-2">
                            <input onChange={(e) => setFullname(e.target.value)} value={fullname} placeholder="Enter fullname" type="text"
                            className="w-[300px] md:w-[430px] h-[64px] rounded-md border border-[#8692A6] text-[14px] px-5 text-[#494949] shadow-sm placeholder:text-[#8692A6] focus:border-[#1565D8] focus:border-2 focus:outline-none focus:shadow-lg" />
                        </div>
                    </div>

                    <div className="w-[300px] md:w-[430px] md:my-5">
                        <label className="block text-sm font-medium leading-6 text-[#696F79]">Email address*</label>
                        <div className="mt-2">
                            <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Enter email address" type="email"
                            className="w-[300px] md:w-[430px] h-[64px] rounded-md border border-[#8692A6] text-[14px] px-5 text-[#494949] shadow-sm placeholder:text-[#8692A6] focus:border-[#1565D8] focus:border-2 focus:outline-none focus:shadow-lg" />
                        </div>
                    </div>

                    <div className="w-[300px] md:w-[430px] md:my-5">
                        <label className="block text-sm font-medium leading-6 text-[#696F79]">Create password*</label>
                        <div className="mt-2">
                            <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" type="password"
                            className="w-[300px] md:w-[430px] h-[64px] rounded-md border border-[#8692A6] text-[14px] px-5 text-[#494949] shadow-sm placeholder:text-[#8692A6] focus:border-[#1565D8] focus:border-2 focus:outline-none focus:shadow-lg" />
                        </div>
                    </div>

                    <div className="w-[300px] md:w-[430px] my-2 md:my-5 flex items-center">
                        <input type="checkbox" checked={termsChecked} onChange={handleChange} className="w-[20px] h-[20px] text-[#1565D8] bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                        <label className="ms-2 text-[16px] font-[500] text-[#696F79]">I agree to <span className="text-[#1565D8] underline">terms & conditions</span></label>
                    </div>

                    <div className="w-[300px] md:w-[430px] md:mt-8">
                        <button onClick={() => handleSubmit()} className="w-[300px] md:w-[430px] h-[64px] text-white bg-[#1565D8] rounded-md">
                            Register Account
                        </button>
                    </div>
                    <YourInfoIsSafelySecured />
                    
                </div>
            </div>
        </div>
    </div>
    </Fade>
  )
}

export default PersonalInfo