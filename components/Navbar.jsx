import {
    Row,
    Col
} from 'antd';

import Link from 'next/link';

export default () => (
    <Row justify="space-around" type="flex">
        <Col span={20} style={{ textAlign: 'right', height: 50, display: 'flex', justifyContent: 'flex-end', textTransform: 'uppercase' }}>
            <div style={{ width: 'fit-content', margin: 'auto 0px' }}>
                <Link href="/favorites">
                    <a>
                        Favorites
            </a>
                </Link>
            </div>
            {/* <div style={{ width: 'fit-content', margin: 'auto 0px' }}>
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
            </div> */}
        </Col>
    </Row>
)
