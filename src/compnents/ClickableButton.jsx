import React, { useState } from "react";

function ClickableButton() {
  const [touches, setTouches] = useState(0);

  const handleButtonTouched = (event) => {
    setTouches(event.changedTouches.length + touches);
  };

  return (
    <>
      <h1 className="text-white">{touches}</h1>
      <div
        onTouchEnd={handleButtonTouched}
        id="logo"
        className="circle-button "
      >
        <img src={require("../images/logo.png")} />
      </div>
    </>
  );
}

export default ClickableButton;
