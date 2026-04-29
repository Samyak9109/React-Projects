import React from "react";

const AcceptTask = ({ task, onComplete, onFail }) => {
  return (
    <div
      style={{
        height: "100%",
        width: "300px",
        background: "#141416",
        border: "1px solid #c8ff5744",
        borderRadius: "18px",
        flexShrink: 0,
        padding: "22px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        transition: "border-color 0.2s, transform 0.2s",
        animation: "fadeUp 0.4s ease both",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#c8ff57"; e.currentTarget.style.transform = "translateY(-3px)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#c8ff5744"; e.currentTarget.style.transform = "translateY(0)"; }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span
          style={{
            background: "#c8ff5722",
            border: "1px solid #c8ff57",
            color: "#c8ff57",
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "0.68rem",
            padding: "4px 10px",
            borderRadius: "99px",
            letterSpacing: "0.5px",
          }}
        >
          ◎ ACTIVE
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
        <p style={{ fontSize: "0.82rem", color: "#7a7a8a", lineHeight: 1.6 }}>
          {task.description}
        </p>
      </div>

      <div style={{ display: "flex", gap: "8px", marginTop: "auto" }}>
        <button
          onClick={() => onComplete(task)}
          style={{
            flex: 1,
            background: "#00d266",
            border: "none",
            color: "#000",
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "0.78rem",
            padding: "10px",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "all 0.18s",
          }}
          onMouseEnter={(e) => { e.target.style.background = "#00e872"; }}
          onMouseLeave={(e) => { e.target.style.background = "#00d266"; }}
        >
          ✓ Done
        </button>
        <button
          onClick={() => onFail(task)}
          style={{
            flex: 1,
            background: "transparent",
            border: "1.5px solid #ff5757",
            color: "#ff5757",
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "0.78rem",
            padding: "10px",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "all 0.18s",
          }}
          onMouseEnter={(e) => { e.target.style.background = "#ff5757"; e.target.style.color = "#fff"; }}
          onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.color = "#ff5757"; }}
        >
          ✕ Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
