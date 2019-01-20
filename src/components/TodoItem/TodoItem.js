import React, { Component } from 'react';

class todoItem extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    handleChange() {
        return console.log("helo");
    }

    render() {
        return(
            <div className="todo-item">
                <input 
                    type="checkbox" 
                    checked={this.props.item.completed}
                    onChange={() => this.props.handleChange(this.props.item.id)}
                />
                <p className={this.props.item.completed ? "complete" : "incomplete"}>
                    {this.props.item.text}
                </p>
            </div>
        );
    }
}

export default todoItem;