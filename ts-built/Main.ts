var input = document.getElementById('inputbox');
if (!input) {
    console.error("L'élément inputbox n'a pas été trouvé.");
    throw new Error("L'élément inputbox n'a pas été trouvé."); 
}
function calculate(expression) {
    var tokens = expression.split(/([+\-*/])/).filter(function (token) { return token.trim() !== ""; }); //Suppression des tokens vides
    if (tokens.length === 0)
        return 0; // Gestion du cas d'une expression vide
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
