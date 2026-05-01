import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const count = useSelector((s) => s.collection.items.length);

  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 40px",
      borderBottom: "1px solid var(--border)",
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: "rgba(8,11,20,0.85)",
      backdropFilter: "blur(16px)",
    }}>
      <NavLink to="/" style={{ textDecoration: "none" }}>
        <span className="logo">MediaVault</span>
      </NavLink>

      <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
        <NavLink
          to="/"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
        >
          Explore
        </NavLink>
        <NavLink
          to="/collections"
          className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          style={{ display: "flex", alignItems: "center", gap: "6px" }}
        >
          Collection
          {count > 0 && (
            <span style={{
              background: "var(--accent)",
              color: "white",
              fontSize: "0.65rem",
              fontWeight: 700,
              padding: "2px 6px",
              borderRadius: "100px",
              fontFamily: "var(--font-display)",
            }}>
              {count}
            </span>
          )}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
