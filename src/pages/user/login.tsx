import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, SmileOutlined } from '@ant-design/icons';
import { history } from 'umi';
import styles from './login.less';

export default () => {
  const login = () => {
    history.push('/dashboard/statistics');
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img src={require('@/../public/logo.jpg')} alt="" />
        <span>Ncode企业级低代码平台</span>
      </div>
      <div className={styles.subTitle}>
        企业级低代码平台，在线开发，零代码实现80%的基础功能~
      </div>
      <div className={styles.main}>
        <Form className={styles.loginForm}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入账户名' }]}
          >
            <Input
              size="large"
              placeholder="请输入账户名"
              prefix={<UserOutlined className={styles.prefixIcon} />}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input
              size="large"
              placeholder="请输入密码"
              prefix={<LockOutlined className={styles.prefixIcon} />}
            />
          </Form.Item>
          <Form.Item
            name="captcha"
            rules={[{ required: true, message: '请输入验证码' }]}
          >
            <Input
              size="large"
              placeholder="请输入验证码"
              prefix={<SmileOutlined className={styles.prefixIcon} />}
            />
          </Form.Item>
          <Button
            onClick={login}
            style={{ width: '100%' }}
            size="large"
            type="primary"
          >
            确定
          </Button>
        </Form>
      </div>
    </div>
  );
};
