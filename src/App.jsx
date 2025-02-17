import { useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";
import './App.css'
import Navigate from './components/Navigate';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import Popup from './components/Popup';
import About from './components/About';

function App() {
  const { project } = useSelector((state) => state.project);
  const { t, i18n } = useTranslation();

  return (
    <main className="flex flex-col mx-auto bg-myGreen text-myGray dark:bg-slate-900 dark:text-white">
      <p>{t("select_language")}</p>
      <button onClick={() => i18n.changeLanguage("en")}>English</button>
      <button onClick={() => i18n.changeLanguage("es")}>Español</button>
      <About />
      <Navigate />      
      <Projects />
      <Skills />
      <ContactForm />
      {project !== null && <Popup />}
    </main>
  )
}

export default App
