function deletar() {
    let id = $('[name="Id"]').val();
    
    PessoaDeletar(id).then(function () {
        window.location.href = '/pessoas';
    }, function (err) {
        alert(err);
    });


}


$(document).ready(function () {
    load();
});

function load() {
    return new Promise((resolve, reject) => {
        let id = getUltimoAlias(); /Notem que aqui ele pega o id pela url que vocês abriram/
        if (id && id.toLowerCase() !== 'formulario') {
            Pessoa(id).then(function (obj) {

                for (let key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        let input = $("[name='" + key + "']");
                        if (input) {
                            input.val(obj[key]);
                        }
                    }
                }
                resolve(obj);
            });
        }
    });
}