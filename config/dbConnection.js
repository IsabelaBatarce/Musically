/*estabelece a conexão com o banco de dados*/

var mysql= require('mysql');//fazendo requisição do módulo mysql

var connMySQL =function(){// essa variável vai conter as informações do banco / serve para englobar o método de conexão para evitar que o simples fato de iniciar a aplicação crie a conexão com o banco de dados
	console.log('Conexão com bd foi estabelecida');//testando pra ver se aconexão foi estabelecida
		return mysql.createConnection({//comunicação com as tabelas do banco (dbConnection)/cria conexão com mysql e com os parametros:
			host: 'localhost',//seu servidor
			user: 'root',//usuario padrao
			password:'',//senha padrao do usuario, mas e vazia
			database:'musically'//nome do banco de dados
		});//variaveis de conexao,criando conexao
}
module.exports=function(){//módulo retorna essa função 
	console.log('O autoload carregou o módulo de conexao com bd')
	return connMySQL;//vai retornar para o server (no consign) as informações do banco
}


/*Isabela Archanjo Batarce - 5A*/
