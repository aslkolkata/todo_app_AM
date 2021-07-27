import React, { Component } from "react";
import Timer from "./timer";
import Checkbox from "./checkbox";

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.state = { v: null, isChecked: true, seconds: 0 };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
    this.props.onInput(this.state.v);
  }

  toggleChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };
  tick = () => {
    if (this.state.isChecked) {
      this.setState((state) => ({
        seconds: state.seconds + 1,
      }));
    } else {
      this.setState((state) => ({
        seconds: state.seconds + 0, // TODO: try to do with tick() stop
      }));
    }
  };
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <tr>
        <td>
          <input
            type="text"
            class="form-control-plaintext"
            value={this.props.item}
            placeholder={this.props.item}
          ></input>
        </td>
        <td>
          <Checkbox
            isChecked={this.state.isChecked}
            onChange={this.toggleChange}
          />
        </td>
        <td>
          <Timer seconds={this.state.seconds} />
        </td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => this.props.onClick()}
          >
            <i className="fa fa-trash-o" aria-hidden="true" />
          </button>
        </td>
      </tr>
    );
  }
}

class TodoTable extends Component {
  render() {
    const { states, handleChange, handleSubmit } = this.props;
    return (
      <table class="table table-sm table-light table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Todos</th>
            <th scope="col">Active/Inactive</th>
            <th scope="col">Timer</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {states.items.map((item) => (
            <TableRow
              id={states.items.length}
              item={item}
              onInput={() => handleChange(item, 88)}
              //onCheck={() => this.props.onActive(item)}
              onClick={() => this.props.onDelete(item)}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

export default TodoTable;
