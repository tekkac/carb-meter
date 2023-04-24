import Head from 'next/head';
import Image from 'next/image';

import { useEffect, useState } from 'react';





const Carbzmeter = () => {
  const [userInput, setUserInput] = useState('');


  const [apiOutput, setApiOutput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const callGenerateEndpoint = async () => {
    if (userInput === '') {
      setApiOutput('Please enter a value');
      return;
    }
    setIsGenerating(true);
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    });
    console.log("ouech", JSON.stringify({ userInput }))
    const data = await response.json();
    const { output } = data;
    //console.log("OpenAI replied...", output.text)

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  }

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
    setIsGenerating(true);
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    });
    console.log("ouech", JSON.stringify({ userInput }))
    const data = await response.json();
    const { output } = data;
    //console.log("OpenAI replied...", output.text)

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
   // scroll to prompt-box to see the answer and the input
    document.getElementById("prompt-box").scrollIntoView();
  };

  //onUserChangedTextButton() don't work because callGenerateEndpoint() is async and onUserChangedTextButton() is sync and don't wait the input to be set in the input of prompt-box.
  //correct onUserChangedTextButton to make it work
  const onUserChangedTextButton2 = (event) => {
    // set the value of the button in the input of prompt-box
    setUserInput(event.target.value);
    // call the function that call the api and generate the answer when the button is clicked and the value of the button is set in the input of prompt-box
    callGenerateEndpoint();
    // scroll to prompt-box to see the answer and the input
    document.getElementById("prompt-box").scrollIntoView();
  };



  return (
    <div className="root">
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
       
        {/* output code */}
        {apiOutput && (
            <div className="output">
              <div className="output-header-container">
                <div className="output-header">
                {isGenerating ? <span className="loader"></span> : <h3>Answer</h3>}
                </div>
              </div>
              <div className="output-content">
                <p>{apiOutput}</p>
              </div>
            </div>
          )}

        {/* Prompt container*/}
        <div className="prompt-container">
          <textarea
              id="prompt-box"
              className="prompt-box"
              placeholder="start typing here"
              value={userInput}
              onChange={onUserChangedText}
            />;
        {/* prompt button  */}
        <div className="prompt-buttons">
          <a
            className={isGenerating ? 'generate-button loading' : 'generate-button'}
            onClick={callGenerateEndpoint}
          >
            <div className="generate">
            {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
            </div>
          </a>
        </div>
          
        </div>
      </div>

    </div>
  );
};

export default Carbzmeter;
