import { useContext, useState } from "react";
import YourInfoIsSafelySecured from './YourInfoIsSafelySecured'
import Alert from '@mui/material/Alert';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import isEmailValid from "../utils/isEmailValid";
import { Context } from '../App'

import { Fade } from "react-awesome-reveal";

const Team = () => {
    const {stepNumber, setStepNumber, userData, setUserData} = useContext(Context)

    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [team, setTeam] = useState([]);

    const [error, setError] = useState([]);

    const addTeammate = () => {
        if(team.length < 5) {
            if(isEmailValid(email)) {
                let teamTemp = [];
                teamTemp.push({email: email, address: address});
                setTeam(team => [...team, teamTemp]);
                setEmail("");
                setAddress("");
            } else {setError(error => [...error, "Email is not valid. "]);}
        }else{
            setError(error => [...error, "You can add only 5 teammates. "]);
        }
        setTimeout(function(){setError([])}, 3000)
    }


    const handleSubmit = () => {
        userData.team = team;


        fetch("/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
    })
        .then((data) => console.log("Success:", userData))
        .catch((error) => console.error("Error:", error));


        setStepNumber(stepNumber + 1);
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
                <p className="text-[14px] font-[500] text-[#BDBDBD]">STEP 03/03</p>
                <p className="text-[16px] font-[600] text-[#8692A6]">Team.</p>
            </div>
        </div>
        
        <div className="w-[100%] md:w-[55%] mt-[20px] md:mt-0 flex md:block flex-col items-center">
            <h1 className="w-[300px] md:w-[430px] text-[30px] font-[700]">Invite your team</h1>
            <p className="w-[300px] md:w-[430px] text-[18px] text-[#8692A6] my-2 pr-10">For the purpose of industry regulation, your details are required.</p>
            <div className="w-[300px] md:w-[430px] border-[0.5px] border-[#F5F5F5] my-5"/>
            <div className="flex flex-col">
                <div className="w-[300px] md:w-[430px] flex md:block flex-col items-center">
                    <div className="md:mb-5">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-[#696F79]">Teammate email</label>
                        <div className="mt-2">
                            <input placeholder="Enter email address" type="email"
                            onChange={(e) => setEmail(e.target.value)} value={email}
                            className="w-[300px] md:w-[430px] h-[64px] rounded-md border border-[#8692A6] text-[14px] px-6 text-[#494949] shadow-sm placeholder:text-[#8692A6] focus:border-[#1565D8] focus:border-2 focus:outline-none focus:shadow-lg" />
                        </div>
                    </div>

                    <div className="md:my-5">
                        <div className="mt-2">
                            <input placeholder="Please enter address"
                            onChange={(e) => setAddress(e.target.value)} value={address}
                            className="w-[300px] md:w-[430px] h-[64px] rounded-md border border-[#8692A6] text-[14px] px-5 text-[#494949] shadow-sm placeholder:text-[#8692A6] focus:border-[#1565D8] focus:border-2 focus:outline-none focus:shadow-lg" />
                        </div>
                    </div>

                    <div className="flex items-center gap-2 my-5 cursor-pointer" onClick={() => addTeammate()}>
                        <div className="w-[20px] h-[20px] flex justify-center items-center rounded-full border-2 border-[#1565D8]">
                            <div className="w-[8px] h-[1px] border border-[#1565D8]"/>
                            <div className="absolute w-[1px] h-[8px] border border-[#1565D8]"/>  
                        </div>
                        <p className="font-[500] text-[16px] text-[#1565D8]">Add teammate</p>
                    </div>
                    
                    <div className="w-[320px] md:w-[450px] overflow-auto flex flex-col gap-4 max-h-20 md:max-h-40">
                        {team?.map((item, index) => 
                            (
                            <div className="w-[300px] md:w-[430px] h-[72px] rounded-md border border-[#8692A6] text-[14px] px-6 text-[#494949] shadow-sm flex flex-col justify-center p-1">
                                <p className="font-[600]"><span>Teammate </span>{index + 1}</p>
                                <hr></hr>
                                <p><span className="font-[600]">Email: </span>{item[0].email}</p>
                                <p><span className="font-[600]">Address: </span>{item[0].address}</p>
                            </div>
                            )
                        )}
                    </div>
                    
                    <div className="mt-8">
                        <button onClick={() => handleSubmit()} className="w-[300px] md:w-[430px] h-[64px] text-white bg-[#1565D8] rounded-md">
                            Save & Continue
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

export default Team