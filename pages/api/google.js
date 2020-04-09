const googleUrl = require('../../config/google-util').urlGoogle;

export default async (req, res) => {
    res.json(googleUrl());
}