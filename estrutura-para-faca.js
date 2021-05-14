
function acaoBotao(){
   var numero, fatorial

   numero = prompt("Digite o número a ser calculado: ");
   fatorial = 1
   for (var contador = 1; contador <= numero; contador++) {
      fatorial = fatorial * contador;
      
   }
   
      document.getElementById("Paragrafo").innerText = "Resultado: " + fatorial
   //alert("O resultado é: " + resultado)
}