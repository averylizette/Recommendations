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

**POST**

*Create - POST:*

Create a new recommendation listing:

```
/newRecommendation 
```

**PUT**

*Update - PUT*

Update a listing's rating:
```
/rating/:id
```

Update a listing's price:
```
/price/:id
```

Update a listing's review count:
```
/reviewCount/:id
```

Update a listing's title:
```
/title/:id
```

Add photos to a listing:
```
/photos/:id
```

**DELETE**

Delete a photo:

```
/deletePhoto/:photo/:id
```

Delete a listing:

```
/deleteListing/:id
```


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
