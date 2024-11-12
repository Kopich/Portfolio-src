const BestProject = () => (
  <div className="col">
    <div className="card shadow-sm border-0 rounded-3" role="region" aria-labelledby="project-title">
      <img
        src="/Portfolio/assets/project.png"
        alt="Картинка проекта"
        className="card-img-top rounded-3 mx-auto d-block"
        style={{ objectFit: "contain", maxWidth: "50%" }}
        aria-describedby="project-description"
      />
      <div className="card-body">
        <h5 id="project-title" className="card-title text-center">Проект</h5>
        <p id="project-description" className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  </div>
);

export default BestProject;
