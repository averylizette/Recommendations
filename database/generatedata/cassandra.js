var faker = require('faker');
const fs = require('fs');
const casData = fs.createWriteStream('Cass.csv');
const cities = require('./citiesArray.js').cities
casData.write('price,location,title,reviewCount,rating\n', 'utf8');


const table1 = fs.createWriteStream('CasTable1.csv');
table1.write('listingId,location,price\n', 'utf8');


function writeTenMillionUsers(writer, encoding, callback, writer2) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    let ok2 = true
    do {
      i -= 1;
      id += 1;
      const price = faker.random.number({min:40, max:1200});
      const citiesIndex = faker.random.number({min:0, max:6738});
      const location = cities[citiesIndex]
      const title = faker.lorem.words();
      const reveiwCount = faker.random.number({min:5, max:300});
      const rating = faker.finance.amount(3,5,2);
      const data = `${price},${location},${title},${reveiwCount},${rating}\n`;
      const data2 = `${id},${price},${location}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
        writer2.write(data2, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
        ok2 = writer2.write(data2, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  console.log('buffering')
write()
}

writeTenMillionUsers(casData, 'utf-8', () => {
  casData.end();
}, table1);
