import React, {Component, PropTypes} from "react";

import {Tasks} from '../api/tasks.js';

// Task Component. A single Task
export default class Task extends Component {
    // catch completed checkbox changes
    togglechecked() {
        //set checked to NOT current value
        Tasks.update(this.props.task._id,
            {
                $set: {checked: !this.props.task.checked},
            });
    }

    // catch delete button
    deleteThisTask() {
        Tasks.remove(this.props.task._id);
    }


    render() {
        // change Task className so style shows whether checked off
        const taskClassName = this.props.task.checked ? 'checked' : '';

        return (
            <li className={taskClassName}>


                <button className="delete" onClick={this.deleteThisTask.bind(this)}>
                    &times;
                </button>


                <input
                    type="checkbox"
                    readOnly
                    checked={this.props.task.checked}
                    onClick={this.togglechecked.bind(this)}
                />

                < span className="text">{this.props.task.text}</span>
            </li>
        );
    }
}

Task.propTypes = {
    // Component get the task through React prop
    // propTypes show what is reqired
    task: PropTypes.object.isRequired,
};