import React, { useState } from 'react';

function ToDoList() {

    const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {

    }

    function addTask() {

    }

    function deleteTask() {

    }

    function moveTaskUp(index) {

    }

    function moveTaskUp(index) {

    }

    return (
        <>
            <div className="to-do-list">
                <h1>To-Do List</h1>

                <div>
                    <input
                        type="text"
                        placeholder="New Task"
                        value={newTask}
                        onChange={handleInputChange} />
                    <button
                        className="add-button"
                        onClick={addTask}>
                        Add Task
                    </button>
                </div>
                <ol>
                    {tasks.map((task, index) =>
                        <li key={index}>
                            <span className="text">{task}</span>
                            <button
                                className="delete-button"
                                onClick={() => deleteTask(index)}>
                                Delete
                            </button>
                            <button
                                className="up-button"
                                onClick={() => moveTaskUp(index)}>
                                Up
                            </button>
                            <button
                                className="down-button"
                                onClick={() => moveTaskDown(index)}>
                                Down
                            </button>
                        </li>
                    )}
                </ol>
            </div>
        </>
    )
}

export default ToDoList;