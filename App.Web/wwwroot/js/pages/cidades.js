
$(document).ready(function () {
    $('#busca').keypress(function (e) {
        if (e.which === 13) {
            load();
        }
    });
    load();
});




function load() {
    let busca = $('[name="busca"]').val();
    CidadeListaCidade(busca).then(function (data) {
        $('#table tbody').html('');
        console.log(data)
        data.forEach(obj => {
            $('#table tbody').append('' +
                '<tr id="obj-' + obj.id + '">' +
                '<td>' + (obj.id || '--') + '</td>' +
                '<td>' + (obj.nome || '--') + '</td>' +
                '<td>' + (obj.uf || '--') + '</td>' +
                '<td>' + (obj.cep || '--') + '</td>' +
                '</tr>');
        });

    });

}

