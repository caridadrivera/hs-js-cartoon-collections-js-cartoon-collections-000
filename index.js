
function dwarfRollCall(dwarves) {
  //created empty array to fill later with dwarves changes
 	var nameList = "";
   for (var i = 0; i < dwarves.length; i++) {
    nameList += (i+1).toString()+ ". " + dwarves[i] + " ";
   }
   return nameList;
 }

function summonCaptainPlanet(planeteerCalls){
  var namesCalled =[];
  for (var i = 0; i < planeteerCalls.length; i++) {
  namesCalled.push(planeteerCalls[i].toUpperCase() + "!");
}
return namesCalled;
}



// we want to know if any of the listed calls are longer than fou characters so we would have to go throughhh the arrays.
// more specifically we need to go through the characters
function longPlaneteerCalls(words){
// we don't have to make ANY changes to the array 
  // we do not need an empty variable like the last two
for (var i = 0; i < words.length; i++){
  if (words[i].length > 4){
    return true;
  }
else {
  return false;
}
  }
}
   
   
   
function findTheCheese (foods) {
  for (let i = 0; i < foods.length; i++){
  if(foods[i] === 'cheddar' || foods[i] === 'gouda' || foods[i] === 'camembert' ){
    return foods[i];
  }
}
    return 'no cheese!';
}