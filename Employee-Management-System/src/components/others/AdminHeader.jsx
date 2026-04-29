import React from "react";

const AdminHeader = ({ onLogout }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 36px",
        borderBottom: "1px solid #2a2a30",
        background: "#141416",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "#c8ff57",
            boxShadow: "0 0 12px #c8ff57",
          }}
        />
        <span
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "1.2rem",
            letterSpacing: "-0.5px",
            color: "#f0f0f0",
          }}
        >
          TaskFlow <span style={{ color: "#7a7a8a", fontWeight: 400 }}>Admin</span>
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <span
          style={{
            background: "#c8ff57",
            color: "#000",
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "0.72rem",
            padding: "4px 10px",
            borderRadius: "99px",
            letterSpacing: "0.5px",
          }}
        >
          ADMIN
        </span>
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #7b61ff, #c8ff57)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "0.8rem",
            color: "#000",
            cursor: "pointer",
          }}
        >
          AD
        </div>
        <button
          onClick={onLogout}
          style={{
            background: "transparent",
            border: "1.5px solid #ff5757",
            color: "#ff5757",
            fontFamily: "'Syne', sans-serif",
            fontSize: "0.8rem",
            fontWeight: 600,
            padding: "8px 16px",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "all 0.18s",
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "#ff5757";
            e.target.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "transparent";
            e.target.style.color = "#ff5757";
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default AdminHeader;
