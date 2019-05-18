const express = require('express');
const app = express();
const fs = require('fs');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Content-Security-Policy', 'Upgrade-insecure-requests');
    next();
});

app.get('/:file', (req, res) => {
    let file = req.params.file;
    let rtn = '';
    let readStream = fs.createReadStream(__dirname+'/'+file);
    readStream.on('close', () => {
        res.end();
    });
    readStream.pipe(res);
});

app.listen(port, () => {
    console.log(`Server online, listening on port ${port}`);
});
