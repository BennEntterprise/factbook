"use strict";
const express = require('express');
const app = express();
const PORT = 8080;
app.get('/', (req, res) => {
    res.send('Express + Typescript Server');
});
app.listen(PORT, () => {
    console.log(`[Server]: Server is running at https://localhost:${PORT}`);
});
