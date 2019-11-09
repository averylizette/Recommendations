const express = require('express');
const path = require('path')
const cors = require('cors');
const app = express()
const port = 3000
const bodyParser = require("body-parser");
const db = require('../database/index.js')
let id = 10000001;

app.use(bodyParser.json())
app.use(cors());

//app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use('/:listingid', express.static(path.join(__dirname, '../client/dist')))

app.get('/recommendations/:listingid', (req, res) => {
    console.log(req.params.listingid);
    db.getPriceAndLocation(req.params.listingid, (err, data) => {
        if (err) {
            console.log('price and location error in server index.js')
            res.send(err)
        } else {
            db.recommendations(data.rows[0].location, data.rows[0].price, (err, data) => {
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
    listing.id = id.toString();
    listing.updatedprice = 0;

  
    db.post(listing, (err, response) => {
       if (err) {
        res.status(400).send("Error posting listing to database.")
       } else {
        id++;
        res.status(201).send('Successfully added listing to database')
       }
    })
})


// app.put('/updatePrice', (req, res) => {
//     // console.log('hitting here')
//     db.updatePrice(req.body, (err, data) => {
//         if (err) {
//             console.log('error!!!:', err)

//             res.status(400).send("Failed to update your listing price");
//         } else {
//             res.status(200).send("Updated your listing price");
//         }
//     })
// })

app.put('/updateTitle', (req, res) => {
    db.updateTitle(req.body, (err, data) => {
        if (err) {
            console.log('error updating title!!!:', err)
            res.status(400).send("Failed to update your listing's title");
        } else {
            res.status(200).send("Updated your listing's title");
        }
    })
})



app.delete('/deleteListing', (req, res) => {
    db.deleteListing(req.body, (err, data) => {
        if (err) {
            console.log("There was a problem deleting your listing", err)
            res.status(400).send("There was a problem deleting your listing")
        } else {
            res.status(200).send("You deleted your listing")
            console.log("Successfully deleted your listing")
        }
    })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))





