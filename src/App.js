import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import TodoTable from "./components/todoTable";
import TodoForm from "./components/todoForm";
import CounterForm from "./components/cform";
import { Form, Label, Input, Button, Badge } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.onDelete = this.handleDelete.bind(this); //TODO not used
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();

    if (this.state.text.length === 0) {
      return;
    }
    const newItem = { text: this.state.text, id: Date.now() };
    this.setState((state) => ({
      items: state.items.concat(newItem.text), // TODO: Old code olny newItem, how it is work ????
      text: "",
    }));
  }
  handleDelete = (item) => {
    const items = this.state.items.filter((i) => i !== item);
    this.setState({ items });
  };

  render() {
    return (
      <div>
        <TodoForm
          states={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <TodoTable
          states={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
