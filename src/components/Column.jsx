import { useState } from "react";
import TaskCard from "./TaskCard";

function Column({ title, status, tasks, addTask, editTask }) {
  const [showInput, setShowInput] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");

  const filteredTasks = tasks.filter(task => task.status === status);

  const handleAdd = () => {
    if (!taskTitle.trim()) return;
    addTask(taskTitle);
    setTaskTitle("");
    setShowInput(false);
  };

  return (
    <div className="bg-white rounded-lg p-4 w-80 flex flex-col shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-bold uppercase tracking-wide text-gray-700">
          {title}
        </h2>
        {addTask && (
          <button
            className="text-blue-600 text-sm font-medium"
            onClick={() => setShowInput(!showInput)}
          >
            + Add
          </button>
        )}
      </div>

      {/* Add Task */}
      {showInput && (
        <div className="mb-3">
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Task title"
            className="w-full border rounded px-2 py-1 text-sm mb-2"
          />
          <button
            onClick={handleAdd}
            className="w-full bg-blue-600 text-white text-sm py-1 rounded"
          >
            Add Task
          </button>
        </div>
      )}

      {/* Tasks */}
      <div className="flex-1 space-y-3">
        {filteredTasks.length === 0 ? (
          <p className="text-gray-400 text-sm text-center mt-10">
            No tasks here yet
          </p>
        ) : (
          filteredTasks.map(task => (
            <TaskCard
              key={task.id}
              id={task.id}
              title={task.title}
              priority={task.priority}
              onEdit={editTask}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Column;
