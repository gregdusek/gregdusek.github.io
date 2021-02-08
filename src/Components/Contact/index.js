import './styles.css';

const Contact = () => {
    return  (
        <div id="contact" className="contacts-container">
             <h2 className="contact-heading">
                 Connect with me
            </h2>
                <p className="contact-text">
                    GREG DUSEK
                </p>
                <p className="contact-text ak">
                    Richardson, Texas
                </p>
                <br />
                <span>
                    Send me an email:
                </span>
                <a href='thegregdusek@gmail.com'>
                    <p className="contact-text">
                        thegregdusek@gmail.com
                    </p>
                </a>
                <br />
        </div>
    )
};

export default Contact;