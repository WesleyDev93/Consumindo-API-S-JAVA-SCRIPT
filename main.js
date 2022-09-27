async function buscaEndereco (cep) {
    try {

    
    var consultaCep = await fetch (`https:viacep.com.br/ws/${cep}/json/`);
    var consultaCepConvertida = await consultaCep.json ();
      if (consultaCepConvertida.erro) {
         throw Error ('Cep Não Existe !');
      }


    console.log (consultaCepConvertida);
    return consultaCepConvertida;
}catch (erro) {
     console.log (erro);
}
}

//let ceps = ['01001000', '01001001'];
//let conjuntoCeps = ceps.map (valores => buscaEndereco (valores));
//Promise.all (conjuntoCeps).then (resposta => console.log (respostas));

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