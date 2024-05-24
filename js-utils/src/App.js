
import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import Textfile from './components/Textfile';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
function App() {
  return (
    <>
    <Navbar title="Text Converter" home="Home" about="About" />
    <div className="container">
      <Textfile heading  = "Scribe"/>
            {/* <About /> */}
    </div>
    </>
  )
}
export default App;
