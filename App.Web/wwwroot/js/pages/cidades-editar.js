function editar() {
    let id = {
        Id: ($("[name='Id']").val()),
        Nome: ($("[name='Nome']").val() || ''),
        Uf: ($("[name='Uf']").val() || ''),
        Cep: ($("[name='Cep']").val() || "")
    };
    CidadeEditar(id).then(function () {
        window.location.href = '/cidades/editar';
    }, function (err) {
        alert(err);
    });

}


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
