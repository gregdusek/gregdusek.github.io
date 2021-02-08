import './styles.css';
import Card from 'react-bootstrap/Card';
import { CardDeck } from 'react-bootstrap';

const Projects = () => {
    return  (
        <div id="projects" className="projects-container">
            <h1 className='project-heading'> 
                Projects
            </h1>
            <div sm className="project-cards">
                <CardDeck xl className='project-cards'>
                        <Card className='card-card'>
                            <Card.Img className='card-img' variant="top" src="https://res.cloudinary.com/gregdusek/image/upload/c_scale,h_200,w_320/v1612825932/Hopper%20Fly%20Fishing/Screen_Shot_2021-02-08_at_5.10.14_PM_axdj05.png" />
                            <Card.Body className='card-body'>
                                <Card.Title className='card-title'>
                                    GOATflix
                                </Card.Title>
                                <hr/>
                                <Card.Text className='card-text'>
                                    An interactive movie search app utilizing the MovieDB API.  
                                </Card.Text>
                                <hr/>
                                <Card.Link className='link' href='https://goatflix.herokuapp.com/'>
                                    Deployed
                                </Card.Link>
                                <Card.Link className='link' href='https://github.com/gregdusek/FinalProject'>
                                    GitHub
                                </Card.Link>
                            </Card.Body>
                        </Card> 
                </CardDeck>
            </div>              
        </div>
    )
}

export default Projects;