import {
  Icon,
  Row,
  Col,
  Layout,
  Card,
  Button
} from 'antd';

import Router from 'next/router';
import Cookies from 'js-cookie';

import '../styles/styles.less';

const { Content } = Layout;

import Header from  '../components/Header';
import Navbar from '../components/Navbar';

import { server } from '../config/index';

import GoogleLogin from 'react-google-login';

export default function Index() {

  const responseGoogle = async(response) => {
    let profile = response.profileObj;
    let user = {
      image: profile.imageUrl,
      email: profile.email,
      name: profile.name
    };
    
    Router.push('/recipes');

    let res = await fetch(`${server}/api/user`, {
      method: 'POST',
      body: JSON.stringify(user)
    });
    let json = await res.json();
    Cookies.set('token', json.token, { expires: 7});

    fetch(`${server}/api/user`)

  }

  return (
    <Layout>
      <Header />
      {/* <Navbar /> */}
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
                  <GoogleLogin
                    clientId="974739244775-fh6n38t1f4jfqfu21rbeus2k5nikq17r.apps.googleusercontent.com"
                    buttonText="Login or Signup with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                  />
                </Row>
              </div>
            </div>
          </Content>
        </Col>
      </Row>
    </Layout>
  )
}