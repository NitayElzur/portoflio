import { Link, useLocation } from 'react-router-dom';
import './Header.css'

function Header() {

    const { pathname } = useLocation();
    return (
        <>
            <Link className='links' to='/'>
                {pathname !== '/' &&
                    <span>Home</span>
                }
            </Link>
            <div id="right-side">
                <Link className='links' to='/project'>
                    <span>Projects</span>
                </Link>
                <a className='links' href="https://drive.google.com/file/d/1DKJ3eQGXfikUuGoxwr2vx5jHMubhrK80/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    <span>Resume</span>
                </a>
                <a className='links' href="https://github.com/NitayElzur" target="_blank" rel="noopener noreferrer">
                    <span>Github</span>
                </a>
                <a className='links' href="https://www.linkedin.com/in/nitay-elzur" target="_blank" rel="noopener noreferrer">
                    <span>Linkedin</span>
                </a>
            </div>
        </>
    )
}
export default Header;