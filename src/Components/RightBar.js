import React from "react";
import "./RightBar.css";

const RightBar = () => {
  return (
    <>
      <div className="brandItem">
        <img className="anim" src="./Images/rotate.jpg" alt='Story-flow'></img>
        <div className="about">
          <h1>Story Flow</h1>
          <p>
            "Story Flow is a dynamic news application designed to provide users with a seamless and engaging news reading experience."
          </p>
        </div>
      </div>
    </>
  );
};

export default RightBar;