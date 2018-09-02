module.exports = function(app){

    app.get('/', function(req, res){
        console.log('------------->chegou aqui');
        app.src.controllers.index.embalagens(app, req, res);
    });
}