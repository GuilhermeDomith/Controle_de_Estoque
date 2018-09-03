$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $('select').formSelect();

    /*Abrir a página inicial da aplicação*/
    M.Collapsible.getInstance($('#menu-controle-embalagens')).open(0);
    $('#submenu-entrada-embalagem').click();
});

$('#submenu-entrada-embalagem').click('onclick', function () {
    ocultarTodasPaginas();
    $('#pagina-entrada-embalagens').removeClass('hide');
});

$('#submenu-relatorio-embalagem').click('onclick', function () {
    ocultarTodasPaginas();
    $('#pagina-relatorio-embalagens').removeClass('hide');
});

function ocultarTodasPaginas() {
    $('#pagina-relatorio-embalagens').addClass('hide');
    $('#pagina-entrada-embalagens').addClass('hide');
}
