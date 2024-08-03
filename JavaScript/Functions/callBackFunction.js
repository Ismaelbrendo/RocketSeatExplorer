// callback function

function sayMyName(name) {
    console.log('antes da callback');
    name()

    console.log('depois da callback');
}

sayMyName(
    () => {
        console.log('dentro da callback'); //chamará de volta para o codigo acima
    }
);