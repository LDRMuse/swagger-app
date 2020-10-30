// side-note; it's best to describe arrays as lists for a quick reminder that the list is an array
const Recipe = require('../models/Recipe');

let publicRecipeList = []

module.exports.getRecipe = (_, res) => {
  let recipes = new Recipe.getRecipeList()

  for (let recipe of recipes) {
    if (recipe.isPublic) {
      publicRecipeList.push(recipe)
    }
  }
  return res.json(publicRecipeList).status(200)
}

module.exports.postRecipe = (req, res) => {
  let newRecipe = req.body
  newRecipe.id = publicRecipeList.length + 15
  newRecipe.isPublic = true
  publicRecipeList.push(newRecipe)

  return res.status(204).end()
}

module.exports.updateRecipe = (req, res) => {
  // we want to get the paramter recipeId from the URL
  let swaggerID = req.swagger.params.recipeId.value

  // we want to go through our array to see if the id's match
  for (let i = 0; i < publicRecipeList.length; i++) {
    if (publicRecipeList[i].id === swaggerID) {
      publicRecipeList[i] = req.body
      return res.status(204).end()
    }else {
      return res.status(404).end()
    }
  }
}

