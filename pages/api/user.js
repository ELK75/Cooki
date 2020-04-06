const MongoClient = require('mongodb').MongoClient;

// Connection URL
const dbUrl = require('../../config/index').dbUrl;


let connectToDB = async(dbName) => {
    // Use connect method to connect to the server
    return new Promise((resolve, reject) => {
        MongoClient.connect(dbUrl, function (err, client) {
            if (err !== null) { console.log(err); }
            else {
                console.log("Connected successfully to server");
            }
            return resolve(client.db(dbName));
        });
    })
}

export default async(req, res) => {
    connectToDB('cooki').then(db => {
        const users = db.collection('user');

        users.insertMany([{ a: 1 }, { b: 2 }]);
        res.json({ message: 'success' });
    });
}
