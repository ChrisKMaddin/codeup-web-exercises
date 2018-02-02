"use strict";


//ternary operator example
//var message;
//var success = true;

//var message = (success) ? "Operation was successful." : "Oops, something went wrong.";

//alert(message);


//var someNumber = 9;

//var divisibleByFiveMessage = (someNumber % 5 === 0) ? "Evenly divisible by 5" : "Not evenly divisible by five.";

//console.log(divisibleByFiveMessage);


//ternary operator example 2
//function returnLoginStatus() {
    //var loginStatus;

    //if (userLoggedIn()) {
        //loginStatus = "user is logged in";
    //} else {
        //loginStatus = "user is not logged in";
    //}
 //return loginStatus;
//}

//switch (returnStateOfUser()) {
    //case "Texas":
        //console.log("Howdy partner!");
       // break;
    //case "Alaska":
        //console.log("Brrrr!! Cold.")
        //break
//}



var pizzaPreference = prompt("What kind of pizza do you like?");

if (pizzaPreference === "pineapple and hot sauce") {
    alert("What a coincidence, that's my favorite!");
} else if (pizzaPreference === "cheese") {
    alert("Just plain cheese? Okay...");
} else {
    alert(pizzaPreference + " isn't my favorite, but let's order some!");
}