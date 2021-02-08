import './styles.css';
import Jumbotron from 'react-bootstrap/Jumbotron';


const Experience = () => {
    

    return (
        <div id="experience" className="xp-container">
            <h1 className='xp-heading'>Experience</h1>
         
            <div className="resume">
                <div className="box">
                
                <p>
                    Download and view my resume
                </p>
                </div>
                <div className="box">

                <a href="https://drive.google.com/file/d/1bKbnskwoanfL6eTC__i1bboRbY3nrR7Q/view?usp=sharing" target="blank">
                    <img alt='resume thumbnail' src="https://res.cloudinary.com/gregdusek/image/upload/c_thumb,g_face,w_125/v1612823148/Hopper%20Fly%20Fishing/resume_gepssp.png"/>
                </a>
                </div>
            </div>
            <hr/>
            
            <div className="linkedin">
                <div className="box">
                    <a href="http://linkedin.com/in/gregdusek" target='blank'>
                        <img src="https://res.cloudinary.com/gregdusek/image/upload/c_thumb,w_140,g_face/v1612823281/Hopper%20Fly%20Fishing/linkedin-original_iufjzb.svg" alt=""/>
                    </a>
                </div>
                <div className="box">
                {/* <a href="http://linkedin.com/in/gregdusek" target='blank'> */}
                    <p>
                        Connect with me on LinkedIn
                    </p>
                {/* </a> */}
                </div>
            </div>
           
            <hr/>
            <div className="github">
                <div className="box">
                    <p>
                        Check-out my repositories on Github
                    </p>
                </div>
                <div className="box">
                    <a href="http://github.com/gregdusek" target='blank'>
                    <img src="https://res.cloudinary.com/gregdusek/image/upload/c_thumb,w_150,g_face/v1612823239/Hopper%20Fly%20Fishing/GitHub-logo_n11nwc.png" alt="" />
                    </a>
                </div>
            </div>
       
        </div>      
    ) 
};


export default Experience;
