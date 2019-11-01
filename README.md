# Reccomendation's Module

A microservice that recommends similar products based on price and location. 

## Getting Started

Insert instructions here

### Prerequisites

What things you need to install the software and how to install them

```
npm install
```

### Installing

A step by step series of examples that tell you how to get a development env running

Build the module

```
npm run react-dev
```

And start the server

```
npm start
```


## Interacting with the API

**URL**
```
localhost:3000/listings/:id/recommendations 
```
Example: 

```
localhost:3000/listings/123/recommendations 
```
Returns all the recommendations for the listing 123



**GET**

*Retrieve a playlist based on id:*

```
/recommendations/:id
```

Example:

```
/recommendations/14
```
Returns all the recommendations for the listing number 14.

**Input (required):**
    -listingID INT

**Output:** 
    -Success status code: 200
    -Error status code: 400
    -Datashape: JSON Object

**POST**

*Create - POST:*

Create a new recommendation listing:

```
/newRecommendation 
```

**Input (all required):**
    -listingName STRING
    -location STRING
    -price FLOAT
    -ratingCount INT
    -photos ARRAY

**Output:**
    -Success status code: 201
    -Error status code: 400


**PUT**

*Update - PUT*

Update a listing's rating:
```
/rating/:id
```

**Input (required):**
    -listingID INT
    -rating FLOAT

**Output:**
    -Success status code: 200
    -Error status code: 400

Update a listing's price:
```
/price/:id
```

**Input (required):**
    -listingID INT
    -price INT

**Output:** 
    -Success status code: 200
    -Error status code: 400

Update a listing's review count:
```
/reviewCount/:id
```
**Input (required):**
    -listingID INT
    -reviewCount FLOAT

**Output:** 
    -Success status code: 200
    -Error status code: 400

Update a listing's title:
```
/title/:id
```
 **Input (required):**
    -listingID INT
    -title STRING

**Output:**
    -Success status code: 200
    -Error status code: 400


Add photos to a listing:
```
/photos/:id
```

**Input (required):**
    -listingID INT
    - photo STRING

**Output:** 
    -Success status code: 200
    -Error status code: 400

**DELETE**

Delete a photo:

```
/deletePhoto/:photo/:id
```

**Input (required):**
    -listingID INT
    -photoID INT

**Output:** 
    -Success status code: 200
    -Error status code: 400

Delete a listing:

```
/deleteListing/:id
```
**Input (required):**
    -listingID INT

**Output:**
    -Success status code: 200
    -Error status code: 400

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* React
* Express/Node.js
* Insert Database here

## Contributing

Bacai and Air6b6 Org

## Authors

* **Avery Neil** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.


## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
