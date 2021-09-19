import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { DragDropContext } from "react-beautiful-dnd";
import { Button, Typography,TextField,Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle } from "@material-ui/core";
import Column from "./Column";
import AddIcon from "@material-ui/icons/Add";
import './App.css';


   export function getFormattedDate(sDate) {
    var separator = '-';
    let newDate = new Date(sDate);
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${date < 10 ? `0${date}` : `${date}`}`
}

export function setFormattedDate(sDate) {
    var separator = '/';
    let newDate;
    console.log(sDate);
    if(sDate==null||sDate==""){
        newDate=new Date();
    }
    else{
        const dates = sDate.split('-');
        newDate = new Date(dates[1]+separator+dates[2]+separator+dates[0]);
    }

    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${month < 10 ? `0${month}` : `${month}`}${separator}${date}${separator}${year}`
}


export default function Objective() {
    document.body.style = 'background: #9ca4dc;';

    const initialColumns = {
        todo: {
          id: "todo",
          list: [
            { id: "1", name:"Running", description:"Run for 12 mins", startDate:"09/19/2021", endDate:"09/23/2021", additionalNotes:""},
            { id: "2",name:"Yoga", description:"yoga blah", startDate:"09/16/2020", endDate:"09/31/2021", additionalNotes:"" },
          ]
        },
        doing: {
          id: "doing",
          list: [
            { id: "3",name:"Swimming", description:"Hold breath for 1 min", startDate:"09/14/2021", endDate:"09/15/2021", additionalNotes:"" },
            { id: "4",name:"Blah", description:"Blah Blah Blah", startDate:"09/16/2021", endDate:"12/22/2021", additionalNotes:"" }
          ]
        },
        done: {
          id: "done",
          list: []
        }
      };
      const [columns, setColumns] = useState(initialColumns);
      const [goalIndex,setGoalIndex]= useState(5);
      const [clickedGoalIndex, setClickedGoalIndex] = useState(null);
      const [clickedGoalColumnId, setClickedGoalColumnId] = useState(null);
      const [createMode, setCreateMode] = useState(false);

      function FormColumnTitles() {
        return (
          <React.Fragment>
            <Grid item xs={4}>
              <Typography variant="h5" component="div" align="center">
                Backlog
              </Typography>
            </Grid>
    
            <Grid item xs={4}>
              <Typography variant="h5" component="div" align="center">
                In Progress
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5" component="div" align="center">
                Done
              </Typography>
            </Grid>
          </React.Fragment>
        );
      }

    
      const [open, setOpen] = React.useState(false);
      const handleClickOpen = () => {
        setClickedGoalIndex(null);
        setClickedGoalColumnId(null);
        setCreateMode(true);
          setOpen(true);
        };
      const handleClose = () => {
          setOpen(false);
      };

      const handleCreate = () => {
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;

          if(createMode==true){
var newGoal={ id: goalIndex+"", name:title, description:description, startDate:setFormattedDate(startDate), endDate:setFormattedDate(endDate), additionalNotes:""};

          var newList=columns["todo"].list;
          newList.splice(0, 0, newGoal);
    
          const newCol = {
            id: "todo",
            list: newList
          };
          setGoalIndex(goalIndex+1);
          setColumns((state) => ({ ...state, [newCol.id]: newCol }));
            setCreateMode(false);
          }
          else{
            const newList = columns[clickedGoalColumnId].list.filter((_, idx) => idx !== clickedGoalIndex);
            newList.splice(clickedGoalIndex, 0, { id: columns[clickedGoalColumnId].list[clickedGoalIndex].id+"", name:title, description:description, startDate:setFormattedDate(startDate), endDate:setFormattedDate(endDate), additionalNotes:""});
            const newCol = {
                id: clickedGoalColumnId,
                list: newList
              };
              setColumns((state) => ({ ...state, [newCol.id]: newCol }));
          }
          setOpen(false);

    };

    function readData() {
        if(clickedGoalColumnId===null||clickedGoalIndex===null||columns[clickedGoalColumnId].list[clickedGoalIndex]===null){
            return "";
        }
        return columns[clickedGoalColumnId].list[clickedGoalIndex];
    };

    
    
    const onDragEnd = ({ source, destination }) => {
        // Make sure we have a valid destination
        if (destination === undefined || destination === null) return null;
    
        // Make sure we're actually moving the item
        if (
          source.droppableId === destination.droppableId &&
          destination.index === source.index
        )
          return null;
    
        // Set start and end variables
        const start = columns[source.droppableId];
        const end = columns[destination.droppableId];
    
        // If start is the same as end, we're in the same column
        if (start === end) {
          // Move the item within the list
          // Start by making a new list without the dragged item
          console.log(start);
          const newList = start.list.filter((_, idx) => idx !== source.index);
    
          // Then insert the item at the right location
          newList.splice(destination.index, 0, start.list[source.index]);
    
          // Then create a new copy of the column object
          const newCol = {
            id: start.id,
            list: newList
          };
    
          // Update the state
          setColumns((state) => ({ ...state, [newCol.id]: newCol }));
          return null;
        } else {
          // If start is different from end, we need to update multiple columns
          // Filter the start list like before
          const newStartList = start.list.filter((_, idx) => idx !== source.index);
    
          // Create a new start column
          const newStartCol = {
            id: start.id,
            list: newStartList
          };
    
          // Make a new end list array
          const newEndList = end.list;
    
          // Insert the item into the end list
          newEndList.splice(destination.index, 0, start.list[source.index]);
    
          // Create a new end column
          const newEndCol = {
            id: end.id,
            list: newEndList
          };
    
          // Update the state
          setColumns((state) => ({
            ...state,
            [newStartCol.id]: newStartCol,
            [newEndCol.id]: newEndCol
          }));
          return null;
        }
      };





    const FormColumnTitleStyle = { backgroundColor: "#9ca4dc", padding: 20 };

    return (
        <Grid container spacing={1} style={FormColumnTitleStyle}>
      <Button variant="contained" endIcon={<AddIcon />} onClick={handleClickOpen}>
        Create
      </Button>
      
      
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
           defaultValue={(readData()==null?"":readData().name)}
         />
        <TextField
            defaultValue={(readData()==null?"":readData().description)}
          id="description"
          label="Description"
          multiline
        />
        <br/>
        <TextField id="startDate" defaultValue={(readData()==null?"":getFormattedDate(readData().startDate))} style={{margin:5}} required name="startDate"label="Start Date" type="date" InputLabelProps={{ shrink: true, required: true }} />
        <TextField id="endDate" defaultValue={(readData()==null?"":getFormattedDate(readData().endDate))} style={{margin:5}} required name="endDate" label="End Date" type="date" InputLabelProps={{ shrink: true, required: true }} />

       </DialogContent>
       <DialogActions>
         <Button onClick={handleClose}>Cancel</Button>
         <Button onClick={handleCreate}>Done</Button>
       </DialogActions>
     </Dialog>
   </div>

      <Grid container spacing={3} style={FormColumnTitleStyle}>
        <FormColumnTitles />
      </Grid>
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid container direction={"row"} justify={"center"}>
          {Object.values(columns).map((column) => {
            console.log(column);
            return <Column column={column} key={column.id} setColumns={setColumns} open={open} setOpen={setOpen} setClickedGoalIndex={setClickedGoalIndex} setClickedGoalColumnId={setClickedGoalColumnId}/>;
          })}
        </Grid>
      </DragDropContext>
    </Grid>
    );
}

  