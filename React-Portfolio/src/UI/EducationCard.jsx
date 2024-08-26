import PropTypes from "prop-types";
import "./EducationCard.scss";

const EducationCard = (props) => {
  return (
    <div className="Slim-Cards-Wrapper">
      <h3 className="Small-Title">
        {props.icon} {"  "}
        {props.smallTitle}
      </h3>
      <h2 className="Main-Title">{props.mainTitle}</h2>
      <p className="Sub-Description">{props.subDescription}</p>
    </div>
  );
};

export default EducationCard;

EducationCard.propTypes = {
  smallTitle: PropTypes.string,
  mainTitle: PropTypes.string,
  subDescription: PropTypes.string,
  icon: PropTypes.node,
};
