import { useState } from "react";
import Column from "./Column";

function Board() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Research UI trends", priority: "High", status: "todo" },
    { id: 2, title: "Draft roadmap", priority: "Medium", status: "todo" },
    { id: 3, title: "Competitor analysis", priority: "Low", status: "inprogress" },
  ]);

  const addTask = (title) => {
    const newTask = {
      id: Date.now(),
      title,
      priority: "Medium",
      status: "todo",
    };
    setTasks([...tasks, newTask]);
  };

  const editTask = (id, newTitle) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, title: newTitle } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="flex gap-6 overflow-x-auto pb-4">
      <Column
        title="To Do"
        status="todo"
        tasks={tasks}
        addTask={addTask}
        editTask={editTask}
      />
      <Column
        title="In Progress"
        status="inprogress"
        tasks={tasks}
        editTask={editTask}
      />
      <Column
        title="Done"
        status="done"
        tasks={tasks}
        editTask={editTask}
      />
    </div>
  );
}

export default Board;
