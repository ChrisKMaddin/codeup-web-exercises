(function () {
    "use strict";

    /*    // create a circle object
        var circle = {
            radius: 3,

            getArea: function () {
                // TODO: complete this method
                // hint: area = pi * radius^2

                return; // TODO: return the proper value
            },

            logInfo: function (doRounding) {
                // TODO: complete this method.

                // If doRounding is true, round the result to the nearest integer.
                // Otherwise, output the complete value

                console.log("Area of a circle with radius: " + this.radius + ", is: ");
            }
        };*/

    /*   function circle(radius)
       {
           this.radius = 3;
           // area method
           this.area = function ()
           {
               return Math.PI * this.radius * this.radius;
           };
           // perimeter method
           this.perimeter = function ()
           {
               return 2*Math.PI*this.radius;
           };
       }
       var c = new circle(3);
       console.log('Area =', c.area().toFixed(2));
       console.log('perimeter =', c.perimeter().toFixed(2));
   */

    var circle = {
        radius: 3,

        getArea: function () {

            var area = Math.PI * Math.pow(this.radius, 2);

            return area;
        },

            logInfo: function (doRounding) {

            var result = this.getArea();

                if (doRounding) {
                    result = Math.round(this.getArea());
                }

                console.log("Area of a circle with radius: " + this.radius + ", is: " + result);

            }
        };

        console.log(circle.getArea());


    /*   function circle(myRadius){
           var area = (3 * 3 * Math.PI);
           return area;

           function MyArea(){
               calculateArea(myRadius);

           }
       }
       var myRadius = parseFloat(prompt("Enter the radius of your circle in cm:",0));
       calculateArea(myRadius);


   */

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();