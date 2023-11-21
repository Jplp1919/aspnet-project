

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
    PessoaListaPessoa(busca).then(function (data) {
        $('#table tbody').html('');
        console.log(data)
        data.forEach(obj => {
            $('#table tbody').append('' +
                '<tr id="obj-' + obj.id + '">' +
                '<td>' + (obj.id || '--') + '</td>' +
                '<td>' + (obj.nome || '--') + '</td>' +
                '<td>' + (obj.cpf || '--') + '</td>' +
                '<td>' + (obj.dataNascimento || '--') + '</td>' +
                '<td>' + (obj.email || '--') + '</td>' +
                '<td>' +
                '<button onclick="editItem(' + obj.id + ')">Editar</button>' +
                '<button onclick="deleteItem(' + obj.id + ')">Deletar</button>' +
                '</td>' +
                '</tr>');
        });

    });

}



function editItem(id) {
    window.location.href = '/pessoas/editar?Id=' + id;
}

function deleteItem(id) {

    if (confirm('Realmente quer deletar este item?')) {
        PessoaDeletar(id).then(function () {
            window.location.href = '/pessoas';
        }, function (err) {
            alert(err);
        });
    }
}



function getUltimoAlias() {
    return window.location.toString().split('/').pop();
}

