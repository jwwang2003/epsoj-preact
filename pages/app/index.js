import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, FileOutlined, NotificationOutlined } from '@ant-design/icons';
import { Switch, Route, Link, useLocation } from 'react-router-dom'

const { Content, Footer, Sider } = Layout;

export default function App() {
  const [collapse, setCollapse] = useState(false)

  const handleCollapse = () => {
    setCollapse(!collapse)
  };

  return (
    <Layout style={{ minHeight: '100%' }}>
      <Sider collapsible collapsed={collapse} onCollapse={handleCollapse} style={{background: 'white'}}>
        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<NotificationOutlined />}>
            <Link to="/app/recents">Recent</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<FileOutlined />}>
            <Link to="/app/assignments">Assignments</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            <Link to="/app/me">Me</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{height: '100%'}}>
            <Switch >
              <Route path="/app/recents">Recents</Route>
              <Route path="/app/assignments">Assignments</Route>
              <Route path="/app/me">Me</Route>
            </Switch>
          </div>
          
        </Content>
        <Footer style={{ textAlign: 'center' }}>EPSOJ ©2021 By Jimmy Wang</Footer>
      </Layout>
    </Layout>
  );
}