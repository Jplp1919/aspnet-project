$(document).ready(function () {
    load();
});


function load(){
    PessoaListaPessoas().then(function (data) {
        data.forEach(obj => {
            $('#table tbody').append('' +
                '<tr id="obj-' + obj.id + '">' +
                '<td>' + (obj.Nome || '--') + '</td>' +
                '<td>' + (obj.Email || '--') + '</td>' +
                '<td>' + (obj.Id || '--') + '</td>' +
                '</tr>'
    );
        });
    });
}

