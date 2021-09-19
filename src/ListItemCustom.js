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
  IconButton
} from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import { styled } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Draggable } from "react-beautiful-dnd";

const ListItemCustom = ({ itemObject, index }) => {
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
  return (
    <Draggable draggableId={itemObject.id} key={itemObject.id} index={index}>
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
                <BorderLinearProgress variant="determinate" value={20} />
                <Grid container justify="space-between">
                  <Typography
                    sx={{ mb: 1.5 }}
                    color="text.secondary"
                    align="left"
                  >
                    fds
                  </Typography>
                  <Typography
                    sx={{ mb: 1.5 }}
                    color="text.secondary"
                    align="right"
                  >
                    fds
                  </Typography>
                </Grid>
                <Typography variant="body2">
                  <br />
                  {itemObject.text}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton aria-label="Edit">
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="Delete">
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
