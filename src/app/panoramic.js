"use client";
import React, { useState, useEffect } from "react";
import ReactPannellum, { getConfig } from "react-pannellum";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand } from "@fortawesome/free-solid-svg-icons";

const Panoramic = () => {
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false);
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    }, 5000); // 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const click = () => {
    console.log(getConfig("firstScene"));
  };

  const config = {
    autoRotate: -2,
    autoLoad: true,
  };

  const style = {
    width: '90vw',
    height: "80vh",
    background: "#000000"
  };

  return (
    <div className="w-full flex flex-col items-center">
      {(
        <p className="sm:my-2 text-sm my-1 italic text-center text-gray-700 font-light">
          Swipe over the image on mobile devices, or click and drag on desktops to change the view.
        </p>
      )}
      <ReactPannellum
        id="1"
        sceneId="firstScene"
        imageSource="/2.jpg"
        config={config}
        style={style}
        onPanoramaLoaded={() => console.log('cs')}
      />
      <p className="sm:mt-4 mt-2 italic text-center text-gray-700 sm:flex hidden sm:flex-row flex-col items-center ">
        For the best experience, click on 
        <p>
          <span className="inline-flex items-center m-2 ">
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
