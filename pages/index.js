import { Layout, Typography, Form, Input, Button, Checkbox, Spin } from "antd";

const { Header, Footer, Sider, Content } = Layout;
const { Text, Link, Paragraph } = Typography;

export default function Home() {
  return (
    <Layout style={{ height: "100%" }}>
      <Content style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Login />
        </div>
      </Content>

      <Footer style={{background: 'rgb(220,220,220)'}}>
        <Typography>
          <Paragraph>
            <Text>Developed by Jimmy Wang</Text>
          </Paragraph>
          <Paragraph>
            <Link href="https://github.com/jwwang2003/epsoj" target="_blank">
              GitHub Repo
            </Link>
          </Paragraph>
        </Typography>
      </Footer>
    </Layout>
  );
}

function Login() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <Spin tip="Authenticating..." spinning={false}>
      <Form
        style={{
          width: "300px",
        }}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Student ID"
          name="studentID"
          rules={[
            {
              required: true,
              message: "Student ID is required!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Password is required!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
}
