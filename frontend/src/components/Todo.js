import React from 'react';
import Button from "@material-ui/core/Button/Button";

export default function Todo({ id, status, description, deleteTodoItemFromList, upgradeTodoItem}) {


    return (
        <section>
            {description}
            <br/>
            <br/>
            <Button  onClick={() => deleteTodoItemFromList(id)}>delete</Button>
            <Button variant="contained" color="primary" disabled={status === "DONE"} onClick={() => upgradeTodoItem(id, description, status)}>update</Button>
        </section>
    );
}



