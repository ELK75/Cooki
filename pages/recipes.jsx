import {
    Layout,
    Input,
    Button,
    Spin
} from 'antd';

const { Search } = Input;

import fetch from 'isomorphic-unfetch';

import { server } from '../config/index';

import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Filter from '../components/Filter';
import RecipeCardList from '../components/RecipeCardList';

import useDidMountEffect from '../components/useDidMountEffect';

const queryString = require('query-string');

import { useState, useEffect } from 'react';

export default function Recipes() {

    let results = 8;

    const [recipes, setRecipes] = useState([]);
    const [recipeData, setRecipeData] = useState({
        query: 'cookie',
        offset: 0,
        options: {}
    });

    const searchRecipes = async () => {
        let optionStr = queryString.stringify(recipeData.options);
        const res = await fetch(`${server}/api/spoonacular?query=${recipeData.query}&number=${results}&offset=${recipeData.offset}&${optionStr}`);
        if (res.status != 200) {
            console.log(res);
        } else {
            const json = await res.json();
            return json;
        }
    }

    const getData = async () => {
        let data = await searchRecipes();
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

    useEffect(() => {
        const fetchData = async () => {
            return getData();
        }
        fetchData().then(data => {
            if (recipeData.offset === 0) {
                setRecipes([...data])
            } else {
                setRecipes(oldRecipes => [...oldRecipes, ...data]);
            }
        });
    }, [recipeData])


    const searchSetRecipes = async (value, options = {}) => {
        setRecipeData({
            query: value,
            offset: 0,
            options
        });

        try {
            let data = await searchRecipes(value, options);
            setRecipes(data);
        } catch (e) {
        }
    }

    const loadResults = async () => {
        setRecipeData({...recipeData, offset: recipeData.offset + results});
    }

    return (
        <div>
            <Layout className="recipe-layout">
                <Header />
                <Navbar />
                <Filter recipeSearch={searchSetRecipes} />
                <div style={{ padding: '0 50px' }}>
                    {recipes.length === 0 &&
                        <div style={{ textAlign: 'center', paddingTop: '50px' }}>
                            <Spin />
                        </div>
                    }
                    <RecipeCardList cards={recipes} />
                </div>
                <div style={{ textAlign: 'center', margin: '3em 0 5em 0' }}>
                    <Button type="primary" style={{ width: '200px' }} onClick={loadResults}>Load More Results</Button>
                </div>
            </Layout>
        </div>
    )
}