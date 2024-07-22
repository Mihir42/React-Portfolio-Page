import { useState } from "react";
import PropTypes from "prop-types";
import "./Accordion.scss";

const Accordion = (props) => {
  // Initialisation -----------------------------
  // State --------------------------------------
  const [selected, setSelected] = useState(null);
  const [index] = useState(0);
  // Context ------------------------------------
  // Methods ------------------------------------
  const toggle = (index) => {
    if (selected == index) {
      return setSelected(null);
    }
    setSelected(index);
  };
  // View ---------------------------------------
  return (
    <div className="accordion" onClick={() => toggle(index)}>
      <div className="title">{props.title}</div>
      <span className="toggle">{selected == index ? "▼" : "◀"}</span>
      <div
        className={
          selected == index
            ? "additional-information-show"
            : "additional-information"
        }
      >
        <div className="basement">{props.children}</div>
      </div>
    </div>
  );
};

export default Accordion;

Accordion.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.node,
};
