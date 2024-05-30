// import React, { Component } from "react";
// import './Navbar.css'; 

// export class Navbar extends Component {
//   render() {
//     return (
//       <div>
//         <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#fb607f', color: 'black' }}>
//           <div className="container-fluid">
//             <a className="navbar-brand" href="/">
//               NewsMoMMy
//             </a>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div
//               className="collapse navbar-collapse"
//               id="navbarSupportedContent"
//             >
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                   <a
//                     className="nav-link active"
//                     aria-current="page"
//                     href="/home"
//                   >
//                     Home
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="/about">
//                     About
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//     );
//   }
// }

// export default Navbar;
// import React, { Component } from "react";
// import './Navbar.css'; 

// export class Navbar extends Component {
//   render() {
//     return (
//       <div>
//         <nav className="navbar navbar-expand-lg custom-navbar" style={{ backgroundColor: '#fb607f', color: 'black' }}>
//           <div className="container-fluid">
//             <a className="navbar-brand" href="/">
//               NewsMoMMy
//             </a>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarSupportedContent"
//               aria-controls="navbarSupportedContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div
//               className="collapse navbar-collapse"
//               id="navbarSupportedContent"
//             >
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                   <a
//                     className="nav-link active"
//                     aria-current="page"
//                     href="/home"
//                   >
//                     Home
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a className="nav-link" href="/about">
//                     About
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>
//       </div>
//     );
//   }
// }

// export default Navbar;

import React, { Component } from 'react';
import './Navbar.css';

export class Navbar extends Component {
  componentDidMount() {
    // Create a script element
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.defer = true;
    script.dataset.useServiceCore = true;

    // Append the script to the document body
    document.body.appendChild(script);
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg custom-navbar" style={{ backgroundColor: '#fb607f', color: 'black' }}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsMoMMy
            </a>
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">
                    About
                  </a>
                </li>
              </ul>
              <div className="elfsight-app-550dcbc0-5195-4fc9-add7-e6bfc4bb61fb" data-elfsight-app-lazy></div>
            </div>
          </div>
        </nav>
        {/* Elfsight widget */}
        {/* <div className="elfsight-app-550dcbc0-5195-4fc9-add7-e6bfc4bb61fb" data-elfsight-app-lazy></div> */}
      </div>
    );
  }
}

export default Navbar;
