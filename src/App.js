import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import { Page1 } from './Components/Page1';
import Done from './Components/Done';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
       
        <Route path="/done" element={<Done />} />
      </Routes>
    </Router>
  );
}

export default App;