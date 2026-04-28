import React from "react";

function OpenButton({ clickHandler, description }) {
  return (
    <>
      <div
        className="circular-btn"
        onClick={() => {
          clickHandler(!description);
        }}
      >
        <div className="l-open"></div>
        <div className="r-open"></div>
      </div>
    </>
  );
}

export default OpenButton;
