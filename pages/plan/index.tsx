import React, { useState, useEffect } from 'react';

const Plan = () => {
  const [countdown1, setCountdown1] = useState({ days:0, hours: 0, minutes: 0, seconds: 0 });
  const [countdown2, setCountdown2] = useState({ days:0, hours: 0, minutes: 0, seconds: 0 });
  const [countdown3, setCountdown3] = useState({ days:0, hours: 0, minutes: 0, seconds: 0 });
  
  const [date1, setDate1] = useState(new Date("2023-01-23T23:59:59"));
  const [date2, setDate2] = useState(new Date("2023-01-24T16:59:59"));
  const [date3, setDate3] = useState(new Date("2023-01-26T16:59:59"));

  const startCountdown = (date, setCountdown) => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = date - now; 
    
      if (distance < 0) {
        clearInterval(intervalId);
        setCountdown("Opened");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);
    return () => clearInterval(intervalId);
  };

  useEffect(() => startCountdown(date1, setCountdown1), [date1]);
  useEffect(() => startCountdown(date2, setCountdown2), [date2]);
  useEffect(() => startCountdown(date3, setCountdown3), [date3]);

  return (

    <div className="root">
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Carbonable  </h1>
          </div>
          <div className="header-subtitle">
            <h2>Mint Countdown</h2>
          </div>
        </div>
        <div>
             {/* display pimage https://mintsquare.sfo3.cdn.digitaloceanspaces.com/mintsquare/assets/0x03a9d0df1831c40d6e7291753bd3eb2f9f1d205ffb8bfda02fc14b015b079530/QmYSrEL6Z3hVQ157abZYebv9NQ59hDbZYDoFrv6vHSySgP */}

           <img className='w-60' src="https://mintsquare.sfo3.cdn.digitaloceanspaces.com/mintsquare/assets/0x03a9d0df1831c40d6e7291753bd3eb2f9f1d205ffb8bfda02fc14b015b079530/QmYSrEL6Z3hVQ157abZYebv9NQ59hDbZYDoFrv6vHSySgP" alt="" /> 
          
        
         </div>
        <a href="https://app.carbonable.io/launchpad">
        <div className="bg-green text-center h-10 w-40 hover:bg-white grid place-content-center rounded-full">
            <p>Official mint page</p>
            </div>
            </a>
    </div>
    
    <div className='text-white grid grid-flow-row w-full gap-y-4 text-center mb-40'>
      <div>
        <h3 className='project font-bold'>Private Sale</h3>
        <div className='text-2xl lg:text-4xl count'> Closed</div>
        
      </div>
      <div>
        <h3 className='project font-bold'>Pre Mint - allowlist </h3>
        <div className='text-2xl lg:text-6xl count'> {typeof countdown2 === "object" ? `${countdown2.days}d ${countdown2.hours}h ${countdown2.minutes}m ${countdown2.seconds}s` : countdown2}</div>
        
      </div>
      <div>
        <h3 className='project font-bold'>Public sale</h3>
        <div className='text-2xl lg:text-6xl count'> {typeof countdown3 === "object" ? `${countdown3.days}d ${countdown3.hours}h ${countdown3.minutes}m ${countdown3.seconds}s` : countdown3}</div>
        
      </div>
    </div>
    </div>
  );
};

export default Plan;
