// Array of objects containing quotes
// Use a handler that is called when two buttons are pressed
// It will fetch a object based of index count
// Count increased when right arrow is selected
// Count is descresed when left arrow is selected
// Count must stay between 0 and last index
// Handler returns the object from array
// Html is then used to format the quote

import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import QuoteIcon from "../assets/Icon-quote-left.png";
import "./Caraousel.scss";
import { useEffect, useState } from "react";

const Caraousel = (props) => {
  const objectOfRecomendations = props.recomendationsList;
  const [selectedRecomendation, setSelectedRecomendation] = useState(
    objectOfRecomendations[0]
  );

  const handleScroll = (arrow) => {
    const index = selectedRecomendation.index;
    console.log(index);
    if (arrow == "Right" && index + 1 <= objectOfRecomendations.length - 1) {
      console.log(objectOfRecomendations[index + 1]);
      setSelectedRecomendation(objectOfRecomendations[index + 1]);
    } else if (arrow == "Left" && index > 0) {
      console.log(objectOfRecomendations[index - 1]);
      setSelectedRecomendation(objectOfRecomendations[index - 1]);
    }
  };

  return (
    <div className="Caraousel-Container">
      <div className="Caraousel-Quote-Icon">
        <img className="Icon" src={QuoteIcon}></img>
      </div>
      <div className="Caraousel-Quote-Description">
        <button
          className="Caraousel-Right-Arrow"
          onClick={() => {
            handleScroll("Right");
          }}
        >
          <FaArrowRight />
        </button>
        <button
          className="Caraousel-Left-Arrow"
          onClick={() => handleScroll("Left")}
        >
          <FaArrowLeft />
        </button>
        <p className="Caraousel-Description">
          {selectedRecomendation.description}
        </p>
      </div>
      <div className="Caraousel-Person-Job">
        <p className="Caraousel-Person-Name">{selectedRecomendation.name}</p>
        <p className="Caraousel-Job-Title">{selectedRecomendation.jobTitle}</p>
      </div>
    </div>
  );
};

export default Caraousel;

Caraousel.propTypes = {
  recomendationsList: PropTypes.array,
  children: PropTypes.node,
};
