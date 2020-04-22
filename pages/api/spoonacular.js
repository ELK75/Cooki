import fetch from 'isomorphic-unfetch';
import keys from '../../private/keys.js';
let spoonacular = keys.spoonacular;

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
    console.log(req.query);
    const result = await fetch(constructCall(req.query));
    const json = await result.json();

    if (typeof(json.results) === 'undefined') {
        res.statusCode = json.status;
        res.send(JSON.stringify(json.message));
    }

    let ids = json.results.map(entry => entry.id);

    let recipeRes = await fetch(`https://api.spoonacular.com/recipes/informationBulk?ids=${ids}&apiKey=${spoonacular}`);
    let recipeJSON = await recipeRes.json();

    res.json(recipeJSON);
}
