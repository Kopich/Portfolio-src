import { Routes, Route } from "react-router-dom";
import Main from "../../pages/Main";
import Projects from "../../pages/Projects";
import Skills from "../../pages/Skills";
import Contacts from "../../pages/Contacts";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Проекты" element={<Projects />} />
        <Route path="/Навыки" element={<Skills />} />
        <Route path="/Контакты" element={<Contacts />} />
      </Routes>
    </div>
   
  );
}

export default App;
