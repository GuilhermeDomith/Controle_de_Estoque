module.exports.embalagens = function(app, req, res){
    var embalagemDAO = new app.src.models.EmbalagemDAO();
    embalagemDAO.salvarEmbalagem('{nome: "Sacola de 1k"}');
    embalagemDAO.salvarEmbalagem('{nome: "Sacola de 2k"}');

    embalagemDAO.getEmbalagens(function(err, data){
        res.end(data);
    });
}