import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { DragDropContext } from "react-beautiful-dnd";
import { Button, Typography } from "@material-ui/core";
import Column from "./Column";
import AddIcon from "@material-ui/icons/Add";
import './App.css';
import Objective from "./Objective";

const projectID = 'bb1cb3f1-b0a9-4ec0-8e59-59cb02ac9f1b';

const App = () => {
  const classes = useStyles();
 
  return (
    <Objective/>
  );
};

export default App;

const useStyles = makeStyles((theme) => ({}));
