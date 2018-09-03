module.exports.paginaInicial = function(app, req, res){
    var embalagemDAO = new app.src.models.EmbalagemDAO();
    
    embalagemDAO.getEmbalagens(function(err, data){
        if(data.length == 0) data = null;
        else data = JSON.parse('['+data+']');
        
        res.render('index.ejs', {template: 'cadastrar-embalagem', data: data});    
    });
}