import { NavLink } from "react-router-dom";

const Header = () => {
    const getlinkActive = ({ isActive }) => {
        return {
            color: isActive ? "#6f96e8" : "white"
        }
    }
    const navLinks = [
        { to: '/', text: 'About us' },
        { to: '/Contact', text: 'Contact us' },
        { to: '/Message', text: 'Messages us' }
    ];
    return (
        <header>
            <nav>
                {navLinks.map(link => (
                    <NavLink key={link.to} to={link.to} className="nav-link" style={getlinkActive}>
                        {link.text}
                    </NavLink>
                ))}
            </nav>
        </header>
    );
};

export default Header;