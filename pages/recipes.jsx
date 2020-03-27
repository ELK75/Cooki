import {
    Icon,
    Row,
    Col,
    Layout,
    Card,
    Button
} from 'antd';
import Link from 'next/link'

import Header from '../components/Header';
import Navbar from '../components/Navbar';
import RecipeCardList from '../components/RecipeCardList';

export default function Recipes({ recipes }) {
    return (
        <div>
            <Layout className="recipe-layout">
                <Header />
                <Navbar />
                <div style={{padding: '0 50px'}}>
                    <RecipeCardList cards={recipes} />
                </div>
            </Layout>
        </div>
    )
}

Recipes.getInitialProps = async () => {
    const res = await (fetch('http://localhost:3000/api/user'));
    const json = await res.json();
    console.log(res);
    console.log(json);
    return { recipes: json };
}