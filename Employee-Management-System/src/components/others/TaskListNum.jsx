import React from "react";

const statCards = [
  { key: "newTask", label: "New Tasks", color: "#7b61ff", icon: "✦" },
  { key: "active", label: "Active", color: "#c8ff57", icon: "◎" },
  { key: "completed", label: "Completed", color: "#00d266", icon: "✓" },
  { key: "failed", label: "Failed", color: "#ff5757", icon: "✕" },
];

const TaskListNum = ({ data }) => {
  return (
    <div>
      <div style={{ marginBottom: "8px" }}>
        <h1
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "2rem",
            fontWeight: 800,
            letterSpacing: "-1px",
            background: "linear-gradient(90deg, #f0f0f0, #7a7a8a)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "4px",
          }}
        >
          My Tasks
        </h1>
        <p style={{ color: "#7a7a8a", fontSize: "0.88rem", marginBottom: "24px" }}>
          Here's your task overview, {data?.firstName}.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "36px" }}>
        {statCards.map(({ key, label, color, icon }) => (
          <div
            key={key}
            style={{
              background: "#141416",
              border: "1px solid #2a2a30",
              borderRadius: "16px",
              padding: "22px 24px",
              transition: "border-color 0.2s, transform 0.2s",
              cursor: "default",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = color;
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#2a2a30";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* Background glow */}
            <div
              style={{
                position: "absolute",
                top: "-20px",
                right: "-20px",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: `${color}15`,
                pointerEvents: "none",
              }}
            />
            <div style={{ fontSize: "1.1rem", marginBottom: "10px", color }}>{icon}</div>
            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "2.2rem",
                fontWeight: 800,
                color,
                marginBottom: "4px",
                lineHeight: 1,
              }}
            >
              {data?.taskCount?.[key] ?? 0}
            </div>
            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "1px",
                color: "#7a7a8a",
              }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskListNum;
