var express = require('express');
var app = express();
var multer = require('multer');
var upload = multer({ limits: { fieldSize: 2 * 1024 * 1024 } });


app.use(upload.array());
app.use(express.static('public'));
app.use(express.json({ limit: '250mb' }))

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Server listening on port ", port)
})

module.exports = app