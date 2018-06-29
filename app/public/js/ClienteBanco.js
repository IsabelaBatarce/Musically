class ClienteBanco extends Banco {
	constructor() {
		super("cliente");
	}

	get buscar () {
		return this;
	}

	get por () {
		return this;
	}

	login (login) {
		return this.achar(login, "login");
	}

	nome (nome) {
		return this.achar(nome, "nome");
	}
}
