import './App.css';
// import { Navbar, Nav } from 'react-bootstrap';
import {Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Navigate from './Components/Navbar';

function App() {  
  return (
    <div className="App">
    <Navigate />
            {/* <Link className="links" to="/">Home</Link>
            <Link className="links" to="/Skills">Skills</Link>
            <Link className="links" to="/Experience">Experience</Link>
            <Link className="links" to="/Projects">Projects</Link>
            <Link className="links" to="/Contact">Contact</Link> */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Skills' component={Skills} />
          <Route path='/Experience' component={Experience} />
          <Route path='/Projects' component={Projects}/>
          <Route path='/Contact' component={Contact}/>
        </Switch>

    </div>
  );
}

export default App;