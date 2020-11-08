var express = require('express');
var app = express();
var path = require('path');
// Serve static react files
app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/api/testapi', function (req, res) {
    res.json({ message: "successfully connected to the api" });
    console.log('Successful connection to the api');
});
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/client/build/index.html'));
});
var PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log("Server listening on PORT " + PORT);
