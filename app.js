var app=require('./config/server');//guardando/importando em uma variavel as informações do server


//var rotaNoticias =require('./app/routes/noticias')(app); //chamada das rotas

//var rotaHome =require('./app/routes/home')(app);

//var rotaFormInclusaoNoticias =require('./app/routes/formulario_inclusao_noticias')(app);

app.listen(3000, function(){
	console.log('Servidor ON');//verifica se o servidor subiu e esta executando a porta 3000
});


/*Isabela Archanjo Batarce - 5A*/