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

    let obj = PessoaBuscaPorId(id);

    console.log(obj.nome);

    PessoaBuscaPorId(id).then(function (obj) {
        $('#table tbody').html('');
        $('#table tbody').append('' +
            '<tr id="obj-' + obj.id + '">' +
            '<td>' + (obj.id || '--') + '</td>' +
            '<td>' + (obj.nome || '--') + '</td>' +
            '<td>' + (obj.cpf || '--') + '</td>' +
            '<td>' + (obj.dataNascimento || '--') + '</td>' +
            '<td>' + (obj.email || '--') + '</td>' +
            '</tr>');

        $('#idLinha').val(obj.id);
        $('#nomeLinha').val(obj.nome);
        $('#cpfLinha').val(obj.cpf);
        $('#dataNascimentoLinha').val(obj.dataNascimento);
        $('#emailLinha').val(obj.email);

    });

}

function setValueNome() {
   
}

function getUltimoAlias() {
    return window.location.toString().split('=').pop();
  
}