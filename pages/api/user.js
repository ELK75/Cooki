import fetch from 'isomorphic-unfetch';
import { spoonacular } from '../../private/keys.json';

const constructCall = query => {
    let stringQuery = `https://api.spoonacular.com/recipes/search?apiKey=${spoonacular}&`;
    for (const attribute in query) {
        stringQuery += attribute + '=' + query[attribute] + '&';
    }
    return stringQuery;
}

export default async(req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    const result = await fetch(constructCall({ 'query': 'burger', 'number': '5' }));
    const json = await result.json();

    let recipeList = []
    for (let recipe of json.results) {
        let recipeRes = await fetch(`https://api.spoonacular.com/recipes/${recipe.id}/information?apiKey=${spoonacular}&`);
        let recipeJSON = await recipeRes.json();
        recipeList.push(recipeJSON);
    }

    res.send(JSON.stringify(recipeList));
}
