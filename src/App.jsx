import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Event from './event';
import Splash from './splash';
import Activities from './activities';
import Navbar from './navbar';
import  Dashboard  from './Dashboard';
import  Objectives from './Objective';

const App = () => {
    return (
       
        <Router>
        <body >
        
            <Navbar />
            
            
            
            <Route exact path = "/" > <Splash/></Route>
            <Route path = "/events"><Event/></Route>
            <Route path = "/activities"><Activities/></Route>
            <Route path = "/profile"><Dashboard/></Route>
            <Route path = "/objective"><Objectives/></Route>
            
             
            
        
        </body>
    </Router>
        
        

       
    );
}

export default App;