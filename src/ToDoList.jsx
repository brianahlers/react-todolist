import React, { useState, useEffect } from 'react';

function ToDoList() {

    const [tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem("tasks");
        return storedTasks ? JSON.parse(storedTasks) : [];
    });
    const [newTask, setNewTask] = useState("");

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    }
    function addTask() {
        if (newTask.trim() !== "") {
            const updatedTasks = [...tasks, newTask];
            setTasks(updatedTasks);
            setNewTask("");
        }
    }
    function deleteTask(index) {

        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);

    }
    function moveTaskUp(index) {
        if (index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index - 1]] =
            [updatedTasks[index - 1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index) {
        if (index <  tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index - 1]] =
            [updatedTasks[index - 1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
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