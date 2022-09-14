import { Spin } from 'antd';
import styles from './index.less';

export default function IndexPage() {
  return (
    <div className={styles.container}>
      <img src={require('@/../public/logo.jpg')} alt="" />
      <Spin size="large" />
      <h1>Ncode企业级低代码平台</h1>
    </div>
  );
}
