const MongoClient = require('mongodb').MongoClient;

// Connection URL
const dbUrl = require('../../config/index').dbUrl;


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
        users.insertMany([{ a: 1 }, { b: 2 }]);
        res.json({ message: 'success' });
    } else {
        users.find({ 'a': 1 }).toArray(function (err, docs) {
            res.json(docs);
        });
    }
}
