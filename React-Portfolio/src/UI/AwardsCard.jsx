import PropTypes from "prop-types";

import "./AwardsCard.scss";

const AwardsCard = (props) => {
  return (
    <div className="AwardsCard-Wrapper">
      <div className="AwardsCard-Left">
        <h3 className="AwardsCard-Small-Title">
          {props.icon} {props.smallTitle}
        </h3>
        <h2 className="AwardsCard-Main-Title">{props.mainTitle}</h2>
      </div>
      <div className="AwardsCard-Right">
        <p className="Description">{props.description}</p>
      </div>
    </div>
  );
};

export default AwardsCard;

AwardsCard.propTypes = {
  smallTitle: PropTypes.string,
  mainTitle: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.node,
};
