class Render {
    constructor(){
    }

    renderr(data) {
        $('.grid-container').empty();
        const source = $('#ingredients-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template({ data: data });
        $('.grid-container').append(newHTML);
    }
}