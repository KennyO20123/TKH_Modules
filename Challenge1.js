https://codepen.io/kennyo20123/pen/oNwvbdL

let names = ["Westly Snipes", "Nicholas Cage", "Nasir Jones", "Sean Carter", "Sean Combs", "Michael Jordan", "Patrick Ewing"];

let firstName = [];
let lastName = [];

let stringNames = names.toString(); 
let dividedNames = stringNames.split(" ").join(",").split(",");

// console.log(stringNames);
// console.log(dividedNames);


for (let i=0; i < dividedNames.length; i++) {
    if (i % 2 == 0) {
        firstName.push(dividedNames[i])
    }
    else {
        lastName.push(dividedNames[i]);
    }
        
}

console.log(`first name: ${firstName}`);
console.log(`last name: ${lastName}`);