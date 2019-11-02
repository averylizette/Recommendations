var faker = require('faker');
const fs = require('fs');
const casData = fs.createWriteStream('Cass.csv');
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
      const location = faker.address.city();
      const title = faker.lorem.words();
      const reveiwCount = faker.random.number({min:5, max:300});
      const rating = faker.finance.amount(3,5,2);
      const data = `${price},${location},${title},${reveiwCount},${rating}\n`;
      const data2 = `${id},${price},${location}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
        writer2.write(data2, encoding, callback);
      } else {
// see if we should continue, or wait
// don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
        ok2 = writer2.write(data2, encoding);
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

writeTenMillionUsers(casData, 'utf-8', () => {
  casData.end();
}, table1);
















// var dummyData = [];

// const createDummyData = () => {
//   var n = 0;

//   while (n < 10) {
//     var listing = {};
//     listing.reveiwCount = faker.random.number({min:5, max:300});
//     listing.price = faker.random.number({min:40, max:1200});
//     listing.rating = faker.finance.amount(3,5,2);
//     listing.title = faker.lorem.words();
//     listing.location = faker.address.city();
  
//     var numberOfPhotos = faker.random.number({min:5, max:15});
//     var photoCount = 0;
//     var photos = []
//     while (photoCount < numberOfPhotos) {
//         photos.push(faker.image.imageUrl())
//         photoCount++;
//     }
    
//     listing.photos = photos;
//     dummyData.push(listing)
//     n++;
//   }  
// }


// var string = createDummyData()

// console.log(dummyData.length)

// var dummyDataStr = JSON.stringify(dummyData);
// file.write(dummyDataStr)
// file.end()

//console.log(dummyDataStr)

//  const buf = Buffer.from(dummyDataStr);
//  //console.log(buf)

// fs.writeFile('seedData.txt', buf, (err) => {
//   if (err) {
//     console.log('did not write to seeddata file')
//   }
//   console.log('The file has been saved!');
// });

// fs.readFile('seedData.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.log('couldnt read your data')
//   }
//   console.log('successfully read data');
//   var parsed = JSON.parse(data);
//   //console.log(parsed)
// });



// var buft = new Buffer(10);
// console.log('buft', buft)



// //var city = faker.address.city()
// // var reveiwCount = faker.random.number({min:5, max:300});
// // var numberOfPhotos = faker.random.number({min:5, max:15});
// // var price = faker.random.number({min:40, max:1200});
// // var rating = faker.finance.amount(3,5,2);
// // var url = faker.image.imageUrl()
// // console.log(url) //

// // var title = faker.lorem.words()
// // console.log(title) //


// // var description = faker.company.catchPhraseDescriptor()
// // console.log(description, "description")

// //listing name
// //location
// //ratingcount
// // reveiws
// //images
// //price