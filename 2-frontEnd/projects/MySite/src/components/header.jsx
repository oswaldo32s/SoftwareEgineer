import React from "react";
import {Link} from 'wouter';

function Header() {

return (
    <header>
      <figure className="logo">
        <img src="/src/assets/img/myicon.svg" alt="Logo" />
      </figure>
      <nav>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/courses">Projects</Link></li>
              <li>About</li>
              <li>Contact</li>
              <li className="sign-up"><Link to="/sign-up">Sign Up</Link></li>
          </ul>
      </nav>
    </header>
  )
}

export default Header;