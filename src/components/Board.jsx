import { useState } from "react";
import Column from "./Column";

function Board() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Research UI trends",
      description: "Explore modern dashboard and Kanban UI patterns.",
      priority: "High",
      dueDate: "2026-03-12",
      status: "todo",
    },
    {
      id: 2,
      title: "Draft roadmap",
      description: "Outline Phase 2 implementation plan.",
      priority: "Medium",
      dueDate: "",
      status: "todo",
    },
    {
      id: 3,
      title: "Competitor analysis",
      description: "Study Trello, Jira, Linear UX.",
      priority: "Low",
      dueDate: "",
      status: "inprogress",
    },
  ]);

  /* ---------- Add Task ---------- */
  const addTask = ({ title, status }) => {
    const newTask = {
      id: Date.now(),
      title,
      description: "",
      priority: "Low",
      dueDate: "",
      status,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  /* ---------- Update Task ---------- */
  const updateTask = (id, updatedFields) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, ...updatedFields } : task
      )
    );
  };

  /* ---------- Delete Task ---------- */
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  /* ---------- Move Task ---------- */
  const moveTask = (id, newStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: newStatus } : task
      )
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
      <Column
        title="To Do"
        status="todo"
        tasks={tasks}
        addTask={addTask}
        updateTask={updateTask}
        deleteTask={deleteTask}
        moveTask={moveTask}
        dotColor="bg-red-500 text-red-500"
      />

      <Column
        title="In Progress"
        status="inprogress"
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        moveTask={moveTask}
        dotColor="bg-green-400 text-green-400"
      />

      <Column
        title="Done"
        status="done"
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        moveTask={moveTask}
        dotColor="bg-blue-400 text-blue-400"
      />
    </div>
  );
}

export default Board;
