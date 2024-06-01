import React, { Component } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';


export class Navbar extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.defer = true;
    script.dataset.useServiceCore = true;

    document.body.appendChild(script);
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg custom-navbar" style={{ backgroundColor: '#fb607f' }}>
          <div className="container-fluid" >
            <NavLink className="navbar-brand" to="/" style={{color:'#98EECC'}}>
            HeadLynz
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                <li className="nav-item">
                  <NavLink className="nav-link " to="/sports" style={{color:'#98EECC'}}>
                  Sports
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " to="/entertainment" style={{color:'#98EECC'}}>
                  Entertainment
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/technology" style={{color:'#98EECC'}}>
                  Technology
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/health" style={{color:'#98EECC'}}>
                  Health
                  </NavLink>
                </li>
              </ul>
              <div className="elfsight-app-550dcbc0-5195-4fc9-add7-e6bfc4bb61fb" data-elfsight-app-lazy></div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
