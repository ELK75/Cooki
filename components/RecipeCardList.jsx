import {
    Row,
    Col,
} from 'antd';

import RecipeCard from '../components/RecipeCard';

export default ({ cards }) => {
    return (
        <Row gutter={16} justify="center">
            {cards.map((card) => {
                if (typeof card.favorited === "undefined") {
                    card.favorited = false;
                }
                return (
                    <Col span={6} md={6} sm={12} xs={24} key={card.id}>
                        <RecipeCard key={card.id} id={card.id} imageUrl={card.image} title={card.title} description={card.summary} url={card.sourceUrl} favorited={card.favorited} />
                    </Col>
                )
            })}
        </Row>
    )
};