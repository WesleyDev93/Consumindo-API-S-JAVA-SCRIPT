async function buscaEndereco () {
    try {

    
    var consultaCep = await fetch ('https:viacep.com.br/ws/01001000/json/');
    var consultaCepConvertida = await consultaCep.json ();
      if (consultaCepConvertida.erro) {
         throw Error ('Cep Não Existe !');
      }


    console.log (consultaCepConvertida);
}catch (erro) {
     console.log (erro);
}
}




buscaEndereco ();








//.then (resposta => resposta.json()).then(r => {
          
     // if (r.erro) {
      //  throw Error('Este cep não existe !')
     // } else

 //console.log (r)
//})

//.catch (erro => console.log (erro))
//.finally (mensagem => console.log ('Processamento concluido'));
//console.log (consultaCep);