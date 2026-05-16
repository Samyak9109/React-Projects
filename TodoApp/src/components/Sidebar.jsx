export default function Sidebar({ view, setView, theme, toggleTheme, isOpen, onClose }) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-logo">FocusFlow</div>
      <div className="sidebar-subtitle">Personal Tasks</div>

      <nav className="sidebar-nav">
        <button
          className={`sidebar-nav-item ${view === 'tasks' ? 'active' : ''}`}
          onClick={() => { setView('tasks'); onClose(); }}
          id="nav-tasks"
        >
          <span className="material-icons-outlined">check_circle</span>
          Tasks
        </button>
        <button
          className={`sidebar-nav-item ${view === 'archive' ? 'active' : ''}`}
          onClick={() => { setView('archive'); onClose(); }}
          id="nav-archive"
        >
          <span className="material-icons-outlined">archive</span>
          Archive
        </button>
      </nav>

      <div className="sidebar-footer">
        <div className="theme-toggle" onClick={toggleTheme} role="button" tabIndex={0} id="theme-toggle">
          <div className="theme-toggle-track">
            <div className="theme-toggle-thumb" />
          </div>
          <span className="theme-label">{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
        </div>
      </div>
    </aside>
  )
}