// import useRef  from "react";

// import { Container, Row } from "reactstrap";

// import { NavLink } from 'react-router-dom';
import "./header.css";

const Header = ({ user, setUser }) => {
  // If the Logout button has been clicked then clear the loggedInUser object from localStorage and
  // update "user" state to null, in order to logout, otherwise on the next reload, the Effect hook will again read the user
  // from the localStorage and relogin without showing the login form
  const logout = () => {
    window.localStorage.removeItem('loggedInUser')
    setUser(null)
  }

  // Prevents Key Exception errors if "user" state hasn't loaded yet
  if (!user)
    return null
  

    return (
      <header>
        <div className="container">
          <h1>Alumni Registration</h1>
          <nav>
            <ul>
              <li><button onClick={logout}>Logout</button></li>
              {/* <li><a href="/about">About</a></li> */}
              
            </ul>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;