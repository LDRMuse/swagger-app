let Recipe = function (data) {
  this.data = data
}

Recipe.getRecipeList = function () {
  // this is a function that returns fixed data
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

module.exports = Recipe

