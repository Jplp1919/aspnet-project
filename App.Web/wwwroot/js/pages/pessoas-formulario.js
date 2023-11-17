function salvar() {
    let obj = {
        Nome: ($("[name='Nome']").val() || ""),
        Email: ($("[name='Email']").val() || ""),
        Senha: ($("[name='Senha']").val() || "")
    };
    PessoaCriar(obj).then(function () {
        window.location.href = '/pessoas';
    }, function (err) {
        alert(err);
    });


}