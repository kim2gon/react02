import React, { useEffect} from "react";
import MbtiProfile from "./MbtiProfile";

function MbtiResult({storedName,storedMbti}) {
  
    useEffect (()=>{
      fetch('https://raw.githubusercontent.com/seik1224/data-zelda/main/mbti.json')
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        const Data = data
      })
      .catch(err => {
        console.log(err)
      })
        }, []);

    
    return (
      <div className="text-center">
      <div className="relative z-10 flex flex-col items-center justify-center">
        <>
          <img
            className="w-[200px] bg-blend-darken"
            src="/images/entj.jpg"
            alt="Data[i].image"
            />
          <h2
            className="text-2xl font-bold mb-4 px-6 py-2 -mt-10 rounded-full border-[6px] bg-white box-border"
            style={{ borderColor: "black", color: "black" }}
            >
            {storedName}
          </h2>
        </>
      </div>

      <MbtiProfile 
        storedName={storedName}
        storedMbti={storedMbti}
      />
    </div>
  );
}

export default MbtiResult;
