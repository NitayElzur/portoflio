import { Link, useLocation } from 'react-router-dom';
import './Header.css'

function Header() {

    const { pathname } = useLocation();
    return (
        <>
            <Link to='/'>
                {pathname !== '/' &&
                    <div>Home</div>
                }
            </Link>
            <div id="right-side">
                <Link to='/project'>
                    <span>Projects</span>
                </Link>
                <a href="https://drive.google.com/file/d/1W_iG_ss2b_0WTFhiQfUHy4HjKAHP_bQ4/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <span>Resume</span>
                </a>
                <a href="https://github.com/NitayElzur" target="_blank" rel="noopener noreferrer">
                    <span>Github</span>
                </a>
                <a href="https://www.linkedin.com/in/nitay-elzur" target="_blank" rel="noopener noreferrer">
                    <span>Linkedin</span>
                </a>
            </div>
        </>
    )
}
export default Header;