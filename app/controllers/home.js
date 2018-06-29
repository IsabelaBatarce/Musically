
//exibir as notícias
module.exports.index = function(app, req, res){

	var connection = app.config.dbConnection();//caminho para dbCOnnection - na pasta config dentro da pasta app
	//depois do reactoring, recebemos o app por paramentro, então é somente,
	//recuperar o módulo dentro do app.
	//diminuimos a necessidade de ter requires nos projetos
	var produtosModel = new app.app.models.Connection_Sql(connection);//instanciando a classe NoticiasDAO
	//app.app significa: o primeiro é a aplicação, o segundo é a pasta app

	//agora ficou assim: o select (regra) foi para o arquivo de model
    produtosModel.getProdutos(function(error,result){//conectar no banco e selecionar - mostra result se der certo e error se der errado    	
		/*console.log('lista de produtos');
		console.log(result);*/
		res.render("home/index",{produtos: result});//resultado - fazer um render (ejs) na view (noticias)
	});//chama o arquivo ejs (o qual possui JS e HTML) e junto com esse arquivo manda o parámetro result - notícias (formato Json) - vetor notícias
}

module.exports.excluir=function(app,req,res){  /*exclusão de uma notícia*/
	var pesquisa= req.body.pesquisa;
	var connection= app.config.dbConnection();
	var ProdutosModel=new app.app.models.Connection_Sql(connection);

	if (req.query.id_produto) {
		var id_produto=req.query;
	}else{
		res.redirect("/index")
		return;
	}

	ProdutosModel.excluirNoticia(id_produto,function(erro,result){
		res.redirect("/index")
	});

}


module.exports.cadastro=function(app, req,res){

		res.render("cadastro/cadastro");

	}


module.exports.login=function(app, req,res){

		res.render("login/login");

	}


/*Isabela Archanjo Batarce - 5A*/