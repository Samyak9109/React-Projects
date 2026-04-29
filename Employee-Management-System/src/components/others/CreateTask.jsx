import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const inputStyle = {
  background: "#1c1c20",
  border: "1.5px solid #2a2a30",
  borderRadius: "12px",
  color: "#f0f0f0",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "0.92rem",
  padding: "13px 16px",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
  width: "100%",
};

const labelStyle = {
  fontFamily: "'Syne', sans-serif",
  fontSize: "0.72rem",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "1.2px",
  color: "#7a7a8a",
  marginBottom: "8px",
  display: "block",
};

const PRIORITIES = ["Low", "Medium", "High", "Critical"];

const CreateTask = () => {
  const auth = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [toast, setToast] = useState({ show: false, message: "", type: "success" });

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "success" }), 3000);
  };

  const resetForm = () => {
    setTitle(""); setDate(""); setAssignTo(""); setCategory(""); setDescription(""); setPriority("Low");
  };

  const submitForm = () => {
    if (!title.trim()) {
      showToast("Task title is required!", "error");
      return;
    }
    if (!assignTo.trim()) {
      showToast("Please assign this task to someone!", "error");
      return;
    }

    const employees = auth?.employees || [];
    const target = employees.find(
      (e) => e.firstName.toLowerCase() === assignTo.trim().toLowerCase()
    );

    if (!target) {
      showToast(`Employee "${assignTo}" not found!`, "error");
      return;
    }

    const newTask = {
      active: false,
      newTask: true,
      completed: false,
      failed: false,
      title: title.trim(),
      description: description.trim(),
      date: date || new Date().toISOString().split("T")[0],
      category: category.trim() || "General",
      priority,
    };

    const updated = employees.map((e) => {
      if (e.id === target.id) {
        return {
          ...e,
          tasks: [...e.tasks, newTask],
          taskCount: { ...e.taskCount, newTask: e.taskCount.newTask + 1 },
        };
      }
      return e;
    });

    auth.updateEmployeeData(updated);
    showToast(`Task assigned to ${target.firstName} successfully!`);
    resetForm();
  };

  // Stat counts
  const employees = auth?.employees || [];
  const allTasks = employees.flatMap((e) => e.tasks);
  const stats = {
    active: allTasks.filter((t) => t.active).length,
    newTask: allTasks.filter((t) => t.newTask && !t.active && !t.completed && !t.failed).length,
    completed: allTasks.filter((t) => t.completed).length,
    failed: allTasks.filter((t) => t.failed).length,
  };

  return (
    <>
      {/* Stats Row */}
      <div style={{ display: "flex", gap: "16px", marginBottom: "32px", flexWrap: "wrap" }}>
        {[
          { label: "Active Tasks", value: stats.active, color: "#c8ff57" },
          { label: "New Tasks", value: stats.newTask, color: "#7b61ff" },
          { label: "Failed", value: stats.failed, color: "#ff5757" },
          { label: "Completed", value: stats.completed, color: "#f0f0f0" },
        ].map((s) => (
          <div
            key={s.label}
            style={{
              flex: "1",
              minWidth: "120px",
              background: "#141416",
              border: "1px solid #2a2a30",
              borderRadius: "14px",
              padding: "18px 22px",
              transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#7b61ff")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#2a2a30")}
          >
            <div style={{ fontSize: "0.72rem", color: "#7a7a8a", textTransform: "uppercase", letterSpacing: "1px", fontFamily: "'Syne', sans-serif", fontWeight: 600 }}>{s.label}</div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.8rem", fontWeight: 800, marginTop: "6px", color: s.color }}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Page title */}
      <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "2rem", fontWeight: 800, letterSpacing: "-1px", marginBottom: "6px", background: "linear-gradient(90deg, #f0f0f0, #7a7a8a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
        Create Task
      </h1>
      <p style={{ color: "#7a7a8a", fontSize: "0.88rem", marginBottom: "28px" }}>
        Assign and configure a new task for your team. · Available: {employees.map(e => e.firstName).join(", ")}
      </p>

      {/* Form Card */}
      <div
        style={{
          background: "#141416",
          border: "1px solid #2a2a30",
          borderRadius: "20px",
          padding: "36px",
          animation: "fadeUp 0.4s ease both",
          marginBottom: "40px",
        }}
      >
        {/* Row 1: Title, Date, AssignTo */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "24px", marginBottom: "24px" }}>
          <div>
            <label style={labelStyle}>Task Title</label>
            <input
              style={inputStyle}
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Design landing page"
              onFocus={(e) => { e.target.style.borderColor = "#c8ff57"; e.target.style.boxShadow = "0 0 0 3px rgba(200,255,87,0.08)"; }}
              onBlur={(e) => { e.target.style.borderColor = "#2a2a30"; e.target.style.boxShadow = "none"; }}
            />
          </div>
          <div>
            <label style={labelStyle}>Due Date</label>
            <input
              style={{ ...inputStyle, colorScheme: "dark" }}
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              onFocus={(e) => { e.target.style.borderColor = "#c8ff57"; e.target.style.boxShadow = "0 0 0 3px rgba(200,255,87,0.08)"; }}
              onBlur={(e) => { e.target.style.borderColor = "#2a2a30"; e.target.style.boxShadow = "none"; }}
            />
          </div>
          <div>
            <label style={labelStyle}>Assign To</label>
            <input
              style={inputStyle}
              type="text"
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              placeholder="Employee first name"
              onFocus={(e) => { e.target.style.borderColor = "#c8ff57"; e.target.style.boxShadow = "0 0 0 3px rgba(200,255,87,0.08)"; }}
              onBlur={(e) => { e.target.style.borderColor = "#2a2a30"; e.target.style.boxShadow = "none"; }}
            />
          </div>
        </div>

        {/* Row 2: Category + Priority */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "24px" }}>
          <div>
            <label style={labelStyle}>Category</label>
            <input
              style={inputStyle}
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="design, dev, marketing…"
              onFocus={(e) => { e.target.style.borderColor = "#c8ff57"; e.target.style.boxShadow = "0 0 0 3px rgba(200,255,87,0.08)"; }}
              onBlur={(e) => { e.target.style.borderColor = "#2a2a30"; e.target.style.boxShadow = "none"; }}
            />
          </div>
          <div>
            <label style={labelStyle}>Priority</label>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "2px" }}>
              {PRIORITIES.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPriority(p)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "99px",
                    border: priority === p ? "1.5px solid #c8ff57" : "1.5px solid #2a2a30",
                    background: priority === p ? "#c8ff57" : "transparent",
                    color: priority === p ? "#000" : "#7a7a8a",
                    fontSize: "0.8rem",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: priority === p ? 600 : 400,
                    cursor: "pointer",
                    transition: "all 0.18s",
                  }}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Description */}
        <div style={{ marginBottom: "28px" }}>
          <label style={labelStyle}>Description</label>
          <textarea
            style={{ ...inputStyle, minHeight: "140px", resize: "none" }}
            value={description}
            onChange={(e) => setDescription(e.target.value.slice(0, 500))}
            placeholder="Describe the task in detail — objectives, deliverables, and any special requirements…"
            onFocus={(e) => { e.target.style.borderColor = "#c8ff57"; e.target.style.boxShadow = "0 0 0 3px rgba(200,255,87,0.08)"; }}
            onBlur={(e) => { e.target.style.borderColor = "#2a2a30"; e.target.style.boxShadow = "none"; }}
          />
        </div>

        <hr style={{ border: "none", borderTop: "1px solid #2a2a30", marginBottom: "24px" }} />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
          <span style={{ fontSize: "0.78rem", color: "#7a7a8a" }}>{description.length} / 500 characters</span>
          <div style={{ display: "flex", gap: "12px" }}>
            <button
              onClick={resetForm}
              style={{
                background: "transparent",
                border: "1.5px solid #2a2a30",
                color: "#7a7a8a",
                fontFamily: "'Syne', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 600,
                padding: "11px 22px",
                borderRadius: "12px",
                cursor: "pointer",
                transition: "all 0.18s",
              }}
              onMouseEnter={(e) => { e.target.style.borderColor = "#f0f0f0"; e.target.style.color = "#f0f0f0"; }}
              onMouseLeave={(e) => { e.target.style.borderColor = "#2a2a30"; e.target.style.color = "#7a7a8a"; }}
            >
              Clear
            </button>
            <button
              onClick={submitForm}
              style={{
                background: "#c8ff57",
                border: "none",
                color: "#0d0d0f",
                fontFamily: "'Syne', sans-serif",
                fontSize: "0.9rem",
                fontWeight: 800,
                padding: "12px 28px",
                borderRadius: "12px",
                cursor: "pointer",
                transition: "all 0.2s",
                letterSpacing: "0.3px",
                boxShadow: "0 0 20px rgba(200,255,87,0.2)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#d9ff6e"; e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 4px 28px rgba(200,255,87,0.3)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#c8ff57"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 0 20px rgba(200,255,87,0.2)"; }}
            >
              ↓ Create Task
            </button>
          </div>
        </div>
      </div>

      {/* Toast */}
      {toast.show && (
        <div
          style={{
            position: "fixed",
            bottom: "32px",
            right: "32px",
            background: "#141416",
            border: `1px solid ${toast.type === "error" ? "#ff5757" : "#c8ff57"}`,
            color: "#f0f0f0",
            padding: "14px 22px",
            borderRadius: "14px",
            fontSize: "0.88rem",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            animation: "slideIn 0.3s ease",
            zIndex: 100,
          }}
        >
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: toast.type === "error" ? "#ff5757" : "#c8ff57" }} />
          {toast.message}
        </div>
      )}

      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
        @keyframes slideIn { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        input::placeholder, textarea::placeholder { color: #40404d !important; }
        input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(0.4); }
      `}</style>
    </>
  );
};

export default CreateTask;
