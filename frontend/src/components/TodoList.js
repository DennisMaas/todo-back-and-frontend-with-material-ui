import React from 'react';
import Todo from './Todo';
import {mapStatus} from "../utils/todoUtils";
import {List, Typography} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import FormGroup from "@material-ui/core/FormGroup";
import ListItemText from "@material-ui/core/ListItemText";

export default function TodoList({todos, deleteTodoItemFromList, onAdd, upgradeTodoItem, checkStatus}) {

    return (
        <FormGroup>
            <List>
                <Typography variant={"h5"}>
                   {mapStatus(checkStatus)}
                </Typography>
            {todos
                .filter(todo => todo.status === checkStatus)
                .map((todo) => (
                <ListItem key={todo.id}>
                    <ListItemText
                        primary={""}
                        secondary={
                            <Todo
                            id={todo.id}
                            status={todo.status}
                            description={todo.description}
                            deleteTodoItemFromList={deleteTodoItemFromList}
                            onAdd={onAdd}
                            upgradeTodoItem={upgradeTodoItem}
                        />
                        }
                    />
                </ListItem>
            ))}
            </List>
        </FormGroup>
    );
}
