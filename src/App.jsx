import {h} from "preact";
import Layout from "antd/es/layout";
import { Switch, Route, Link, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const { Content } = Layout;

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Main from "./pages/Main";

import "./App.css";

export default function App() {
  const location = useLocation();

  return (
    <Layout className="layout-base">
      <Link to="/app" />
      <Link to="/admin" />
      <Header />
        <TransitionGroup style={{position: "relative"}}>
          <CSSTransition key={location.pathname.split("/")[1] === ("" || "about" || "login")} classNames="fade" timeout={250}>
            <Switch location={location}>
              <Route path="/" exact render={Home} />
              <Route path="/about" render={About} />
              <Route path="/login" render={Login} />
              <Route path="/app" render={Main} />
              <Route path="/admin" render={Main} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      <Footer />
    </Layout>
  )
}