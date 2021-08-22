https://codepen.io/kennyo20123/pen/ZEyzQvZ

const grade=90;

if ( grade > 90 ) {
    console.log("A+");
} else if (grade > 88 && grade <=90) {
    console.log("A");
} else if (grade > 84 && grade <=88) {
    console.log("B+");
} else if (grade >76 && grade <=84 ) {
    console.log("C+");
} else if (grade >70 && grade <=76) {
    console.log("C");
} else if (grade>67 && grade <=70) {
    console.log("D+");
} else if (grade>64 && grade <=67) {
    console.log("D");
} else if (grade<=64) {
    console.log("F");
} else {
    console.log("No value was inputted. ");
}