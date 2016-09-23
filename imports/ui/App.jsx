import React, {Component, PropTypes} from "react";
import ReactDOM from "react-dom";
import {createContainer} from "meteor/react-meteor-data";
import {Tasks} from "../api/tasks.js";
import Task from "./Task.jsx";

// App component - represents the whole app
class App extends Component {
    handleSubmit(event) {
        event.preventDefault();
        console.log("Event fired");
        // Find field with the React ref
        const text = ReactDom.findDOMNode(this.refs.textInput).value.trim();

        Tasks.insert({
            'text': "dummy",
            createdAt: new Date(),
        });

        // cLear Form
        ReactDOM.findDOMNode(this.refs.textInput).value = "";
    }
    renderTasks() {
        return this.props.tasks.map((task) => (
            <Task key={task._id} task={task}/>
        ));
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Task List</h1>
                    {/* Form for adding new Tasks */}
                    < form className="new-task" onSubmit={this.handleSubmit.bind(this)}>
                        <input
                            type="text"
                            ref="textInput"
                            placeholder="Add a new task"
                        />
                    </form>

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
        tasks: Tasks.find({}, {sort: {createdAt: -1}}).fetch(),
    };
}, App);
