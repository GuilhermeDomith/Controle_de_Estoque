var fs = require('fs');

class EmbalagemDAO{

    constructor(){
        this.arquivo = 'embalagens.txt';
    }

    salvarEmbalagem(embalagem){
        fs.appendFile(this.arquivo, embalagem, function(err){
            if(err) throw 'Erro ao salvar embalagem';
        });
    }

    /** callback err, data. */
    getEmbalagens(callback){
        fs.readFile(this.arquivo, callback);
    }
}

module.exports = function(){
    return EmbalagemDAO;
}