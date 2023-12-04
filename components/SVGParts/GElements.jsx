import { CloseIcon, LeftArrow } from "@/assets/svgsComponents";
import { Dialog, DialogTitle } from "@mui/material";
import React, { useState } from "react";
import PoetsSlider from "../PoetsSlider";
import { motion, AnimatePresence } from 'framer-motion';
import { imgs } from "@/assets/constants";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const GElements = ({ dataAllCitiesMap, dataAllPlacesMap }) => {
  const { smallCity } = imgs
  const [activeCity, setActiveCity] = useState(null);

  const handleCityClick = cityName => {
    setActiveCity(activeCity === cityName ? null : cityName);
  };


  return (
    <>
      {dataAllCitiesMap?.map((land, index) => (
        <g className="land" key={index} id={land.svgPathId}>
          {land.svgPath && ReactHtmlParser(land.svgPath)}
        </g>
      ))}
      {dataAllPlacesMap.map((city, index) =>
        <foreignObject x={city.svgX} y={city.svgY} width="100" height="100" id="1">
          <div className="city-container" xmlns="http://www.w3.org/1999/xhtml">
            <div onClick={() => handleCityClick(`City${index}`)}
              className={`city-name  ${activeCity === `City${index}` && 'active'}`} id="p1">
              <div>
                <p>{city.name}</p>
                <svg
                  width="15"
                  height="6"
                  viewBox="0 0 15 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.956299 0.882812H14.8405H12.9973C11.8578 0.882812 10.8162 1.52659 10.3066 2.54573L9.14027 4.87844C8.6286 5.90177 7.16825 5.90178 6.65658 4.87844L5.49023 2.54573C4.98065 1.52659 3.939 0.882812 2.79956 0.882812H0.956299Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </foreignObject>
      )}

    </>
  );
};

export default GElements;