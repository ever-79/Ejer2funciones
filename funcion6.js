const sumarTodo = (...numeros) => {
    return numeros.reduce((acumulador, actual) => acumulador + actual, 0);
    };
    console.log(sumarTodo(1, 2, 3, 4)); // Salida: 10