import express from 'express';
import * as path from 'path';

const PORT = process.env.PORT || 5000;

express()
    .use('/', express.static(path.join(__dirname, 'public')))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
