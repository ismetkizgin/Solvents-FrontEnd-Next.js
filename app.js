const express = require('express');
const next = require('next');

const PORT = process.env.PORT || 3000;

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        server.get('/kelimecozucu', (req,res) => {
            app.render(req,res,'/wordsolverPage');
        });

        server.get('/sayicozucu', (req,res) => {
            app.render(req,res,'/wordsolverPage');
        });

        server.get('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(PORT, err => {
            if (err) throw err;
            console.log('> Ready on http://localhost:' + PORT);
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    })