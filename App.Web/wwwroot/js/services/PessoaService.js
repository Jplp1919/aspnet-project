  async function PessoaListaPessoas() {
                return new Promise((resolve, reject) => {
                    Get('pessoa/buscarLista').then(function (response) {
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
                    Get('pessoa/buscaPorId?id=' + id).then(function (response) {
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
                    Delete('pessoa/deletar?id=' + id).then(function (response) {
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
  
