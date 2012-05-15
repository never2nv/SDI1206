alert("JavaScript works!");
/*Author: Paul J. Miller
Date: 05-10-2012
Deliverable1 - SDI 1205
Sci-fi Voyage.
*/

// Initial Variables

// Economy
var Cost = 
{
	Shields: "10,000",
	Torpedo: "1,500",
	Minerals: "500",
	Ores: "1,000",
	ExoticMinerals: "2,000",
	ShieldUpgrade: true
};

var Currency = 
{
	Credits: "10,000",
	Oil: "2,500",
	Ores: "500",
	ExoticMinerals: "50"
};

/* Old Econ Code
var Credits = "10,000";
var ShieldCost = "10,000";
var TorpedoesCost = "1,500";
var ShieldUpgrade = true;
*/

// Ship(s) Stats
var ShipStatus = 
 {
	Name: "U.S.S. Stargazer",
	Shields: "10",
	Torpedo: "5",
	FleetCount: "5",
	ReadyForDepart: false
 };
 
 /* Old Ship Stats
var MainVessel = "U.S.S. Stargazer";
var FleetCount = 5;
var Torpedoes = 5;
var Shields = 10;
var ReadyForDepart = false;
*/
 
 
// Crew Status
var CrewStatus = 
{
	Captain: "Cap",
	CaptainFullName: "'Cap' Paul Miller",	
	Crewname: "PJ",
	CrewCount: 3,
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

/* Old Crew Stats
var Captain = "Cap";
var CaptainFullName = "'Cap' Paul Miller";
var CrewName = "PJ";
var CrewCount = 3;
var FleetCaptains = 
	[
	"Sidney",
	"Crusher",
	"Riker",
	"Adams",
	"Shepard",
	"Winston",
	"Williams"
	]
*/

// Start of Adventure
Console.Log("Welcome aboard the, "+ ShipStatus[Name]);
Console.Log("Our ship's captain is ", CrewStatus[Captain]);
Console.Log("But you'd better call him" + CrewStatus[CaptainFullName]);
Console.Log("He has " + ShipStatus[FleetCount] + " Fleets and " + ShipStatus[CrewCount] + " Crew.");
Console.Log("Are you any good at the helm?");


// Checking if you have enough crew to pilot all the ships in your fleet.
If; {
ReadyForDepart;
    If; CrewStatus[CrewCount] > ShipStatus[FleetCount];
    {
        Console.Log ("All aboard; The captain is ready for departure!");
    Else;{
        var CrewLeft = ShipStatus[FleetCount] - CrewStatus[CrewCount];
        Console.Log("We need ", CrewLeft, " more crew-men before we can depart the entire fleet!")
	}
}


// Ready For Departure?
Else; {
    If; CrewStatus[CrewName] = "PJ"; 
    {
        Console.Log ("We need someone to man the helm, that someone is you!");
	}
    Else; {
        Taunt = (ShipStatus[CrewName] + " is too scared to depart with " + ShipStatus[CaptainFullName] + "!");
        Taunt;
	}
}

// Upgrades Option Prior To Depart
console.log("You have " + Credits + "credits left; would you like to buy a 10% shield upgrade for " + Shieldcost + "credits?"
+ "Or would you like to acquire some more torpedoes for " + TorpedoesCost + "credits. You have " + Torpedoes + " currently.");

// Choosing Sheild Upgrade
	If 
	{
ShieldUpgrade = "true"; {
    Cost[Shields] - Currency[Credits]; 
    ShipStatus[Shields] + 10; {
        Console.Log(ShieldsCost + " credits has been taken from you account. You now have " + Credits + " credits left.");
     }
        
    Else
    {
    	// Buying a torpedo
        Cost[Torpedo] - Currency[Credits];
        ShipStatus[Torpedo] + 1;
        Console.log("You now have " + ShipStatus[Torpedo] + " torpedoes currently.");
        Console.Log(TorpedoCost + " credits has been taken from your account. You now have " + Credits + " credits left.");
	}
}

	// Adding Captains to the fleet
	Console.Log("We are now ready to depart again sir, would you like to choose a new captain to man one of our fleet ships?");
	Console.Log("Captain " + FleetCaptains[0] + " has been added to your fleet captains.");
	Console.Log("Captain " + FleetCaptains[1] + " has been added to your fleet captains.");
	ShipStatus[CrewCount] + 2;
	Console.Log("Are we now ready for departure Captain?");
	
	}
	
	
	
	
	
}
