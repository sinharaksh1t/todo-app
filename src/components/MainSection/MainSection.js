import React, { Component } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import TodoData from '../../api/todosData';


class mainSection extends Component {
    constructor() {
        super();
        this.state = {
            todosData: TodoData
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        // This is how you not do
        this.setState( prevState => {
            const newTodosData = prevState.todosData.map(
                elem => {
                    if(elem.id === id) elem.completed = !elem.completed;
                    return elem;
                }
            );
            return {
                todosData: newTodosData
            }
        });
    }

    render() {
        const todoArr = this.state.todosData.map(
            elem => 
            <TodoItem 
                key={elem.id}
                item={elem}
                handleChange={this.handleChange}
            >
            </TodoItem>
        );
        return(
            <div className="todo-list">
                {todoArr}
            </div>
        );
    }
}

export default mainSection;