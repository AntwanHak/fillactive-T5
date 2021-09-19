import * as React from 'react';

import { Card, CardActions, CardContent, Button, Typography, Grid,IconButton } from '@material-ui/core'
import LinearProgress from '@material-ui/core/LinearProgress';
import { styled } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { DragDropContext } from "react-beautiful-dnd";


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${LinearProgress.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${LinearProgress.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));
export function getCurrentDate(separator = '-') {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date}`
}

export default function BasicCard() {
    return (
        <Card sx={{ minWidth: 275 }}>
            <Grid container justify="space-between">
            <CardContent style={{width: 90+"%"}}>
                <Typography variant="h5" component="div">
                    Running
        </Typography>
                <BorderLinearProgress variant="determinate" value={20} />
                <Grid container justify="space-between">
                    <Typography  sx={{ mb: 1.5 }}  color="text.secondary" align="left">{getCurrentDate()}</Typography>
                    <Typography  sx={{ mb: 1.5 }}  color="text.secondary" align="right">{getCurrentDate()}</Typography>
                </Grid>
                <Typography variant="body2">
                <br />
                    Running for 12 mins
                </Typography>
               
            </CardContent>
            <CardActions>
            <IconButton aria-label="Edit">
            <EditIcon/>
        </IconButton>
            <IconButton aria-label="Delete">
            <DeleteIcon/>
        </IconButton>
        
            </CardActions>
            </Grid>
        </Card>
    );
}