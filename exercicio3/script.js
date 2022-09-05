// Observe o objeto abaixo e, utilizando o **espalhamento** resolva os exercícios a seguir:
const pokemon1 = {
	nome: "Bulbasaur",
 	tipo: "Grama",
 	nivel: 5
 };
// a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”
pokemon2= {...pokemon1}
pokemon2.nome = 'Squirtle'
pokemon2.tipo = 'Agua'



// b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** de objetos com a estrutura abaixo. Inicie a propriedade como um array vazio, e crie o objeto abaixo utilizando `**push()**`
let dano1 = [];
poderes = {
 nome: 'Investida',
 dano: 40,
 tipo: 'Normal',
 precisao: 100,
}

dano1.push(poderes)
pokemon1.ataques = dano1

// c) Na cópia do objeto original, adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade criada para o objeto original;
pokemon2.ataques = {...pokemon1.ataques}


// d) para o objeto original, adicione o ataque **“Folha Navalha”,** com **45 de dano**, **100 de precisão**, e de tipo **“Grama”**;
let dano2 = [];
poderes = {
 nome: 'Folha Navalha',
 dano: 45,
 tipo: 'grama',
 precisao: 100,
}

dano2.push(poderes)
pokemon1.ataques.push(dano2)


// e) para a cópia, crie o ataque **“Jato de Água”**, com **40 de dano**, **100 de precisão**, e do tipo **“Água”**;
let dano3 = [];
poderes = {
 nome: 'Jato de Água',
 dano: 40,
 tipo: 'Água',
 precisao: 100,
}

dano3.push(poderes)
pokemon2.ataques = dano3



// f) Imprima os dois objetos no console.
console.log(pokemon1)
console.log(pokemon2)