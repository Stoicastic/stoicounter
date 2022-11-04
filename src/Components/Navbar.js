import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className="nav-link">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
            
        </nav>
    );
}

export default Navbar;