import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";
import { TextField } from "@material-ui/core";
import { db } from "../dbapi";

const useStyles = makeStyles({
  root: {
    minWidth: 110
  }
});

export default function TodoForm() {
  const classes = useStyles();
  const [tbox, setTBox] = React.useState("no text given.")
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          Add a todo
        </Typography>
        <br />
        <TextField variant="outlined" label="What to do?" onChange={(e) => setTBox(e.target.value)}/>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="secondary"
          variant="contained"
          startIcon={<AddToPhotosIcon />}
          onClick={(e) => {
            db.todo.add({
                what2do: tbox,
                checked: false
            })
          }}
        >
          Add
        </Button>
      </CardActions>
    </Card>
  );
}
