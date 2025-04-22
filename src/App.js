import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BootstrapSite from './components/BootstrapVersion';
// import TailwindSite from './components/TailwindVersion';
import AntDesignSite from './components/AntDesignVersion';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL} >
      <Routes>
        <Route path="/" element={<BootstrapSite />} />
        <Route path="/antdisignversion" element={<AntDesignSite />} />
      </Routes>
    </Router>
  );
}

export default App;
