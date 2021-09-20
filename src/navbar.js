import React from 'react';
import { Link } from 'react-router-dom';




const Navbar = () => {
    return (
        <div style={{paddingBottom: '55px'}}>
      
        <nav className="navbar fixed-top navbar-dark bg-dark navbar-expand-lg"  style= {{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
          
          
          <Link to="/" className="navbar-brand" style={{paddingLeft: '10px'}}>FitSpirit</Link>
          
          <div className="collpase navbar-collapse" style={{display: 'flex', justifyContent: 'flex-end', paddingRight: '20px'}}>
            <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Home</Link>
              </li>
            <li className="navbar-item">
              <Link to="/events" className="nav-link">Events</Link>
              </li>
              
              
              <li className="navbar-item">
              <Link to="/activities" className="nav-link">Activities</Link>
              </li>
              <li className="navbar-item">
              <Link to="/profile" className="nav-link">Profile</Link>
              </li>
            </ul>
          </div>
          
        </nav>
        
        
        
        
        </div>
    );
}

export default Navbar;