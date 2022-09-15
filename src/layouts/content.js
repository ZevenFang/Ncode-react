import { Layout } from 'antd';

const { Content } = Layout;

export default (props) => (
  <Content className="site-layout-background content">{props.children}</Content>
);
