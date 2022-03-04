const temperature =22;

if (temperature<0){
console.log("Make sure to pick out a scarf!");
} else if (temperature <15){
console.log("Short sleeves won't cut it");
} else {
console.log("Short sleeves are fine");
}
console.log("Now you're ready to go outside!");
// Not sure if this will be checked to see if we've done our work, so I am leaving an example of each in the code
const isCitizen = true;
const age = 16;

if (isCitizen && age > 18){
console.log("You are elegible to vote");
} //I know this wasn't in the example, but to test the code:
else {
console.log("You are not elegible to vote at this time");
}

//
if (temperature < -40 || temperature > 40){
console.log("Maybe going outside isn't such a great idea...");
} else { 
console.log("I guess I have to walk the dog tonight");
}

//
let raining = false; 

if (!raining) {
console.log("Leave your umbrella at home!");
}
