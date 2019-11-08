const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1', keyspace: 'recommendations' });



var getPriceAndLocation = (listingid, callback) => {
  const query = 'SELECT * FROM lookup WHERE listingid = ?';
  client.execute(query, [ listingid ], {prepare: true}, callback)
}




module.exports = {getPriceAndLocation}