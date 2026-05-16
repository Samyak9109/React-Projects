export default function SearchBar({ search, setSearch }) {
  return (
    <div className="search-bar">
      <span className="material-icons-outlined">search</span>
      <input
        className="search-input"
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        id="search-input"
      />
    </div>
  )
}
