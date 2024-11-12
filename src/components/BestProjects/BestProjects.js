import BestProject from "../BestProject";

const BestProjects = () => (
  <div className="container mb-5">
    <section aria-labelledby="best-projects-title">
      <div className="my-5">
        <h2 id="best-projects-title" className="fs-3 fw-bold text-secondary">
          Лучшие проекты
        </h2>
        <p className="mt-3 fw-bold">
          Вот одни из лучших проектов, над которыми я работал:
        </p>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col" role="listitem">
          <BestProject />
        </div>
        <div className="col" role="listitem">
          <BestProject />
        </div>
      </div>
    </section>
  </div>
);

export default BestProjects;
