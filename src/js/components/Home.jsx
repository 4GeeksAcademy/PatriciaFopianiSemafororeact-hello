import React, { useState } from "react";

const Home = () => {
  const [activeLight, setActiveLight] = useState("red");

  return (
    <div className="traffic">
      <div className="traffic-light">
        <div
          className={`light red ${activeLight === "red" ? "active" : ""}`}
          onClick={() => setActiveLight("red")}
        ></div>
        <div
          className={`light yellow ${activeLight === "yellow" ? "active" : ""}`}
          onClick={() => setActiveLight("yellow")}
        ></div>
        <div
          className={`light green ${activeLight === "green" ? "active" : ""}`}
          onClick={() => setActiveLight("green")}
        ></div>
      </div>
    </div>
  );
};

export default Home;
