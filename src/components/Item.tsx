// Import dependencies
import * as React from "react";

// Import Interface
import { ItemTodoInterface } from "./../interfaces";

/*
Todo item component
@var ItemTodoInterface
*/
const Item = (props: ItemTodoInterface) => {
    return (
        <>
            <input 
                type="checkbox" 
                onClick={() => props.handleTodoComplete(props.todo.id)}
                checked={(props.todo.isCompleted) ? true : false}
            />
            <label>{props.todo.description}</label>
            <input type="text" 
                value={props.todo.description} 
                onBlur={props.handleTodoBlur}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.handleTodoUpdate(event, props.todo.id)}
            />
            <button className="delete" onClick={() => props.handleTodoDelete(props.todo.id)}>Remove</button>
        </>
    );
}

export default Item;