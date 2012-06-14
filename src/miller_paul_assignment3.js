// alert("JavaScript works!");


// Global Variables
var stats = {
	"bank": 7000,
	"wallet": 1500,
	"mexicoTrip": 3000,
	"hawaiiTrip": 2500,
	// Testing ways to get total values.
	"money": function(){
		totalMoney = this.bank + this.wallet;
		console.log("I currently have $" + totalMoney + " left, in total.");
	},
	// Testing ways to get total values.
	"getMoney": function(){
		newMoney = this.bank + this.wallet;
		return newMoney;
	}	
};

var woman = {
    realName:    "Elizabeth Caldwell",
    job:        "Travel Agent",
    friendly:   true,
    packages:       [ "Hawaii", "The Caribbean" ],
    flyTo:      function (destination) {},
};

var handleData = function (json) {
	for (var i = 0; i < json.drinks.length; i++){
		var drinks = json.drinks[i];
		console.log("Name: " + drinks.name + " Difficulty: " + drinks.difficulty)
	}
};



// Story and decision to go to Mexico, will touch up later with loops/for/if statements.
console.log("I always wanted to go to Hawaii but couldn't find a good deal. I however found a deal for a Mexico vacation, so I went.");
console.log("After all, I had $" + stats.bank + " in my bank account alone and the Mexico trip costs $" + stats.mexicoTrip + ". ");

stats.bank = stats.bank - stats.mexicoTrip

console.log("Counting my wallet and bank account after paying for the Mexico trip: I had $" + stats.getMoney() + " left, in total. $" + stats.bank + " in my bank account and $" + stats.wallet + " in my wallet.");
console.log("With so much money left, I decided to head to a bar while on vacation, there I met " + woman.realName + " who worked as a " + woman.job + ".");
console.log("I wanted to order a round of drinks for us, the choices were: ");

handleData(json);

console.log("I chose: The Dirty Bomb and it must of been the right pick because Elizabeth became more friendly.");

// After being at the bar awhile, was she friendly or not?
if (woman.friendly === true)
{
	console.log("She turned out to be very friendly and even explained two affordable vacation packages she had.");
	console.log("She told me a package to " + woman.packages[0] + " was available along with one to " + woman.packages[1] + ".");
	console.log("Which peaked my interest as I always wanted to go to Hawaii, who doesn't want to visit there before they die?");
	console.log("Hawaii would only cost $" + stats.hawaiiTrip + " which was $500 cheaper than Mexico!");
}


// Woman was not friendly.
else
{
	console.log("She wasn't very friendly so I didn't even want to talk to her.");
};



// Character Constructor
var people = function(name){
	var jobTitle = ["UNKNOWN"];
	var employment = function(job) {
		jobTitle.push(job);
	};
var jobList = function(){
	for(var n = 0; n < employment.length; n++){
		console.log(name + " Job: " + n + ": " +
		jobTitle[n] + ".");
	}
};
	return{
		"name": name,
		"employment": employment,
		"jobtitle": jobTitle,
		"jobList": jobList
	};
};

//Constructing Characters & Attributes
var elizabeth = people("Elizabeth");
var dustin    = people("Dustin");
elizabeth.employment("Travel Agent");
elizabeth.jobTitle();
console.log(elizabeth);


