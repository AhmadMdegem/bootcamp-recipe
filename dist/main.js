const render = new Render()

const getRecipes = function () {
    let input = $("#input").val()
    console.log(input);
    $.get(`recipes/${input}`, function (data) {
        render.renderr(data); 
    })
}

$(".grid-container").on("click",".imgR",function(){
    let listIngredients = $(this).siblings("ul")
    let first = $(listIngredients.find("li")[0]).text()
    alert(`The first ingredient is ${first}`)
   
  })