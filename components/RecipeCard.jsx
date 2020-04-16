import {
    Card,
    Typography
} from 'antd';

import {
    HeartTwoTone,
    HeartOutlined
} from '@ant-design/icons';

const { Paragraph } = Typography;

import { server } from '../config/index';

import { useState, useEffect } from 'react';

export default ({ imageUrl, title, description, url, id, favorited}) => {

    const [liked, setLiked] = useState(favorited);

    function getMarkup() {
        return { __html: description }
    }

    let recipeLike = () => {
        if (!liked) {
            fetch(`${server}/api/like`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    image: imageUrl,
                    title,
                    summary: description,
                    sourceUrl: url,
                    id,
                    favorited: true
                })
            })
        } else {
            fetch(`${server}/api/like`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id
                })
            })
        }

        setLiked(!liked);
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