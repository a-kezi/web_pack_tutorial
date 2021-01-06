const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express();
const PORT = 3000
// open port
app.listen(PORT, function(){
    console.log('listening on *: ', PORT);
});
app.use('/static', express.static(path.join(__dirname, 'www')));
app.use('/dist', express.static(path.join(__dirname, 'www','dist')));

app.get('/',function(req, res){
    fs.readFile('www/html/app.html', 'utf8', function(error, data) {
        res.setHeader('Content-Type', 'text/html');
        res.send(data);
        res.end();
    });
})

