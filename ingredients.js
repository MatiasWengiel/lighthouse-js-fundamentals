const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
/*
let i = 0;
while (i < ingredients.length){
  console.log(ingredients[i]);
  i++
}
*/

/*
for (let i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}
*/
/* option 1: reverse the whole array, then print it
let reversed = ingredients.reverse();
for (let i = 0; i < ingredients.length; i++){
  console.log(ingredients[i]);
}
*/
// option 2: print the array backwards 
for (let i = ingredients.length; i >= 0; i--){
  console.log(ingredients[i]);
}