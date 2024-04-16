import { useState, useContext, Fragment } from "react";
import YourInfoIsSafelySecured from './YourInfoIsSafelySecured'
import { Menu, Transition } from '@headlessui/react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Alert from '@mui/material/Alert';
import { Context } from '../App'

import { Fade } from "react-awesome-reveal";

const ResidencyInfo = () => {

    const {stepNumber, setStepNumber, userData, setUserData} = useContext(Context)

    const [address, setAddress] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("");
    const [country, setCountry] = useState("");

    const [error, setError] = useState([]);

    const handleSubmit = () => {
        !address && setError(error => [...error, "Address is empty. "]);
        !country && setError(error => [...error, "Country is not selected. "]);
        if(address && country) {
            userData.address = address;
            userData.country = country;
            setStepNumber(stepNumber + 1);
        }
        setTimeout(function(){setError([])}, 3000)
    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
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
                <p className="text-[14px] font-[500] text-[#BDBDBD]">STEP 02/03</p>
                <p className="text-[16px] font-[600] text-[#8692A6]">Residency Info</p>
            </div>
        </div>
        
        <div className="w-[100%] md:w-[55%] flex md:block flex-col items-center">
            <h1 className="text-[30px] font-[700]">Complete Your Profile!</h1>
            <p className="w-[300px] md:w-[430px] text-[18px] text-[#8692A6] my-2 pr-10">For the purpose of industry regulation, your details are required.</p>
            <div className="w-[300px] md:w-[430px] border-[0.5px] border-[#F5F5F5] my-5"/>
            <div className="flex flex-col">
                <div className="w-[100%] md:w-[55%] flex md:block flex-col items-center">
                    <div className="md:mb-5">
                        <label className="block text-sm font-medium leading-6 text-[#696F79]">Your address</label>
                        <div className="mt-2">
                            <input placeholder="Please enter address"
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-[300px] md:w-[430px] h-[64px] rounded-md border border-[#8692A6] text-[14px] px-6 text-[#494949] shadow-sm placeholder:text-[#8692A6] focus:border-[#1565D8] focus:border-2 focus:outline-none focus:shadow-lg" />
                        </div>
                    </div>

                    <div className="md:my-5">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-[#696F79]">Country of residence</label>
                        <div className="mt-2">
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="w-[300px] md:w-[430px] h-[64px] flex justify-between items-center text-left rounded-md border border-[#8692A6] text-[14px] px-5 text-[#494949] shadow-sm focus:border-[#1565D8] focus:border-2 focus:outline-none focus:shadow-lg">
                                        {!selectedCountry ? <span className="text-[#8692A6]">Please select</span> : selectedCountry}
                                        <ArrowDropDownIcon />
                                    </Menu.Button>
                                </div>

                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute w-[300px] md:w-[430px] right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            <Menu.Item>
                                            {({ active }) => (
                                                <a onClick={() => {setCountry("SL"); setSelectedCountry("Slovenia (SL)")}} href="#" className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}>Slovenia (SL)</a>
                                            )}
                                            </Menu.Item>
                                        </div>
                                        <div className="py-1">
                                            <Menu.Item>
                                            {({ active }) => (
                                                <a onClick={() => {setCountry("US"); setSelectedCountry("USA (US)")}} href="#" className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}>USA (US)</a>
                                            )}
                                            </Menu.Item>
                                        </div>
                                        <div className="py-1">
                                            <Menu.Item>
                                            {({ active }) => (
                                                <a onClick={() => {setCountry("EN"); setSelectedCountry("England (EN)")}} href="#" className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}>England (EN)</a>
                                            )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>

                                </Transition>

                            </Menu>
                        </div>
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

export default ResidencyInfo