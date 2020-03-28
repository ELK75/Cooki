import {
  Icon,
  Row,
  Col,
  Layout,
  Card,
  Button
} from 'antd';

import '../styles/styles.less';

const { Content } = Layout;

import Header from  '../components/Header';
import Navbar from '../components/Navbar';

export default function Index() {
  return (
    <Layout>
      <Header />
      <Navbar />
      <Row justify="space-around" type="flex">
        <Col span={20} style={{ paddingTop: '10px', paddingBottom: '30px', minHeight: '500px' }}>
          <Content>
            <div className="cover-image">
              <img alt="cover image" src="cover.jpg" />
              <div className="image-text-container">
                <Row className="image-text-row" justify="center">
                  <h1>Welcome to</h1>
                  <img src="cookie.svg" alt="Cooki Logo" />
                  <h1>Cooki</h1>
                </Row>

                <h3>Cooki is the quick and easy way to get recipes that suit your needs. Login or Signup below to get recipes that cater to you.</h3>
                <Row justify="center" className="signup-row">
                  <Button>Login or Signup</Button>
                </Row>
              </div>
            </div>
          </Content>
        </Col>
      </Row>
    </Layout>
  )
}