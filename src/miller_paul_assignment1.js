/* Author : Paul J. Miller
 * Initial Date: 05/28/2012
 * Deliverable I
 * 'Vacation. Trip. Hawaii.'
 * Full Sail University
 * SDI 1206 - Section 2
 */


// Initial Variables

// var friend = prompt("What is your first and last name?");
var bank = 4000;
var wallet = 1500;
var paycheck = 500;
var mexicoTrip = 3000;
var hawaiiTrip = 2500;
var postMexico = (bank - mexicoTrip);
var postDeposit = (wallet + 1000);
var postHawaii = (hawaiiTrip - bank);

var destination =
{
	mexico: "Mexico",
	hawaii: "Hawaii"
};

var decissions =
{
	goToMexico: true,
	goToBar: true,
	getNumber: true,
	contactAgent: true,
	dontGoToMexico: false,
	goToHawaii: true,
	dontGoToHawaii: false
};


// The Story Begins...

console.log("I got an offer to stay at an all-inclusive resort spa in Mexico for $" + mexicoTrip + ".");
console.log("I checked my bank account, it had $" + bank + ". While I had $" + wallet + " in my wallet.\nI had to think hard about my decission...");

// Decission to go to Mexico or not.
if (decissions.goToMexico == true)
{
	console.log("I decided I had enough money and could save up more money later if need be. I wanted to get away for awhile and go on the trip to Mexico.");
	console.log("Life is all about having fun and enjoying your time here, so why not?!");
	var bank = (bank - mexicoTrip);
	console.log("I now have only $" + postMexico + " left in my bank account.");
	// Remove comment below once fully setup.
	// console.log("I deducted the trip cost of $" + Cost.Mexico + " from my bank account. I now had only $" + Money.Bank + " left in the bank.");
	console.log("I now headed to my destination of: " + destination.mexico + ".");
	
	// Deciding to put away money.
	console.log("Since the trip was all inclusive and I just got a paycheck; I decided to deposit all the money in my wallet into my bank account.");
	console.log("So I took the $" + wallet + " in my wallet and put it into my bank acocunt. I now had $" + postDeposit + " in my bank account.");
	var bank = postDeposit;
	var wallet = 0;
	
	// Keep paycheck.
	console.log("I decided to keep my full paycheck to use while in Mexico."); 
	console.log("So I cashed my $" + paycheck + " paycheck and put it into my wallet.");
	var wallet = (wallet + paycheck);
	console.log("I now had $" + wallet + " in my wallet to spend.");
	
	// Pool bars.
	console.log("During my first time out of my room; I could go to the pool or go to the other side of the resort where there's a pool with full swim-up bars and lots of adults.");
	console.log("So I could hang around families and kids at the pool or go to the bar pools and have fun amongst the crowd.");
	
	// Should I go to the bar?
	if (decissions.goToBar == true)
	{
		console.log("I decided to visit the crowds at the bar pools, it was amazing once you step into the area.");
		console.log("I imediately started having fun as soon as I looked at the place from outside-the-box.");
		console.log("I met a wonderful married coupple and the whole trip every night during the evening until late night, we would all meet in the bar pools.");
		console.log("Hanging out with them was a blast, I even found out that the wife was a travel agent. I couldn't help but think if I could get an affordable trip to Hawaii.");
	
	// Should I get her contact details?	
	if (decissions.getNumber == true)
	{
		console.log("I decided by the end of the trip to ask her for her contact details about maybe discussing a trip to Hawaii.");
		console.log("She handed me a business card and told me to call her when I got back from the Mexico trip. I couldn't help but feel elated!");
		console.log("I finished off my Mexico vacation, having a blast with all the people that were there.\nNow I find myself on a plane headed back home.");
		console.log("I kept thinking of how wonderful it would be to go to Hawaii but I didn't want to A) Get my hopes up and B) Hype Hawaii up to be something it's not.");
		console.log("I didn't even know how I could pull this trip off; by the time the plane landed I still didn't know which way to go. One way or another, I had to fifure it all out.");
	}
	
	// Don't get her contact details.
	else
	{
		console.log("I figure I'll leave them be, they're on vacation last thing they want is business discussion. They were fun to be around, I should just enjoy it while I can.");
	}
		var wallet = 0;
	}
	
	// Don't go to the bar.
	else
	{
		console.log("I felt like being a hermit and decided to swim for a half hour in the pool and then go shopping before eventually going to bed for the night");
	}
	
}

// Decide not to go on Mexico trip.
else
{
	console.log("I decided to stay home and save my money because you never know when you may need it.\n Maybe if a deal comes up again I'll go.");
};



// Contact the travel agent. 
if (decissions.contactAgent == true)
{
	console.log("I got back from the trip and laid my head to rest for the night. I figured I'd sleep it off and figure it out the next day.");
	console.log("I let two days pass and I finally got up the nerve to call her.");
	console.log("I was nervous at first and felt kind of intruding but she calmed my nerves imediately and said she had been waiting on my call");
	console.log("She even said she find the best deals she could find for Hawaii. Instead of being in a hotel right on the beach, I could stay at one a block away and save almost 50% right away!");
	console.log("I was amazed and blown away that two people could go to Hawaii for a week for $" + hawaiiTrip + ".");
	console.log("It was even cheaper than my trip to the resort in Mexico. I couldn't believe it!")

}


// Don't contact the travel agent.
else
{
	console.log("I got back from the trip and laid my head to rest for the night. I figured I shouldn't even call her nor could I possibly afford it now.s");
}


// Decission to go to Hawaii or not. ONLY if 1) Have a slight savings in the bank account to afford a trip. 2) Willing to risk spending it for the trip.

// IF the my bank has x amount of money in it, it'll persuade me more to go on the Hawaii trip.

if (bank >= 2500)
{
	
if (decissions.goToHawaii == true)
{
	console.log("I figure: a chance to go vacation in a tropical paradise is a once in a lifetime deal. I shouldn't pass this offer up at all! I prayed I had enough money to go especially when I decided to go regardless of how much money I had.");
	
	// Trip cost
	console.log("I had to be sure this was the real deal and that I could actually afford to go! If I could afford it at all, I decided I would go no matter what!");
	console.log("I ran the numbers inside my head, calculating my options here: Hawaii would cost $" + hawaiiTrip + " in total.")
	console.log("So I have $" + bank + " in the bank now, by the grace of God I'm able to afford it and would afterwards; become a broke guy, but happy and astonished nonetheless.");
	console.log("With the trip paid for: I now had $" + (bank - 2500) + " left in my bank account.");
	
	// Remove comment below once fully setup.
	// console.log("I deducted the trip cost of $" + Cost.Mexico + " from my bank account. I now had only $" + Money.Bank + " left in the bank.");
	
	console.log("I now headed to my destination of: " + destination.hawaii + ".");
	console.log("It was a beautiful place with the sun always shinning and the slight ocean breeze tingling your arm hair like tall grass in an open field.");
	console.log("The scenary alone was breathtaking, seeing a live active volcano and it adding land slowly to Hawaii was just beautiful to see mothe nature at work.");
	console.log("The traditions of the natives, their culture, the cities and their bright lights, clubs, bars and eateries; I will remember these moments for the rest of my life.");
	console.log("I've never been so at peace with everything in my life than being in Hawaii. Although you can't buy happiness, you can buy tempoary happiness.");
	console.log("I feel honored and proud to have gone to Hawaii despite being wreckless in choice with my savings. I just couldn't pass it up!");
	console.log("Hawaii changed me in some kind of way, you should always be thankful for anything you do in this life and/or the next.");
	console.log("Life is a crazy, scary, funny, happy thing and you can't let it pass you up.");
	console.log("It was worth every penny and even more for the enjoyment I had in Hawaii. All the shops, stores and beaches were top tier and beautiful beyond words could even convey.");
}

// Decide not to go on Hawaii trip.
else
{
	console.log("I decided to stay home and save my money because you never know when you may need it. Afterall, it's not like I'm a millionaire!\n Maybe if a deal comes up again I'll go. Maybe, just maybe.");
}


};



