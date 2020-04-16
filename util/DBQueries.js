const MongoClient = require('mongodb').MongoClient;
const dbUrl = require('../config/index').dbUrl;

export function DBGet(collection, query) {
    return new Promise((resolve, reject) => {
        collection.find(query).toArray(function (err, docs) {
            resolve(docs);
        });
    })
}

export function connectToDB(dbName) {
    // Use connect method to connect to the server
    return new Promise((resolve, reject) => {
        MongoClient.connect(dbUrl, function (err, client) {
            if (err !== null) { reject(err); }
            resolve(client.db(dbName));
        });
    })
}