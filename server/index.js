const express = require('express');
const path = require('path')
const cors = require('cors');
const app = express()
const port = 3000
const bodyParser = require("body-parser");
const getPriceAndLocation = require('../database/index.js').getPriceAndLocation;
const recommendations = require('../database/index.js').recommendations;

app.use(bodyParser.json())
app.use(cors());

app.use('/', express.static(path.join(__dirname, '../client/dist')))

//app.use('/:listingid', express.static('public'));

// app.use('/:listingid', express.static('public'));

//app.use('/air6n6/*/listing', express.static(path.join(__dirname, '/../client/dist')))

app.get('/recommendations/:listingid', (req, res) => {
    console.log('hitting here', req.params.listingid)
    getPriceAndLocation(req.params.listingid, (err, data) => {
        if (err) {
            console.log('price and location error in server index.js')
            res.send(err)
        } else {
            recommendations(data.rows[0].location, data.rows[0].price, (err, data) => {
                if (err) {
                    res.send(err)
                    console.log('err from recommendations retrieval:', err)
                } else {
                    res.send(data.rows)
                    res.end()
                    console.log('successful recommendations retrieval')
                }
            })
        }
    })
}); 


app.listen(port, () => console.log(`Example app listening on port ${port}!`))





