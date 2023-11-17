function deletar() {
    let id = $('[name="Id"]').val();
    
    PessoaDeletar(id).then(function () {
        window.location.href = '/pessoas';
    }, function (err) {
        alert(err);
    });


}
