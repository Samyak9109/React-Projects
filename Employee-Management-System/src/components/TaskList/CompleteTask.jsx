import React from "react";

const CompleteTask = ({ task }) => {
  return (
    <div
      style={{
        height: "100%",
        width: "300px",
        background: "#141416",
        border: "1px solid #00d26644",
        borderRadius: "18px",
        flexShrink: 0,
        padding: "22px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        opacity: 0.85,
        transition: "opacity 0.2s",
        animation: "fadeUp 0.4s ease both",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.85")}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            background: "#00d26622",
            border: "1px solid #00d266",
            color: "#00d266",
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "0.68rem",
            padding: "4px 10px",
            borderRadius: "99px",
          }}
        >
          ✓ DONE
        </span>
        <span style={{ fontSize: "0.75rem", color: "#7a7a8a" }}>
          {task.date}
        </span>
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
            color: "#7a7a8a",
            lineHeight: 1.3,
            marginBottom: "8px",
            textDecoration: "line-through",
          }}
        >
          {task.title}
        </h3>
        <p style={{ fontSize: "0.82rem", color: "#5a5a6a", lineHeight: 1.6 }}>
          {task.description}
        </p>
      </div>
    </div>
  );
};

export default CompleteTask;
