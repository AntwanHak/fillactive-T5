import React from 'react';
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
const App = () => {
    return (
       <>
        <CssBaseline>
            <AppBar position = "relative"> 
                <Toolbar>
                    <SupervisorAccountIcon></SupervisorAccountIcon>
                    <Typography variant = "h6">
                       Home Page/ Splash Page
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <Container maxWidth = "sm">
                <Typography variant = "h2" align = "center" color = "textPrimary" gutterBottom>
                        Sign in or Add data guys.
                    </Typography>
                </Container>
            </main>
        </CssBaseline>
       </>
    );
}

export default App;