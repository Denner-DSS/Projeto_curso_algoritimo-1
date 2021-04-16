
function acaoBotao(){
    var valor01, valor02, operacao;

    valor01 = prompt("Digite o primero valor: ") 
    operacao = prompt("Digite a operação (Ex. + , - , * , /): ")
    valor02 = prompt("Digite o segundo valor: ")

    if(operacao == "+" ){
        resultado = parseFloat(valor01) + parseFloat(valor02)
    }else if(operacao == "-" ){
        resultado = parseFloat(valor01) - parseFloat(valor02)
    }else if(operacao == "*" ){
        resultado = parseFloat(valor01) * parseFloat(valor02)
    }else if(operacao == "/" ){
        resultado = parseFloat(valor01) / parseFloat(valor02)
    }

    document.getElementById("Paragrafo").innerText = "Resultado: " + resultado
    //alert("O resultado é: " + resultado)
}
