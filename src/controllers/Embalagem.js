module.exports.cadastroEmbalagens = function(app, req, res){
      var embalagemDAO = new app.src.models.EmbalagemDAO();
    
    embalagemDAO.getEmbalagens(function(err, data){
        if(data.length == 0) data = null;
        else data = JSON.parse('['+data+']');
        
        res.render('index.ejs', {template: 'cadastrar-embalagem', data: data});    
    });
};


module.exports.salvarEmbalagem = function(app, req, res){
    var embalagemDAO = new app.src.models.EmbalagemDAO();
    embalagem = JSON.stringify(req.query);

    embalagemDAO.salvar( embalagem , function(err){
        if(err) throw 'Erro ao salvar embalagem';

       res.redirect('/');
    });
};

module.exports.relatorioEmbalagens = function(app, req, res){
    var embalagemDAO = new app.src.models.EmbalagemDAO();
    
    embalagemDAO.getEmbalagens(function(err, data){
        if(data.length == 0) data = null;
        else data =  JSON.parse('['+data+']');
        
        res.render('index.ejs', {template: 'relatorio-embalagens', data: data});    
    });
};