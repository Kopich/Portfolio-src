import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = ({ pageName, nav_1, nav_2, nav_3, activePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="container">
      {/* Верхняя часть с названием и меню для мобильных */}
      <div className="d-flex justify-content-between align-items-center my-4">
        <h1 className="d-md-none mb-0 fs-5 fw-normal">{pageName}</h1>
        <div
          className="d-md-none burger"
          onClick={() => setIsMenuOpen(prev => !prev)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsMenuOpen(prev => !prev);
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Кнопка навигационного меню"
          aria-expanded={isMenuOpen}
        >
          <div className={`bar ${isMenuOpen ? "rotate-45" : ""}`} />
          <div className={`bar ${isMenuOpen ? "opacity-0" : ""}`} />
          <div className={`bar ${isMenuOpen ? "rotate--45" : ""}`} />
        </div>
      </div>

      {/* Мобильное меню с анимацией */}
      <div
        className={`d-md-none mobile-menu ${isMenuOpen ? "open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <nav role="navigation">
          <ul className="nav flex-column">
            {[{ name: nav_1, link: nav_1 === "Проекты" ? "Проекты" : "" }, 
              { name: nav_2, link: nav_2 }, 
              { name: nav_3, link: nav_3 }]
              .map((navItem, index) => (
                <li key={index} className="nav-item border-bottom text-center">
                  <Link 
                    to={`/${navItem.link}`} 
                    className={`nav-link ${activePage === navItem.link ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={activePage === navItem.link ? "page" : undefined}
                    aria-label={`Перейти на ${navItem.name} страницу`}
                  >
                    {navItem.name}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>

      {/* Десктопное меню */}
      <div className="d-none d-md-flex justify-content-between align-items-center">
        <h1 className="mb-0 fs-5 fw-normal">{pageName}</h1>
        <nav role="navigation">
          <ul className="nav flex-row">
            {[{ name: nav_1, link: nav_1 === "Проекты" ? "Проекты" : "" }, 
              { name: nav_2, link: nav_2 }, 
              { name: nav_3, link: nav_3 }]
              .map((navItem, index) => (
                <li key={index} className="nav-item">
                  <Link 
                    to={`/${navItem.link}`} 
                    className={`nav-link ${activePage === navItem.link ? 'active' : ''}`}
                    aria-current={activePage === navItem.link ? "page" : undefined}
                    aria-label={`Перейти на ${navItem.name} страницу`}
                  >
                    {navItem.name}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
