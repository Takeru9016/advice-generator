import React, { useState, useEffect } from "react";
import { images } from "../assets";

const App = () => {
  const [adviceID, setAdviceID] = useState("");
  const [adviceText, setAdviceText] = useState("");

  const getAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdviceID(data.slip.id);
      setAdviceText(data.slip.advice);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAdvice();
  }, [adviceID, adviceText]);

  return (
    <>
      <div className="container">
        <div className="advice-container">
          <p>
            Advice #<span>{adviceID}</span>
          </p>
          <h2>
            "<span>{adviceText}</span>"
          </h2>
          <img src={images.desktop} alt="pattern-divider-desktop" />
          <button className="btn" onClick={() => getAdvice()}>
            <img src={images.dice} />
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
