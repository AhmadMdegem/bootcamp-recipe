const render = new Render()
const getTeamPlayers = function () {
    let input = $("#input").val()
    console.log(input);
    $.get(`recipes/${input}`, function (data) {
        render.renderr(data); 
    })
}