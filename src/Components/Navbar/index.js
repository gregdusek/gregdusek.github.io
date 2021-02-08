import './styles.css';
// import { Navbar, Nav } from 'react-bootstrap';
import {Route, Link, Switch} from 'react-router-dom';
import Home from '../Home';
import Skills from '../Skills';
import Projects from '../Projects';
import Experience from '../Experience';
import Contact from '../Contact';


const Navigate = () => {

    return  (
    <div className="Navbar">
            <Link className="links" to="/">Home</Link>
            <Link className="links" to="/Skills">Skills</Link>
            <Link className="links" to="/Experience">Experience</Link>
            <Link className="links" to="/Projects">Projects</Link>
            <Link className="links" to="/Contact">Contact</Link>
        {/* <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Skills' component={Skills} />
          <Route path='/Experience' component={Experience} />
          <Route path='/Projects' component={Projects}/>
          <Route path='/Contact' component={Contact}/>
        </Switch> */}
    </div>
    )
}

export default Navigate;
