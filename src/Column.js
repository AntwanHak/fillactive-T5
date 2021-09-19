import React from "react";
import { Droppable } from "react-beautiful-dnd";
import RootRef from "@material-ui/core/RootRef";
import List from "@material-ui/core/List";
import ListItemCustom from "./ListItemCustom";
import Typography from "@material-ui/core/Typography";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Grid,
  IconButton
} from "@material-ui/core";

const Column = ({ column , setColumns}) => {
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
              return <ListItemCustom index={index} itemObject={itemObject} column={column} setColumns={setColumns} />;
            })}
            {provided.placeholder}
          </List>
        </RootRef>
      )}
    </Droppable>
  );
};

export default Column;
