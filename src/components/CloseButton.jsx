import React from "react";

function CloseButton({clickHandler,description}) {
  return (
    <>
      <div
        className="circular-btn"
        onClick={() => {
            clickHandler(!description);
        }}
      >
        <div className="l-close"></div>
        <div className="r-close"></div>
      </div>
    </>
  );
}

export default CloseButton;
