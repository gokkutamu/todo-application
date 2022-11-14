// Import dependencies
import * as React from "react";
import shortid from "shortid";

// Import Interface
import { TodoInterface, FormTodoInterface } from "./../interfaces";

/*
Todo from component
@var FormTodoInterface
*/
const Form = (props: FormTodoInterface) => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const [formState, setFormState] = React.useState("");

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setFormState(event.target.value);
    }

    function handleInputKey(event: React.KeyboardEvent) {
        if (event.key === 'Enter') {
            const createTodo: TodoInterface = {
                id: shortid.generate(),
                description: formState,
                isCompleted: false
            }
            props.handleTodoCreate(createTodo);
            if (inputRef && inputRef.current) {
                inputRef.current.value = '';
            }
        }
    }
    
    function handleSubmit() {
        // event.preventDefault();
        const createTodo: TodoInterface = {
            id: shortid.generate(),
            description: formState,
            isCompleted: false
        }
        props.handleTodoCreate(createTodo);
        if (inputRef && inputRef.current) {
            inputRef.current.value = '';
        }
    }

    return (
        // <form id="form__task">
            <p>
                <label htmlFor="new-task">Add Item</label>
                <input id="input__task" type="text" ref={inputRef}
                    placeholder="Enter create todo"
                    onChange={event => handleInputChange(event)}
                    onKeyPress={event => handleInputKey(event)}
                />
                <button type="submit" onClick={(event) => handleSubmit()}>Add</button>
            </p>
        // </form>
    );
}

export default Form;
