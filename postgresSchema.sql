DROP DATABASE IF EXISTS recommendations;

CREATE DATABASE recommendations;

USE recommendations;

CREATE TABLE genInfo (
    listingId     integer PRIMARY KEY,
    location      character varying(255), NOT NULL,
    price         integer NOT NULL,
    reviewCount   integer NOT NULL,
    rating        float(2),
    title         character varying(255), NOT NULL
);

CREATE TABLE photos (
    listingId     integer PRIMARY KEY NOT NULL,
    image         character varying(400), NOT NULL,
    id            integer NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (listing) REFERENCES genInfo(listingId),
);


COPY genInfo
FROM 'C:\tmp\sample_data.csv' DELIMITER ',' CSV HEADER;

COPY photos
FROM 'C:\tmp\sample_data.csv' DELIMITER ',' CSV HEADER;