/* eslint-disable react-hooks/exhaustive-deps */
import './LandingPage.css';
import Jumbotron from './components/Jumbotron';
import About from './components/About';
import Services from './components/Services';
import FAQ from './components/FAQ';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LandingPage = () => {
  const navigate = useNavigate();
  let verifyLogin = localStorage.getItem('user-info');

  useEffect(() => {
    if (verifyLogin) {
      navigate('/home');
    }
  }, []);

  return (
    <>
      <header>
        <Jumbotron />
      </header>
      <main>
        <About />
        <Services />
        <FAQ />
      </main>
    </>
  );
};

export default LandingPage;
