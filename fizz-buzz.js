//This is my FizzBuzz app.  For numbers 1-100, if a number is divisible by 3 output will be "Fizz". 
//If a number is divisible by 5, output will be "Buzz".  And if a number is divisible by both 3
//and 5, output will be "FizzBuzz".  Otherwise, output will simply be the number itself.

var fizzBuzz = function() {
for (i = 1; i <= 100; i++) {
if (i % 15 == 0) {
    console.log("FizzBuzz");
}
else if (i % 3 == 0) {
    console.log("Fizz");
}
else if (i % 5 == 0) {
    console.log("Buzz");
}
else {
    console.log(i);
    }
}
};

fizzBuzz();