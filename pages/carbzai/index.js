import Head from 'next/head';
import Image from 'next/image';

import { useEffect, useState } from 'react';





const Carbzai = () => {
  const [userInput, setUserInput] = useState('');


  const [apiOutput, setApiOutput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const callGenerateEndpoint = async () => {
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
            <h1>Ask Carbonable</h1>
          </div>
          <div className="header-subtitle">
            <h2>Discuss RSE topics with openAI trained on Carbonable. Obj is to understand how Carbonable works & how could pragmatism approach helps fightinh climate change without greenwashing (ex: how carbon credit process could help fighting climate change when executed correctly ?) </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-3 grid-flow-row gap-4 text-xs xl:text-sm ">
          {/* box with white text in the center when clicked on button call onUserChangedTextButton */}
          <button className=" rounded-xl bg-white h-20 w-36 xl:h-32 xl:w-60 shadow-lg p-4 grid place-content-center " 
          value="Why is Carbonable necessary ?" 
          onClick={onUserChangedTextButton}>
            Why is Carbonable necessary ?
          </button>

          <button className=" rounded-xl bg-white h-20 w-36 xl:h-32 xl:w-60 shadow-lg p-4 grid place-content-center " 
          value="What challenges does Carbonable solve with natural assets?" 
          onClick={onUserChangedTextButton}>
            What challenges does Carbonable solve with natural assets?
          </button>

          <button className=" rounded-xl bg-white h-20 w-36 xl:h-32 xl:w-60 shadow-lg p-4 grid place-content-center " 
          value="How does Carbonable Work?" 
          onClick={onUserChangedTextButton}>
            How does Carbonable Work?
          </button>
          <button className=" rounded-xl bg-white h-20 w-36 xl:h-32 xl:w-60 shadow-lg p-4 grid place-content-center " 
          value="Why Carbonable chose Starknet?" 
          onClick={onUserChangedTextButton}>
            Why Carbonable chose Starknet?
          </button>

          <button className=" rounded-xl bg-white h-20 w-36 xl:h-32 xl:w-60 shadow-lg p-4 grid place-content-center " 
          value="What are the major things you get as a Carbonable NFT Holders?" 
          onClick={onUserChangedTextButton}>
            What are the major things you get as a Carbonable NFT Holders?
          </button>

          <button className=" rounded-xl bg-white h-20 w-36 xl:h-32 xl:w-60 shadow-lg p-4 grid place-content-center " 
          value="When next carbonable mint?" 
          onClick={onUserChangedTextButton}>
            When next mint?
          </button>

        </div>

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

export default Carbzai;
