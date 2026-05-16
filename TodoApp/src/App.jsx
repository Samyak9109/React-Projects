import { useState, useEffect, useCallback } from 'react'
import Sidebar from './components/Sidebar'
import MobileHeader from './components/MobileHeader'
import BottomNav from './components/BottomNav'
import TaskList from './components/TaskList'
import ArchiveView from './components/ArchiveView'
import AddTaskModal from './components/AddTaskModal'
import SearchBar from './components/SearchBar'
import FilterBar from './components/FilterBar'
import StatsRow from './components/StatsRow'
import ProgressBar from './components/ProgressBar'
import './App.css'

const STORAGE_KEY = 'focusflow-tasks'
const THEME_KEY = 'focusflow-theme'

const defaultTasks = [
  { id: '1', title: 'Review Project Proposal', category: 'Work', priority: 'high', date: 'Today', completed: false, archived: false },
  { id: '2', title: 'Submit Expense Reports', category: 'Work', priority: 'medium', date: 'Today', completed: false, archived: false },
  { id: '3', title: 'Grocery Shopping', category: 'Personal', priority: 'low', date: 'Today', completed: false, archived: false },
  { id: '4', title: 'Design Sync with Team', category: 'Work', priority: 'high', date: 'Tomorrow', completed: false, archived: false },
  { id: '5', title: 'Monthly Gym Session', category: 'Health', priority: 'medium', date: 'This Week', completed: false, archived: false },
  { id: '6', title: 'Weekend Grocery Run', category: 'Personal', priority: 'low', date: 'This Week', completed: false, archived: false },
  { id: '7', title: 'Design System Documentation', category: 'Work', priority: 'medium', date: 'This Week', completed: false, archived: false },
]

function getGreeting() {
  const h = new Date().getHours()
  if (h < 12) return 'Good Morning'
  if (h < 17) return 'Good Afternoon'
  return 'Good Evening'
}

function formatDate() {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric',
  })
}

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : defaultTasks
  })
  const [theme, setTheme] = useState(() => localStorage.getItem(THEME_KEY) || 'light')
  const [view, setView] = useState('tasks')
  const [showModal, setShowModal] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  // Persist
  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks)) }, [tasks])
  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = useCallback(() => setTheme(t => t === 'light' ? 'dark' : 'light'), [])

  const addTask = useCallback((task) => {
    setTasks(prev => [{ ...task, id: Date.now().toString(), completed: false, archived: false }, ...prev])
    setShowModal(false)
  }, [])

  const toggleTask = useCallback((id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t))
  }, [])

  const deleteTask = useCallback((id) => {
    setTasks(prev => prev.filter(t => t.id !== id))
  }, [])

  const archiveTask = useCallback((id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, archived: true } : t))
  }, [])

  const restoreTask = useCallback((id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, archived: false } : t))
  }, [])

  const activeTasks = tasks.filter(t => !t.archived)
  const archivedTasks = tasks.filter(t => t.archived)

  const filteredTasks = activeTasks.filter(t => {
    const matchSearch = t.title.toLowerCase().includes(search.toLowerCase())
    const matchFilter = filter === 'all' || t.category.toLowerCase() === filter.toLowerCase() ||
      (filter === 'completed' && t.completed) || (filter === 'active' && !t.completed)
    return matchSearch && matchFilter
  })

  const todayTasks = filteredTasks.filter(t => t.date === 'Today')
  const upcomingTasks = filteredTasks.filter(t => t.date !== 'Today')
  const completedCount = activeTasks.filter(t => t.completed).length
  const totalActive = activeTasks.length
  const progress = totalActive > 0 ? Math.round((completedCount / totalActive) * 100) : 0

  return (
    <div className="app-layout">
      <Sidebar
        view={view}
        setView={setView}
        theme={theme}
        toggleTheme={toggleTheme}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <div className={`sidebar-overlay ${sidebarOpen ? 'show' : ''}`} onClick={() => setSidebarOpen(false)} />

      <MobileHeader onMenuClick={() => setSidebarOpen(true)} theme={theme} toggleTheme={toggleTheme} />

      <main className="main-content">
        {view === 'tasks' ? (
          <>
            <header className="page-header">
              <h1 className="page-greeting">{getGreeting()} ☀️</h1>
              <p className="page-date">{formatDate()}</p>
            </header>

            <StatsRow total={totalActive} completed={completedCount} archived={archivedTasks.length} />
            <ProgressBar progress={progress} completed={completedCount} total={totalActive} />
            <SearchBar search={search} setSearch={setSearch} />
            <FilterBar filter={filter} setFilter={setFilter} />

            <TaskList
              title="Today"
              tasks={todayTasks}
              onToggle={toggleTask}
              onDelete={deleteTask}
              onArchive={archiveTask}
            />
            <TaskList
              title="Upcoming"
              tasks={upcomingTasks}
              onToggle={toggleTask}
              onDelete={deleteTask}
              onArchive={archiveTask}
            />
          </>
        ) : (
          <ArchiveView
            tasks={archivedTasks}
            onRestore={restoreTask}
            onDelete={deleteTask}
          />
        )}
      </main>

      <button className="fab" onClick={() => setShowModal(true)} aria-label="Add new task" id="fab-add-task">
        <span className="material-icons-outlined">add</span>
      </button>

      {showModal && <AddTaskModal onAdd={addTask} onClose={() => setShowModal(false)} />}

      <BottomNav view={view} setView={setView} />
    </div>
  )
}