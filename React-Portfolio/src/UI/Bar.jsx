import { FaCode } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import { FaBriefcase } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";

const achievements = [
  { number: 4, title: "Programming languages", icon: <FaCode /> },
  { number: 3, title: "Apps Developed", icon: <FiSmartphone /> },
  { number: 3, title: "Internships Completed", icon: <FaBriefcase /> },
  { number: 1, title: "Award Received", icon: <FaTrophy /> },
];

import { useState } from "react";
import PropTypes from "prop-types";
import { Children } from "react";
import "./Bar.scss";

import "./Bar.scss";

const Bar = (props) => {
  const displayProps = () => {
    const fetchedProps = props.children;
    return fetchedProps[0].props.children;
  };

  return (
    <div className="Bar-Wrapper">
      {achievements.map((achievement, index) => {
        return (
          <div className="Bar-Item" key={index}>
            <h1 className="Object-Number">{achievement.number}</h1>
            <h3 className="Object-Description">{achievement.title}</h3>
            <span className="Object-Icon">{achievement.icon}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Bar;

Bar.propTypes = {
  children: PropTypes.node,
};

// Maybe Break up children into lines and map the lines in a div inside a parent div for flex
// Okay styling didn't work witht the above
// So maybe instead pass information as an object to the child, then put styling in the child component
