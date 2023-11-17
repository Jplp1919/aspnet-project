function salvar() {
    let obj = {
        Nome: ($("[name='Nome']").val() || ""),
        Email: ($("[name='Level']").val() || ""),
        Senha: ($("[name='Tipo']").val() || "")
    };
    PessoaCriar(obj).then(function () {
        window.location.href = '/pokemon';
    }, function (err) {
        alert(err);
    });


}