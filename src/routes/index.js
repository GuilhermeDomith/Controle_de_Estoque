module.exports = function(app){

    app.get('/', function(req, res){
        app.src.controllers.Index.paginaInicial(app, req, res);
    });

    app.get('/embalagens/cadastrar', function(req, res){
        app.src.controllers.Embalagem.cadastroEmbalagens(app, req, res);
    });

    app.get('/embalagens/salvar', function(req, res){
        app.src.controllers.Embalagem.salvarEmbalagem(app, req, res);
    });

    app.get('/embalagens/relatorio', function(req, res){
        app.src.controllers.Embalagem.relatorioEmbalagens(app, req, res);
    })
}