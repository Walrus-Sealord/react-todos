import React, {Component, PropTypes} from "react";

// Task Component. A single Task
export default class Task extends Component {
    render() {
        return (
            <li>{this.props.task.text}</li>
        );
    }
}

Task.propTypes = {
    // Component get the task through React prop
    // propTypes show what is reqired
    task: PropTypes.object.isRequired,
};