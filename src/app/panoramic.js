"use client"
import React from "react";
import ReactPannellum, { getConfig } from "react-pannellum";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";
const Panoramic = () => {
  const click = () => {
    console.log(getConfig("firstScene"));
  };

  const config = {
    autoRotate: -2,
    autoLoad: true,
  };
  const style ={
    width: '90vw' ,
    height: "80vh",
    background: "#000000"

  }
  return (
    <div className="w-full flex flex-col items-center">
        <p className="sm:my-4  my-2 italic text-center text-gray-700 font-light">
        Swipe on mobile devices or click and drag on desktops to change the view.
      </p>
      <ReactPannellum
        id="1"
        sceneId="firstScene"
        imageSource="/2.jpg"
        config={config}
        style={style}
      />
        <p className="sm:mt-4 mt-2 italic text-center text-gray-700 flex sm:flex-row flex-col items-center">
        For the best experience, click on 
       
       <p> <span className="inline-flex items-center m-2">
          <FontAwesomeIcon icon={faExpand} />
        </span>
        full-screen icon for full width and maximum view.
        </p>
      </p>
      {/* <div onClick={click}>Click me</div> */}
    </div>
  );
};

export default Panoramic;
