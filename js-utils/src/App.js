
import './App.css';
import Navbar from './components/Navbar';
import Textfile from './components/Textfile'

function App() {
  return (
    <>
    <Navbar title="Text Converter" home="HOME" about="About" />
    <div className="container">
      <Textfile heading  = "Scribe"/>
    </div>
    </>
  )
}

export default App;
