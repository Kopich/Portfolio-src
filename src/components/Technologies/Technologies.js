import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/autoplay";
import "./style.css";

const techIcons = [
  { src: "/Portfolio/assets/js.png", alt: "JavaScript лого" },
  { src: "/Portfolio/assets/ts.png", alt: "TypeScript лого" },
  { src: "/Portfolio/assets/react.png", alt: "React лого" },
  { src: "/Portfolio/assets/nodejs.png", alt: "Node.js лого" },
  { src: "/Portfolio/assets/sass.png", alt: "Sass лого" },
  { src: "/Portfolio/assets/tailwind.png", alt: "Tailwind CSS лого" },
  { src: "/Portfolio/assets/figma.png", alt: "Figma лого" },
  { src: "/Portfolio/assets/git.png", alt: "Git лого" },
];

const Technologies = () => (
  <div className="container mb-5">
    <div className="my-5">
      <h2 className="fs-3 fw-bold text-secondary">Навыки</h2>
      <p className="mt-3 fw-bold">
        Навыки, инструменты и технологии в которых я действительно хорош:
      </p>
    </div>
    <Swiper
      modules={[Autoplay]}
      spaceBetween={10}
      slidesPerView={3}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop
      aria-live="polite"
      aria-label="Карусель технологий"
    >
      {techIcons.map(({ src, alt }, index) => (
        <SwiperSlide key={index} className="d-flex justify-content-center align-items-center">
          <img
            src={src}
            alt={alt}
            className="tech-icon"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default Technologies;
