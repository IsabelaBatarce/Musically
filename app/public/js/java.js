class Carrinho_bateria{
	adicionar( lista)
		{
		var bateria_botao = document.querySelector('#add_bateria');  
		var itm = document.getElementById(lista).lastChild;
		var cln = itm.cloneNode(true);
		var btn = document.createElement("button");
		var btn_salvar = document.createElement("button");
		var t = document.createTextNode("Remover");
		var salvar = document.createTextNode("Comprar");

		
			alert("Este produto foi adicionado ao carrinho.");
			btn.className = "btn-remover";

			btn.appendChild(t);
			btn.onclick = function(evt){
				alert("Este item será removido do carrinho.");
				cln.parentNode.removeChild(cln);
				remover.parentNode.removeChild(remover);
			}
			btn.className = "btn-remover";

			btn_salvar.appendChild(salvar);
			btn_salvar.onclick = function(evt){
				alert("Compra realizada");
				cln.parentNode.removeChild(cln);
				remover.parentNode.removeChild(remover);
			}

			cln.appendChild(btn);
			document.getElementById("myList2").appendChild(cln);
			cln.className = "clone"
	}
}
//fim classe
class Carrinho_piano{
	adicionar( lista)
		{
		var piano_botao = document.querySelector('#add_piano');  
		var itm = document.getElementById(lista).lastChild;
		var cln = itm.cloneNode(true);
		var btn = document.createElement("button");
		var t = document.createTextNode("Remover");

		
			alert("Este produto foi adicionado ao carrinho.");
			btn.className = "btn-remover";

			btn.appendChild(t);
			btn.onclick = function(evt){
				alert("Este item será removido do carrinho.");
				cln.parentNode.removeChild(cln);
				remover.parentNode.removeChild(remover);
			}
			cln.appendChild(btn);
			document.getElementById("myList2").appendChild(cln);
			cln.className = "clone"
	}
}
//fim classe
class Carrinho_flauta{
	adicionar( lista)
		{
		var flauta_botao = document.querySelector('#add_piano');  
		var itm = document.getElementById(lista).lastChild;
		var cln = itm.cloneNode(true);
		var btn = document.createElement("button");
		var t = document.createTextNode("Remover");

		
			alert("Este produto foi adicionado ao carrinho.");
			btn.className = "btn-remover";

			btn.appendChild(t);
			btn.onclick = function(evt){
				alert("Este item será removido do carrinho.");
				cln.parentNode.removeChild(cln);
				remover.parentNode.removeChild(remover);
			}
			cln.appendChild(btn);
			document.getElementById("myList2").appendChild(cln);
			cln.className = "clone"
	}
}
//fim classe
class Carrinho_violao{
	adicionar( lista)
		{
		var piano_violao = document.querySelector('#add_violao');  
		var itm = document.getElementById(lista).lastChild;
		var cln = itm.cloneNode(true);
		var btn = document.createElement("button");
		var t = document.createTextNode("Remover");

		
			alert("Este produto foi adicionado ao carrinho.");
			btn.className = "btn-remover";

			btn.appendChild(t);
			btn.onclick = function(evt){
				alert("Este item será removido do carrinho.");
				cln.parentNode.removeChild(cln);
				remover.parentNode.removeChild(remover);
			}
			cln.appendChild(btn);
			document.getElementById("myList2").appendChild(cln);
			cln.className = "clone"
	}
} 
//fim classe

function main(id){
	
	var x = new Carrinho_bateria();
	
	switch(id)
	{
		case '1':
			x.adicionar("myList1");
			break;
		case '3':
			x.adicionar("myList3");
			break;
		case '5':
			x.adicionar("myList5");
			break;
			
	}


}

function main_2(id) {


var y = new Carrinho_piano();
	switch(id)
	{
		case '1':
			y.adicionar("myList6");
			break;
		case '3':
			y.adicionar("myList7");
			break;
		case '5':
			y.adicionar("myList8");
			break;
			
	}
}



function main_3(id) {


var z = new Carrinho_flauta();
	switch(id)
	{
		case '1':
			z.adicionar("myList9");
			break;
		case '3':
			z.adicionar("myList10");
			break;
		case '5':
			z.adicionar("myList11");
			break;
			
	}
}

function main_4(id){
	
	var f = new Carrinho_violao();
	
	switch(id)
	{
		case '1':
			f.adicionar("myList12");
			break;
		case '3':
			f.adicionar("myList13");
			break;
		case '5':
			f.adicionar("myList14");
			break;
			
	}


}