import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home'
import NotFound from './components/Error 404/NotFound'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//Tailwind
import 'tailwindcss/tailwind.css';


function App() {

  function handleScroll (sectionId) { // Agrega el tipo explícito 'string' para sectionId
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 300;
      window.scrollTo({
        top: section.offsetTop + offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="z-50 flex flex-col h-screen w-full">
      <Router>
        <div className="top-0 left-0 right-0 z-50">
          <NavBar  onScroll={handleScroll}/>
        </div>
          
          <Routes>
            <Route path="/" element={<Home/>} />
            {/*<Route path="/" element={}/>*/}
            <Route path="*" element={<NotFound />} />  {/* Ruta de captura para 404 */}
          </Routes>

      </Router>
    </div>
  )
}

export default App
