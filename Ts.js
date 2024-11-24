var input = document.getElementById('inputbox');
if (!input) {
    console.error("L'élément inputbox n'a pas été trouvé.");
    throw new Error("L'élément inputbox n'a pas été trouvé."); 
}
var buttons = document.querySelectorAll('button');
var string = "";
var arr = Array.from(buttons);
arr.forEach(function (button) {
    button.addEventListener('click', function (e) {
        var buttonValue = e.target.textContent || "";
        switch (buttonValue) {
            case '=':
                try {
                    var result = calculate(string);
                    input.value = result.toString();
                    string = result.toString();
                }
                catch (error) {
                    input.value = "Erreur : ".concat(error.message);
                    string = "";
                    console.error("Erreur de calcul :", error);
                }
                break;
            case 'AC':
                string = "";
                input.value = "";
                break;
            case 'DEL':
                string = string.substring(0, string.length - 1);
                input.value = string;
                break;
            default:
                if (!isNaN(Number(buttonValue)) || ['+', '-', '*', '/'].includes(buttonValue)) {
                    string += buttonValue;
                    input.value = string;
                }
                else {
                    console.warn("Bouton non g\u00E9r\u00E9 : ".concat(buttonValue));
                }
                break;
        }
    });
});
function calculate(expression) {
    var tokens = expression.split(/([+\-*/])/).filter(function (token) { return token.trim() !== ""; });
    if (tokens.length === 0)
        return 0;
    var result = parseFloat(tokens[0]);
    if (isNaN(result))
        throw new Error("Expression invalide");
    for (var i = 1; i < tokens.length; i += 2) {
        var operator = tokens[i];
        var operand = parseFloat(tokens[i + 1]);
        if (isNaN(operand))
            throw new Error("Expression invalide");
        switch (operator) {
            case '+':
                result += operand;
                break;
            case '-':
                result -= operand;
                break;
            case '*':
                result *= operand;
                break;
            case '/':
                if (operand === 0)
                    throw new Error("Division par zéro");
                result /= operand;
                break;
            default: throw new Error("Op\u00E9rateur invalide: ".concat(operator));
        }
    }
    return result;
}
