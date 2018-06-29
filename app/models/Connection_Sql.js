function Connection_Sql(connection){//transformando os models em classes
	this._connection=connection;//atributo connection que será utilizado pelas funções
	
}

//prototype insere esses métodos (ex: getNoticia) dentro de NoticiasDAO

Connection_Sql.prototype.getProdutos= function( callback){//query - consulta - pode ser um send, end, render
	this._connection.query('select*from produtos', callback);//connection.query selecionando a database diretamente no banco,e ordenando as notícias por data de inserção, ou seja, da última pra a primeira.
}

/*Recebe o parâmetro enviado pelo controller (noticias.js), passa para a query, para fazer a consulta no banco de dados*/


Connection_Sql.prototype.salvarProdutos=function(produtos,callback){//prototype insere esse método (salvarNoticia) na classe
	this._connection.query('insert into produtos set?',produtos, callback);//connection.query inserindo na tabela diretamente no banco

}




Connection_Sql.prototype.excluirNoticia=function(id_produto, callback){
//prototype insere esse método (salvarNoticia) na classe
	this._connection.query("delete from produtos where id_produto="+ id_produto.id_produto,callback); //connection.query inserindo na tabela diretamente no banco

}

	module.exports=function(){
	return Connection_Sql;//retorna a classe
}

/*Isabela Archanjo Batarce - 5A*/
