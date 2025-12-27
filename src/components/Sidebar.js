import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ open, onClose }) {
  return (
    <>
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="brand">Task Manager</div>

        <nav style={{ marginTop: 8 }}>
          <NavLink to="/" className="side-link" onClick={onClose}>Dashboard</NavLink>
          <NavLink to="/tasks" className="side-link" onClick={onClose}>Tasks</NavLink>
          <NavLink to="/tasks/new" className="side-link" onClick={onClose}>Create Task</NavLink>
          <NavLink to="/analytics" className="side-link" onClick={onClose}>Analytics</NavLink>
          <NavLink to="/profile" className="side-link" onClick={onClose}>Profile</NavLink>
        </nav>

        <div style={{ flex: 1 }} />
        <div style={{ padding: 18, color: 'var(--muted)' }}>
        © {new Date().getFullYear()} • <span style={{color:'var(--accent)'}}>Venkatesh T</span> • Built with ❤️
      </div>
      </aside>

      {open && <div className="sidebar-backdrop" onClick={onClose} />}
    </>
  );
}