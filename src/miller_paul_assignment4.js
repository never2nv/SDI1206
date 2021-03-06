/* Author : Paul J. Miller
 * Initial Date: 06/05/2012
 * Deliverable IV
 * 'Custom Library'
 * Full Sail University
 * SDI 1206 - Section 2
 * 
 * I got a lot of things wrong in the past so I'm hoping this will makeup for some of that and hopefully I
 * did a lot of this correctly. I also did extras as much as I could to makeup for that fact as well.
 */



// STRINGS


/* Verify if a string follows correct e-mail format or not.
 * Just used a simple filter, I didn't know if I should console log if format was not e-mail format or not?
 * Could later refactor and simplify while adding complexity to maybe fix common e-mail formatting problems.
 * i.e. if they forgot the . for .com or .net among other simple, little tweaks that could be added.
 */

var stringEmail = function (email) {
 var emailFilter = / ^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-][a-zA-Z0-9])+\.)+({2,4})+$/; // Corrected and fixed?
 if (!emailFilter.test(email))
 {
 return false;
 }
 else
 {
 return stringEmail;
 }
};




/* String is phone number? Same type of filter used as e-mail but edited for phone numbering naturally.
 * Based on the format for area code digits, first 3 digits of number, final four digits of number.
 * i.e. 818-555-1234
 */

var stringPhone = function(phone) {
 var phoneFilter =  /^((\+?1-)?\d\d\d-)?\d\d\d-\d\d\d\d$/;
 if (!phoneFilter.test(phone))
 {
 return false;
 }
 else
 {
  return stringEmail;
 }
};



// Validate URL

var stringURL = function (url) {
	// Fixed after googling every filter needed for html format.
 var urlFilter = /^(ht|f)tps?:\/\/[a-z0-9-\.]+\.[a-z]{2,4}\/?([^\s&lt;&gt;\#%"\,\{\}\\|\\\^\[\]`]+)?$/  
 if (!urlFilter.test(url))
 {
 return false;
 }
 else
 {
  return stringEmail;
 }
};



/* Capitalize First Letter In Each New Word Within Any Given String
 * i.e. capitalizeString("i wish i could do this right") would return "I Wish I Could Do This Right".
 */
var capitalizeString = function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};


/*Convert say a,b,c to a/b/c which I think you can do this way?
 * i.e. slashSeperate("Hi how are you today"); would output Hi, how, are, you, today.
 * I thought str.split('/'); would seperate with a / but it doesn't. I misunderstand the
 * code I'm taking it; I'll try and fix before turning in.
 */
var slashSeperate = function(str) {
var n=str.split(' '); 
return n;
};


// NUMBERS


/* Format number(s) for decimal placement. i.e. Money 2.1 -> 2.10
 * i.e. ' moneyFormat(10); ' would return 10.00
 */

var moneyFormat = function(number) {
	var result = number.toFixed(2); 
	console.log(result);
	// Don't know if I should return moneyFormat or not?
};


// Fuzzy match number(s)
var fuzzyNumbers= function(number1, number2, percent) {
    var fuzzy= number1*(percent/100), number2= +this;
    return number2>= number1-fuzzy && number2<= number1+fuzzy;  // Hopefully this is correct math here.
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


/* Call a key for an array and output the array associated with that key.
 * Fixed, was doing the opposite of the objective. Corrected now.
 * Just an overall example which outputs the index # called.
 */

var keyCall = function(id) {
	i = {0:"Index 0", 1:"Index 1", 2:"Index 2"};
  console.log( i[id] );
  return i[id];
};
keyCall(0);
