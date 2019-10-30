import React from "react"

function TodoItem(props) {
    const completedstyle = {
        fontstyle : "italic",
        color:"blue",
        textDecoration : "line-through"

    }
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed}
                onChange={() => props.handleChange(props.item.id)}
            />
            <p style= {props.item.completed? completedstyle:null}>{props.item.task}</p>
        </div>
    )
}

export default TodoItem