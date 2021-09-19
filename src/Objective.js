import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { DragDropContext } from "react-beautiful-dnd";
import { Button, Typography } from "@material-ui/core";
import Column from "./Column";
import AddIcon from "@material-ui/icons/Add";
import './App.css';
  /*
    TODO: It's really important how you structure your data!!!
      each column has to have a unique id, each item has to have a unique id and ideally consecutive else funky things happen
      each droppable has to have a unique id, each draggable also - cannot stress this enough because that is the only way
      the framework knows how what went from which list
    */
   


export default function Objective() {

    const initialColumns = {
        todo: {
          id: "todo",
          list: [
            { id: "1", text: "text1", name:"Running", description:"Run for 12 mins", startDate:"09/19/2021", endDate:"09/23/2021" },
            { id: "2", text: "text2",name:"Yoga", description:"yoga blah", startDate:"09/16/2020", endDate:"09/31/2021" },
          ]
        },
        doing: {
          id: "doing",
          list: [
            { id: "3", text: "text4", name:"Swimming", description:"Hold breath for 1 min", startDate:"09/14/2021", endDate:"09/15/2021" },
            { id: "5", text: "text5", name:"Blah", description:"Blah Blah Blah", startDate:"09/16/2021", endDate:"12/22/2021" }
          ]
        },
        done: {
          id: "done",
          list: []
        }
      };
      const [columns, setColumns] = useState(initialColumns);
    
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
      <Button variant="contained" endIcon={<AddIcon />}>
        Create
      </Button>
      <Grid container spacing={3} style={FormColumnTitleStyle}>
        <FormColumnTitles />
      </Grid>
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid container direction={"row"} justify={"center"}>
          {Object.values(columns).map((column) => {
            console.log(column);
            return <Column column={column} key={column.id} setColumns={setColumns}/>;
          })}
        </Grid>
      </DragDropContext>
    </Grid>
    );
}

  