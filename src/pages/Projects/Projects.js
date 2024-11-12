import Header from "../../components/Header";
import Project from "../../components/Project";
import Footer from "../../components/Footer";

const Projects = () => (
  <>
    <Header 
      pageName="Проекты" 
      nav_1="Главная" 
      nav_2="Навыки" 
      nav_3="Контакты" 
    />
    <main className="container mb-5">
      <section className="my-5" aria-labelledby="work-section">
        <h2 id="work-section" className="fs-3 fw-bold text-secondary">Работа</h2>
        <p className="mt-3 fw-bold">
          Некоторое из проектов, над которыми я работал:
        </p>
      </section>
      <section aria-labelledby="projects-list">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="my-4">
            <Project />
          </div>
        ))}
      </section>
    </main>
    <Footer />
  </>
);

export default Projects;
