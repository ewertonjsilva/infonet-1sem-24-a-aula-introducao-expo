export default function SelecionaOperacao(n1, n2, operacao) {
    switch (operacao) {
        case '+':
            return parseFloat(n1) + parseFloat(n2);
        case '-':
            return parseFloat(n1) - parseFloat(n2);
        case '*':
            return parseFloat(n1) * parseFloat(n2);
        case '/':
            return parseFloat(n1) / parseFloat(n2);
    }
}