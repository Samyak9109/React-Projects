import React from "react";
import AdminHeader from "../others/AdminHeader";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

const AdminDashboard = ({ onLogout }) => {
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
        ::-webkit-scrollbar-thumb:hover { background: #3a3a44; }
      `}</style>
      <AdminHeader onLogout={onLogout} />
      <div style={{ padding: "40px 36px", maxWidth: "1300px", margin: "0 auto" }}>
        <CreateTask />
        <AllTask />
      </div>
    </div>
  );
};

export default AdminDashboard;
