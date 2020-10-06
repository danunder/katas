const chooseRecipe = function(bakeryA, bakeryB, recipes) {
    
  const ingredientCheck = function(bakery, recipes) {
    let weGotHalfOfThis = [];
    for (let ingredient of bakery) {
      for (let recipe of recipes) {
        for (let i = 0; i < recipe.ingredients.length; i++) {
          if (ingredient === recipe.ingredients[i]) {
            weGotHalfOfThis.push(recipe.name);
          }
        }
      }
    }
    return weGotHalfOfThis;
  }
  
  let potentialRecipesA = ingredientCheck(bakeryA, recipes);
  let potentialRecipesB = ingredientCheck(bakeryB, recipes);
  for (let j = 0; j < potentialRecipesA.length; j++) {
    for (let k = 0; k < potentialRecipesB.length; k++) {
      if (potentialRecipesA[j] === potentialRecipesB[k]) {
        return potentialRecipesA[j];
      }
    }
  }

}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
