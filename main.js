$(document).ready(function() {

    $('header button').click(function(e) {
        e.preventDefault();

        const novaTarefa = $('#tarefa').val();
        const novoLi = $('<li></li>');

        $(`<h3>${novaTarefa}</h3>`).appendTo(novoLi);
        $(novoLi).appendTo('ul');
    })


    $('h3').click(function() {
        const textoTarefa = $('h3').val();

        $(textoTarefa).style = 'text-decoration: line-through'
    })
})