const MongoClient = require('mongodb').MongoClient;
const jwt = require('jsonwebtoken');

// Connection URL
const dbUrl = require('../../config/index').dbUrl;
const DBGet = require('../../util/DBQueries').DBGet;
const secret = require('../../private/keys.js').default.jwt;


let connectToDB = (dbName) => {
    // Use connect method to connect to the server
    return new Promise((resolve, reject) => {
        MongoClient.connect(dbUrl, function (err, client) {
            if (err !== null) { reject(err); }
            else {
                console.log("Connected successfully to server");
            }
            resolve(client.db(dbName));
        });
    })
}

export default async(req, res) => {
    let db = await connectToDB('cooki');
    const users = db.collection('user');

    if (req.method === 'POST') {
        let user = JSON.parse(req.body);
        let userQuery = await DBGet(users, {'email': user.email});
        if (userQuery.length == 0) {
            users.insertOne({'email': user.email, 'favorites': [], 'image': user.image, 'name': user.name})
        }
        jwt.sign({ 'email': user.email }, secret, (err, token) => {
            res.json({
                token
            }, { expiresIn: '3d' })
        });
    } else {
        try {
            let token = req.cookies.token
            if (!token) { res.sendStatus(403); }
            var decoded = await jwt.verify(token, secret);
            let userQuery = await DBGet(users, { 'email': decoded.email });
            res.json(userQuery);
        } catch(err) {
            res.sendStatus(403);
        }
    }
}
