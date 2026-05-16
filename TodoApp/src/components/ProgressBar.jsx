export default function ProgressBar({ progress, completed, total }) {
  return (
    <div className="progress-bar-container">
      <div className="progress-label">
        <span>Daily Progress</span>
        <span>{completed}/{total} tasks · {progress}%</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}
