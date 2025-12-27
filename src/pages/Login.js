import React, { useState } from "react";
import api from "../api/client";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  const { login } = useAuth();
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    setBusy(true);

    try {
      const resp = await api("/auth/login", {
        method: "POST",
        body: { email, password },
      });
      login(resp);
      nav("/");
    } catch (error) {
      console.error("Login failed", error);
      setErr(error.message || "Invalid email or password");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="card card-lg">
        <p className="muted">Login to manage your tasks</p>

        {err && <div className="alert">{err}</div>}

        <form className="form" onSubmit={submit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="primary" type="submit" disabled={busy}>
            {busy ? "Logging in..." : "Login"}
          </button>

          <div className="divider" />

          <p className="muted" style={{ textAlign: "center" }}>
            Don’t have an account?{" "}
            <Link to="/register" className="btn-link">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}