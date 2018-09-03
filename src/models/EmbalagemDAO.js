var fs = require('fs');

class EmbalagemDAO{

    constructor(){
        this.arquivo = 'embalagens.txt';
    }

    salvar(embalagem, callback){
        var stats = fs.statSync(this.arquivo);

        if(stats.size > 0)
            embalagem = ','+embalagem;

        fs.appendFile(this.arquivo, embalagem, callback);
    }

    /** callback err, data. */
    getEmbalagens(callback){
        fs.readFile(this.arquivo, callback);
    }
}

module.exports = function(){
    return EmbalagemDAO;
}