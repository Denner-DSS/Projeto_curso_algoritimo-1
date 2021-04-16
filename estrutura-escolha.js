/*
   valor01, valor02, resultado: real
   operacao: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
   //escreva("A proposta desse programa é calcular dois valores baseados na operação.")

   escreva("Digite o primeiro valor:")
   leia(valor01)
   escreva("Digite a operação (Ex. + , - , * , /):")
   leia(operacao)
   escreva("Digite o segundo valor:")
   leia(valor02)

   escolha operacao
      caso "+"
         resultado := valor01 + valor02
      caso "-"
         resultado := valor01 - valor02
      caso "*"
         resultado := valor01 * valor02
      caso "/"
         resultado := valor01 / valor02
   fimescolha

   escreva("O resultado é: ", resultado
*/
function acaoBotao(){
    var valor01, valor02, operacao;

    valor01 = prompt("Digite o primero valor: ") 
    operacao = prompt("Digite a operação (Ex. + , - , * , /): ")
    valor02 = prompt("Digite o segundo valor: ")

    switch (operacao) {
        case "+":
            resultado = parseFloat(valor01) + parseFloat(valor02)
            break;
        case "-":
            resultado = parseFloat(valor01) - parseFloat(valor02)
            break;
        case "*":
            resultado = parseFloat(valor01) * parseFloat(valor02)
            break;
        case "/":
        resultado = parseFloat(valor01) / parseFloat(valor02)
            break;            
    }

    document.getElementById("Paragrafo").innerText = "Resultado: " + resultado
    //alert("O resultado é: " + resultado)
}

