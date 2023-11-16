function salvar() {
    let obj = {
        nome: ($("[name='nome']").val() || ""),
        nome: ($("[name='email']").val() || ""),
        nome: ($("[name='senha']").val() || "")
    };
    PessoaCriar(obj).then(function () {
        window.location.href = '/pessoas';
    }, function (err) {
        alert(err);
    });


}