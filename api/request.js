import fetch from 'isomorphic-unfetch'
const config = require('../config');

let host = config.APİ_HOST;

async function request(query) {
    const res = await fetch(host + query);
    const data = await res.json();
    return data;
}

module.exports = request;