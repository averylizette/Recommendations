import http from "k6/http";

export default function() {
  var url = "http://localhost:3000/newListing";
  var newListing = {"location":"here","photos":["https://specials-images.forbesimg.com/imageserve/1026205392/960x0.jpg?fit=scale","https://specials-images.forbesimg.com/imageserve/1026205392/960x0.jpg?fit=scale"],"price":12,"rating":4.5,"reviewcount":33,"title":"nice house wow","type":"castle"}
  http.post(url, newListing);
};