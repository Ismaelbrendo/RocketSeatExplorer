/* 
    Programa que tenha um menu e apresente a seguinte mensagem:
    Olá Usuário! Digite a opção desejada

    1. Cadastrar item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa

---
O programa deverá capturar o número digitado pelo usuário e mostrar os seguintes cenários:

Caso 1 -> Cadastrar um nome item
Caso 2 -> Ver itens
    Se nenhum item -> ´Não existem itens cadastrados´
Caso 3 -> Encerrar aplicação
*/

let option;
let items = []

while (option != 3) {

    option = Number(prompt (`Olá Usuário! Digite a opção desejada

        1. Cadastrar item na lista
        2. Mostrar itens cadastrados
        3. Sair do programa`))

    switch(option) {
        case 1:
            let item = prompt ("Digite o nome do item")
        items.push(item) //Abre um espaco para a array, sem a necessidade da variavel de controle.
            break;
        case 2:
            if(items.length == 0) {
                alert ("Não existem itens cadastrados")  
            } else {
                alert (items)
            }
            break;
        case 3:
            alert ("Aplicação encerrada!")
            break;
        default:    
            alert("Digito invalido, tente novamente :(")
    }
}
    
console.log(option, items)