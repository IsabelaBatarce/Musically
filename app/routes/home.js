/*Arquivo responsável pela chamada dos atributos exportados do noticias.js do controller*/


module.exports=function(app){
		

		app.get('/index', function(req,res){//pegando as noticias,importando a var app que contem as requisições,passando app como parametro
			app.app.controllers.home.index(app,req,res);/*rota do arquivo noticias.js do controller para a chamada do atributo noticias por meio de três parâmetros - app: a variáve que contém a instancia do express - res: a resposta a ser dada pelo server - req: a requisição do cliente */
		
		});
		
	
		app.get('/excluir', function(req, res){
			app.app.controllers.home.excluir(app,req,res);/*rota do arquivo noticias.js do controller para a chamada do atributo excluir por meio de três parâmetros - app: a variáve que contém a instancia do express - res: a resposta a ser dada pelo server - req: a requisição do cliente */
		});
			
		app.get('/cadastro',function(req,res) {
		app.app.controllers.home.cadastro(app,req,res); /*rota do arquivo admin.js do controller para a chamada do atributo formulario_inclusao_noticia por meio de três parâmetros - app: a variáve que contém a instancia do express - res: a resposta a ser dada pelo server - req: a requisição do cliente */
	});	

		app.get('/login',function(req,res) {
			app.app.controllers.home.login(app,req,res); /*rota do arquivo admin.js do controller para a chamada do atributo formulario_inclusao_noticia por meio de três parâmetros - app: a variáve que contém a instancia do express - res: a resposta a ser dada pelo server - req: a requisição do cliente */
	});	
			app.get('/admin',function(req,res) {
			app.app.controllers.admin.add_produto(app,req,res); /*rota do arquivo admin.js do controller para a chamada do atributo formulario_inclusao_noticia por meio de três parâmetros - app: a variáve que contém a instancia do express - res: a resposta a ser dada pelo server - req: a requisição do cliente */
	});
	
};


/*Isabela Archanjo Batarce - 5A*/