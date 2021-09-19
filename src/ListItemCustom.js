import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
  IconButton,TextField,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle,RootRef
        
} from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import { styled } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Draggable } from "react-beautiful-dnd";
import {plusSlides} from './App';

export function getCurrentDate(separator = '/') {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${month < 10 ? `0${month}` : `${month}`}${separator}${date}${separator}${year}`
}

export function getProgressValue(startDateString,endDateString) {

var startDate = new Date(startDateString);
var endDate = new Date(endDateString);
let value=0;
let today = new Date();
if ((endDate.getDate() == today.getDate() &&
endDate.getMonth() == today.getMonth() &&
endDate.getFullYear() == today.getFullYear())|| endDate<today){
value=100;
return value;
}
if((startDate.getDate() == today.getDate() &&
startDate.getMonth() == today.getMonth() &&
startDate.getFullYear() == today.getFullYear())|| startDate>today){
return 0;
}
  
// To calculate the time difference of two dates
var durationDifferenceInTime = endDate.getTime() - startDate.getTime();
var progressDifferenceInTime = today.getTime()-startDate.getTime();

// To calculate the no. of days between two dates
var durationDifferenceInDays = durationDifferenceInTime / (1000 * 3600 * 24);
var progressDifferenceInDays=progressDifferenceInTime / (1000 * 3600 * 24);

value=durationDifferenceInDays/progressDifferenceInDays;

return (100-value);
}



const ListItemCustom = ({ itemObject, index, column,setColumns }) => {
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

    const [value, setValue] = React.useState([null, null]);
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
    const handleClose = () => {
        setOpen(false);
    };
    
  return (
    <Draggable draggableId={itemObject.id} key={itemObject.id} index={index} column={column} setColumns={setColumns}>
      {(provided) => (
        <ListItem
          key={itemObject.id}
          role={undefined}
          dense
          button
          ContainerComponent="li"
          ContainerProps={{ ref: provided.innerRef }}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card
            sx={{ minWidth: 275 }}
            style={{
              width: 100 + "%"
            }}
          >
            <Grid container justify="space-between">
              <CardContent style={{ width: 90 + "%" }}>
                <Typography variant="h5" component="div">
                {itemObject.name}
                </Typography>
                <BorderLinearProgress variant="determinate" value={getProgressValue(itemObject.startDate,itemObject.endDate)} />
                <Grid container justify="space-between">
                  <Typography
                    sx={{ mb: 1.5 }}
                    color="text.secondary"
                    align="left"
                  >
                    {itemObject.startDate}
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5 }}
                    color="text.secondary"
                    align="right"
                  >
                    {itemObject.endDate}
                  </Typography>
                </Grid>
                <Typography variant="body2">
                  <br />
                  {itemObject.description}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton aria-label="Edit"  onClick={handleClickOpen}>
                  <EditIcon />
                </IconButton>
                <div>
     
     <Dialog open={open} onClose={handleClose}>
       <DialogTitle>Goal</DialogTitle>
       <DialogContent>
         <DialogContentText>
            To make sure your goals are clear and reachable, each one should be specific, measurable, achievable, relevant, and time bound.
         </DialogContentText>
         <TextField
           autoFocus
           margin="dense"
           id="title"
           label="Title"
           required
           fullWidth
           variant="standard"
         />
                 <TextField
          id="outlined-textarea"
          label="Description"
          multiline
        />
        <br/>

        <Grid container justify="space-between">
        <TextField label="Start Date" type="date"/>
<TextField label="End Date" type="date"/>
                </Grid>





       </DialogContent>
       <DialogActions>
         <Button onClick={handleClose}>Cancel</Button>
         <Button onClick={handleClose}>Create</Button>
       </DialogActions>
     </Dialog>
   </div>
                <IconButton aria-label="Delete" 
                onClick={() => {
                    if (!window.confirm("Are you want to delete this goal?")) {
                        return null;
                    } 
                        var newList = column.list.filter((_, idx) => idx !== index);
                        const newCol = {
                          id: column.id,
                          list: newList
                        };
                        setColumns((state) => ({ ...state, [newCol.id]: newCol }));
  }}>
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Grid>
          </Card>
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              aria-label="comments"
              question-uid={itemObject.id}
            >
              {/* <DeleteIcon /> */}
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      )}
    </Draggable>
  );
};

export default ListItemCustom;
