import React from 'react';
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Login from './login';

const App = () => {
    return (
       <>
        <CssBaseline>
        <Login></Login>
        </CssBaseline>
       </>
    );
}

export default App;