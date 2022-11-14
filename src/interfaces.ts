import React from "react";

// Todo interface.
export interface TodoInterface {
    id: string;
    description: string;
    isCompleted: boolean;
}

// From Todo interface.
export interface FormTodoInterface {
    todos: TodoInterface[];
    handleTodoCreate: (todo: TodoInterface) => void;
}

// List Todo interface.
export interface ListTodoInterface {
    handleTodoDelete: (id: string) => void;
    handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    handleTodoComplete: (id: string) => void;
    handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
    todos: TodoInterface[];
}

// Item Todo interface.
export interface ItemTodoInterface {
    handleTodoDelete: (id: string) => void;
    handleTodoUpdate: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    handleTodoComplete: (id: string) => void;
    handleTodoBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
    todo: TodoInterface;
}