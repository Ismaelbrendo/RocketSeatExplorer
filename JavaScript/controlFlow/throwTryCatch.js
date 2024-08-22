// throw
function callMyName(name = ''){
    if(name === '') {
        throw new Error('Name is required');
    }

    console.log ('depois erro')
}
// try..catch
try {
    callMyName('')
} catch (e) {
    console.log(e)
}

console.log('depois try..catch')