import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Question from './components/Questionpage/Question';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Question' element={<Question />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
