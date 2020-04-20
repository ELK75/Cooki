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
import RecipeCardList from '../components/RecipeCardList';

import { useState, useEffect } from 'react';

export default function Recipes() {

    let results = 8;

    const [recipes, setRecipes] = useState([]);
    const [offset, setOffset] = useState(0);

    const searchRecipes = async (recipe, number, offset) => {
        const res = await fetch(`${server}/api/spoonacular?query=${recipe}&number=${number}&offset=${offset}`);
        if (res.status != 200) {
            console.log(res);
        } else {
            const json = await res.json();
            return json;
        }
    }

    const getData = async() => {
        let data = await searchRecipes('cookies', results, offset);
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
        fetchData().then(data => {
            setRecipes(oldRecipes => [...oldRecipes, ...data])
        });
    }, [offset])


    const searchSetRecipes = async(value) => {
        setRecipes([]);
        try {
            let data = await searchRecipes(value, results, offset);
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
                <Search
                    placeholder="Search for Recipes"
                    enterButton="Search"
                    size="large"
                    onSearch={value => searchSetRecipes(value)}
                    style={{width: '80%', margin: '0 auto'}}
                />
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