import {h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { Link } from "react-router-dom";
import Layout from "antd/es/layout";

const { Header } = Layout;

export default function header() {
  const [admin, setAdmin] = useState(false);
  const [student, setStudent] = useState(false);

  useEffect(() => {
    setStudent(window.location.href.includes("/app"));
    setAdmin(window.location.href.includes("/admin"));
  }, [global.window && window.location.href]);

  return (
    <Header className="layout-main" style={{ display: "flex", flexDirection: "row" }}>
      <h1 style={{ color: "white" }}>EPSOJ {admin ? "ADMIN" : "STUDENT" }</h1>
      <nav>
        <Link to="/">
          <a>Home</a>
        </Link>
        <Link to="/about">
          <a>About</a>
        </Link>
        {!admin && !student ? (
          <Link to="/login">
            <a>Login</a>
          </Link>
        ) : (
          <Link href="/">
            <a>Logout</a>
          </Link>
        )}
      </nav>
      <style>{`
        .layout-main nav {
          margin-left: auto;
        }
        .layout-main a {
          margin-right: 0.5rem;
          white-space: nowrap;
        }
        .layout-main a:last-child {
          margin-right: 0;
        }
      `}</style>
    </Header>
  )
}
