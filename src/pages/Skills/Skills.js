import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import Header from "../../components/Header";
import Skill from "../../components/Skill";
import Project from "../../components/Project";
import "swiper/css";
import "swiper/css/autoplay";

const skills = [
  { src: "/Portfolio/assets/js.png", alt: "JavaScript лого" },
  { src: "/Portfolio/assets/ts.png", alt: "TypeScript лого" },
  { src: "/Portfolio/assets/react.png", alt: "React лого" },
  { src: "/Portfolio/assets/nodejs.png", alt: "Node.js лого" },
  { src: "/Portfolio/assets/sass.png", alt: "Sass лого" },
  { src: "/Portfolio/assets/tailwind.png", alt: "Tailwind CSS лого" },
  { src: "/Portfolio/assets/figma.png", alt: "Figma лого" },
  { src: "/Portfolio/assets/git.png", alt: "Git лого" },
];

const Skills = () => (
  <>
    <Header 
      pageName="Навыки" 
      nav_1="Главная" 
      nav_2="Проекты" 
      nav_3="Контакты" 
    />
    <main>
      <section className="container my-5">
        <h2 className="fs-3 fw-bold text-secondary">Навыки</h2>
        <p className="mt-3 fw-bold">Список технологий, которыми я владею:</p>
        <div className="row">
          {skills.map(({ src, alt }, index) => (
            <div key={index} className="col-12 col-md-6">
              <Skill src={src} altText={alt} />
            </div>
          ))}
        </div>
      </section>
      <section aria-live="polite" aria-label="Проекты">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {[...Array(3)].map((_, index) => (
            <SwiperSlide key={index} className="d-flex justify-content-center align-items-center">
              <Project />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  </>
);

export default Skills;
