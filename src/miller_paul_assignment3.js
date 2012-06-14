// alert("JavaScript works!");



var stats = {
	"name": "Paul Miller",
	"bank": 7000,
	"wallet": 1500,
	"mexicoTrip": 3000,
	"hawaiiTrip": 2500,
	"money": function(){
		totalMoney = this.bank + this.wallet;
		console.log("I currently have $" + totalMoney + " left, in total.");
	},
	
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
	for (var i = 0; i < json.friends.length; i++){
		var friend = json.friends[i];
		console.log("Name: " + friend.name + " Age: " + friend.age)
	}
};




console.log("I always wanted to go to Hawaii but couldn't find a good deal. I however found a deal for a Mexico vacation, so I went.");
console.log("After all, I had $" + stats.bank + " in my bank account alone and the Mexico trip costs $" + stats.mexicoTrip + ". ");

stats.bank = stats.bank - stats.mexicoTrip

console.log("Counting my wallet and bank account after paying for the Mexico trip: I had $" + stats.getMoney() + " left, in total. $" + stats.bank + " in my bank account and $" + stats.wallet + " in my wallet.");
console.log("With so much money left, I decided to head to a bar while on vacation, there I met " + woman.realName + " who worked as a " + woman.job + ".");
console.log("All my friends joined us in the fun, which were: ");
handleData(json);


if (woman.friendly == true)
{
	console.log("She turned out to be very friendly and even explained two affordable vacation packages she had.");
	console.log("She told me a package to " + woman.packages[0] + " was available along with one to " + woman.packages[1] + ".");	
}

else if (woman.friendly == false)
{
	
}

console.log("Which peaked my interest as I always wanted to go to Hawaii, who doesn't want to visit there before they die?");

