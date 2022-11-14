// Import dependencies
import * as React from 'react';
import { render } from 'react-dom';

// Import components
import Form from "./components/Form";
import List from "./components/List";

// Import Interface
import { TodoInterface } from './interfaces';

// Import styles
import './styles/styles.css';

const App = () => {
    const [todos, setTodo] = React.useState<TodoInterface[]>([]);
    // const tasks = localStorage.getItem('todos');

    function handleTodoCreate(todo: TodoInterface) {
        const createTodoState: TodoInterface[] = [...todos];
        createTodoState.push(todo);
        setTodo(createTodoState);
    }

    function handleTodoUpdate(event: React.ChangeEvent<HTMLInputElement>, id: string) {
        const updateTodoState: TodoInterface[] = [...todos];
        updateTodoState.find((todo: TodoInterface) => todo.id === id)!.description = event.target.value;
        setTodo(updateTodoState);
    }

    function handleTodoDelete(id: string) {
        const deleteTodoState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id);
        setTodo(deleteTodoState);
    }

    function handleTodoComplete(id: string) {
        const completeTodoState: TodoInterface[] = [...todos];
        completeTodoState.find((todo: TodoInterface) => todo.id === id)!.isCompleted = !completeTodoState.find((todo: TodoInterface) => todo.id === id)!.isCompleted;
        setTodo(completeTodoState);
    }

    function handleTodoBlur(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.value.length === 0) {
            event.target.classList.add('todo-input.error');
        }
        event.target.classList.remove('todo-input.error');
    }

    return (
        <div className="container" style={{ 
            height: '500px',
            width: '500px',
        }}>
            <h1 style={{
                textAlign: 'center', 
                fontFamily: 'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
                color: 'red',
                fontWeight: 700
            }}>Todo Application</h1>
            <Form
                todos={todos}
                handleTodoCreate={handleTodoCreate}
            />
            <List
                todos={todos}
                handleTodoUpdate={handleTodoUpdate}
                handleTodoDelete={handleTodoDelete}
                handleTodoComplete={handleTodoComplete}
                handleTodoBlur={handleTodoBlur}
            />
        </div>
    );
}
render(<App/>, document.getElementById('root'))
