export default function MobileHeader({ onMenuClick, theme, toggleTheme }) {
  return (
    <div className="mobile-header">
      <button className="hamburger" onClick={onMenuClick} aria-label="Open menu" id="mobile-menu-btn">
        <span className="material-icons-outlined">menu</span>
      </button>
      <span className="mobile-logo">FocusFlow</span>
      <button className="hamburger" onClick={toggleTheme} aria-label="Toggle theme" id="mobile-theme-btn">
        <span className="material-icons-outlined">{theme === 'dark' ? 'light_mode' : 'dark_mode'}</span>
      </button>
    </div>
  )
}
