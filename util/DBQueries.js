export function DBGet(collection, query) {
    return new Promise((resolve, reject) => {
        collection.find(query).toArray(function (err, docs) {
            resolve(docs);
        });
    })
}