COPY geninfo (
    price,
    location,
    listingid,
    updatedprice,
    title,
    reviewCount,
    rating,
    type,
    photos
) FROM '/Users/averylizette/Desktop/Recommendations/database/generatedata/cassandraDataGeneration/geninfo100.csv'
WITH HEADER = TRUE;
cqlsh -f file.cql