import { useState, createContext } from 'react'
import './App.css'
import AccountType from './components/AccountType'
import PersonalInfo from './components/PersonalInfo'
import ResidencyInfo from './components/ResidencyInfo'
import Team from './components/Team'
import Success from './components/Success'

import corner from './assets/corner.svg'
import skyscraper from './assets/skyscraper.jpg'
import { quotes } from './quotes.js'


export const Context = createContext()

function App() {

  

  const [stepNumber, setStepNumber] = useState(1);

  const [userData, setUserData] = useState(
    {
      accountType: "",
      name: "",
      email: "",
      password: "",
      terms: false,
      address: "",
      country: 'SL' | 'US' | 'EN',
      team: [],

    }
  );
  console.log(userData)
  const signupComponent = () => {
    switch(stepNumber) {
      case 1: return <AccountType />;
      case 2: return <PersonalInfo />;
      case 3: return <ResidencyInfo />;
      case 4: return <Team />;
      case 5: return <Success />;
    }
  }

  return (
    <div className='w-full h-full flex justify-center flex-row'>
      <div className='relative w-[40vw] md:flex hidden justify-center items-center h-full'>
        <img className='absolute z-[99] lg:right-[80px] md:right-[20px] bottom-[500px] md:bottom-[310px]' src={corner}  />
        <p className='absolute w-[80%] z-[99] text-white leading-[2.2vw] text-[2vw] lg:text-[1.1vw]'><span className='dictate'>“</span>{quotes[stepNumber - 1]}</p>
        
        <div className='absolute w-full h-[100vh] bg-[#1565D8]/[0.9]' />
        <img src={skyscraper} className='w-full h-[100vh] object-cover'/>
      </div>
      <div className='h-full md:w-[60vw] w-[100vw]'>
        <Context.Provider value={{ stepNumber, setStepNumber, userData, setUserData }}>
          {signupComponent()}
        </Context.Provider>
      </div>

    </div>
  )
}

export default App
