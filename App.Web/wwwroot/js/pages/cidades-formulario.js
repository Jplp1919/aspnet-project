function salvar() {
    let obj = {
        Nome: ($("[name='Nome']").val() || ""),
        Uf: ($("[name='Uf']").val() || ""),
        Cep: ($("[name='Cep']").val() || "")
    };
    CidadeCriar(obj).then(function () {
        window.location.href = '/cidades';
    }, function (err) {
        alert(err);
    });


}