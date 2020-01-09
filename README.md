# Reccomendation's Module

A microservice that recommends similar products based on price and location. 

### Installation

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


## Built With

* React
* Express/Node.js
* Insert Database here

## Contributing

Bacai and Air6b6 Org

## Authors

* **Avery Neil** - *API and backend* - [averylizette](https://github.com/averylizette)
* **BacAi Dong** - *UI/UX Design* - [Bacai](https://github.com/dongb909)

