var faker = require('faker');
const fs = require('fs');
const genInfo = fs.createWriteStream('testphotos.csv');
genInfo.write('listingId,location,price,reviewCount,rating,title\n', 'utf8');

function writeTenMillionGenInfo(writer, encoding, callback) {
    let i = 5;
    let id = 0;
    function write() {
      let ok = true;
      do {
        i -= 1;
        id += 1;
        const imageArr = []
        imageArr.push('https://loremflickr.com/320/240/apartment');
        imageArr.push('https://loremflickr.com/320/240/apartment');
        imageArr.push('https://loremflickr.com/320/240/apartment');
        
        
        var strArr = JSON.stringify(imageArr);


        const data = `${id},${strArr}\n`;
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
  
  writeTenMillionGenInfo(genInfo, 'utf-8', () => {
    genInfo.end();
  });
  


