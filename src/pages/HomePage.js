import React from "react";
import "./HomePage.css";
import Converter from "../components/Converter";

const HomePage = (props) => {
  return (
    <div className="container">
      <section className="page-section description-section">
        <div className="discription">
          <h1>RomanJI</h1>

          <p>
            Learn Roman numbers by converting latin numbers to Romans and vice
            verca.
          </p>

          <p>Use this website to learn the romans number by example</p>
        </div>
      </section>
      <section className="page-section vertical">
        <Converter />
      </section>
    </div>
  );
};

export default HomePage;
