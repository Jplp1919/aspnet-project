function editar(Id) {
    obj = PessoaBuscaPorId(Id);
    console.log(obj.nome);

    let id = {
        Id: ($("[name='Id']").val()),
        Nome: ($("[name='Nome']").val() || ''),
        Cpf: ($("[name='Cpf']").val() || ''),
        DataNascimento: ($("[name='DataNascimento']").val() || ""),
        Email: ($("[name='Email']").val() || ""),
        Senha: ($("[name='Senha']").val() || "")
    };
    PessoaEditar(id).then(function () {
        window.location.href = '/pessoas/editar';
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
    let id = getUltimoAlias();
    console.log(id);


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
                '</tr>');
        });

    });

}


function getUltimoAlias() {
    return window.location.toString().split('=').pop();
  
}