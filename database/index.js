const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1', keyspace: 'recommendations' });



var getPriceAndLocation = (listingid, callback) => {
  let query = 'SELECT * FROM lookup WHERE listingid = ?';
  client.execute(query, [ listingid ], {prepare: true}, callback)
}

var recommendations = (location, price, callback) => {
  let query = 'SELECT * FROM geninfo WHERE price >= ? AND location=? LIMIT 12 ALLOW FILTERING';
  client.execute(query, [ price, location ], {prepare: true}, callback);
}

// var getPriceAndLocation2 = (listingid, callback) => {
//   // const query = 'SELECT * FROM lookup WHERE listingid = ?';
//   // client.execute(query, [ listingid ], {prepare: true}, callback)
//   client.stream('SELECT * FROM lookup WHERE listingid=', [ 1 ])
//     .on('readable', function () {
//       // 'readable' is emitted as soon a row is received and parsed
//       let row;
//       while (row = this.read()) {
//         console.log('row %s and price %s', row.location, row.price);
//       }
//     })
//     .on('end', function () {
//       // Stream ended, there aren't any more rows
//       console.log('reached on end')
//     })
//     .on('error', function (err) {
//       // Something went wrong: err is a response error from Cassandra
//       console.log('reached on error')
//     });
// }



var getPriceAndLocation3 = (listingid, callback) => {
  //const query = 'SELECT * FROM lookup WHERE listingid = ?';
  //client.execute(query, [ listingid ], {prepare: true}, callback)

  // Reducing a large result
  // client.eachRow('SELECT time, val FROM temperature WHERE station_id=', ['abc'],
  // function(n, row) {
  //   // The callback will be invoked per each row as soon as they are received
  //   minTemperature = Math.min(row.val, minTemperature);
  // },
  // function (err) {
  //   assert.ifError(err);
  // }
  // );
}






module.exports = {getPriceAndLocation, recommendations}