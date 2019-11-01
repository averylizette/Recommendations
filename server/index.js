const express = require('express');
const path = require('path')
const cors = require('cors');
const app = express()
const port = 9004
const bodyParser = require("body-parser");

// app.get('/', (req, res) => res.send('Hello World!'))
app.use(bodyParser.json())
app.use(cors());
app.use('/', express.static(path.join(__dirname, '../client/dist')))
app.use('/air6n6/*/listing', express.static(path.join(__dirname, '/../client/dist')))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))





