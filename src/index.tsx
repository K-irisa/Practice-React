import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import InputPage from './components/InputPage';
import ConfirmationPage from './components/ConfirmationPage';
import { UserContextProvider } from './userContext';

const App = () => {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<InputPage />} />
          <Route path="/confirm" element={<ConfirmationPage />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
