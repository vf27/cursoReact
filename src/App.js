import logo from './logo.svg';
import './App.css';
// eslint-disable-next-line no-unused-vars
import Welcome from './components/Welcome';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import Contact from './pages/Contact';
// eslint-disable-next-line no-unused-vars
import AboutMe from './pages/AboutMe';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Router>
         <div>
          <ul>
            <li>
              <Link to ="/">Home</Link>
            </li>
            <li>
            <Link to ="/contact">Contacto</Link>
            </li>
            <li>
            <Link to ="/about-me">AboutMe</Link>
            </li>
          </ul>
         </div>
         <Routes>
           <Route path ="contact" element = {<Contact/>}/>
           <Route path ="about-me" element = {<AboutMe/>}/>
         </Routes>
       </Router>
      </header>
    </div>
  );
}


export default App;
