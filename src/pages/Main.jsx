import { h } from "preact";
import { Layout, Menu, Breadcrumb } from "antd";
import { useState, useEffect } from "preact/hooks";
import { Link, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import {
  NotificationOutlined,
  CloudServerOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const routes = {
  admin: [
    {
      name: "Recent",
      path: "/admin/recents",
      icon: <NotificationOutlined />,
    },
    {
      name: "Students",
      path: "/admin/students",
      icon: <UserOutlined />,
    },
    {
      name: "Classes",
      path: "/admin/classes",
      icon: <TeamOutlined />,
    },
    {
      name: "Assignments",
      path: "/admin/assignments",
      icon: <FileOutlined />,
    },
    {
      name: "Server Status",
      path: "/admin/server",
      icon: <CloudServerOutlined />,
    },
    {
      name: "Settings",
      path: "/admin/settings",
      icon: <SettingOutlined />,
    },
  ],
  app: [
    {
      name: "Recents",
      path: "/app/recents",
      icon: <NotificationOutlined />,
    },
    {
      name: "Assignments",
      path: "/app/assignments",
      icon: <FileOutlined />,
    },
    {
      name: "Me",
      path: "/app/me",
      icon: <UserOutlined />,
    },
  ]
};

const { Sider } = Layout;

export default function Main() {
  const [collapsed, setCollapsed] = useState(false);
  const [paths, setPaths] = useState([]);
  const [mode, setMode] = useState("");

  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    setPaths(window.location.href.split("/").slice(3));
    setMode(window.location.href.split("/").slice(3)[0]);
  }, [global.window && window.location.href]);

  return (
    <Layout style={{ position: "absolute", minHeight: "100%" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={handleCollapsed}>
        <Menu selectedKeys={[paths[1]]} mode="inline">
          {mode && routes[mode].map((route) => {
            return (
              <Menu.Item
                key={route.path.split("/")[2]}
                icon={route.icon}
                style={{}}
              >
                <Link to={route.path}>{route.name}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <div style={{ margin: "0 16px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          {paths.map((crumb) => (
            <Breadcrumb.Item key={crumb}>{crumb}</Breadcrumb.Item>
          ))}
        </Breadcrumb>
        <div style={{ height: "min-content" }}>
          <TransitionGroup>
            <CSSTransition>
              <Switch>
                {mode && routes[mode].map(route => {
                  if(route.component) return <Route path={route.path} render={route.component} />
                  else return <Route path={route.path}></Route>
                })}
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
      <style>{`
        .ant-layout-sider-trigger {
          position: absolute;
        }
      `}</style>
    </Layout>
  );
}
