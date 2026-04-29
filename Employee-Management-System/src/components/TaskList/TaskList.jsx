import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import NewTask from "./NewTask";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  const auth = useContext(AuthContext);

  const updateTask = (taskTitle, updates) => {
    const employees = auth?.employees || [];
    const updated = employees.map((emp) => {
      if (emp.id !== data.id) return emp;

      const updatedTasks = emp.tasks.map((t) => {
        if (t.title !== taskTitle) return t;
        return { ...t, ...updates };
      });

      // Recalculate counts
      const taskCount = {
        newTask: updatedTasks.filter((t) => t.newTask && !t.active && !t.completed && !t.failed).length,
        active: updatedTasks.filter((t) => t.active).length,
        completed: updatedTasks.filter((t) => t.completed).length,
        failed: updatedTasks.filter((t) => t.failed).length,
      };

      return { ...emp, tasks: updatedTasks, taskCount };
    });
    auth.updateEmployeeData(updated);
  };

  const handleAccept = (task) => {
    updateTask(task.title, { active: true, newTask: false });
  };

  const handleComplete = (task) => {
    updateTask(task.title, { active: false, completed: true, failed: false });
  };

  const handleFail = (task) => {
    updateTask(task.title, { active: false, failed: true, completed: false });
  };

  // Get latest employee data from context
  const employees = auth?.employees || [];
  const currentEmp = employees.find((e) => e.id === data.id) || data;
  const tasks = currentEmp.tasks || [];

  const newTasks = tasks.filter((t) => t.newTask && !t.active && !t.completed && !t.failed);
  const activeTasks = tasks.filter((t) => t.active);
  const completedTasks = tasks.filter((t) => t.completed);
  const failedTasks = tasks.filter((t) => t.failed);

  const handleWheel = (e) => {
    e.preventDefault();
    e.currentTarget.scrollLeft += e.deltaY;
  };

  if (tasks.length === 0) {
    return (
      <div
        style={{
          background: "#141416",
          border: "1px solid #2a2a30",
          borderRadius: "18px",
          padding: "60px",
          textAlign: "center",
          color: "#7a7a8a",
          fontFamily: "'Syne', sans-serif",
        }}
      >
        <div style={{ fontSize: "2rem", marginBottom: "12px" }}>✦</div>
        <div style={{ fontWeight: 700, fontSize: "1.1rem", color: "#f0f0f0", marginBottom: "6px" }}>No tasks yet</div>
        <div style={{ fontSize: "0.85rem" }}>Your assigned tasks will appear here</div>
      </div>
    );
  }

  return (
    <div>
      <div
        onWheel={handleWheel}
        style={{
          display: "flex",
          alignItems: "stretch",
          gap: "16px",
          overflowX: "auto",
          paddingBottom: "16px",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          minHeight: "320px",
        }}
      >
        {newTasks.map((task, i) => (
          <NewTask key={`new-${i}`} task={task} onAccept={handleAccept} />
        ))}
        {activeTasks.map((task, i) => (
          <AcceptTask key={`active-${i}`} task={task} onComplete={handleComplete} onFail={handleFail} />
        ))}
        {completedTasks.map((task, i) => (
          <CompleteTask key={`done-${i}`} task={task} />
        ))}
        {failedTasks.map((task, i) => (
          <FailedTask key={`fail-${i}`} task={task} />
        ))}
      </div>
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

export default TaskList;
