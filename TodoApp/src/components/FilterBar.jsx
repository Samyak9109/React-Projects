const filters = [
  { key: 'all', label: 'All' },
  { key: 'active', label: 'Active' },
  { key: 'completed', label: 'Completed' },
  { key: 'work', label: 'Work' },
  { key: 'personal', label: 'Personal' },
  { key: 'health', label: 'Health' },
]

export default function FilterBar({ filter, setFilter }) {
  return (
    <div className="filter-bar">
      {filters.map(f => (
        <button
          key={f.key}
          className={`filter-chip ${filter === f.key ? 'active' : ''}`}
          onClick={() => setFilter(f.key)}
          id={`filter-${f.key}`}
        >
          {f.label}
        </button>
      ))}
    </div>
  )
}
