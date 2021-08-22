https://codepen.io/kennyo20123/pen/dyRbGQN

let lyrics = "Wipe the sweat off my dome, spit the phlegm on the streets suede Timbs on my feets makes my cipher complete Whether crusing in a sikh's cab, or Montero Jeep I can't call it, the beats make me fallin' asleep I keep falling, but never falling six feet deep I'm out for presidents to represent me, I'm out for presidents to represent me, I'm out for dead presidents to represent me"; 

//Step 3

let lyricsArr = lyrics.split(" "); 
console.log(lyricsArr);
let newLyrics = [];


//Step 2

for (let i =0; i< lyricsArr.length; i++) {

    let finalizedLyrics = lyricsArr[i].replaceAll('s', '$');
    
//Step 3
    newLyrics.push(finalizedLyrics);
    

    }
console.log( newLyrics);


//Step 4

let newString = newLyrics.join(" ");
console.log("Step 4: " + newString);