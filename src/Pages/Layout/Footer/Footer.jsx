import './Footer.css'

function Footer() {
    return (
        <div id="footer">
            <div id="contact">
                <div id="title">Contact Me</div>
                <div id="contact-flex">
                    <div className="contact-item">
                        <a href="https://github.com/NitayElzur" target="_blank" rel="noopener noreferrer">
                            Github
                        </a>
                    </div>
                    <div className="contact-item">
                        <a href="https://www.linkedin.com/in/nitay-elzur" target="_blank" rel="noopener noreferrer">
                            Linkedin
                        </a>
                    </div>
                    <div className="contact-item">
                        <a href="https://api.whatsapp.com/send?phone=972587545966" target="_blank" rel="noopener noreferrer">
                            Whatsapp
                        </a>
                    </div>
                    <div className="contact-item">
                        <a href="mailto:elzur.nitay@gmail.com?subject=Portfolio" target="_blank" rel="noopener noreferrer">
                            Email
                        </a>
                    </div>
                    <div className="contact-item"></div>
                </div>
            </div>
        </div>
    )
}
export default Footer;