
var x = new Banco("cliente");

function achar() {
	var nome_login = document.querySelector('#nome_login').value;
	for (var i = 0; i < x.dados.length; i++ ) {
		if(nome_login == x.dados[i].nome){
			
			window.open("file:///D:/Dados/Documentos/Laec-%20Trabalho%20final/index.html" ,"_self")
			alert('encontrado');
		}
	}

}
	