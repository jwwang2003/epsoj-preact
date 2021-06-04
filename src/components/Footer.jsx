import {h} from "preact";
import Layout from "antd/es/layout";
import Typography from "antd/es/typography";

const { Footer } = Layout;
const { Text, Link, Paragraph } = Typography;

export default function footer() {
  return (
    <Footer style={{ background: "rgb(150,10,255)" }}>
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
  )
}