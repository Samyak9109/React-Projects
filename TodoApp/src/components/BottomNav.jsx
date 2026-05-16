export default function BottomNav({ view, setView }) {
  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-items">
        <button
          className={`bottom-nav-item ${view === 'tasks' ? 'active' : ''}`}
          onClick={() => setView('tasks')}
          id="bottom-nav-tasks"
        >
          <span className="material-icons-outlined">check_circle</span>
          Tasks
        </button>
        <button
          className={`bottom-nav-item ${view === 'archive' ? 'active' : ''}`}
          onClick={() => setView('archive')}
          id="bottom-nav-archive"
        >
          <span className="material-icons-outlined">archive</span>
          Archive
        </button>
      </div>
    </nav>
  )
}
