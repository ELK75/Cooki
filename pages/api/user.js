const MongoClient = require('mongodb').MongoClient;
const jwt = require('jsonwebtoken');

// Connection URL
const dbUrl = require('../../config/index').dbUrl;

const googleAcountInfo = require('../../config/google-util').getGoogleAccountFromCode;


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
        users.insertMany([{ a: 1 }, { b: 2 }]);
        res.json({ message: 'success' });
    } else {
        let account = await googleAcountInfo(req.params);
        console.log(account);
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
