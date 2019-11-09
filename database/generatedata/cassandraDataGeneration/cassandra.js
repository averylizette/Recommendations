var faker = require('faker');
const fs = require('fs');
const casData = fs.createWriteStream('Casstest.csv');
const cities = require('./citiesArray.js').cities
casData.write('price,location,listingid,updatedprice,title,reviewCount,rating,type,photos\n', 'utf8');


const table1 = fs.createWriteStream('CasTable1test.csv');
table1.write('listingId,location,price,updatedprice\n', 'utf8');


imageArr1 = `"['https://loremflickr.com/320/240/apartment', 'https://loremflickr.com/320/240/apartment', 'https://loremflickr.com/320/240/apartment']"`
imageArr2 = `"['https://loremflickr.com/320/240/apartment', 'https://loremflickr.com/320/240/apartment', 'https://loremflickr.com/320/240/apartment', 'https://loremflickr.com/320/240/apartment', 'https://loremflickr.com/320/240/apartment', 'https://loremflickr.com/320/240/apartment']"`
imageArr3 = `"['https://loremflickr.com/320/240/apartment','https://loremflickr.com/320/240/apartment','https://loremflickr.com/320/240/apartment','https://loremflickr.com/320/240/apartment', 'https://loremflickr.com/320/240/apartment', 'https://loremflickr.com/320/240/apartment', 'https://loremflickr.com/320/240/apartment', 'https://loremflickr.com/320/240/apartment', 'https://loremflickr.com/320/240/apartment']"`
imageArr4 = `"['https://loremflickr.com/320/240/apartment', 'https://loremflickr.com/320/240/apartment','https://loremflickr.com/320/240/apartment','https://loremflickr.com/320/240/apartment','https://loremflickr.com/320/240/apartment','https://loremflickr.com/320/240/apartment', 'https://loremflickr.com/320/240/apartment', 'https://loremflickr.com/320/240/apartment', 'https://loremflickr.com/320/240/apartment', 'https://loremflickr.com/320/240/apartment', 'https://loremflickr.com/320/240/apartment']"`
imageArr5 = `"['https://loremflickr.com/320/240/apartment','https://loremflickr.com/320/240/apartment','https://loremflickr.com/320/240/apartment','https://loremflickr.com/320/240/apartment', 'https://loremflickr.com/320/240/apartment','https://loremflickr.com/320/240/apartment','https://loremflickr.com/320/240/apartment','https://loremflickr.com/320/240/apartment','https://loremflickr.com/320/240/apartment', 'https://loremflickr.com/320/240/apartment', 'https://loremflickr.com/320/240/apartment', 'https://loremflickr.com/320/240/apartment', 'https://loremflickr.com/320/240/apartment', 'https://loremflickr.com/320/240/apartment']"`

var images =[imageArr1, imageArr2, imageArr3, imageArr4, imageArr5];
var listingTypes = ['hotel room', 'entire place', 'private room', 'shared room', 'entire place']

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
      const index = faker.random.number({min:0, max:4});
      const imageSet = images[index]
      const type = listingTypes[index]
      const updatedPrice = 0;
      const data = `${price},${location},${id},${updatedPrice},${title},${reveiwCount},${rating},${type},${imageSet}\n`;
      const data2 = `${id},${price},${location},${updatedPrice}\n`;
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


