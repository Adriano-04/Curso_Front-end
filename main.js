
$(document).ready(function() {

    
    $('header button').click(function(e) {
        e.preventDefault();

        const novaTarefa = $('#tarefa').val();
        const novoLi = $('<li></li>');

        $(`<h3>${novaTarefa}</h3>`).appendTo(novoLi);
        $(novoLi).appendTo('ul');

    })

    $('ul').on('click','h3', function() {
        $(this).toggleClass('completo');
    })
})