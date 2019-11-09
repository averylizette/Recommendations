const express = require('express');
const path = require('path')
const cors = require('cors');
const app = express()
const port = 3000
const bodyParser = require("body-parser");
const getPriceAndLocation = require('../database/index.js').getPriceAndLocation;
const recommendations = require('../database/index.js').recommendations;
const post = require('../database/index.js').post;
let id = 10000001;

app.use(bodyParser.json())
app.use(cors());

//app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/:listingid', express.static(path.join(__dirname, '../client/dist')))

app.get('/recommendations/:listingid', (req, res) => {
    console.log(req.params.listingid);
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

// var string = JSON.stringify({
//     listingid: 8070945,
//     location: "East Orange",
//     photos: ["https://loremflickr.com/320/240/apartment", "https://loremflickr.com/320/240/apartment", "https://loremflickr.com/320/240/apartment", "https://loremflickr.com/320/240/apartment", "https://loremflickr.com/320/240/apartment", "https://loremflickr.com/320/240/apartment", "https://loremflickr.com/320/240/apartment", "https://loremflickr.com/320/240/apartment", "https://loremflickr.com/320/240/apartment"],
//     price: 331,
//     rating: 4.039999961853027,
//     reviewcount: 75,
//     title: "nam et rerum",
//     type: "private room"
//     });

//     console.log(string)

app.post('/newListing', (req, res) => {
    let listing = Object.assign({}, req.body);
    listing.id=id.toString();
    
    post(listing, (err, response) => {
       if (err) {
           res.status(400).send("Error posting listing to database.")
       } else {
           id++;
           res.status(201).send('Successfully added listing to database')
       }
    })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))





