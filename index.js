
function dwarfRollCall(dwarves) {
 	var nameList = "";
   for (var i = 0; i < dwarves.length; i++) {
    nameList += (i+1) + ". " + dwarves[i] + " ";
   }
   return nameList;
 }



function summonCaptainPlanet(planeteerCalls){
  var namesCalled =[];
  for (var i = 0; i < planeteerCalls.length; i++) {
            // since the planeteerCalls variable is an array of calls, each call has an index
            // we want to access each individual index in the call[i]
  namesCalled.push(planeteerCalls[i].toUpperCase() + "!");
}
return namesCalled;
}



// we want to know if any of the listed calls are longer than four characters so we would have to go throughhh the arrays.
// more specifically we need to go through the characters

function longPlaneteerCalls(words){
            // we don't have to make ANY changes to the array 
            // we do not need an empty variable like the last two
 for (var i = 0; i < words.length; i++){
              // if the length of each word[i]
if (words[i].length > 4){
   return true;
  }
else {
  return false;
}
  }
}
   
   
function findTheCheese (foods){
  for (let i = 0; i < foods.length; i++){
    if(foods.includes('cheddar')){
      return 'cheddar';
    }
    else return 'no cheese!';
  }
}  







// i could also done index of;
   
 // function findTheCheese (foods) {
 // let cheeseToFind = 'cheddar';
 // for (let i = 0; i < foods.length; i++){
  // if(foods.indexOf(cheeseToFind) > -1){
  //   return cheeseToFind;
  // }
// }
   //  return 'no cheese!'; }






