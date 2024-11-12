import Header from "../../components/Header";
import Form from "../../components/Form";
import Links from "../../components/Links";
import Footer from "../../components/Footer";

const Contacts = () => (
  <>
    <Header 
      pageName="Контакты" 
      nav_1="Главная" 
      nav_2="Проекты" 
      nav_3="Навыки" 
    />
    <div className="container my-5">
      <Form />
      <Links />
    </div>
    <Footer />
  </>
);

export default Contacts;
