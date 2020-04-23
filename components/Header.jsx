import {
    Row,
    Col,
    Layout,
} from 'antd';

const { Header } = Layout;
import Link from 'next/link';

import { useRouter } from 'next/router'

import { GoogleLogout } from 'react-google-login'

export default () => {

    const router = useRouter();
    let atHomeScreen = router.pathname === '/';

    const logout = () => {

    }

    return (
        <Header>
            <Row justify="space-around" type="flex">
                <Col span={20}>
                    <Row justify="space-around" type="flex">
                        <Col span={12} md={12} xs={24}>
                            <Link href="/recipes">
                                <a>
                                    <span className="brand">
                                        <img className="main-logo" src="cookie.svg" alt="Cooki Logo" />
                                Cooki
                            </span>
                                </a>
                            </Link>
                        </Col>
                        <Col span={12} md={12} xs={0}>
                            <span className="ml-30 float-right">
                                {!atHomeScreen &&
                                    <Link href="/">
                                        <GoogleLogout
                                            clientId="974739244775-fh6n38t1f4jfqfu21rbeus2k5nikq17r.apps.googleusercontent.com"
                                            buttonText="Logout of Cooki"
                                            onLogoutSuccess={logout}
                                            render={renderProps => (
                                                <a onClick={renderProps.onClick} disabled={renderProps.disabled} style={{ fontSize: '1.8em', fontWeight: '200' }}>Logout</a>
                                            )}
                                        />
                                    </Link>
                                }
                            </span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Header>
    )
}