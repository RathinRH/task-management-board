import { useState } from "react";

function TaskCard({ task, updateTask, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);
  const [dueDate, setDueDate] = useState(task.dueDate);

  const isDone = task.status === "done";

  const handleDragStart = (e) => {
    if (isEditing) return;
    e.dataTransfer.setData("taskId", task.id);
  };

  const handleSave = () => {
    updateTask(task.id, {
      title,
      description,
      priority,
      dueDate,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTitle(task.title);
    setDescription(task.description);
    setPriority(task.priority);
    setDueDate(task.dueDate);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm("Delete this task?")) {
      deleteTask(task.id);
    }
  };

  const priorityColor =
    priority === "High"
      ? "bg-[#ff4d6d]"
      : priority === "Medium"
      ? "bg-[#3ccfcf]"
      : "bg-[#1aa3ff]";

  return (
    <div
      draggable={!isEditing}
      onDragStart={handleDragStart}
      className={`
        task-card relative rounded-2xl p-6 text-white
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-2xl
        ${priorityColor}
        ${isEditing ? "cursor-default" : "cursor-grab active:cursor-grabbing"}
        ${isDone ? "opacity-85" : ""}
      `}
    >

      {/* 🗑 DELETE — TOP RIGHT */}
      <button
  onClick={handleDelete}
  title="Delete task"
  className="absolute top-3 right-3
             w-8 h-8 rounded-full
             flex items-center justify-center
             bg-black/20 backdrop-blur-md
             text-white/60
             hover:bg-red-500 hover:text-white
             hover:shadow-[0_0_10px_rgba(239,68,68,0.7)]
             transition-all duration-200"
>
  🗑
</button>



    <div className="flex items-center gap-2 text-xs font-bold mb-2">
  <span className="opacity-80">ID: {task.id}</span>

  {isDone && (
    <span
      className="flex items-center justify-center
                 w-5 h-5 rounded-full
                 bg-green-500 text-white
                 text-[11px] font-extrabold
                 shadow-[0_0_8px_rgba(34,197,94,0.8)]"
      title="Completed"
    >
      ✓
    </span>
  )}
</div>

      {/* Title */}
      {isEditing ? (
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-black/20 rounded-lg px-3 py-2 mb-2
                     text-white focus:outline-none"
        />
      ) : (
        <h3
          onClick={() => setIsEditing(true)}
          className="font-semibold text-lg mb-2 cursor-pointer"
        >
          {task.title}
        </h3>
      )}

      {/* Description */}
      {isEditing ? (
        <textarea
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full bg-black/20 rounded-lg px-3 py-2 mb-3
                     text-white resize-none focus:outline-none"
        />
      ) : (
        <p
          onClick={() => setIsEditing(true)}
          className="text-white/80 text-sm mb-3 cursor-pointer"
        >
          {task.description || "Add description"}
        </p>
      )}

      {/* Priority */}
      {isEditing ? (
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full bg-black/20 rounded-lg px-3 py-2 mb-2
                     text-white focus:outline-none"
        >
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
      ) : (
        <p className="text-xs font-bold opacity-90 mb-1">
          Priority: {priority}
        </p>
      )}

      {/* Due Date */}
      {isEditing ? (
        <input
          type="date"
          value={dueDate || ""}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full bg-black/20 rounded-lg px-3 py-2
                     text-white focus:outline-none"
        />
      ) : (
        <p className="text-xs opacity-80">
          {dueDate ? `Due: ${dueDate}` : "No due date"}
        </p>
      )}

      {/* Actions */}
      {isEditing && (
        <div className="flex gap-3 mt-4">
          <button
            onClick={handleSave}
            className="flex-1 bg-white text-black
                       text-xs font-bold py-2 rounded-lg"
          >
            Save
          </button>
          <button
            onClick={handleCancel}
            className="flex-1 bg-black/30 text-white
                       text-xs py-2 rounded-lg"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default TaskCard;
