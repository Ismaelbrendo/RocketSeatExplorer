/* Type conversion vs Type coersion

    Type conversion: Converte um tipo de dado para outro, sem alterar o seu conteudo. Ex.: "10" -> 10

    Type coersion: Converte um tipo de dado para outro, alterando o seu conteudo. Ex.: "10" -> 10.5

    Type coersion pode causar bugs e comportamentos inesperados.

    O JS UTILIZA O TYPE COERSION PARA EVITAR PROBLEMAS

*/

console.log(Number('9') + 5) //utilizando o type conversion