import TaskCard from './TaskCard'

export default function TaskList({ title, tasks, onToggle, onDelete, onArchive }) {
  if (tasks.length === 0) return null

  return (
    <section className="task-section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <span className="section-count">{tasks.length}</span>
      </div>
      <div className="task-list">
        {tasks.map((task, i) => (
          <TaskCard
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
            onArchive={onArchive}
            style={{ animationDelay: `${i * 0.05}s` }}
          />
        ))}
      </div>
    </section>
  )
}
