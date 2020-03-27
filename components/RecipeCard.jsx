import {
    Card,
    Typography
} from 'antd';

const { Paragraph } = Typography;

export default ({ imageUrl, title, description }) => {
    return (
        <Card
            style={{ margin: '10px 0 10px 0' }}
            hoverable
            cover={
                <img style={{ width: '100%' }} src={imageUrl} />}>
            <Card.Meta
                title={title}
                description={<Paragraph ellipsis={{ rows: 3 }}>{description}</Paragraph>}
            />
        </Card>
    )
}