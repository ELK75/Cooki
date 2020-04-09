const MongoClient = require('mongodb').MongoClient;
const jwt = require('jsonwebtoken');

// Connection URL
const dbUrl = require('../../config/index').dbUrl;
const DBGet = require('../../util/DBQueries').DBGet;


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

function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }

}

export default async(req, res) => {
    let db = await connectToDB('cooki');
    const users = db.collection('user');

    if (req.method === 'POST') {
        // users.insertMany([{ a: 1 }, { b: 2 }]);
        // res.json({ message: 'success' });
        let user = JSON.parse(req.body);
        let userQuery = await DBGet(users, {'email': user.email});
        if (userQuery.length == 0) {
            users.insertOne({'email': user.email, 'favorites': [], 'image': user.image, 'name': user.name})
        }
        jwt.sign({ 'email': user.email }, 'secretkey', (err, token) => {
            console.log({token});
            res.json({
                token
            })
        });
    } else {
        console.log(req.cookies.token);
        // jwt.sign({ user }, 'secretkey', (err, token) => {
        //     res.json({
        //         token
        //     })
        // })
        // users.find({ 'a': 1 }).toArray(function (err, docs) {
        //     res.json(docs);
        // });
    }
}
