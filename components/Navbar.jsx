import {
    Row,
    Col
} from 'antd';

import Link from 'next/link';
import { useRouter } from 'next/router'

export default () => {
    const router = useRouter();
    let headerLink = router.pathname === '/recipes' ? '/favorites' : '/recipes'
    let headerName = router.pathname === '/recipes' ? 'Favorites' : 'Recipes'

    return (
        <Row justify="space-around" type="flex">
            <Col span={20} style={{ textAlign: 'right', height: 50, display: 'flex', justifyContent: 'flex-end', textTransform: 'uppercase' }}>
                <div style={{ width: 'fit-content', margin: 'auto 0px' }}>
                    <Link href={headerLink}>
                        <a>
                            {headerName}
                            </a>
                    </Link>
                </div>
            </Col>
        </Row>
    )
}
