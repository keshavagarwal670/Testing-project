import React from 'react'
import './footer.css'

import { Container } from "reactstrap";
//import { Link } from "react-router-dom"

const Footer = () => {

  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        
            <p className="footer__copyright">
              Copyright {year} devloped by Keshav Agarwal. All rights reserved.
            </p>
          
      </Container>
    </footer>
  );
}

export default Footer