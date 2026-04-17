import React, { useState } from "react"
import Search from "./input";

const App = () => {
  const[number,setNumber]=useState(null);
  const[submittedValue,setSubmittedValue]=useState(null);
  const[Result,setResult]=useState(null);
  const[error,setError]=useState("");
  const[loadingState,setLoadingState]=useState(false);

  const handleSubmit = () =>{
    setError("");
    const num=Number(number);
    if (number === "" || isNaN(num) || !Number.isInteger(num) || num < 0){
      setLoadingState(true);
      setTimeout(()=>{
      setError("Invalid input!!!");
      setResult("");
      setNumber("");
      setLoadingState(false);})
      return;
    }
    setError("");
    setSubmittedValue(num);
  };

  return (
    <main
        className="h-screen bg-gradient-to-r from-gray-900 to-gray-700 flex items-center justify-center"
    >
      <div className="flex justify-center items-center h-full">
        <header>
          <h1 className="text-teal-200 text-6xl font-bold -mt-70 -ml-40 mb-20">Factorial Calculator</h1>
        </header>
      </div>
      <Search
      number={number}
      setNumber={setNumber}
      submittedValue={submittedValue}
      setResult={setResult}
      setLoadingState={setLoadingState} />
      <button
      onClick={handleSubmit}
      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 -ml-38 -mt-25">
        Calculate
      </button>

      <div className="h-12 flex items-center justify-center">
        {loadingState ?(
          <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin -ml-26"></div>
        ) : error ? (<h2 className="bg-red-700 text-white text-xl -ml-26">{error}
        </h2>):(Result !== null && (<h2 className="bg-violet-700 text-white text-xl -ml-24">
          Result : {Result}
        </h2>)
      )}
      </div>
    </main>
  )
};

export default App