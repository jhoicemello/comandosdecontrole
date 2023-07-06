function maiorNumero () {
    var n1 = document.getElementById("numero1").value;
    var n2 = document.getElementById("numero2").value;
    var n3 = document.getElementById("numero3").value;
    var arrayNumeros = [];
    arrayNumeros.push(n1);
    arrayNumeros.push(n2);
    arrayNumeros.push(n3);
    var maior = Math.max.apply(null, arrayNumeros);
    alert("O maior número é: " + maior);
}

function maiorDeIdade() {
    var idade = document.getElementById("idade").value;
    if (idade >= 18) {
        alert("Você é maior de idade. Bora beber uma!");
    }

    else {
        alert("Você não é maior de idade. Fique só no leite com toddy por enquanto!");
    }
}

function somarMultiplos() {
    var x = 3;
    var z = 5;
    var res = 0;
    var multiplos = [];


    for(var i = 0; i < 1000; i++){
    if(i % x == 0 || i % z == 0){
        res += i;
        multiplos.push(i);
    }
    }
    alert("Os múltiplos de 3 e 5 abaixo de 1000 são: " +multiplos.join([separador = ',']));
    alert("A soma de todos eles dá: " +res);
}