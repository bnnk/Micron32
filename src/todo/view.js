import React, { useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import { Card, Checkbox, ListItemSecondaryAction } from "@material-ui/core";
import { db } from "../dbapi";

export default function TodoView() {
  const [todos, setTodos] = React.useState(null)
  const todoObserver = window.Dexie.liveQuery( () => db.todo.toArray() )
  todoObserver.subscribe({
    next: result => { console.log("Got result:", result); setTodos(result) },
    error: error => console.error(error)
  })
  return (
    <Card variant="outlined">
      <List>
        { todos && (todos.map((todo) => (
          <>
            <ListItem>
              <ListItemAvatar>
                <Avatar color="secondary">
                  {todo.done ? <CheckCircleIcon /> : <CancelIcon />}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={todo.what2do} />
              <ListItemSecondaryAction>
                <Checkbox checked={todo.done} onChange={(e) => {
                  db.todo.update(todo.id, { done: e.target.checked })
                }}/>
              </ListItemSecondaryAction>
            </ListItem>
          </>
        )))}
      </List>
    </Card>
  );
}