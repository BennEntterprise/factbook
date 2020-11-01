var express = require('express');
var app = express();
var PORT = 5000;
var path = require('path');
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('/', function (req, res) {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
app.get('/', function (req, res) {
    console.log("Serving File " + path.resolve(__dirname, 'client', 'build', 'index.html'));
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
app.listen(PORT, function () {
    console.log("[Server]: Server is running at https://localhost:" + PORT);
});
