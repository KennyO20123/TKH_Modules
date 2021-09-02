https://codepen.io/kennyo20123/pen/BaZBjwJ

// First Project

//Step 1

const weeklyIncome = parseInt( 
    prompt("Enter your Weekly Income: ")
) 
 const foodCost = parseInt( 
    prompt("Enter your Food Cost for the week ")
)

const housingCost = parseInt( 
    prompt("Enter your Housing Cost for the week: ")
)
const transportationCost = parseInt( 
    prompt("Enter your Transportation Cost for the week: ")
)
const otherCost = parseInt( 
    prompt("Enter your Other Cost for the week: ")
)

const savingsYear = parseInt( 
    prompt("How much do you want to save in a year?: ")
)

//Checking the math with these values to see if correct 

// const weeklyIncome = 700; 
// const foodCost = 200; 
// const housingCost =400; 
// const transportationCost = 40; 
// const otherCost =60; 
// const savingsYear = 1200; 

//testing variables 
/* console.log("Food Cost: " + foodCost);
console.log("Housing Cost: " + housingCost);
console.log("Transportation Cost: " + transportationCost);
console.log("Other Cost: " + otherCost);
console.log("Savings Year: " + savingsYear);
console.log("Weekly Income: " + weeklyIncome); */

//Step 2

const weeklySavings = savingsYear / 52;
 
console.log("How much needed to save in a week to reach your goal: " + weeklySavings.toFixed(2)); 


//Step 3
const totalWeeklyCost = foodCost + housingCost + otherCost + transportationCost;
const revenueCost = weeklyIncome - totalWeeklyCost;
const neededSavings = weeklySavings - revenueCost; 
console.log(weeklyIncome);
console.log("Total Weekly Cost: " + totalWeeklyCost);
console.log("Amount needed to save after weekly costs: " + revenueCost);


//Step 4 

if (revenueCost >= weeklySavings ) {
    console.log("You are on track to meeting your goal of " + savingsValue + " with your weekly savings. ")
} else if ( revenueCost < weeklySavings) {
    console.log("You are not on track to meeting your goal of " + savingsValue + " with your weekly savings. You need " + neededSavings.toFixed(2) + " more to reach your goal. " )
} else {
    console.log("Your savings are not on track to meeting your goal.  Is there any missing values? ")
}
