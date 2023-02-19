import React from "react";
import "../mainComponent/MainComponent.css";

const MainComponent = () => {
  return (
    <div className="infDiv">
      <img src="https://images.wsj.net/im-727416?width=607&height=405&pixel_ratio=2"></img>
      <div className="textInfo">
        <p>U.S. ECONOMY</p>
        <h1>Idaho, Utah Workers Led U.S. in Quitting Jobs</h1>
        <p>
          A robust labor market gave Americans confidence to quit their jobs
          last year, especially in some Western states, while workers in the
          Northeast were more reluctant to turn in resignations.
        </p>
      </div>
    </div>
  );
};

export default MainComponent;
