import { useSelector } from 'react-redux';
import './App.css'
import Navigate from './components/Navigate';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ContactForm from './components/ContactForm';
import Popup from './components/Popup';
import About from './components/About';

function App() {
  const { project } = useSelector((state) => state.project);

  return (
    <main className="flex flex-col mx-auto bg-myGreen text-myGray dark:bg-slate-900 dark:text-white">
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
