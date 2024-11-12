const Project = () => (
  <div className="container py-5">
    <div className="row">
      <div className="col-md-6">
        <img
          src="/Portfolio/assets/project.png"
          alt="Скриншот проекта"
          className="img-fluid p-3"
        />
      </div>
      <div className="col-md-6">
        <div className="bg-white p-4">
          <h2>Проект</h2>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="d-flex flex-wrap gap-2">
            {['React', 'Next.js', 'TypeScript', 'Nest.js', 'PostgreSQL', 'Tailwind CSS', 'Figma', 'Git'].map((tech, index) => (
              <span key={index} className="badge bg-secondary">{tech}</span>
            ))}
          </div>
          <a href="#" className="d-block mt-3" aria-label="Посмотреть детали проекта">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 3H21V9" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 14L21 3" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Project;
