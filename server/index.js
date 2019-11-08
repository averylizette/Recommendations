const express = require('express');
const path = require('path')
const cors = require('cors');
const app = express()
const port = 3000
const bodyParser = require("body-parser");
const getPriceAndLocation = require('../database/index.js').getPriceAndLocation

// console.log(test());

app.use(bodyParser.json())
app.use(cors());
app.use('/', express.static(path.join(__dirname, '../client/dist')))
app.use('/air6n6/*/listing', express.static(path.join(__dirname, '/../client/dist')))

app.get('/priceAndLocation', (req, res) => {
    console.log('hello')
    getPriceAndLocation(4, (err, data) => {
        if (err) {
            res.send(err)
        } else {
            res.send(data)
        }
    })

}); 



app.listen(port, () => console.log(`Example app listening on port ${port}!`))





