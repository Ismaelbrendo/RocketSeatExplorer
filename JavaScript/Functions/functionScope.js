//function scope 
let subject = ("Create video") 
function createThink(subject) { //caso nao tenha parametro (subject) ele sobreescreve para o subject dentro da function
    subject = 'Delete video'
    return subject
}

console.log(subject)
console.log(createThink(subject))
console.log(subject)