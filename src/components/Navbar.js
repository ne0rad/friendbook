import { Link, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button'

function Navbar() {
    let navigate = useNavigate();
    
    return (
        <div>
            <h1>
                Welcome to FriendBook
            </h1>
            <Button variant="contained" onClick={() => navigate("/about")}>Hello</Button>
            <br />
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
