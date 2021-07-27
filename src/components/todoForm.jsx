import React, { Component } from "react";
import TodoList from "./todoList";
import { Form, Label, Input, Button, Badge } from "reactstrap";
// Try to do with reactstrap

class TodoForm extends Component {
  render() {
    const { states, handleChange, handleSubmit } = this.props;
    return (
      <div>
        <h1>
          <Badge color="primary">TODO</Badge>
        </h1>
        <h4>
          <Badge color="secodary">What needs to be done please add here</Badge>
        </h4>
        <Form onSubmit={handleSubmit}>
          <Input id="new-todo" onChange={handleChange} value={states.text} />
          <Button color="success">Add TODO #{states.items.length + 1}</Button>
        </Form>
      </div>
    );
  }
}

export default TodoForm;
