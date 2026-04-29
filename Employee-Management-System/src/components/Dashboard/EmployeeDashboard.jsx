import React from "react";
import EmployeeHeader from "../others/EmployeeHeader";
import TaskListNum from "../others/TaskListNum";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data, onLogout }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0d0d0f",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: #141416; }
        ::-webkit-scrollbar-thumb { background: #2a2a30; border-radius: 99px; }
      `}</style>
      <EmployeeHeader data={data} onLogout={onLogout} />
      <div style={{ padding: "36px", maxWidth: "1300px", margin: "0 auto" }}>
        <TaskListNum data={data} />
        <TaskList data={data} />
      </div>
    </div>
  );
};

export default EmployeeDashboard;
