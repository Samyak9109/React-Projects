export default function TaskCard({ task, onToggle, onDelete, onArchive, style }) {
  return (
    <div className={`task-card ${task.completed ? 'completed' : ''}`} style={style} id={`task-${task.id}`}>
      <button
        className={`task-checkbox ${task.completed ? 'checked' : ''}`}
        onClick={() => onToggle(task.id)}
        aria-label={task.completed ? 'Mark incomplete' : 'Mark complete'}
      >
        {task.completed && <span className="material-icons-outlined">check</span>}
      </button>

      <div className="task-content">
        <div className="task-title">{task.title}</div>
        <div className="task-meta">
          {task.category && (
            <span className="task-chip category">
              <span className="material-icons-outlined">label</span>
              {task.category}
            </span>
          )}
          {task.priority && (
            <span className={`task-chip priority-${task.priority}`}>
              <span className="material-icons-outlined">flag</span>
              {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
            </span>
          )}
          {task.date && (
            <span className="task-chip date-chip">
              <span className="material-icons-outlined">schedule</span>
              {task.date}
            </span>
          )}
        </div>
      </div>

      <div className="task-actions">
        {onArchive && (
          <button className="task-action-btn archive-btn" onClick={() => onArchive(task.id)} aria-label="Archive task">
            <span className="material-icons-outlined">archive</span>
          </button>
        )}
        <button className="task-action-btn" onClick={() => onDelete(task.id)} aria-label="Delete task">
          <span className="material-icons-outlined">delete</span>
        </button>
      </div>
    </div>
  )
}
