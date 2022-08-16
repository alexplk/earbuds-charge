import React, { useState } from "react";
import "./animation.css";

export function Animation() {
  const [animationStyle, setAnimationStyle] = useState("off");
  function animate(name: string) {
    setAnimationStyle("");
    setTimeout(() => setAnimationStyle(name), 0);
    setTimeout(() => setAnimationStyle("off"), 2000);
  }

  return (
    <>
      <h1>Earbuds charge indicator</h1>

      <div className="root">
        <div className={"dots " + animationStyle}>
          <div className="dot1"></div>
          <div className="dot2"></div>
          <div className="dot3"></div>
        </div>
      </div>

      <div className="toolbar">
        <button onClick={() => animate("lr100")}>Buds 100%</button>
        <button onClick={() => animate("l20-r90")}>Buds 20% 90%</button>
        <button onClick={() => animate("l50-r2")}>Buds 50% 2%</button>
        <br />
        <button onClick={() => animate("lr100-case50")}>
          Buds 100% Case 50%
        </button>
        <button onClick={() => animate("l30-r40-case80")}>
          Buds 30% 40% Case 80%
        </button>
      </div>
    </>
  );
}
