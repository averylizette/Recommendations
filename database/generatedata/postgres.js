var faker = require('faker');
const fs = require('fs');
const genInfo = fs.createWriteStream('postgresGenInfo.csv');
genInfo.write('listingId,location,price,reviewCount,rating,title\n', 'utf8');

const photos = fs.createWriteStream('postgresPhotos.csv');
photos.write('listingId,url,photoId\n', 'utf8');

function writeTenMillionGenInfo(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const price = faker.random.number({min:40, max:1200});
      const listingId = id;
      const title = faker.lorem.words();
      const reviewCount = faker.random.number({min:5, max:300});
      const rating = faker.finance.amount(3,5,2);
      const location = faker.address.city();
      const data = `${listingId},${location},${price},${reviewCount},${rating},${title}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
// see if we should continue, or wait
// don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
// had to stop early!
// write some more once it drains
      writer.once('drain', write);
    }
  }
  console.log('buffering')
write()
}

writeTenMillionGenInfo(genInfo, 'utf-8', () => {
  genInfo.end();
});


function writeEightyMillionPhotos(writer, encoding, callback) {
  let i = 80000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const url = faker.image.imageURL()
      const listingId = faker.random.number({min:0, max:10000000});
      const data = `${listingId},${url},${id}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  console.log('buffering')
write()
}

writeEightyMillionPhotos(photos, 'utf-8', () => {
  photos.end();
});
