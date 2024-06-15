import React, { useEffect, useRef, useState } from "react";
import Hammer from "hammerjs";

function ClickableButton() {
  const [touches, setTouches] = useState(0);

  const buttonRef = useRef(null);
  const hammerRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    hammerRef.current = new Hammer(button);

    hammerRef.current.on("tap", (event) => {
      setTouches(touches + event.tapCount);
    });

    // hammerRef.current.on("press", (event) => {
    //   console.log("Press event detected!");
    // });

    // hammerRef.current.on("release", (event) => {
    //   console.log("Release event detected!");
    // });
  }, []);

  return (
    <>
      <h1 className="text-white">{touches}</h1>
      <div ref={buttonRef} id="logo" className="circle-button ">
        <img src={require("../images/logo.png")} />
      </div>
    </>
  );
}

export default ClickableButton;
