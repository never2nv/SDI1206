/*Author: Paul J. Miller
Date: 05-17-2012
Deliverable 3 - SDI 1205
Sci-fi Voyage.
*/

/* alert("Welcome To SDI-1205: Project 3!\nCreated by Paul J. Miller for Full Sail University 2012\nHope you enjoy my delayed work!"); */


/*
 * Could never get the JSON to link, I know it's another blonde moment but by the time I realized I needed help it was 1am and Weds became Thursday.
 * Knowing the instructors DO NOT provide support on Thursdays a.k.a. due dates; I didn't even bother e-mailing about it.
 * On Tuesday, I went to bed figuring I would end up figuring a solution out as usual the next day. 
 * I planned on converting a lot of the old code into JSON. Not only or better storage but also better/easier functionality.
 * I failed on an Epic scale! Still havn't even touched Diablo III yet, only accomplishmnet I can seem to complete fully.
 * I even tried to replicate this weeks 'Data Structures' video exactly, to the T.
 * Making it var json2 even just like the video! Maybe I am missing something easy but just never found it, who knows with the way my week has been going.
 * I was going to add a lot of this coding information into it to make everything better and run smoothly but luckily I just tried to captain names first.
 * Then tried to implement the json into the javascript. If I did most of what I wanted to do into the json and then never implement it, I'd be worst off.
 * So at least that's the only good news to report.
 */

// Economy
var Cost = 
{
	Shields: "10,000",
	Torpedo: "1,500",
	Oil: "500",
	Minerals: "1,000",
	ExoticMinerals: "2,000",
	ShieldUpgrade: true
};

var Currency = 
{
	Credits: "10,000",
	Oil: "2",
	Minerals: "5",
	ExoticMinerals: "1"
};

// Ship(s) Stats
var ShipStatus = 
 {
	Name: "U.S.S. Stargazer",
	Shields: "10",
	Torpedo: 5,
	FireTorpedo: "-1",
	FleetCount: "5",
	MaxFleet: "8",
	MaxWarp: "10",
	ReadyForDepart: true,
	ShieldUpgrade: true,
	TorpedoUpgrade: false,
	Warp: true,
	Recruit: true
 };
 
// Crew Status
var CrewStatus = 
{
	Captain: "Cap",
	CaptainFullName: "'Cap' Paul Miller",
	CaptainExperience: "Security Officer",	
	CrewName: "PJ",
	CrewCount: "3",
	FleetCaptains: 
	[
	"Sidney",
	"Crusher",
	"Riker",
	"Adams",
	"Shepard",
	"Winston",
	"Williams"
	]
};

// Departure Variables/Events
var Depart =
{
	Asteroid: true,
	AvoidAsteroid: false,
	AsteroidDamage: 7,
	Destination: "Pontius V",
	Harvest: true,
	HarvestOil: true,
	HarvestMinerals: true,
	HarvestExoticMinerals: true,
	EnemyShip: false,
	AttackEnemy: false,
	ReturnSafe: false
}



// Console Undefined Fix?
if (typeof console == "undefined") {
    this.console = {log: function() {}};
}

// Start of Adventure
console.log("Over the loudspeaker you hear; as you walk onto your ship:")
console.log("Welcome aboard the " + ShipStatus["Name"]);
console.log("Our ship's captain is", CrewStatus["Captain"]);
console.log("But you'd better call him " + CrewStatus["CaptainFullName"]);
console.log("He has " + ShipStatus["FleetCount"] + " Fleets and " + CrewStatus["CrewCount"] + " Crew.");
console.log("Are you any good at the helm?");


// Checking if you have enough crew to pilot all the ships in your fleet.
if (ReadyForDepart = true)
	{
    CrewStatus["CrewCount"] > ShipStatus["FleetCount"];
    console.log ("All aboard; The captain is ready for departure!");
   }
else
    {
        var CrewLeft = ShipStatus["FleetCount"] - CrewStatus["CrewCount"];
        console.log("We need ", CrewLeft, " more crew-men before we can depart the entire fleet!")
	}


// Ready For Departure?
if (CrewStatus["CrewName"] == "PJ") 
    {
        console.log ("We need someone to man the helm, that someone is you captain!");
	}

else
    {
        console.log (CrewStatus["CrewName"] + " is too scared to depart with " + CrewStatus["CaptainFullName"] + "!");
	}
	
// Upgrades Option Prior To Depart
console.log("You have " + Currency["Credits"] + " credits left in your account. Would you like to buy a 10% shield upgrade for " + Cost["Shields"] + " credits?");
console.log("Or would you like to acquire some more torpedoes for " + Cost["Torpedo"] + " credits. You have " + ShipStatus["Torpedo"] + " torpedos currently.");


/*
 /while (ShieldUpgrade = true)
{
	console.log("I see you'd like to upgrade the shields captain.")
}
while (TorpedoUpgrade = true)
{
	console.log("I see you'd like to purchase torpedo's captain.")
};
*/


// Choosing Sheild Upgrade
if (ShieldUpgrade = true) 
	{
    Cost["Shields"] - Currency["Credits"]; 
    ShipStatus["Shields"] + "10";
    ShipStatus["Shields"] = "20";
    {
    	console.log("You have chosen wisely Captain, shield upgrade it is!");
    	Currency["Credits"] = "0";
        console.log(Cost["Shields"] + " credits has been taken from you account. You now have " + Currency["Credits"] + " credits left.");
        console.log("We have upgraded our shields from 10% to " + ShipStatus["Shields"] + "%");
     }
	}
     
else if (TorpedoUpgrade = true)
    {
    	// Buying a torpedo
        Cost["Torpedo"] - Currency["Credits"];
        ShipStatus["Torpedo"] + "1";
        ShipStatus["Torpedo"] = "6";
        Console.log("You now have " + ShipStatus["Torpedo"] + " torpedoes currently.");
        Currency["Credits"] = "8,500";
        console.log(Cost["Torpedo"] + " credits has been taken from your account. You now have " + Currency["Credits"] + " credits left.");
	}



/*
 * Could never get the JSON to link, I know it's another blonde moment but by the time I realized I needed help it was 1am and Weds became Thursday.
 * Knowing the instructors DO NOT provide support on Thursdays a.k.a. due dates; I didn't even bother e-mailing about it.
 * On Tuesday, I went to bed figuring I would end up figuring a solution out as usual the next day. 
 * I planned on converting a lot of the old code into JSON. Not only or better storage but also better/easier functionality.
 * I failed on an Epic scale! Still havn't even touched Diablo III yet, only accomplishmnet I can seem to complete fully.
 * I even tried to replicate this weeks 'Data Structures' video exactly, to the T.
 * Making it var json2 even just like the video! Maybe I am missing something easy but just never found it, who knows with the way my week has been going.
 * I was going to add a lot of this coding information into it to make everything better and run smoothly but luckily I just tried to captain names first.
 * Then tried to implement the json into the javascript. If I did most of what I wanted to do into the json and then never implement it, I'd be worst off.
 * So at least that's the only good news to report.
 */

/*
var handleData = function (json2) {
	for (var i = 0; i < json2.captains.length; i++){
		var captain = json2.captains[i];
			console.log("Badge ID: " + captains.uuid + "Name: " + captains.name + "Age: " + captains.age);
	}
};

handleData(json2);
*/


		// Adding Captains to the fleet
if (ShipStatus["ReadyForDepart"] = true,
	ShipStatus["Recruit"] = true)
{
	console.log("I see you're ready to depart Captain but I reccomend acquiring some new captains to man some of our fleet ships!");
	console.log("Would you like to add some captains to man our fleets sir?");
	console.log("Fine choice sir! Having more captains will only give us a heavy advantage!")
	console.log("The available Captains are: " + "Captain " + CrewStatus.FleetCaptains[0] + ", " + "Captain " + CrewStatus.FleetCaptains[1] + ", " +  "Captain " + CrewStatus.FleetCaptains[2] + ", " + "Captain " + CrewStatus.FleetCaptains[3] + ", " + "Captain " + CrewStatus.FleetCaptains[4] + ", " + "Captain " + CrewStatus.FleetCaptains[5] + ", " + "and Captain " + CrewStatus.FleetCaptains[6]+ ".");
	console.log("You have picked Captain Sidney and Captain Crusher. Both are fine canidates sir!")
	console.log("Captain " + CrewStatus.FleetCaptains[0] + " has been added to our Fleet Captains.");
	console.log("Captain " + CrewStatus.FleetCaptains[1] + " has been added to our Fleet Captains.");
	CrewStatus["CrewCount"] = "5";
	console.log("We now have " + CrewStatus["CrewCount"] + " crewmen to man our fleet of ships.");
	console.log("We now have " + ShipStatus["FleetCount"] + " out of the maxium of " + ShipStatus["MaxFleet"] + " ships.");
	console.log("Are we fully ready for departure Captain?");
	console.log("Aye Aye Captain\nWe are departing from the base station sir.\nSmooth departure so far sir, nothing to report.");

// Asteroid or none?		
if (Depart["asteroid"] = "true")
{
	console.log("Uh Captain! I spot an asteroid ahead! Radar just picked it up! Over 50 k/m in length! Baring 1104 mark 7!\nTrying to avoid it sir!")
}
	
// If Asteroid is false then we can:
else
	{
		console.log("We avoided the asteroid sir! We are now free and clear!");
	};


// Asteroid Collission	
if (Depart["AvoidAsteroid"] = "false")
	{
		console.log("I tried to avoid the asteroid sir but its speed was too fast! It has bounced off our shields, luckily!");
		Depart.AsteroidDamage;
		ShipStatus["Shields"] = "13";
		console.log("The asteroid has dealt " + Depart.AsteroidDamage + "% damage to our shields Captain!");
		console.log("Our shields are now at " + ShipStatus["Shields"] + "% sir!");
	}
	
// Or completely bypass the Asteroid Event completely!
else
{
	console.log("Departed from base station successfully sir, nothing at all to report. Destination sir?");
};

console.log("I'm glad that is over with, where is our destination Captain?");
console.log(Depart["Destination"]);
console.log("Ah! " + Depart["Destination"] + " is a strategic location sir. Filled with plenty of natural resources!");
console.log("Entering warp in:\n5,\n4,\n3,\n2,\n1.\nEngaging warp drive!\nWarp drive enabled sir!\nWarp 3 has been engaged Captain, shall we go higher or lower sir?");
var warp = "8";
console.log("Aye, aye sir, setting the warp engines to warp " + warp + ".");
var pvtraveltime = "2";
console.log("We shall reach " + Depart.Destination + " in " + pvtraveltime + " hours, Captain.");
console.log("2 HOURS HAVE PASSED");
console.log("Captain, we have reached our destination of " + Depart.Destination + ".");
console.log("What would you like me to plan sir?");

if (Depart["HarvestOil"] = "true")
{
	var OilCost = "1"
	console.log("Aye, aye captain; I will send " + OilCost + " crewmen to extract oil from the planet.")
};

if (Depart["HarvestMinerals"] = "true")
{
	var MineralsCost = "2"
	console.log("Aye, aye captain; I will send " + MineralsCost + " crewmen to extract oil from the planet.")
};

if (Depart["HarvestExoticMinerals"] = "true")
{
	var ExoticMineralsCost = "3"
	console.log("Aye, aye captain; I will send " + ExoticMineralsCost + " crewmen to extract oil from the planet.");
};


if (Depart["HarvestOil"] = "true", Depart["HarvestMinerals"] = "true", Depart["HarvestExoticMinerals"] = "true")
{
	Depart["EnemyShip"] = true;
	Depart["AttackEnemy"] = true;
	CrewStatus["CrewCount"] = "0";
	console.log("I need to alert you captain: by harvesting so many resources we have run our crew down!");
	console.log("We now have " + CrewStatus.CrewCount + " crewmen left besides you sir!" );
	console.log("If we get attacked it will only be the " + ShipStatus.Name + " available to defend sir; with only you and I aboard.");
	console.log("Luckily you know how to engage the eneimies sir with your " + CrewStatus.CaptainExperience + " experience.");
	console.log("Sir, worst possible outcomes all day! I am picking up an enemy cruiser on radar ship. Bogey's on a collission course with us sir\nWhat shall we do?!");
}

else
{
	console.log("The crew have returned from harvesting sir; safe and sound. No enemies were seen either sir.")
	if (Depart.Asteroid = "true")
	{
		console.log("We have a rough start from departure but the rest of the day is now glorious!")
	}
};

if (Depart["EnemyShip"] = true, Depart["AttackEnemy"] = true) 
{
	Depart["ReturnSafe"] = true;
	console.log("Attacking the enemy sir as our ships colliding would cause more damage. This small cruiser should be wiped out with 2 direct torpedo hits sir.");
	console.log("Firing torpedo at the target!");
	ShipStatus["Torpedo"] = "4";
	console.log("We now have " + ShipStatus.Torpedo + " torpedo's left sir!\nDirect hit sir! Enemy shields were targeted and hit. Booya!");
	console.log("Firing 2nd torpedo at the target!");
	ShipStatus["Torpedo"] = "3";
	console.log("We now have " + ShipStatus.Torpedo + " torpedo's left sir!\nSir!\nWe missed! We missed!\nEnemy is returning fire!\nBrace for impact sir!");
	ShipStatus["Shields"] = "9";
	console.log("Our sheilds have covered the fire. The " + ShipStatus.Name + " is now running at " + ShipStatus.Shields + "% shields Captain!");
	console.log("Firing 3rd torpedo sir! It should be the last one needed!\nWe don't miss twice sir!");
	ShipStatus["Torpedo"] = "2";
	console.log("Direct hit sir! Enemy bird down! We now have " + ShipStatus.Torpedo + " torpedo's left on our ship.");
};

if (Depart["Harvest"] = "true", Depart["EnemyShip"] = "true")
{
	console.log("We have already harvested sir and gathered all the supplies we can carry; I think we should start warping home at maximum warp sir!")
	console.log("It was a risky trip but well worth the plunder Captain. You made some brave decissions today sir, I commend you for it!")
}

else
{
	console.log("Heading home now sir.");
};

console.log("I guess we should head back to home base then sir?");
var goHome = true;

if (goHome = true)
{
	console.log("Aye, aye sir; heading back to home base station.")
}

else
{
	console.log("Aye, aye sir; staying in orbit of " + Depart.Destination + ".");
};

console.log("Engaging warp engines in:\n5,\n4,\n3,\n2,\n1.\nEngaged!\nNow warping at the maxium warp of " + ShipStatus.MaxWarp + "." )
console.log("We should reach home base station in " + pvtraveltime + " hours Captain.\n2 HOURS HAVE PASSED");

if (Depart["ReturnSafe"] = "true")
{
	console.log("We have made it back to the base station sir. No major issues to report, it was a smooth voyage Captain.")
}

else
{
	console.log("We have encountered yet another asteroid sir! I'll try to avoid again!");
	ShipStatus["Shields"] = "2";
	console.log("Sir we made it past all the debris but we're only running at " + ShipStatus.Shields + "% shields now sir!");
	console.log("Only good thing to report is we're back, safe and no one was a casualty. We barely made it back, if we lost our shields...");	
};

console.log("We have gathered some nice resources sir. We gathered: " + Currency.Oil + " oil tank(s), " + Currency.Minerals + " mineral case(s) and " + Currency.ExoticMinerals + " exotic mineral case(s).");

// console.log("All-together we have gathered up " + (Cost.Oil + Cost.Minerals + Cost.ExoticMinerals) + " credits worth of resources Captain.");
console.log("All-together we have gathered up " + (1000 + 5000 + 2000) + " credits worth of resources Captain.");
Currency.Credits = "8000";
console.log("The gathered resources have been sold to the vendor sir. The resource credits have been deposited into your account.\nWe now have " + Currency.Credits + " credits sir.");
console.log("Again sir I must admit: it was a risky trip but well worth the plunder Captain. You made some brave decissions today sir, I commend you for it!")



}


	

	
