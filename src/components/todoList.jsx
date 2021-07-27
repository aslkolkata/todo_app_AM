import React, { Component } from "react";
import Timer from "./timer";

class TodoList extends Component {
  render() {
    const { items } = this.props;
    return (
      <div>
        <ul>
          {items.map((item) => (
            <li key={item}>
              {item} <Timer />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
