import React from "react";

function DefinitionPrime() {
  return (
    <>
      <div className="definition-prime">
        <h2>Prime numbers:</h2>
        <p>
          These are the points for a number to be justified as a Prime Number
        </p>
        <p>The number must be:</p>

        <ul>
          <li>An integer</li>
          <li>Greater than or equal 2</li>
          <li>Only divisible by 1 and itself</li>
        </ul>
      </div>
    </>
  );
}

export default DefinitionPrime;
