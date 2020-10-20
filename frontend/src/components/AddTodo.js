import React, {useState} from "react";
import Button from "@material-ui/core/Button/Button";
import TextField from '@material-ui/core/TextField';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=> ({
    form: {
        width: "100%",
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))
export default function AddTodo({onAdd}) {
    const classes = useStyles();
    const [description, setDescription] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        onAdd(description);
        setDescription("");
    }

    return (
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
                label={"Add a new task"}
                variant={"outlined"}
                margin={"normal"}
                required
                fullWidth
                autoFocus
                onChange={event => setDescription(event.target.value)} />
            <br/><br/>
            <Button
                fullWidth
                variant="contained"
                disabled={description.length < 1}
                color="primary"
                type={"submit"} >
                add note</Button>
        </form>

    );
}