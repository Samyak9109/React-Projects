import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shake, setShake] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    const ok = handleLogin(email, password);
    if (!ok) {
      setShake(true);
      setTimeout(() => setShake(false), 600);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0d0d0f",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'DM Sans', sans-serif",
        padding: "20px",
      }}
    >
      {/* Ambient glow */}
      <div
        style={{
          position: "fixed",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          background: "radial-gradient(ellipse, rgba(200,255,87,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          background: "#141416",
          border: "1px solid #2a2a30",
          borderRadius: "24px",
          padding: "48px 44px",
          width: "100%",
          maxWidth: "440px",
          animation: shake ? "shake 0.5s ease" : "fadeUp 0.5s ease both",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "20%",
            right: "20%",
            height: "1px",
            background: "linear-gradient(90deg, transparent, #c8ff57, transparent)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: "#c8ff57",
              boxShadow: "0 0 16px #c8ff57",
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
            TaskFlow
          </span>
          <span
            style={{
              background: "#c8ff57",
              color: "#000",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              fontSize: "0.65rem",
              padding: "2px 8px",
              borderRadius: "99px",
              letterSpacing: "0.5px",
            }}
          >
            ADMIN
          </span>
        </div>

        <h1
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "1.9rem",
            fontWeight: 800,
            letterSpacing: "-1px",
            marginBottom: "6px",
            background: "linear-gradient(90deg, #f0f0f0, #7a7a8a)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Welcome back
        </h1>
        <p style={{ color: "#7a7a8a", fontSize: "0.88rem", marginBottom: "36px" }}>
          Sign in to your workspace
        </p>

        <form onSubmit={submitHandler} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1.2px",
                color: "#7a7a8a",
              }}
            >
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="admin@example.com"
              style={{
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
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#c8ff57";
                e.target.style.boxShadow = "0 0 0 3px rgba(200,255,87,0.08)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#2a2a30";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "0.72rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "1.2px",
                color: "#7a7a8a",
              }}
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              style={{
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
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#c8ff57";
                e.target.style.boxShadow = "0 0 0 3px rgba(200,255,87,0.08)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#2a2a30";
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          <div style={{ marginTop: "4px", color: "#5a5a6a", fontSize: "0.8rem" }}>
            Admin: <span style={{ color: "#7a7a8a" }}>admin@example.com</span> · Employee: <span style={{ color: "#7a7a8a" }}>em@ex.com</span> · pw: 123
          </div>

          <button
            type="submit"
            style={{
              background: "#c8ff57",
              border: "none",
              color: "#0d0d0f",
              fontFamily: "'Syne', sans-serif",
              fontSize: "0.9rem",
              fontWeight: 800,
              padding: "14px 28px",
              borderRadius: "12px",
              cursor: "pointer",
              transition: "all 0.2s",
              letterSpacing: "0.3px",
              boxShadow: "0 0 24px rgba(200,255,87,0.2)",
              marginTop: "6px",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#d9ff6e";
              e.target.style.transform = "translateY(-1px)";
              e.target.style.boxShadow = "0 4px 28px rgba(200,255,87,0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "#c8ff57";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 0 24px rgba(200,255,87,0.2)";
            }}
          >
            Sign In →
          </button>
        </form>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-5px); }
          80% { transform: translateX(5px); }
        }
        input::placeholder { color: #40404d !important; }
      `}</style>
    </div>
  );
};

export default Login;
