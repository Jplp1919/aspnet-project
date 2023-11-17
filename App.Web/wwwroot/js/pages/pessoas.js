//$(document).ready(function () {
//    load();
//});

$(document).ready(function () {
    $('#busca').keypress(function (e) {
        if (e.which === 13) {
            load();
        }
    });
    load();
});


function load() {
    PessoaListaPessoas().then(function (data) {
        $('#table tbody').html('');
        data.forEach(obj => {
            $('#table tbody').append('' +
                '<tr id="obj-' + obj.id + '">' +
                '<td>' + (obj.id || '--') + '</td>' +
                '<td>' + (obj.nome || '--') + '</td>' +
                '<td>' + (obj.email || '--') + '</td>' +
                '</tr>');
        });
    });
}


function loadById() {
    let id = $('[name="busca"]').val();
    PessoaBuscaPorId(id).then(function (data) {
        $('#table tbody').html('');
        data.forEach(obj => {
            $('#table tbody').append('' +
                '<tr id="obj-' + obj.id + '">' +
                '<td>' + (obj.id || '--') + '</td>' +
                '<td>' + (obj.nome || '--') + '</td>' +
                '<td>' + (obj.email || '--') + '</td>' +
                '</tr>');
        });

    });

}

//function load(){
//    PessoaListaPessoas().then(function (data) {
//        data.forEach(obj => {
//            $('#table tbody').append('' +
//                '<tr id="obj-' + obj.Id + '">' +
//                '<td>' + (obj.Nome || '--') + '</td>' +
//                '<td>' + (obj.Email || '--') + '</td>' +
//                '</tr>');
//        });
//    });
//}

