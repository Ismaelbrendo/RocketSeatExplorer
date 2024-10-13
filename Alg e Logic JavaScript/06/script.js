/* 
    **Jogo Advinhar**

    Apresente a mensagem ao usuario:
    "Consegue advinhar o numero que estou pensando? esta entre 0 e 10"

    Crie uma logica para gerar um numero aleatorio
    e verifique se o numero digitado é o mesmo que o aleatorio gerado pelo sistema.

    Enqunado o usuario não advinhar, mostre uma mensagem de erro.

    Quando o usuario acertar, mostre uma mensagem parabenizando e mostrando o numero de tentativas
*/

let result = prompt ('Consegue advinhar o numero que estou pensando? esta entre 0 e 10: ')
const randomNumber  = Math.round(Math.random() * 10) 

let xAttempts = 1;

while(Number(result) != randomNumber) {
    result = prompt ('Erro, tente novamente: ')
    xAttempts++
}

if (xAttempts > 1) {
    alert (`Parabéns, o numero que eu pensei foi ${randomNumber}! Você acertou em ${xAttempts} tentativas`) //acento agudo ``
} else {
    alert (`Parabéns, o numero que eu pensei foi ${randomNumber}! Você acertou em ${xAttempts} tentativa`) //acento agudo ``
}

//nextclass #167