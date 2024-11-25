import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InputPage from './components/InputPage';
import ConfirmationPage from './components/ConfirmationPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InputPage />} />
        <Route path="/confirm" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
