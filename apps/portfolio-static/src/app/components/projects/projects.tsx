import './projects.module.scss';

/* eslint-disable-next-line */
export interface ProjectsProps {}

export function Projects(props: ProjectsProps) {
  return (
    <div className="row justify-content-around flex-wrap">
      <h1 className="col-12">Welcome to projects!</h1>
      <div className="project-block">CI Playground: HTML/CSS/JS</div>
      <div className="project-block"></div>
      <div className="project-block"></div>
      <div className="project-block"></div>
      <div className="project-block"></div>
      <div className="project-block"></div>
      <div className="project-block"></div>
      <div className="project-block"></div>
    </div>
  );
}

export default Projects;
