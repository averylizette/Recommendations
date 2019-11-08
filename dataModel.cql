DROP KEYSPACE IF EXISTS recommendations;

CREATE KEYSPACE recommendations
WITH replication = {'class':'SimpleStrategy', 'replication_factor' : 3};

USE recommendations;

CREATE TABLE lookup(
   listingId int,
   price int,
   location text,
   PRIMARY KEY (listingId)
   );


CREATE TABLE geninfo (
    price int,
    location text,
    listingid int,
    title text,
    reviewcount int,
    rating float,
    type text,
    photos list<text>,
    PRIMARY KEY (price, location)
) WITH CLUSTERING ORDER BY (location ASC);


COPY geninfo (price, location, listingid, title, reviewCount, rating, type, photos) FROM '/Users/averylizette/Desktop/Recommendation/Casstest.csv' WITH HEADER = TRUE;


Select * 
FROM genInfo
WHERE location = 'Yelm'
  AND price >= 200 
LIMIT 10 
ALLOW FILTERING;



Insert into recommendations.geninfo (price, location, title, reviewCount, rating)
values (101, 'San Francisco', 'nice hose', 45, 4.5);

INSERT INTO recommendations.geninfo (price, location, title, reviewcount, rating) VALUES (9999999, 'sandy ego', 'asd dasd d', 1212, 4.4);
