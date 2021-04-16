/*
sairLoop: caractere
    v01, v02: real

Inicio

repita
escreva("Digite o primero número: ")
leia(v01)
escreva("Digite o segundo número: ")
leia(v02)

escreval("Resultado: ", v01 + v02)
escreval("Deseja sair? S/N")
leia(sairLoop)

ate sairLoop <> "N"
*/

function acaoBotao(){
    
    var sairLoop, v01, v02

    do {
        v01 = prompt ("Digite o primero número: ")    
        v02 = prompt ("Digite o segundo número: ")

        document.getElementById("Paragrafo").innerText = "Resultado: " + (parseFloat(v01) + parseFloat(v02))

        sairLoop = prompt ("Deseja sair? S/N") 

    } while (sairLoop == "N");



    
    //alert("O resultado é: " + resultado)
}