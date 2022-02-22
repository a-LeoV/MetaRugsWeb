import React from "react";
import "../styles/home.css";
import movie from "../../vedio/movie.mp4";

const FirstStartUp = () => {
  return (
    <>
     
        <div className="startup" data-aos="fade-up">
          <h1>
            Welcome MetaRugged <span className="startup_blue">fellas</span>
          </h1>
          <h2>
            Our landing page template works on all devices, so you only have to
            set it up once, and get beautiful results forever.
          </h2>
          <div className="button_group">
            <button className="blue">Get started</button>
            <button className="gray">View on Github</button>
          </div>

          <video className="vedio" controls>
            <source src={movie} type="video/mp4" />
          </video>
        </div>
     
    </>
  );
};

export default FirstStartUp;
