import React, { useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import { Card } from "@material-ui/core";
import { useLiveQuery } from "dexie-react-hooks";
import { DBConfig } from "../dbapi";

const db = new window.Dexie( DBConfig.name )
export default function TodoView() {
  const todos = useLiveQuery( db.todo.toArray() )
  return (
    <Card variant="outlined">
      <List>
        { todos && (todos.map((todo) => (
          <>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  {todo.done ? <CheckCircleIcon /> : <CancelIcon />}
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={todo.desc} />
            </ListItem>
          </>
        )))}
      </List>
    </Card>
  );
}