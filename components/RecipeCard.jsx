import {
    Card,
    Typography
} from 'antd';

import {
    HeartTwoTone,
    HeartOutlined
} from '@ant-design/icons';

const { Paragraph } = Typography;

import { useState } from 'react';

export default ({ imageUrl, title, description, url }) => {

    const [liked, setLiked] = useState(false);

    function getMarkup() {
        return { __html: description }
    }

    let color;

    let recipeLike = () => {
        setLiked(!liked);
        color = liked === true ? 'red' : '';
    }

    let likeButton = (liked) ? 
        <HeartTwoTone style={{ fontSize: '20px' }} twoToneColor="#ff4c3b" onClick={() => recipeLike()} /> :
        <HeartOutlined style={{ fontSize: '20px' }} onClick={() => recipeLike()} />

    return (
            <Card
                style={{ margin: '10px 0 10px 0' }}
                hoverable
                cover={
                    <a href={url}>
                        <img style={{ width: '100%' }} src={imageUrl} />
                    </a>
                }>
                <a href={url}>
                    <Card.Meta
                        title={title}
                        description={<Paragraph ellipsis={{ rows: 3 }}><div dangerouslySetInnerHTML={getMarkup()} /></Paragraph>}
                    />
                </a>
                <div style={{ textAlign: 'center' }}>
                    {likeButton}
                </div>
            </Card>
    )
}