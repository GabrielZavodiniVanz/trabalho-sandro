import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../src/pages/LandingPage';
import Cadastro from '../src/pages/Cadastro';
import Header from './components/Header'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
};

export default App;