import React from 'react';
import {CssBaseline} from '@material-ui/core';
//import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Login from './login';
import Event from './event';
import Activities from './activities';

const App = () => {
    return (
       <>
        <CssBaseline>
        <Login></Login>
        
        </CssBaseline>
        <Event></Event>
        <Activities/>
        

       </>
    );
}

export default App;