// Calculadora simples em JavaScript

function calcular(numero1, operador, numero2) {
    switch (operador) {
        case "+":
            return numero1 + numero2;

        case "-":
            return numero1 - numero2;

        case "*":
            return numero1 * numero2;

        case "/":
            if (numero2 === 0) {
                return "Erro: não é possível dividir por zero.";
            }
            return numero1 / numero2;

        default:
            return "Operador inválido.";
    }
}

// Exemplos
console.log(calcular(10, "+", 5)); // 15
console.log(calcular(10, "-", 5)); // 5
console.log(calcular(10, "*", 5)); // 50
console.log(calcular(10, "/", 5)); // 2