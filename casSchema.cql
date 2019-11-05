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


CREATE TABLE genInfo(
   price int,
   location text,
   title text,
   reviewCount int,
   rating float,
   PRIMARY KEY ((price), location))
   WITH CLUSTERING ORDER BY (location DESC);


COPY lookup (listingId, price, location) FROM '/Users/averylizette/Desktop/Recommendation/CasTable1.csv' WITH HEADER = TRUE;
COPY genInfo (price, location, title, reviewCount, rating) FROM '/Users/averylizette/Desktop/Recommendation/Cass.csv' WITH HEADER = TRUE;