import React from "react";

const NewTask = ({ task, onAccept }) => {
  return (
    <div
      style={{
        height: "100%",
        width: "300px",
        background: "#141416",
        border: "1px solid #7b61ff44",
        borderRadius: "18px",
        flexShrink: 0,
        padding: "22px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        transition: "border-color 0.2s, transform 0.2s",
        animation: "fadeUp 0.4s ease both",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#7b61ff"; e.currentTarget.style.transform = "translateY(-3px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#7b61ff44"; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span
          style={{
            background: "#7b61ff22",
            border: "1px solid #7b61ff",
            color: "#7b61ff",
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "0.68rem",
            padding: "4px 10px",
            borderRadius: "99px",
            letterSpacing: "0.5px",
          }}
        >
          ✦ NEW
        </span>
        <span style={{ fontSize: "0.75rem", color: "#7a7a8a" }}>{task.date}</span>
      </div>

      <div>
        <div
          style={{
            background: "#2a2a30",
            borderRadius: "99px",
            padding: "3px 10px",
            fontSize: "0.7rem",
            color: "#b0b0c0",
            display: "inline-block",
            marginBottom: "10px",
          }}
        >
          {task.category}
        </div>
        <h3
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "#f0f0f0",
            lineHeight: 1.3,
            marginBottom: "8px",
          }}
        >
          {task.title}
        </h3>
        <p style={{ fontSize: "0.82rem", color: "#7a7a8a", lineHeight: 1.6, flexGrow: 1 }}>
          {task.description}
        </p>
      </div>

      <button
        onClick={() => onAccept(task)}
        style={{
          background: "#7b61ff",
          border: "none",
          color: "#fff",
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700,
          fontSize: "0.82rem",
          padding: "10px",
          borderRadius: "10px",
          cursor: "pointer",
          transition: "all 0.18s",
          marginTop: "auto",
          letterSpacing: "0.3px",
        }}
        onMouseEnter={(e) => { e.target.style.background = "#9b81ff"; }}
        onMouseLeave={(e) => { e.target.style.background = "#7b61ff"; }}
      >
        Accept Task →
      </button>
    </div>
  );
};

export default NewTask;
