/*regras de negócio*/

module.exports.add_produto=function(app, req,res){

		res.render("admin/add_produto",{produtos:{}});

	}

/*modulo exporta atributos ( os quais possuem funções ) que serão chamados no arquivo de rotas,por meio de três parametros - app: a variáve que contém a instancia do express - res: a resposta a ser dada pelo server - req: a requisição do cliente*/
module.exports.produto_salvar= function(app,req,res){//metodo post pegando as noticias,importando a var app que contem as requisições,passando app como parametro
	

		var connection=app.config.dbConnection();//conexão com o banco
		var produtosModel = new app.app.models.Connection_Sql(connection);//instanciando a classe NoticiasDAO

		produtosModel.salvarProdutos(produtos, function(error,result){//conectar no banco e selecionar - result se der certo e error se der errado
			//incluir notícia, digitada, no banco
			res.redirect('/');//chama/redireciona a pagina de noticias
			// res.redirect (para chamar a páginade noticias, que já vai fazer o select correto no banco de dados)

		});
		

	}

/*Isabela Archanjo Batarce - 5A*/