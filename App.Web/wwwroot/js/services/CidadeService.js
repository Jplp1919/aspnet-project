
async function CidadeListaCidade(busca) {
    return new Promise((resolve, reject) => {
        Get('cidade/buscarLista?busca=' + busca).then(function (response) {
            console.log(response)

            if (response.status === 'success') {
                resolve(response.data);
            } else {
                reject(response.message);
            }
        }, function (err) {
            console.error(err);
            reject('Erro desconhecido');
        });
    });
}

async function CidadeBuscaPorId(id) {
    return new Promise((resolve, reject) => {
        Get('cidade/buscaPorId?id=' + id).then(function (response) {
            if (response.status === 'success') {
                resolve(response.data);
            } else {
                reject(response.message);
            }
        }, function (err) {
            console.error(err);
            reject('Erro desconhecido');
        });
    });
}

async function CidadeCriar(obj) {
    return new Promise((resolve, reject) => {
        Post('cidade/criar', obj).then(function (response) {
            if (response.status === 'success') {
                resolve(response.data);
            } else {
                reject(response.message);
            }
        }, function (err) {
            console.error(err);
            reject('Erro desconhecido');
        });
    });
}

async function CidadeDeletar(id) {

    return new Promise((resolve, reject) => {

        Delete('cidade/deletar', id).then(function (response) {
            if (response.status === 'success') {
                resolve(response.data);
            } else {
                reject(response.message);
            }
        }, function (err) {
            console.error(err);
            reject('Erro desconhecido');
        });
    });
}


async function CidadeEditar(id) {
    return new Promise((resolve, reject) => {
        Put('cidade/Editar?id=', id).then(function (response) {
            if (response.status === 'success') {
                resolve(response.data);
            } else {
                reject(response.message);
            }
        }, function (err) {
            console.error(err);
            reject('Erro desconhecido');
        });
    });
}
