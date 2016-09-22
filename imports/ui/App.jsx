import React, {Component} from "react";
import {createContainer} from "meteor/react-meteor-data";
import {Tasks} from "../api/tasks.js";
import Task from "./Task.jsx";

// App componet. runs whole app
export default class App extends Component {
    //   getTasks() {
    //       return [
    //           {_id: 1, text: 'The First Task'},
    //           {_id: 2, text: 'The Second Task'},
    //           {_id: 3, text: 'The Third Task'},
    //       ];
    //   }

    renderTasks() {
        return this.props.map((task)=>(
            <Task key={task._id} task={task}/>
        ));
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Task List</h1>
                </header>

                <ul>
                    {this.renderTasks()}
                </ul>
            </div>
        );
    }
}

App.propTypes = {
    tasks: PropTypes.array.isRequired,
};

export default createContainer(() => {
    return {
        tasks: Tasks.find({}).fetch(),
    };
}, App);
