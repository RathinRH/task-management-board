import { useState } from "react";
import TaskCard from "./TaskCard";

function Column({
  title,
  status,
  tasks,
  addTask,
  updateTask,
  deleteTask,
  moveTask,
  dotColor = "bg-slate-400",
}) {
  const [showInput, setShowInput] = useState(false);
  const [taskTitle, setTaskTitle] = useState("");

  const filteredTasks = tasks.filter((task) => task.status === status);

  /* ---------- Drag & Drop ---------- */
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    const taskId = e.dataTransfer.getData("taskId");
    if (taskId) {
      moveTask(Number(taskId), status);
    }
  };

  /* ---------- Add Task ---------- */
  const handleAddTask = () => {
    if (!taskTitle.trim()) return;

    addTask({
      title: taskTitle,
      status,
    });

    setTaskTitle("");
    setShowInput(false);
  };

  return (
    <div
      className="flex flex-col h-full rounded-3xl bg-[#0b1624]
                 border border-white/5 overflow-hidden"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {/* ================= COLUMN HEADER ================= */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <span
  className={`w-2.5 h-2.5 rounded-full ${dotColor}
              shadow-[0_0_10px_currentColor]`}
/>

          <h2 className="text-xs md:text-sm font-extrabold tracking-[0.35em] uppercase text-slate-300">
            {title}
          </h2>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10 text-slate-400">
            {filteredTasks.length}
          </span>
        </div>

        {addTask && (
          <button
            onClick={() => setShowInput((prev) => !prev)}
            className="text-slate-400 hover:text-white text-lg font-bold"
          >
            +
          </button>
        )}
      </div>

      {/* ================= ADD TASK INPUT ================= */}
      {showInput && (
        <div className="px-6 pt-4">
          <input
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Enter task title"
            className="w-full bg-transparent border border-white/20 rounded-xl
                       px-4 py-2 text-sm text-white
                       placeholder-slate-500
                       focus:outline-none focus:border-primary
                       focus:ring-1 focus:ring-primary"
          />
          <div className="flex gap-2 mt-3">
            <button
              onClick={handleAddTask}
              className="flex-1 bg-primary text-background-dark
                         text-xs font-bold py-2 rounded-xl"
            >
              Add
            </button>
            <button
              onClick={() => {
                setShowInput(false);
                setTaskTitle("");
              }}
              className="flex-1 bg-white/10 text-white
                         text-xs py-2 rounded-xl hover:bg-white/20"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* ================= TASK LIST ================= */}
      <div className="flex-1 px-6 py-6 space-y-4 overflow-y-auto custom-scrollbar">
        {filteredTasks.length === 0 ? (
          <p className="text-slate-500 text-sm text-center mt-10">
            No tasks here
          </p>
        ) : (
          filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              updateTask={updateTask}
              deleteTask={deleteTask}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Column;
