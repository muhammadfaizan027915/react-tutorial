import "./styles.css";

function Project({ imageUrl, projectName }) {
  return (
    <div className="projectContainer">
      <img src={imageUrl} className="projectImage" />
      <span className="projectName">{projectName}</span>
    </div>
  );
}

export default Project;
