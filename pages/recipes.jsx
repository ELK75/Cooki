import {
    Layout,
    Input
} from 'antd';

const { Search } = Input;

import fetch from 'isomorphic-unfetch';

import { server } from '../config/index';

import Header from '../components/Header';
import Navbar from '../components/Navbar';
import RecipeCardList from '../components/RecipeCardList';

import { useState, useEffect } from 'react';

export default function Recipes() {

    const [recipes, setRecipes] = useState([]);

    const searchRecipes = async (recipe, number=5) => {
        const res = await fetch(`${server}/api/spoonacular?query=${recipe}&number=${number}`);
        const json = await res.json();
        return json;
    }

    useEffect(() => {
        const fetchData = async() => {
            let data = await searchRecipes('cookies');
            let likes = await fetch(`${server}/api/like`);
            likes = await likes.json();
            let likeIDs = likes.map((val) => val.id);
            for (const recipe of data) {
                if (likeIDs.includes(recipe.id)) {
                    recipe.favorited = true;
                } else {
                    recipe.favorited = false;
                }
            }
            return data;
        }
        fetchData().then(data => setRecipes(data));
    }, [])

    const searchSetRecipes = async(value) => {
        let data = await searchRecipes(value);
        setRecipes(data);
    }

    return (
        <div>
            <Layout className="recipe-layout">
                <Header />
                <Navbar />
                <Search
                    placeholder="Search for Recipes"
                    enterButton="Search"
                    size="large"
                    onSearch={value => searchSetRecipes(value)}
                    style={{width: '80%', margin: '0 auto'}}
                />
                <div style={{padding: '0 50px'}}>
                    <RecipeCardList cards={recipes} />
                </div>
            </Layout>
        </div>
    )
}

// Recipes.getInitialProps = async() => {
//     const searchRecipes = async(recipe, number = 10) => {
//         const res = await (fetch(`${server}/api/spoonacular?query=${recipe}&number=${number}`));
//         const json = await res.json();
//         return json;
//     }

//     console.log(searchRecipes);
//     return { searchRecipes }
// }