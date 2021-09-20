import React from "react";
import { Droppable } from "react-beautiful-dnd";
import RootRef from "@material-ui/core/RootRef";
import List from "@material-ui/core/List";
import ListItemCustom from "./ListItemCustom";

const Column = ({ column , setColumns, open, setOpen, setClickedGoalIndex, setClickedGoalColumnId}) => {
  return (
    <Droppable droppableId={column.id}>
      {(provided) => (
        <RootRef rootRef={provided.innerRef}>
          <List
            style={{
              width: 32 + "%",
              margin: "0.5% 0.5%",
              backgroundColor: "#3c54b4"
            }}
          >
            {column.list.map((itemObject, index) => {
              return <ListItemCustom index={index} itemObject={itemObject} column={column} setColumns={setColumns} open={open} setOpen={setOpen} setClickedGoalIndex={setClickedGoalIndex} setClickedGoalColumnId={setClickedGoalColumnId}/>;
            })}
            {provided.placeholder}
          </List>
        </RootRef>
      )}
    </Droppable>
  );
};

export default Column;
