import Header from "../../components/Header";
import Greeting from "../../components/Greeting";
import About from "../../components/About";
import Technologies from "../../components/Technologies";
import BestProjects from "../../components/BestProjects";
import Footer from "../../components/Footer";

const Main = () => (
  <>
    <Header
      pageName="Главная"
      nav_1="Проекты"
      nav_2="Навыки"
      nav_3="Контакты"
    />
    <Greeting />
    <About />
    <Technologies />
    <BestProjects />
    <Footer />
  </>
);

export default Main;
