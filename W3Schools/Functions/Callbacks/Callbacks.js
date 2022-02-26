function myDisplayer(something) {
    console.log(something);
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

/* Onde realmente os Callbacks brilham são nas funções assincronas,
onde uma função tem qu esperar pela outra função(como esperar um arquivo carregando).*/

// Funções Assincronas

    // setTimeout
setTimeout(myFunction, 3000); // 3000 =: 3 segundos

function myFunction(param) {
    if (param == null) {
        console.log('I love You !!');
    } else {
        console.log(param);
    }
}

setTimeout(function() {myFunction('ola mundo')}, 3000);

    // setInterval
setInterval(myNewFunction, 1000);

function myNewFunction() {
    let d = new Date();

    let date = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    console.log(date);
}