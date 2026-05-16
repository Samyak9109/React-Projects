import { useState } from 'react'

const categories = ['Work', 'Personal', 'Health', 'Finance', 'Learning']
const priorities = ['low', 'medium', 'high']
const schedules = ['Today', 'Tomorrow', 'This Week', 'Next Week']

export default function AddTaskModal({ onAdd, onClose }) {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [priority, setPriority] = useState('')
  const [date, setDate] = useState('Today')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return
    onAdd({ title: title.trim(), category, priority, date })
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h2 className="modal-title">New Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Task Name</label>
            <input
              className="form-input"
              type="text"
              placeholder="What needs to be done?"
              value={title}
              onChange={e => setTitle(e.target.value)}
              autoFocus
              id="input-task-title"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Category</label>
            <div className="chip-select">
              {categories.map(c => (
                <button
                  key={c}
                  type="button"
                  className={`chip-option ${category === c ? 'selected' : ''}`}
                  onClick={() => setCategory(category === c ? '' : c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Schedule</label>
            <div className="chip-select">
              {schedules.map(s => (
                <button
                  key={s}
                  type="button"
                  className={`chip-option ${date === s ? 'selected' : ''}`}
                  onClick={() => setDate(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Priority</label>
            <div className="chip-select">
              {priorities.map(p => (
                <button
                  key={p}
                  type="button"
                  className={`chip-option ${priority === p ? 'selected' : ''}`}
                  onClick={() => setPriority(priority === p ? '' : p)}
                >
                  {p.charAt(0).toUpperCase() + p.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="modal-actions">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn btn-primary" id="btn-add-task">Add Task</button>
          </div>
        </form>
      </div>
    </div>
  )
}
