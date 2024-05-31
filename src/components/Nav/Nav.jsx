import { useState } from 'react';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Nav() {
    const [sidebarActive, setSidebarActive] = useState(false);
    const [activeLink, setActiveLink] = useState(null);

    const toggleSidebar = () => {
        setSidebarActive(!sidebarActive);
    };

    const handleLinkClick = (index) => {
        setActiveLink(index);
    };

    const links = [
        { href: '#home', text: 'Home' },
        { href: '#services', text: 'Services' },
        { href: '#portfolio', text: 'Portfolio' },
        { href: '#clients', text: 'Clients & Partners' },
        { href: '#host', text: 'About us' },
        { href: '#footer', text: "Let's Talk" }
    ];

    return (
        <>
            <div className="nav">
                <div className="logo">
                    <img src="https://www.focal-x.com/assets/img/home/logo.svg" alt="focal-x" />
                    <h1>Digital marketing agency</h1>
                </div>
                <ul className="links">
                    {links.map((link, index) => (
                        <li key={index}><a href={link.href}>{link.text}</a></li>
                    ))}
                </ul>
            </div>
            <div className='nav-2'>
                <div className='navbar-2'>
                    <div className="logo">
                        <img src="https://www.focal-x.com/assets/img/home/logo.svg" alt="focal-x" />
                        <h1>Digital marketing agency</h1>
                    </div>
                    <FontAwesomeIcon 
                        icon={faBars} 
                        className='fa-bars'
                        onClick={toggleSidebar}
                    />
                </div>
                <div>
                    <ul className={`links-nav-2 ${sidebarActive ? 'active' : ''}`}>
                        <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} className='fa-side'/>
                        {links.map((link, index) => (
                            <li 
                                key={index}
                                className={activeLink === index ? 'links-active' : ''}
                                onClick={() => handleLinkClick(index)}
                            >
                                <a href={link.href}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Nav;
 