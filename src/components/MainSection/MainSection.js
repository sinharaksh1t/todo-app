import React from 'react';
import TodoItem from '../TodoItem/TodoItem'

const mainSection = () => {
    return (
        <div className="todo-list">
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
            <TodoItem></TodoItem>
        </div>
    );
}

export default mainSection;