const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1', keyspace: 'recommendations' });
const id = 10000000


const getPriceAndLocation = (listingid, callback) => {
  let query = 'SELECT * FROM lookup WHERE listingid = ?';
  client.execute(query, [ listingid ], {prepare: true}, callback)
}

var recommendations = (location, price, callback) => {
  let query = 'SELECT * FROM geninfo WHERE price >= ? AND location= ? LIMIT 12 ALLOW FILTERING';
  client.execute(query, [ price, location ], {prepare: true}, callback);
}


const post = (listing, callback) => {
  let queries = [
    {
      query: 'INSERT INTO lookup (listingID, location, price, updatedprice) VALUES (?,?,?,?)',
      params: [ listing.id, listing.location, listing.price, listing.updatedprice ]
    },
    {
      query: 'INSERT INTO geninfo (price, location, listingid, photos, rating, reviewcount, title, type, updatedprice) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      params: [ listing.price, listing.location, listing.id, listing.photos, listing.rating, listing.reviewcount, listing.title, listing.type, listing.updatedprice]
    }
  ];
  client.batch(queries, { prepare: true }, callback)
}

const updatePrice = (updatedInfo, callback) => {
  let queries = [
    {
      query: 'UPDATE lookup SET price = ? WHERE listingid = ?;',
      params: [ updatedInfo.price, updatedInfo.listingid]
    },
    {
      query: 'UPDATE geninfo SET price = ? WHERE listingid = ?;',
      params: [ updatedInfo.price, updatedInfo.listingid]
    }
  ];
  client.batch(queries, { prepare: true }, callback)
}

const updateTitle = (updatedInfo, callback) => {
  let query = 'UPDATE geninfo SET title = ? WHERE listingid = ? AND location = ? AND price = ?;'
  client.execute(query, [ updatedInfo.title, updatedInfo.listingid, updatedInfo.location, updatedInfo.price ], {prepare: true}, callback);
}



const deleteListing = (updatedInfo, callback) => {
  let queries = [
    {
      query: 'DELETE FROM lookup WHERE listingid = ?;',
      params: [ updatedInfo.listingid]
    },
    {
      query: 'DELETE FROM geninfo WHERE price = ? AND location = ? AND listingid = ?;',
      params: [ updatedInfo.price, updatedInfo.location, updatedInfo.listingid]
    }
  ];
  client.batch(queries, { prepare: true }, callback)
}


module.exports = {getPriceAndLocation, recommendations, post, updatePrice, updateTitle, deleteListing}