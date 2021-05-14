
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

