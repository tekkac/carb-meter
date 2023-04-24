import Head from 'next/head';
import Image from 'next/image';

import { useEffect, useState } from 'react';





const Carbzmeter = () => {
  const [userInput, setUserInput] = useState('');
  const [apiOutput, setApiOutput] = useState('')

 

  //fonction that will fetch a new api  : 
  //     GET  request sur
  // 'https://api-testnet.starkscan.co/api/v0/calls?from_block=0&contract_address=0x0253411b21eab322a75e3f3d5a6572e2071d5735fcc7f7120fa2d06212d002c5&limit=100'
  // headers:
  //      --header 'accept: application/json'
  //      --header 'x-api-key: WW3DmH4xrh7PHl0dq8LWi2B25ygFJHtzafsOsqVx'

  const callIndexer = async () => {
    if (userInput === '') {
      setApiOutput('Please enter a value');
      return;
    }
  
    try {
      // const response = await fetch('https://api-testnet.starkscan.co/api/v0/calls?from_block=0&contract_address=0x0253411b21eab322a75e3f3d5a6572e2071d5735fcc7f7120fa2d06212d002c5&limit=100', {
      //   method: 'GET',
      //   // headers: {
      //   //   'accept': 'application/json',
      //   //   'x-api-key': 'WW3DmH4xrh7PHl0dq8LWi2B25ygFJHtzafsOsqVx',
      //   // },
      //   hearders: new Headers({
      //     'accept': 'application/json',
      //     'x-api-key': 'WW3DmH4xrh7PHl0dq8LWi2B25ygFJHtzafsOsqVx',
      //   }
      //     )
      // });

      const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'x-api-key': 'WW3DmH4xrh7PHl0dq8LWi2B25ygFJHtzafsOsqVx'}
      };
      
      // concatenate input with 'https://api.starkscan.co/api/v0/account-calls?from_block=0&contract_address=' and '&limit=100'
      const url = 'https://api.starkscan.co/api/v0/transactions?from_block=0&contract_address=' + userInput + '&limit=100';
      // pour les protocoles: const url = 'https://api.starkscan.co/api/v0/account-calls?from_block=0&contract_address=' + userInput + '&limit=100';


      const response = await fetch(url, options)
        .catch(err => console.error(err));
  
      // Check if the response's content type is JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Invalid content type');
      }
  
      const data = await response.json();
      console.log(data);

      const numberOfItems = data.data.length;
      console.log('Number of items:', numberOfItems);

      // keep only two decimal for emission
      const emission = numberOfItems * 0.07
      const emissionRounded = emission.toFixed(2);

      // setapioutput with stringified data
      //setApiOutput(JSON.stringify(data, null, 2));
    
      setApiOutput('Your footprint: ' + emissionRounded + ' kg of CO2 \n It represents ' + numberOfItems * 0.03 +  '\n You could compensate with Carbonable for ' + (emissionRounded * 19.5 /1000).toFixed(2) + '€');
    } catch (error) {
      console.error('Error fetching data:', error);
      setApiOutput('Failed to fetch data');
    }
  };
  

  const onUserChangedText = async(event) => {
    setUserInput(event.target.value);
    //console.log(event.target.value);
  };  

  // fonction that take take text in a button to put it in the input of prompt-box
  const onUserChangedTextButton = async(event) => {
    // set the value of the button in the input of prompt-box
    onUserChangedText(event);
    const userInput = event.target.value;
    if (userInput === '') {
      setApiOutput('Please enter a prompt');
      return;
    }

    setApiOutput(`${output.text}`);
   // scroll to prompt-box to see the answer and the input
    document.getElementById("prompt-box").scrollIntoView();
  };




  return (
    <div className="root" class="min-h-screen bg-cover bg-center bg-no-repeat" >
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Carbz Meter</h1>
          </div>
          <div className="header-subtitle">
            <h2>Mesure your CO2 footprint </h2>
          </div>
        </div>

        {/* buttons */}
       
     

        {/* Prompt container*/}
        <div className="prompt-container">
          <textarea
              id="prompt-box"
              className="prompt-box"
              placeholder="Enter your starknet address"
              value={userInput}
              onChange={onUserChangedText}
            />;
        {/* prompt button  */}
        <div className="prompt-buttons">
          <a
            className= 'generate-button'
            onClick={callIndexer}
          >
            <div className="generate">
             <p>Generate</p>
            </div>
          </a>
        </div>

           {/* output code */}
           {apiOutput && (
            <div className="output">
              <div className="output-header-container">
                <div className="output-header">
                <h3>Answer</h3>
                </div>
              </div>
              <div className="output-content">
                <p>{apiOutput}</p>
              </div>
            </div>
          )}
          
        </div>
      </div>

    </div>
  );
};

export default Carbzmeter;
