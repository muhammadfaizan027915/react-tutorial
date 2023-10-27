import Project from "../project";
import "./styles.css";

function Projects({ projectsList }) {
  return (
    <div className="projectsContainer">
      <h1>Projects</h1>
      <div className="projects-listContainer">
        {projectsList.map((project) => {
          return <Project key={project.id} imageUrl={project.imageUrl} projectName={project.projectName} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
