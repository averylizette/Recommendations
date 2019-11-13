DROP KEYSPACE IF EXISTS recommendations;

CREATE KEYSPACE recommendations
WITH replication = {'class':'SimpleStrategy', 'replication_factor' : 1};

USE recommendations;

CREATE TABLE lookup(
   listingId int,
   price int,
   location text,
   updatedprice int,
   PRIMARY KEY (listingId)
   );


CREATE TABLE geninfo (
    price int,
    location text,
    listingid int,
    updatedprice int,
    title text,
    reviewcount int,
    rating float,
    type text,
    photos list<text>,
    PRIMARY KEY (price, location, listingid)
) WITH CLUSTERING ORDER BY (location ASC);


COPY geninfo (price, location, listingid, updatedprice, title, reviewCount, rating, type, photos) FROM '/Users/averylizette/Desktop/Recommendations/database/generatedata/cassandraDataGeneration/geninfo.csv' WITH HEADER = TRUE;
COPY lookup (listingid, price, location, updatedprice) FROM '/Users/averylizette/Desktop/Recommendations/database/generatedata/cassandraDataGeneration/lookup.csv' WITH HEADER = TRUE;

COPY geninfo (price, location, listingid, updatedprice, title, reviewCount, rating, type, photos) FROM '/var/www/Recommendations/database/generatedata/cassandraDataGeneration/Casstest.csv' WITH HEADER = TRUE;

COPY lookup (listingid, price, location, updatedprice) FROM '/var/www/Recommendations/database/generatedata/cassandraDataGeneration/CasTable1test.csv' WITH HEADER = TRUE;

/var/www/Recommendations/database/generatedata/cassandraDataGeneration/Casstest.csv
/var/www/Recommendations/database/generatedata/cassandraDataGeneration/CasTable1test.csv

Select * 
FROM genInfo
WHERE location = 'Yelm'
  AND price >= 200 
LIMIT 1
ALLOW FILTERING;



Insert into recommendations.geninfo (price, location, title, reviewCount, rating)
values (101, 'San Francisco', 'nice hose', 45, 4.5);

 price int,
    location text,
    listingid int,
    updatedprice int,
    title text,
    reviewcount int,
    rating float,
    type text,
    photos list<text>,

INSERT INTO geninfo (price, location, listingid, updatedprice, title, reviewcount, rating, type, photos) VALUES (12, "here", 10000003, 0, 'nicehousewow', 44, 4.5, 'castle', (['https://specials-images.forbesimg.com/imageserve/1026205392/960x0.jpg?fit=scale','https://specials-images.forbesimg.com/imageserve/1026205392/960x0.jpg?fit=scale']));
 

var obj = {
  location: "here",
  photos: ['https://specials-images.forbesimg.com/imageserve/1026205392/960x0.jpg?fit=scale', 'https://specials-images.forbesimg.com/imageserve/1026205392/960x0.jpg?fit=scale']),
  price: 12,
  rating: 4.5,
  reviewcount: 33,
  title: 'nice house wow',
  type: 'castle'
}

Update lookup
Set price=99 
Where listingid=9999999;

select * from lookup where listingid = 9999999;