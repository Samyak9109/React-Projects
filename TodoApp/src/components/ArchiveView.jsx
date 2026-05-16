import TaskCard from './TaskCard'

export default function ArchiveView({ tasks, onRestore, onDelete }) {
  return (
    <>
      <header className="page-header">
        <h1 className="page-greeting">Archive 📦</h1>
        <p className="page-date">{tasks.length} archived task{tasks.length !== 1 ? 's' : ''}</p>
      </header>

      {tasks.length === 0 ? (
        <div className="empty-state">
          <span className="material-icons-outlined">inventory_2</span>
          <h3>No archived tasks</h3>
          <p>Tasks you archive will appear here.</p>
        </div>
      ) : (
        <div className="task-list">
          {tasks.map((task, i) => (
            <div key={task.id} className="task-card" style={{ animationDelay: `${i * 0.05}s` }} id={`archived-${task.id}`}>
              <button
                className="task-action-btn archive-btn"
                onClick={() => onRestore(task.id)}
                aria-label="Restore task"
                style={{ marginRight: '8px' }}
              >
                <span className="material-icons-outlined">unarchive</span>
              </button>
              <div className="task-content">
                <div className="task-title">{task.title}</div>
                <div className="task-meta">
                  {task.category && <span className="task-chip category">{task.category}</span>}
                </div>
              </div>
              <div className="task-actions" style={{ opacity: 1 }}>
                <button className="task-action-btn" onClick={() => onDelete(task.id)} aria-label="Delete task">
                  <span className="material-icons-outlined">delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
