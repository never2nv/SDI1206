// STRINGS

/* Verify if a string follows correct e-mail format or not.
 * Just used a simple filter, I didn't know if I should console log if format was not e-mail format or not?
 * Could later refactor and simplify while adding complexity to maybe fix common e-mail formatting problems.
 * i.e. if they forgot the . for .com or .net among other simple, little tweaks that could be added.
 */


/*
var stringEmail = function (email) {
 var emailFilter = / ^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-][a-zA-Z0-9])+\.)+({2,4})+$/; // Corrected and fixed?
 if (!emailFilter.test(email))
 {
 return false;
 }
 else
 {
 return true;
 }
};
*/



/* String is phone number? Same type of filter used as e-mail but edited for phone numbering naturally.
 * Based on the format for area code digits, first 3 digits of number, final four digits of number.
 * i.e. 818-555-1234
 */


/*
var stringPhone = function(phone) {
 var phoneFilter =  /^((\+?1-)?\d\d\d-)?\d\d\d-\d\d\d\d$/;
 if (!phoneFilter.test(phone))
 {
 return false;
 }
 else
 {
 return true;
 }
};
*/




// Validate URL


/*

var stringURL = function (url) {
 var urlFilter = /^(ht|f)tps?:\/\/[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s&lt;&gt;\#%"\,\{\}\\|\\\^\[\]`]+)?$/  // Fixed
 if (!urlFilter.test(url))
 {
 return false;
 }
 else
 {
 return true;
 }
};

*/




/* Capitalize First Letter In Each New Word Within Any Given String
 * i.e. capitalizeString("i wish i could do this right") would return "I Wish I Could Do This Right".
 */
var capitalizeString = function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};


// Convert say a,b,c to a/b/c which I think you can do this way?
var slashSeperate = function(str) {
var n=str.split(' '); 
return n;
};

console.log(slashSeperate("Hi how are you today"));

// NUMBERS

/* Format number(s) for decimal placement. i.e. Money 2.1 -> 2.10
 * i.e. ' moneyFormat(10); ' would return 10.00
 */
var moneyFormat = function(number) {
	var result = number.toFixed(2); 
	console.log(result);
};



















// Fuzzy match number(s)
var fuzzyNumbers= function(number1, number2, percent) {
    var fuzzy= number1*(percent/100), number2= +this;
    return number2>= number1-fuzzy && number2<= number1+fuzzy;
}


//Find number of days difference between two dates.
var dateDifference = function readDate(string) {
    var mdy = string.split('/');
    return new Date(mdy[2], mdy[0]-1, mdy[1]);
	var dayDifference = function daydiff(first, second) {
    return (second-first)/(1000*60*60*24)
	}
};


/* Convert "string numbers" into numbers.
 * My take on this is: if you take a string and use the + operator, javascript will automatically convert the "String" number into an
 * action number. Therefore, a simple way to do this is take the string or number and + 0 to it, and it will auto-convert it into a
 * actual number?
 * i.e. console.log(stringConvert("50")); even though implemented as a string, will auto input the string and return it as an actual number.
 */
var stringConvert = function(number) {
	number + 0;
	return number;
};


// ARRAYS

