export default function StatsRow({ total, completed, archived }) {
  return (
    <div className="stats-row">
      <div className="stat-card">
        <div className="stat-number">{total}</div>
        <div className="stat-label">Total</div>
      </div>
      <div className="stat-card">
        <div className="stat-number" style={{ color: 'var(--secondary)' }}>{completed}</div>
        <div className="stat-label">Done</div>
      </div>
      <div className="stat-card">
        <div className="stat-number" style={{ color: 'var(--tertiary)' }}>{total - completed}</div>
        <div className="stat-label">Pending</div>
      </div>
      <div className="stat-card">
        <div className="stat-number" style={{ color: 'var(--outline)' }}>{archived}</div>
        <div className="stat-label">Archived</div>
      </div>
    </div>
  )
}
