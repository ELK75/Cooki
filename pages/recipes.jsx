import {
    Layout,
} from 'antd';

import fetch from 'isomorphic-unfetch';
const queryString = require('query-string');


import { server } from '../config/index';

import Header from '../components/Header';
import Navbar from '../components/Navbar';
import RecipeCardList from '../components/RecipeCardList';

export default function Recipes({ recipes }) {
    return (
        <div>
            <Layout className="recipe-layout">
                <Header />
                <Navbar />
                {/* <div style={{padding: '0 50px'}}>
                    <RecipeCardList cards={recipes} />
                </div> */}
            </Layout>
        </div>
    )
}

Recipes.getInitialProps = async () => {
    return {}
    // const res = await (fetch(`${server}/api/spoonacular?query=burger&number=5`));
    // const json = await res.json();
    // return { recipes: json };
}