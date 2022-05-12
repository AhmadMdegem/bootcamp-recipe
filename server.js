const express = require('express')
const path = require('path')
const urllib = require('urllib');

const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))


app.get('/sanity', function (request, response) {
    response.send("Ok")

})
app.get('/recipes/:ingredient', function (request, response) {
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${request.params.ingredient}`, function (err, data, res) {
        const dummyData = JSON.parse(data)
        response.send(getRecipes(dummyData))
    })

})

function getRecipes(dummyData) {
    const results = []
    for (let index = 0; index < dummyData.results.length; index++) {
        let dummyResults = {}
        dummyResults.ingredients = dummyData.results[index].ingredients
        dummyResults.title = dummyData.results[index].title
        dummyResults.thumbnail = dummyData.results[index].thumbnail
        dummyResults.href = dummyData.results[index].href
        results.push(dummyResults)
    }
    return results
}

const port = 8080
app.listen(port, function () {
    console.log(`Running server on ${port}`);
})