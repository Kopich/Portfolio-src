import "./style.css";

const About = () => (
  <div className="container my-4">
    <section className="d-flex flex-column flex-md-row align-items-center align-items-md-start">
      <div className="position-relative mb-4 mb-md-0">
        <div className="photo-background" />
        <img
          src="/Portfolio/assets/photo-2.jpg"
          alt="Фото Алексея"
          className="rounded-3 shadow me-md-4 border border-white photo-img"
        />
      </div>
      <div className="text-center text-md-start">
        <header>
          <h2 className="fs-3 fw-bold text-secondary">Обо мне</h2>
        </header>
        <article className="mb-3">
          <p>
            Я окончил Балтийский федеральный университет имени Иммануила Канта по направлению "Техническое обслуживание средств вычислительной техники и компьютерных сетей", а также Московский финансово-промышленный университет «Синергия» по направлению "Прикладная информатика".
          </p>
          <p>
            За моими плечами более 7 лет продуктивной работы, связанной с системным администрированием и технической поддержкой.
          </p>
          <p>
            В данный момент я развиваюсь в направлениях DevOps и Frontend.
          </p>
        </article>
        <div className="row mt-4">
          <div className="col-md-6">
            <ul className="styled-list" role="list">
              <li role="listitem">Lorem ipsum</li>
              <li role="listitem">Dolor sit amet</li>
              <li role="listitem">Consectetur adipiscing elit</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="styled-list" role="list">
              <li role="listitem">Lorem ipsum</li>
              <li role="listitem">Dolor sit amet</li>
              <li role="listitem">Consectetur adipiscing elit</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default About;
