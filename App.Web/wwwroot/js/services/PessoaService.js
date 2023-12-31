﻿
async function PessoaListaPessoa(busca) {
    return new Promise((resolve, reject) => {
        Get('pessoa/buscarLista?busca=' + busca).then(function (response) {
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

//async function PessoaBuscaPorId(id) {
//    return new Promise((resolve, reject) => {
//        Get('pessoa/buscarPorId?id =' + id).then(function (response) {
//            if (response.status === 'success') {
//                resolve(response.data);
//            } else {
//                reject(response.message);
//            }
//        }, function (err) {
//            console.error(err);
//            reject('Erro desconhecido');
//        });
//    });
//}

async function PessoaCriar(obj) {
    return new Promise((resolve, reject) => {
        Post('pessoa/criar', obj).then(function (response) {
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

async function PessoaDeletar(id) {

    return new Promise((resolve, reject) => {
       
        Delete('pessoa/deletar', id).then(function (response) {
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


async function PessoaEditar(id) {
    return new Promise((resolve, reject) => {
        Put('pessoa/Editar?id=', id).then(function (response) {
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
async function PessoaBuscaPorId(id) {
    return new Promise((resolve, reject) => {
        Get('pessoa/buscarPorId?id=' + id).then(function (response) {
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