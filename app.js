const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express();

// open port
app.listen(53305, function(){
    console.log('listening on *: 20111');
});
app.use('/static', express.static(path.join(__dirname, 'www')));

app.get('/',function(req, res){
    fs.readFile('./test.html', 'utf8', function(error, data) {
        res.setHeader('Content-Type', 'text/html');
        res.send(data);
        res.end();
    });
})

