$(document).ready(function(){
	//Collects the user input upon click
	$('.print').on('click', function() {
		var inputValue = $('.user-input').val();
		inputValue = parseInt(inputValue);

	//Checks to be sure input value is 1) a number and 2)between 1-100
	if (inputValue % 1 === 0 && inputValue >= 1 && inputValue <= 100) {
		fizzbuzz(inputValue);
	}
	//if user inputs a number less than 1 or greater than 100 they are asked to try again & input field is cleared
	else {
		alert("The number you enter must be between 1 and 100! Try again, please!");
		$('.user-input').val ("")
		}
	});
	$('.clear').on('click', function(){
		$('#text').empty();
		$('.user-input').val("");
	});
});



//function starts counting at 1 and stops at the number entered by user (max)
function fizzbuzz(max) {
for (i = 1; i <= max; i++) {
	console.log(i);
if (i % 15 == 0) {
    console.log("FizzBuzz");
    $("#text").append("FizzBuzz");
    $("#text").append("<br/>");
}
else if (i % 3 == 0) {
    console.log("Fizz");
    $("#text").append("Fizz");
    $("#text").append("<br/>");
}
else if (i % 5 == 0) {
    console.log("Buzz");
    $("#text").append("Buzz");
    $("#text").append("<br/>");
}
else {
    console.log(i);
    $("#text").append(i);
    $("#text").append("<br/>")
    }
}
};

