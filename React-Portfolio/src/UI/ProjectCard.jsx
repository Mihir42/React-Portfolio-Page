import PropTypes from "prop-types";
import "./ProjectCard.scss";

const ProjectCard = (props) => {
  return (
    <div className="Card-Wrapper">
      <div className="Card-Content">{props.children}</div>
      <div className="Card-Title">{props.title}</div>
      <div className="Card-Description">{props.description}</div>
    </div>
  );
};

export default ProjectCard;

ProjectCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};
