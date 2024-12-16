import { NavLink } from "react-router-dom";

const Header = () => {
    const getlinkActive = ({ isActive }) => {
        return {
            color: isActive ? "#6f96e8" : "white"
        }
    }
    return (
        <>
            <header>
                <nav>
                    <NavLink to="/" className="nav-link" style={getlinkActive}>About us</NavLink>
                    <NavLink to="Contact" className="nav-link" style={getlinkActive}>Contact us</NavLink>
                    <NavLink to="Message" className="nav-link" style={getlinkActive}>Messages us</NavLink>
                </nav>
            </header>
        </>
    );
};

export default Header;