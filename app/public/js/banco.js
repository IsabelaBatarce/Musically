class Banco {
  	constructor(nome_banco){
  		this.dados = JSON.parse(localStorage.getItem(nome_banco)) || [];
	    this.nome_banco = nome_banco;
	}

	empurrar () {
		localStorage.setItem(this.nome_banco, JSON.stringify(this.dados));
		return this;
	}

	adicionar(objeto){
	  this.dados.push(objeto);
	  this.empurrar();
	  return true;
	}

	remover(objeto) {
		var indice = this.dados.findIndex(function (obj) {
			return objeto == obj;
		});
		if (indice == -1) throw "NAO EXISTE OBJETO"
		this.dados.splice(indice, 1);
		this.empurrar();
		return true;
	}
}
