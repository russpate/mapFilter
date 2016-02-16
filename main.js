//
//
//// Answer 1
//
//
totalPrice = 0;
items.forEach(function(el, idx, array){
  totalPrice += el.price;
});
var avgPrice = "The average cost is: " + "<br />   " + Math.round(totalPrice / items.length);

document.getElementById("answer1").innerHTML = avgPrice;
//
//
//// Answer 2
//
//
var priceFilter = items.filter(function(el, idx, array){
  return el.price >= 14 && el.price <= 18;
});
var priceMap = priceFilter.map(function(el, idx, array){
  return {
    price: el.price,
    title: el.title
  };
});
var costRange = "";
priceMap.forEach(function(el,idx, array){
  costRange += " item: " + el.title + "<br />   " + " price: $" + el.price + "<br /><br />" ;
});

document.getElementById("answer2").innerHTML = costRange;
//
//
//// Answer 3
//
//
var gbpFilter = items.filter(function(el, idx, array){
  return el.currency_code === "GBP";
});
var gbpMap = gbpFilter.map(function(el, idx, array){
  return {
    currencyCode: el.currency_code,
    price: el.price,
    title: el.title
  };
});
var gbpRange = "";
gbpMap.forEach(function(el,idx, array){
  gbpRange += " item: " + el.title + "<br />   " + " price: $" + el.price + " currency code: " + el.currencyCode;
});

document.getElementById("answer3").innerHTML = gbpRange;
//
//
//// Answer 4
//
//
var woodFilter = items.filter(function(el, idx, array){
  return el.materials.indexOf("wood") !== -1;
});
var woodMap = woodFilter.map(function(el, idx, array){
  return {
    title: el.title,
    materials: el.materials
  };
});
var woodRange = "";
woodMap.forEach(function(el,idx, array){
  woodRange += " item: " + el.title + "<br />   " + " material: " + el.materials + "<br /><br />";
});

document.getElementById("answer4").innerHTML = woodRange;
//
//
//// Answer 5
//
//
var woodFilter = items.filter(function(el, idx, array){
  return el.materials.indexOf("wood") !== -1;
});
var woodMap = woodFilter.map(function(el, idx, array){
  return {
    title: el.title,
    materials: el.materials
  };
});
var woodRange = "";
woodMap.forEach(function(el,idx, array){
  woodRange += " item: " + el.title + "<br />   " + " material: " + el.materials + "<br /><br />";
});

document.getElementById("answer4").innerHTML = woodRange;
