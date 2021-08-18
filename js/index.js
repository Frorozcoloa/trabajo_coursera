$(function() {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();
    $('.carousel').carousel({
        interval: 3000,
        Keyboard: true
    });
    $('#contacto').on('show.bs.modal', function(e) {
        console.log('El modal se está mostrando.');
        $('#contactoBTN').removeClass('btn-outline-success');
        $('#contactoBTN').addClass('btn-primary');
        $('#contactoBTN').prop('disabled', true);
    });
    $('#contacto').on('shown.bs.modal', function(e) {
        console.log('El modal se mostró.');
    });
    $('#contacto').on('hide.bs.modal', function(e) {
        console.log('El modal se oculta');
    });
    $('#contacto').on('hidden.bs.modal', function(e) {
        console.log('El modal se ocultó');
    });
})