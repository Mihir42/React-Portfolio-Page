import PropTypes from "prop-types";
import "./TextBox.scss";

function TextBox(props) {
  return (
    <div className="Title">
      {props.title}
      <div className="Description">{props.children}</div>
    </div>
  );
}

export default TextBox;

TextBox.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
