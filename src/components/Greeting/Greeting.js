import "./style.css";

const Greeting = () => (
  <div className="container mb-5">
    <div className="d-flex flex-column flex-md-row align-items-center my-5">
      <div className="me-md-4 mb-4 mb-md-0 text-center text-md-start">
        <h2 className="fs-3 fw-bold" tabIndex={0}>
          Привет, я Алексей 👋
        </h2>
        <p className="mt-3">
          Эта страница сделана для задания по курсу "Верстка CSS и программирование на языке JavaScript". При создании использовались такие языки программирования и разметки, как JavaScript, HTML, стили CSS, а также фреймворки React JS и Bootstrap. Примерно так выглядело бы моё портфолио.
        </p>
      </div>
      <div className="position-relative">
        <div className="photo-background" />
        <img
          src="/Portfolio/assets/photo-1.jpg"
          alt="Фото Алексея"
          className="photo-img rounded-3 shadow border-2 border-white"
          aria-hidden="false"
        />
      </div>
    </div>
    <div className="d-flex align-items-center mb-2">
      <img 
        src="/Portfolio/assets/location-icon.png" 
        alt="Иконка локации" 
        className="icon"
        role="presentation"
      />
      <p className="mb-0">Калининград, Россия</p>
    </div>
    <div className="d-flex align-items-center mb-4">
      <img 
        src="/Portfolio/assets/green-dot.png" 
        alt="Онлайн иконка" 
        className="icon"
        role="presentation"
      />
      <p className="mb-0">Открыт для новых проектов</p>
    </div>
    <div className="d-flex align-items-center">
      <a 
        href="https://github.com/Kopich" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Профиль GitHub"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
          <path d="M15 22V18C15.1392 16.7473 14.78 15.4901 14 14.5C17 14.5 20 12.5 20 9C20.08 7.75 19.73 6.52 19 5.5C19.28 4.35 19.28 3.15 19 2C19 2 18 2 16 3.5C13.36 3 10.64 3 8.00004 3.5C6.00004 2 5.00004 2 5.00004 2C4.70004 3.15 4.70004 4.35 5.00004 5.5C4.27191 6.51588 3.91851 7.75279 4.00004 9C4.00004 12.5 7.00004 14.5 10 14.5C9.61004 14.99 9.32004 15.55 9.15004 16.15C8.98004 16.75 8.93004 17.38 9.00004 18V22" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 18C4.49 20 4 16 2 16" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </div>
  </div>
);

export default Greeting;
