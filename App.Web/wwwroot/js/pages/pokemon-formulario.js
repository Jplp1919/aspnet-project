function salvar() {
    let obj = {
        Nome: ($("[name='Nome']").val() ),
        Email: ($("[name='Level']").val() ),
        Senha: ($("[name='Tipo']").val())
    };
    PokemonCriar(obj).then(function () {
        window.location.href = '/pokemon';
    }, function (err) {
        alert(err);
    });


}