// Import dependencies
import * as React from "react";

// Import Todo Item
import Item from "./Item";

// Import Interface
import { ListTodoInterface } from "./../interfaces";

/*
Todo list component
@var ListTodoInterface
*/
const List = (props: ListTodoInterface) => {
    return (
        <div className="todo-list">
            <h3>Todo</h3>
            <ul id="list__tasks">
                {props.todos.map((todo) => (
                    <li key={todo.id}>
                        <Item 
                            todo={todo}
                            handleTodoUpdate={props.handleTodoUpdate}
                            handleTodoDelete={props.handleTodoDelete}
                            handleTodoComplete={props.handleTodoComplete}
                            handleTodoBlur={props.handleTodoBlur}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List;