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

const queryString = require('query-string');

import { useState, useEffect } from 'react';

export default function Recipes() {

    let results = 0;

    const [recipes, setRecipes] = useState([]);
    const [offset, setOffset] = useState(0);
    const [query, setQuery] = useState('cookies');
    const [options, setOptions] = useState({});

    const searchRecipes = async() => {
        let optionStr = queryString.stringify(options);
        const res = await fetch(`${server}/api/spoonacular?query=${query}&number=${results}&offset=${offset}&${optionStr}`);
        if (res.status != 200) {
            console.log(res);
        } else {
            const json = await res.json();
            return json;
        }
    }

    const getData = async() => {
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
        const fetchData = async() => {
            return getData();
        }
        // setRecipes([])
        // fetchData().then(data => {
        //     console.log(data);
        //     setRecipes(oldRecipes => [...oldRecipes, ...data])
        // });
    }, [offset, query, options])


    const searchSetRecipes = async(value, options={}) => {
        setQuery(value);
        setOptions(options);
        setRecipes([]);
        try {
            let data = await searchRecipes(value, results, offset, options);
            setRecipes(data);
        } catch (e) {
        }
    }

    const loadResults = async() => {
        setOffset(oldOffset => oldOffset + results);
    }

    return (
        <div>
            <Layout className="recipe-layout">
                <Header />
                <Navbar />
                <Filter recipeSearch={searchSetRecipes} />
                <div style={{padding: '0 50px'}}>
                    {recipes.length === 0 &&
                        <div style={{textAlign: 'center', paddingTop: '50px'}}>
                            <Spin />
                        </div>
                    }
                    <RecipeCardList cards={recipes} />
                </div>
                <div style={{textAlign: 'center', margin: '3em 0 5em 0'}}>
                    <Button type="primary" style={{width: '200px'}} onClick={loadResults}>Load More Results</Button>
                </div>
            </Layout>
        </div>
    )
}