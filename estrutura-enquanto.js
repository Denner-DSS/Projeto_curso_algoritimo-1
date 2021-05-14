
function acaoBotao(){
    var nome, idade, limite, contador

    limite = prompt ("Digite a quantidade de vezesque vai ser verificado a idade:") 
    contador = 0

    while (contador < limite) {
        nome = prompt("Digite o nome:")
        idade = prompt("Digite a idade de " + nome + ": ")

        if (idade > 18) {
            document.getElementById("Paragrafo").innerText = nome + (" você é maior de idade.") 
        }else{
            document.getElementById("Paragrafo").innerText = nome + (" você é menor de idade.")
        }
        contador++
    }
}
