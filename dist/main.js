const getTeamPlayers = function () {
    let input = $("#input").val()
    console.log(input);
    $.get(`recipes/${input}`, function (data) {
        renderr(data); 
    })
}