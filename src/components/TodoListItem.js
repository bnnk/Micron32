import React from "react";
import {
  ListItem,
  Checkbox,
  IconButton,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutline";

const TodoListItem = React.memo(
  ({ text, divider, checked, onCheckBoxToggle, onButtonClick }) => (
    <ListItem divider={divider}>
      <Checkbox onClick={onCheckBoxToggle} checked={checked} disableRipple />
      &nbsp; &nbsp;
      <ListItemText
        primary={(function () {
          if (!checked) return text;
          return <s>{text}</s>;
        })()}
      />
      <ListItemSecondaryAction>
        <IconButton aria-label="Delete Todo" onClick={onButtonClick}>
          <DeleteOutlined />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
);

export default TodoListItem;
