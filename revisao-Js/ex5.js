/**Crie uma variável para armazenar o raio de um círculo, calcule e imprima no console a área do círculo.
Fórmula de cálculo do circulo:
pi = 3.14;
pi * (raio²)
O resultado deverá ser: ”A área do círculo é: xx” */

function exercicioCinco() {
    let pi = 3.14;
    let raio = Number(prompt('Informe o raio: '));

    let resultado = pi * (raio * raio);
    alert('A área do círculo é: ' + resultado.toFixed(2));
}