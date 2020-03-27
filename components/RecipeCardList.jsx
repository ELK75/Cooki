import {
    Row,
    Col,
} from 'antd';

import RecipeCard from '../components/RecipeCard';

export default ({ cards }) => {
    return (
        <Row gutter={16} justify="center">
            {cards.map((card) => {
                return (
                    <Col span={6} md={6} sm={12} xs={24}>
                        <RecipeCard imageUrl={card.image} title={card.title} description={card.summary} />
                    </Col>
                )
            })}
        </Row>
    )
};