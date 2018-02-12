"use strict";


var i = 1;

while (i < 65536) {
    i = i * 2;
    console.log(i);

}


var number = 2;
var end = 65536;

while (number <= end) {
    console.log(number;
    number = number * 2;
}


// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;

var i = 10;

do {
    console.log('while loop iteration #' + i);
    i++;
} while (i < 10);


var allCones = Math.floor(Math.random() * 50) + 50;

do {
    var cones = Math.floor(Math.random() * 5) + 1;

    if (cones > allCones) {
        console.log("I cannot sell you " + cones + ", I only have " + allCones + " left.")
    } else {
        allCones -= cones;
        console.log("I sold " + cones + " cones.");
    }
}

while (allCones > 0);
console.log("i can not sell you any cones for i have sold them all!")


var allCones = Math.floor(Math.random() * 50) + 50;

var order;
console.log("Welcome to the icecream stand");
console.log("I start my day with " + allCones + " cones.");
do {
    order = Math.floor(Math.random() * 5) + 1;
    if (order <= allCones) {
        allCones = allCones - order;
        console.log("Sold " + order + "cones.");

    } else {
        console.log("Cannot sell you " + order + "cones. I only have " + allCones + " left.");
        console.log("Next customer, please");
    }

} while (allCones > 0);

console.log("I sold all the ice cream cones");
