/*Arquivo responsável pela chamada dos atributos exportados do admin.js do controller*/

module.exports=function(app){
	app.get('/add_produto',function(req,res) {
		app.app.controllers.admin.add_produto(app,req,res); /*rota do arquivo admin.js do controller para a chamada do atributo formulario_inclusao_noticia por meio de três parâmetros - app: a variáve que contém a instancia do express - res: a resposta a ser dada pelo server - req: a requisição do cliente */
	});

	app.post('/produtos/salvar', function(req,res){//metodo post pegando as noticias,importando a var app que contem as requisições,passando app como parametro
		app.app.controllers.admin.produto_salvar(app,req,res); /*rota do arquivo admin.js do controller para a chamada do atributo salvar_noticia por meio de três parâmetros - app: a variáve que contém a instancia do express - res: a resposta a ser dada pelo server - req: a requisição do cliente */

	});
}


/*Isabela Archanjo Batarce - 5A*/