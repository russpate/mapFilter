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
var materialFilter = items.filter(function(el, idx, array){
  return el.materials.length >= 8;
});

var materialMap = materialFilter.map(function(el, idx, array){
  return {
    title: el.title,
    materialNumber: el.materials.length,
    material: el.materials
  };
});
var materialRange = "";
materialMap.forEach(function(el,idx, array){
  materialRange += " item: " + el.title + "<br />   " + " material: " + el.materialNumber + " " + el.material + "<br /><br />";
});

document.getElementById("answer5").innerHTML = materialRange;
//
//
//// Answer 6
//
//
var madeFilter = items.filter(function(el, idx, array){
  return el.who_made === "i_did";
});

var madeMap = madeFilter.map(function(el, idx, array){
  return {
    totalItems: el.who_made.length,
    title: el.title,
    whoMade: el.who_made
  };
});
var madeRange = "";
madeMap.forEach(function(el,idx, array){
  madeRange += " item: " + el.title + "<br />   " + " whomade: " + el.whoMade + "<br /><br />";
});

document.getElementById("answer6").innerHTML = "<span>number of handmade items: </span>" + madeFilter.length + "<br /><br />" + madeRange;
