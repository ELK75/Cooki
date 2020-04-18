import {
    Icon,
    Row,
    Col,
    Layout,
} from 'antd';

const { Header } = Layout;
import Link from 'next/link';


export default () => (
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
                        <span className="ml-30 float-right"><Icon type="phone" theme="filled" /></span>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Header>  
);