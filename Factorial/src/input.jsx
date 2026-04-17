import React, { useEffect, useState } from "react";

const Search = ({number,setNumber,submittedValue,setResult,setLoadingState}) => {
    useEffect(()=>{
        if(submittedValue!=null){

          const fetchFactorial = async () =>{
            setLoadingState(true);

            try{
              const response=await fetch("https://factorial-app-p53m.onrender.com/factorial",{
                method:"POST",
                headers:{
                  "Content-Type":"application/json",
                },
                body:JSON.stringify({number:submittedValue}),
                });
              const data=await response.json();
              if (data.result!=undefined){
                setResult(data.result);
              } else{
                setResult(data.error || "error")
              }

              setResult(data.result);
            }
            catch(error){
              console.error(error);
              setResult("Error fetching data");
            }

            setLoadingState(false);
            setNumber("");
            };
          fetchFactorial(); 
        }
    },[submittedValue])
  return (
    <div className="bg-cyan-100 p-3 rounded-xl shadow-lg border border-gray-600 text-center -ml-100 -mt-10 mb-50">
      
      <input
        type="text"
        placeholder="Enter number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="p-1 rounded-lg w-full text-center outline-none"
      />
    </div>
  );
};
export default Search;
