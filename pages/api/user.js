const jwt = require('jsonwebtoken');

// Connection URL
const DBGet = require('../../util/DBQueries').DBGet;
const connectToDB = require('../../util/DBQueries').connectToDB;
const secret = require('../../private/keys.js').default.jwt;

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
