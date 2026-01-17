import { useState } from "react";

function TaskCard({ id, title, priority, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleSave = () => {
    if (!newTitle.trim()) return;
    onEdit(id, newTitle);
    setIsEditing(false);
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-md p-3 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold text-gray-500">
          {priority} Priority
        </span>
        <button
          className="text-gray-400 hover:text-gray-600"
          onClick={() => setIsEditing(true)}
        >
          ⋮
        </button>
      </div>

      {isEditing ? (
        <div>
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="w-full border rounded px-2 py-1 text-sm mb-2"
          />
          <button
            onClick={handleSave}
            className="w-full bg-blue-600 text-white text-sm py-1 rounded"
          >
            Save
          </button>
        </div>
      ) : (
        <h3 className="text-sm font-medium text-gray-800">
          {title}
        </h3>
      )}
    </div>
  );
}

export default TaskCard;
