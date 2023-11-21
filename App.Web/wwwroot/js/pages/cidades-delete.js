function deletar() {
    let id = $('[name="Id"]').val();

    CidadeDeletar(id).then(function () {
        window.location.href = '/cidades';
    }, function (err) {
        alert(err);
    });


}

