const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1', keyspace: 'recommendations' });
const id = 10000000


var getPriceAndLocation = (listingid, callback) => {
  let query = 'SELECT * FROM lookup WHERE listingid = ?';
  client.execute(query, [ listingid ], {prepare: true}, callback)
}

var recommendations = (location, price, callback) => {
  let query = 'SELECT * FROM geninfo WHERE price >= ? AND location=? LIMIT 12 ALLOW FILTERING';
  client.execute(query, [ price, location ], {prepare: true}, callback);
}


var post = (listing, callback) => {
  const queries = [
    {
      query: 'INSERT INTO lookup (listingID, price, location) VALUES (?,?,?)',
      params: [ listing.id, listing.price, listing.location ]
    },
    {
      query: 'INSERT INTO geninfo (price, location, listingid, title, reviewcount, rating, type, photos) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      params: [ listing.price, listing.location, listing.id, listing.title, listing.reviewcount, listing.rating, listing.type, listing.photos ]
    }
  ];
  client.batch(queries, { prepare: true }, callback)
}





module.exports = {getPriceAndLocation, recommendations, post}