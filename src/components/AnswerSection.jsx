import React, { useEffect, useState } from "react";
import DetailedAnswer from "./DetailedAnswer";
import OpenButton from "./OpenButton";
import CloseButton from "./CloseButton";

function AnswerSection({ num }) {
  const [prime, setPrime] = useState("");
  const [reason, setReason] = useState([]);
  const [description, setDescription] = useState(false);

  const checkPrime = (n) => {
    let rawAnswer = [];
    let flag = 'Prime';
    if (n < 2) {
      flag = false;
      setPrime("Neither Prime nor Composite");
      console.log(flag);
      // let sl = 1;
      let index_val = "";
      let analysis = `${n} is less than 2`;
      let decision = `${n} is neither prime nor composite`;
      rawAnswer.push({ index_val, analysis, decision });
      setReason(rawAnswer);
      console.log(rawAnswer);
      return;
    }
    if (n == 2 || n == 3) {
      flag = true;
      setPrime("Prime");
      let index_val = "";
      let analysis = `${n} is only divisible by 1 and ${n}`;
      let decision = `${n} is a Prime number.`;
      rawAnswer.push({ index_val, analysis, decision });
      setReason(rawAnswer);
      console.log(rawAnswer);
      return;
    }
    const upperLimit = Math.floor(n / 2);
    console.log(upperLimit);
    for (let i = 2; i <= upperLimit; i++) {
      let indicator = n % i;
      let index_val = `${i}`;
      let analysis = `${n} % ${i} = ${n % i}`;
      let decision = { indicator } ? `Going to check next index` : `Prime Number`;
      if (indicator == 0) {
        decision = `${n} is a Composite number`;
      }
      if (indicator != 0 && i == upperLimit) {
        decision = `No number can be found other than 1 and ${n} which makes ${n} % num = 0. Therefore, ${n} is a Prime number`;
      }
      rawAnswer.push({ index_val, analysis, decision });

      console.log(rawAnswer);
      if (indicator == 0) {
        flag = "Composite";
        break;
      }
    }
    setReason(rawAnswer);
    console.log(flag);
    setPrime(flag);
    return;
  };
  useEffect(() => {
    checkPrime(num);
  }, [num]);
  return (
    <>
      <div className="answer-section">
        <div className="left">
          {prime}
        </div>
        <div className="right">
          {/* Open / Close button to be Added */}
          {description ? (
            <CloseButton
              description={description}
              clickHandler={setDescription}
            />
          ) : (
            <OpenButton
              description={description}
              clickHandler={setDescription}
            />
          )}
        </div>
      </div>
      <DetailedAnswer
        status={prime}
        description={description}
        reason={reason}
      />
    </>
  );
}

export default AnswerSection;
