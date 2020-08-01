import fetch from 'isomorphic-unfetch'
const config = require('../config');

let host = config.API_HOST;

async function request(path, method, body, headers = {}) {
    try {
        const endPoint = host.concat(path);
        const reqBody = body ? JSON.stringify(body) : null;

        const fetchParams = { method, headers };

        if ((method === "POST" || method === "PUT") && !reqBody) {
            throw new Error("Request body required");
        }

        if (reqBody) {
            fetchParams.headers["Content-type"] = "application/json";
            fetchParams.body = reqBody;
        }

        const res = await fetch(endPoint, {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
        const data = await res.json();
        return data;
    } catch (e) {
        return e;
    }

}

module.exports = request;