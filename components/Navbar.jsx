import {Row, Col, Button} from 'antd';

export default () => (
    <div>
        <Row justify="space-around" align="middle">
            <Col span={8}>
                <Row className="center-items mt1">
                    <img className="main-logo" src="/assets/cookie.svg" alt="Cooki Logo" />
                    <div className="font-300 logo-text mt0">Cooki</div>
                </Row>
            </Col>
            <Col span={8}>
                <Row className="menu-items">
                    <a href="/recipes">Recipes</a>
                    <a href="/about">About Us</a>
                </Row>
            </Col>
            <Col span={8}>
                <Row className="login-items center-items">
                    <a href="/login">Login</a>
                    <a href="/signup">Signup</a>
                </Row>
            </Col>
        </Row>
        <style jsx global> {`
        .main-logo {
            height: 35px;
            width: 35px;
            margin-right: 5px;
            margin-top: 10px;
        }

        .logo-text {
            font-size: 35px !important;
        }

        .menu-items {
            display: flex;
            justify-content: space-around;
        }

        .menu-items a {
            font-weight: 300;
            font-size: 22px;
            color: gray;
        }

        .menu-items a:hover {
            font-weight: 300;
            font-size: 22px;
            color: #1890ff;
        }

        .login-items {
            display: flex;
        }

        .login-items a {
            font-weight: 300;
            font-size: 22px;
            color: gray;
            margin-right: 25px;
        }

        .login-items a:hover {
            color: #1890ff;
        }
        `}</style>
    </div>
)
