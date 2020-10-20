import { useEffect, useState } from 'react';
import {deleteTodoItem, getTodos, putTodoItem, sendTodoItem} from '../service/todo-service';

export default function useTodos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos().then((todos) => setTodos(todos));
    }, []);

    const addTodo = (description) => {
        sendTodoItem(description).then((newTodoItem) => setTodos([...todos, newTodoItem]))
    }

    const deleteTodoItemFromList = (id) => {
        deleteTodoItem(id).then(() => setTodos(todos.filter(todo => todo.id !== id)));
    }

    const upgradeTodoItem = (id, description, status) => {
        putTodoItem(id, description, status)
            .then((newTodoItem) => setTodos([...todos.filter(todo => todo.id !== id), newTodoItem]))
    }

    return [todos, addTodo, deleteTodoItemFromList, upgradeTodoItem];
}
