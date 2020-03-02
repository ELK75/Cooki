import {
  Icon,
  Row,
  Col,
  Layout,
  Card,
} from 'antd';
import Link from 'next/link'
import '../assets/styles.less';

const {
  Header, Content,
} = Layout;

export default () => (
  <Layout>
    <Header>
      <Row justify="space-around" type="flex">
        <Col span={20}>
          <Row justify="space-around" type="flex">
            <Col span={12} md={12} xs={24}>
              <span className="brand">
                <img className="main-logo" src="cookie.svg" alt="Cooki Logo" />
                Cooki
              </span>
            </Col>
            <Col span={12} md={12} xs={0}>
              <span className="ml-30 float-right"><Icon type="phone" theme="filled" /></span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
    <Row justify="space-around" type="flex">
      <Col span={20} style={{ textAlign: 'right', height: 50, display: 'flex', justifyContent: 'flex-end', textTransform: 'uppercase' }}>
        <div style={{ width: 'fit-content', margin: 'auto 0px' }}>
          <Link href="/">
            <a>
              Home
            </a>
          </Link>
        </div>
        <div style={{ width: 'fit-content', margin: 'auto 0px' }}>
          <Link href="/">
            <a>
              About Us
            </a>
          </Link>
        </div>
        <div style={{ width: 'fit-content', margin: 'auto 0px' }}>
          <Link href="/">
            <a>
              Login / Signup
            </a>
          </Link>
        </div>
      </Col>
    </Row>
    <Row justify="space-around" type="flex">
      <Col span={20} style={{ paddingTop: '10px', paddingBottom: '30px', minHeight: '500px' }}>
        <Content>
          <div className="cover-image">
            <img alt="cover image" src="cover.jpg" />
            {/* <Carousel autoplay>
              <div>
                <h3>
                  {/* <img src="1.jpg" /> */}
                {/* </h3> */}
              {/* </div> */}
              {/* <div> */}
                {/* <h3> */}
                  {/* <img src="2.jpg" /> */}
                {/* </h3> */}
              {/* </div> */}
              {/* <div> */}
                {/* <h3> */}
                  {/* <img src="3.jpg" /> */}
                {/* </h3> */}
              {/* </div> */}
            {/* </Carousel> */}
          </div>
          <Row gutter={16}>
            <Col span={6} md={6} sm={12} xs={24}>
              <Card
                hoverable
                cover={
                  <img alt="image1" style={{ width: '100%' }} src="1.jpg" />
                }
              >
                <Card.Meta
                  title="Menu 1"
                  description="Description 1"
                />
              </Card>
            </Col>
            <Col span={6} md={6} sm={12} xs={24}>
              <Card
                hoverable
                cover={
                  <img alt="image2" style={{ width: '100%' }} src="2.jpg" />}
              >
                <Card.Meta
                  title="Menu 2"
                  description="Description 2"
                />
              </Card>
            </Col>
            <Col span={6} md={6} sm={12} xs={24}>
              <Card
                hoverable
                cover={
                  <img alt="image3" style={{ width: '100%' }} src="3.jpg" />}
              >
                <Card.Meta
                  title="Menu 3"
                  description="Description 3"
                />
              </Card>
            </Col>
            <Col span={6} md={6} sm={12} xs={24}>
              <Card
                hoverable
                cover={
                  <img alt="image4" style={{ width: '100%' }} src="4.jpg" />}
              >
                <Card.Meta
                  title="Menu 4"
                  description="Description 4"
                />
              </Card>
            </Col>
          </Row>
        </Content>
      </Col>
    </Row>
    <Row justify="space-around" type="flex" style={{ background: '#f9f9f9' }}>
      <Col md={8} xs={20} style={{ height: '40px', display: 'flex' }}>
        <div style={{ margin: 'auto 0px' }}>
          Cooki 2020
                </div>
      </Col>
      <Col md={8} xs={20}>
        <div style={{ margin: 'auto', height: '40px', display: 'flex', justifyContent: 'flex-end' }}>
          <Icon style={{ margin: 'auto 10px', fontSize: 20 }} type="facebook" />
          <Icon style={{ margin: 'auto 10px', fontSize: 20 }} type="instagram" />
          <Icon style={{ margin: 'auto 10px', fontSize: 20 }} type="google" />
        </div>
      </Col>
    </Row>
  </Layout>
);
