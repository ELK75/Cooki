import {
    Row,
    Col
} from 'antd';

import Link from 'next/link';

export default () => {
    return (
        <Row justify="space-around" type="flex">
            <Col span={20} style={{ textAlign: 'right', height: 50, display: 'flex', justifyContent: 'flex-end', textTransform: 'uppercase' }}>
                <div style={{ width: 'fit-content', margin: 'auto 0px' }}>
                    <Link href="/favorites">
                        <a>
                            Favorites
                    </a>
                    </Link>
                </div>
            </Col>
        </Row>
    )
}
