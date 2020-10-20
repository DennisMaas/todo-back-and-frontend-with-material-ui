import React from "react";
import TodoList from './components/TodoList';
import useTodos from './hooks/useTodos';
import AddTodo from "./components/AddTodo";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {Container} from "@material-ui/core";

const useStyles = makeStyles((theme)=> ({
    root: {
        flexGrow: 1,
    },
    paper: {
        marginTop: theme.spacing(8),
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.primary,
    },
    button: {
        margin: theme.spacing(0.5, 0),
    }
}))

export default function App() {
    const [todos, addTodo, deleteTodoItemFromList, upgradeTodoItem] = useTodos();
    const classes = useStyles();
    return (
        <>
            <Container maxWidth={"md"}>
            <CssBaseline />
            <Grid className={classes.paper} container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant={"h1"}>
                        Super Kanban Board
                    </Typography>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <AddTodo onAdd={addTodo}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TodoList
                            todos={todos}
                            deleteTodoItemFromList={deleteTodoItemFromList}
                            onAdd={addTodo}
                            upgradeTodoItem={upgradeTodoItem}
                            checkStatus={"OPEN"}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TodoList
                            todos={todos}
                            deleteTodoItemFromList={deleteTodoItemFromList}
                            onAdd={addTodo}
                            upgradeTodoItem={upgradeTodoItem}
                            checkStatus={"IN_PROGRESS"}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <TodoList
                            todos={todos}
                            deleteTodoItemFromList={deleteTodoItemFromList}
                            onAdd={addTodo}
                            upgradeTodoItem={upgradeTodoItem}
                            checkStatus={"DONE"}
                        />

                    </Grid>
            </Grid>
        </Grid>
        </Container>

        </>
    );
}