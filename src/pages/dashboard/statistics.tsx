import { Card, Row, Col } from 'antd';
import styles from './statistics.less';

export default () => {
  return (
    <div>
      <Row>
        <Col span={6}>
          <Card className={styles.numberCard}>
            <div className="title">总销售额(近十天)</div>
            <div className="number">92688.46</div>
            <div className="bottom">日均销售额9268.85</div>
          </Card>
        </Col>
        <Col span={6}>
          <Card className={styles.numberCard}>
            <div className="title">订单量(近十天)</div>
            <div className="number">24108</div>
            <div className="bottom">日均订单量2410.8</div>
          </Card>
        </Col>
        <Col span={6}>
          <Card className={styles.numberCard}>
            <div className="title">支付笔数(近十天)</div>
            <div className="number">20845</div>
            <div className="bottom">日均支付笔数2084.5</div>
          </Card>
        </Col>
        <Col span={6}>
          <Card className={styles.numberCard}>
            <div className="title">商品数量(近十天)</div>
            <div className="number">27218</div>
            <div className="bottom">日均销售量2721.8</div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
