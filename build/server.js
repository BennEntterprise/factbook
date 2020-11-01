"use strict";
const express = require('express');
const app = express();
const PORT = 5000;
const path = require('path');
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/client/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
app.get('/', (req, res) => {
    console.log(`Serving File ${path.resolve(__dirname, 'client', 'build', 'index.html')}`);
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
app.listen(PORT, () => {
    console.log(`[Server]: Server is running at https://localhost:${PORT}`);
});
