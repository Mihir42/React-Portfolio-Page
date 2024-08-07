import PropTypes from "prop-types";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";

import "./Card.scss";

const Card = (props) => {
  return (
    <div className="Card">
      <img className="Card-Image" src={props.image}></img>
      <h2 className="Card-ImageTitle">{props.imageTitle}</h2>
      <p className="Card-HashTag">{props.hashtag}</p>
      <h2 className="Card-Title">{props.title}</h2>
      <p className="Card-Description">{props.description}</p>
      <button className="Card-Button">
        View case study
        <BiSolidRightTopArrowCircle className="Right-ArrowIcon" />
      </button>
    </div>
  );
};

export default Card;

Card.propTypes = {
  hashtag: PropTypes.string,
  imageTitle: PropTypes.string,
  image: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  buttonName: PropTypes.string,
  children: PropTypes.node,
};
