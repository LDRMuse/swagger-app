// side-note; it's best to describe arrays as lists for a quick reminder that the list is an array

// this is a function that returns fixed data
let recipeList = getRecipeList()

module.exports.getRecipe = (req, res) => {
  let responseRecipeList = []

  for (let recipe of recipeList) {
    if (recipe.isPublic) {
      responseRecipeList.push(recipe)
    }
  }
  return res.json(responseRecipeList).status(200)
}

function getRecipeList() {
  return [
    {
      id: 1,
      isPublic: true,
      name: 'PB and Jelly',
      stepList: ['get two slices of bread', 'spread peanut butter', 'spread jelly'],
      ingredients: [
        {
          amount: 2,
          name: 'bread'
        },
        {
          amount: 1,
          name: 'peanut butter'
        },
        {
          amount: 1,
          name: 'jelly'
        }
      ]
    },
    {
      id: 2,
      isPublic: false,
      name: 'cereal',
      stepList: ['get bowl', 'pour cereal', 'pour milk'],
      ingredients: [
        {
          amount: 1,
          name: 'Milk'
        },
        {
          amount: 4,
          name: 'Cereal'
        }
      ]
    }
  ]
}
