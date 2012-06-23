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
 return true;
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
 return true;
 }
};
