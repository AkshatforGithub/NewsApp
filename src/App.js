import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div style={{overflowX: 'hidden'}}>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={9} country="in" category="general" />} />
            <Route exact path="/sports" element={<News key="sports" pageSize={9} country="in" category="sports" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={9} country="in" category="entertainment" />} />
            <Route exact path="/technology" element={<News key="technology" pageSize={9} country="in" category="technology" />} />
            <Route exact path="/health" element={<News key="health" pageSize={9} country="in" category="health" />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
