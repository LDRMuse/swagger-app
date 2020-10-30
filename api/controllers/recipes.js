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
  newRecipe.id = publicRecipeList.length + 1
  newRecipe.isPublic = true
  publicRecipeList.push(newRecipe)

  return res.status(204).end()
}

