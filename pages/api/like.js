import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const MongoClient = require('mongodb').MongoClient;
const jwt = require('jsonwebtoken');

const secret = require('../../private/keys.js').default.jwt;
const DBGet = require('../../util/DBQueries').DBGet;
const connectToDB = require('../../util/DBQueries').connectToDB;

export default async (req, res) => {
    let db = await connectToDB('cooki');
    const users = db.collection('user');

    let token = req.cookies.token;
    let like = req.body;

    let decoded;
    try {
        decoded = await jwt.verify(token, secret);
    } catch (err) {
        res.sendStatus(403);
    }

    let userQuery = await DBGet(users, { 'email': decoded.email });
    let currentUser = userQuery[0];
    let currentLikes = currentUser.favorites;

    if (req.method === 'POST') {
        users.updateOne({email: decoded.email},
            { $set: { favorites: [...currentLikes, like] } });
        res.json({message: "success"});
    } else if (req.method === "DELETE") {
        let likeID = like.id;
        let removedFavorites = currentLikes.filter((val) => val.id !== likeID);
        users.updateOne({ email: decoded.email },
            { $set: { favorites: removedFavorites } });
        res.json({ message: "success" });
    } else if (req.method === "GET") {
        res.json(currentUser.favorites);
    }
}