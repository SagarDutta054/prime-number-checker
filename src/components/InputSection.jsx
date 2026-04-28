import React, { useEffect, useState } from "react";
import AnswerSection from "./AnswerSection";
import DefinitionPrime from "./DefinitionPrime";

function InputSection() {
  const [inputNum, setInputNum] = useState("");
  const handleInput = (e) => {
    setInputNum(e.target.value);
    console.log(e.target.value);
  };
  // useEffect(()=>{
  //   handleInput();
  // },[inputNum]);
  return (
    <>
      <div className="input-section">
        <input
          value={inputNum}
          onChange={(e) => {
            handleInput(e);
          }}
          type="number"
          placeholder="Enter a number..."
        />
      </div>
      {inputNum ? <AnswerSection num={inputNum} /> : <DefinitionPrime />}
    </>
  );
}

export default InputSection;
