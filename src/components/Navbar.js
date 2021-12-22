import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <h1>
                Welcome to FriendBook
            </h1>
            <Link to="/">Home</Link>
            <br />
            <Link to="/about">About</Link>
            <br />
            <Link to="404">Not Found</Link>
            <br />
        </div>
    )
}

export default Navbar;
