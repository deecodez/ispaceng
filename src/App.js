
import './App.css';
import { Fragment , useEffect} from 'react';
import {Home} from './Home';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Projects } from './component/Pages/Projects/Projects';
import { Services } from './component/Pages/Services/Services';
import { AboutUs } from './component/Pages/About Us/AboutUs';
import { HelmetProvider } from 'react-helmet-async';
import Partner from './component/Pages/Partner/Partner';

const ScrollToTop = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unlisten = navigate.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [navigate]);

  return null;
};

function App() { 
  return (
    <HelmetProvider>
      <Fragment>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/service' element={<Services />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/partner' element={<Partner />} />
          </Routes>
        </Router>
      </Fragment>
    </HelmetProvider>
  );
}

export default App;
