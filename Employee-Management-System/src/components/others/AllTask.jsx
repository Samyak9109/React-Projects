import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const statusColors = {
  newTask: { bg: "#7b61ff22", border: "#7b61ff", text: "#7b61ff", label: "New" },
  active: { bg: "#c8ff5722", border: "#c8ff57", text: "#c8ff57", label: "Active" },
  completed: { bg: "#00d26622", border: "#00d266", text: "#00d266", label: "Done" },
  failed: { bg: "#ff575722", border: "#ff5757", text: "#ff5757", label: "Failed" },
};

const getStatus = (task) => {
  if (task.completed) return "completed";
  if (task.failed) return "failed";
  if (task.active) return "active";
  return "newTask";
};

const AllTask = () => {
  const auth = useContext(AuthContext);
  const [expandedEmp, setExpandedEmp] = useState(null);

  const employees = auth?.employees || [];

  return (
    <div>
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "1.5rem",
          fontWeight: 800,
          letterSpacing: "-0.5px",
          background: "linear-gradient(90deg, #f0f0f0, #7a7a8a)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "6px",
        }}
      >
        All Tasks
      </h2>
      <p style={{ color: "#7a7a8a", fontSize: "0.88rem", marginBottom: "24px" }}>
        Overview of tasks across your team
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "180px 1fr 120px 100px 100px 100px",
            gap: "16px",
            padding: "10px 20px",
            borderRadius: "10px",
            background: "#1c1c20",
          }}
        >
          {["Employee", "Task", "Category", "New", "Active", "Done / Failed"].map((h) => (
            <div
              key={h}
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "0.7rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1px",
                color: "#7a7a8a",
              }}
            >
              {h}
            </div>
          ))}
        </div>

        {employees.map((emp) => (
          <div key={emp.id}>
            {/* Employee summary row */}
            <div
              onClick={() => setExpandedEmp(expandedEmp === emp.id ? null : emp.id)}
              style={{
                display: "grid",
                gridTemplateColumns: "180px 1fr 120px 100px 100px 100px",
                gap: "16px",
                padding: "14px 20px",
                borderRadius: "12px",
                background: "#141416",
                border: "1px solid #2a2a30",
                cursor: "pointer",
                transition: "border-color 0.2s",
                alignItems: "center",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#7b61ff")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#2a2a30")}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #7b61ff, #c8ff57)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.72rem",
                    color: "#000",
                    flexShrink: 0,
                  }}
                >
                  {emp.firstName.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#f0f0f0" }}>{emp.firstName}</div>
                  <div style={{ fontSize: "0.72rem", color: "#7a7a8a" }}>{emp.tasks.length} tasks</div>
                </div>
              </div>
              <div style={{ color: "#7a7a8a", fontSize: "0.82rem" }}>
                {expandedEmp === emp.id ? "Click to collapse ↑" : "Click to view tasks ↓"}
              </div>
              <div style={{ fontSize: "0.8rem", color: "#7a7a8a" }}>—</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "#7b61ff" }}>{emp.taskCount.newTask}</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "#c8ff57" }}>{emp.taskCount.active}</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: "#f0f0f0" }}>
                <span style={{ color: "#00d266" }}>{emp.taskCount.completed}</span>
                <span style={{ color: "#7a7a8a", margin: "0 4px" }}>/</span>
                <span style={{ color: "#ff5757" }}>{emp.taskCount.failed}</span>
              </div>
            </div>

            {/* Expanded task rows */}
            {expandedEmp === emp.id && (
              <div
                style={{
                  marginTop: "4px",
                  marginLeft: "16px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  animation: "fadeUp 0.25s ease",
                  paddingBottom: "6px",
                }}
              >
                {emp.tasks.map((task, idx) => {
                  const status = getStatus(task);
                  const sc = statusColors[status];
                  return (
                    <div
                      key={idx}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "180px 1fr 120px auto",
                        gap: "16px",
                        padding: "12px 20px",
                        borderRadius: "10px",
                        background: "#1c1c20",
                        border: `1px solid ${sc.border}33`,
                        alignItems: "center",
                      }}
                    >
                      <div style={{ fontSize: "0.78rem", color: "#7a7a8a", paddingLeft: "42px" }}>
                        {task.date}
                      </div>
                      <div>
                        <div style={{ fontWeight: 500, fontSize: "0.88rem", color: "#f0f0f0" }}>{task.title}</div>
                        <div style={{ fontSize: "0.75rem", color: "#7a7a8a", marginTop: "2px" }}>{task.description}</div>
                      </div>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          background: "#2a2a30",
                          borderRadius: "99px",
                          padding: "4px 10px",
                          fontSize: "0.72rem",
                          color: "#b0b0c0",
                        }}
                      >
                        {task.category}
                      </div>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "5px",
                          background: sc.bg,
                          border: `1px solid ${sc.border}`,
                          borderRadius: "99px",
                          padding: "4px 12px",
                          fontSize: "0.72rem",
                          color: sc.text,
                          fontFamily: "'Syne', sans-serif",
                          fontWeight: 700,
                        }}
                      >
                        <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: sc.text }} />
                        {sc.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
