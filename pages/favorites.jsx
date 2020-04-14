import {
    Layout,
    Input
} from 'antd';

import fetch from 'isomorphic-unfetch';
import { server } from '../config/index';

import Header from '../components/Header';
import Navbar from '../components/Navbar';
import RecipeCardList from '../components/RecipeCardList';

import { useState, useEffect } from 'react';

export default function Recipes() {

    const [recipes, setRecipes] = useState([]);


    useEffect(() => {
        fetch(`${server}/api/like`).then(res => {
            res.json().then(res => {
                setRecipes(res);
            });
        })
    }, [])

    return (
        <div>
            <Layout className="recipe-layout">
                <Header />
                <Navbar />
                <div style={{ padding: '0 50px' }}>
                    <RecipeCardList cards={recipes} />
                </div>
            </Layout>
        </div>
    )
}