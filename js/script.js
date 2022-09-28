// Criando um elemento h1 com o JS:
// Podemos criar qualquer elemento html por este comando
const titulo = document.createElement('h1');

//incluindo um texto ao h1 criado:
//titulo.innerText = 'Avançando com JavaScript';

//incluindo o elemento h1 ao body do document:
document.body.appendChild(titulo);

// =========================================================

// Mostra tudo que o document tem. 
// Para visualizar, tem que ir no navegador, inspecionar
// e verificadr na aba "Console"
console.log(document);

// =========================================================

// Criando um elemento h1 com o JS:
// Podemos criar qualquer elemento html por este comando
const titulo_2 = document.createElement('h1');

//incluindo um texto ao h1 criado:
titulo_2.innerText = 'Avançando com JavaScript';

// Pegando a referência de um elemento do html
// neste caso, a div com o id == container.
const container = document.querySelector('#container');

//Incluindo o elemento h1 dentro do elemento container:
//A referência do elemento foi obtida na linha anterior.
//container.appendChild(titulo_2);


// =========================================================
//                   Usando IF e Ternário

//IF:
const idade = 18;

if(idade >= 18) {
    alert('Maior de Idade');
} else {
    alert('Menor de Idade');
}

//Operador ternário:
// Se idade >=18, então roda o que estão antes do ":", senão roda 
//o que está após o ":": 
// (Usado para operações simples, de uma linha.)
idade >= 18 ? console.log('Maior de Idade') : console.log('Menor de Idade');

// switch case:
switch (idade) {
    case 18:
        console.log('Tem 18 anos');
        break;

    case 30:
        console.log('Tem 30 anos');
        break;
    default:
        console.log('Caso não seja nenhuma das opções anteriores');
        break;
}


// =========================================================
// Aspas Simples ou Aspas Duplas
const nome = 'Richard';
const sobrenome = "Cardinot";
const frase = "Olá" + nome + " " + sobrenome + "!";

console.log(frase);

//template String
const frase2 = `Olá ${nome} ${sobrenome}!`;

console.log(frase2);


// =========================================================
// Estruturas de Repetição - for, while, do while

//for, como o let é fracamente tipado, não é preciso dizer que tipo o let é
for (let index = 0; index < 10; index++) {
    console.log(index)   
}

while (idade != 18) {
    console.log(idade != 18);
}

do {
    console.log('Vai executar pelo menos uma vez');
} while (idade == 1);


// =========================================================
// Como o JS é fracamente tipado, o tipo de variável se 
// altera conforme o uso, conforme exemplo:

let soma = 10 + 20;
console.log(typeof soma);
soma = '10' + 20;
console.log(typeof soma);
//(** Por boa prática e para evitar esse tipo de problema
// devemos usar variáveis contantes (Ex.: const soma) **)


// =========================================================
//Funçaões com function e com arrow function

//function sem parâmetro
function minhaFunction1() {
    console.log("Minha função!");
}

//function com parâmetro
function minhaFunction2(nome) {
    console.log(`Olá ${nome}, você tem ${idade} anos.` );
}

minhaFunction2('Richard Cardinot');

//function com dois parâmetro
function somaDoisNumeros(num1, num2) {
    return num1 + num2; 
}

console.log(`Resultado: ${somaDoisNumeros(10, 20)}`);

//arrow function: () => {}

//Forma 1:
//Com chaves e com retur
const multiplicaComChavesReturn = () => {
    //usar quando houver um bloco de código
    return 2 * 5
};
console.log(`Arrow function com chaves: ${multiplicaComChavesReturn()}`);

//Forma 2:
//Com parenteses e sem return
const multiplicaComParentesesSemReturn = () => (
    //usar para retorno de múltiplas linhas
     2 * 5
);
console.log(`Arrow function com parênteses: ${multiplicaComParentesesSemReturn()}`);

//Forma 3:
//Sem chaves ou parênteses, a conta vem logo após a arrow(Seta =>)
//Somente usar em operações simples
const multiplica = () => 2 * 5;
console.log(`Arrow function após a seta: ${multiplica()}`);
    //usar para retorno de uma linha


// =========================================================
//                    Array

const frutas = ['Banana', 'Maçã', 'Goiaba'];

//Exibindo todo o array no console
console.log(frutas);

//Exibindo a posição 0 do Array (Banana)
console.log(frutas[0]);

// Tamanho do Array
console.log(`Tamanho do Array frutas: `, frutas.length);

// Um Array pode comportar qualquer tipo, mesmo em uso simultâeneo, 
// até mesmo objeto, que é representado como {}.
const arrayMisto = [123, "String", {}, undefined, null, true];

// Inserindo mais um valor no array, aumentando assim o seu tamanho
frutas.push("Laranja");
console.log(frutas);

// Removendo o último elemento do Array
console.log(frutas);
frutas.pop(frutas);
console.log(frutas);

// Removendo o primeiro elemento do Array
console.log(frutas);
frutas.shift(frutas);
console.log(frutas);


// =========================================================
//                    Objetos - chave: valor,

const user = {
    nome: 'João',
    idade: 31,
    frutasPreferidas: ['Banana','Maçã','Manga'],
    habilitado: true
}

// Observe que objetos no console são exibindos com chaves"{}"
// diferente do Array, que é em colchetes "[]"
console.log(user);

// Exindo um atributo específico do objeto 

//(Ex.: Nome do objeto user)
console.log(user.nome);

//(Ex.: Pegando a última fruta do Array frutasPreferidas do objeto user)
console.log(user.frutasPreferidas[user.frutasPreferidas.length - 1]);

// Array de objetos (Nome do Array: users)
const users = [
     {
        nome: 'João',
        idade: 31,
        frutasPreferidas: ['Banana','Maçã','Manga'],
        habilitado: true
    }, {
        nome: 'João',
        idade: 31,
        frutasPreferidas: ['Banana','Maçã','Manga'],
        habilitado: true
    }, {
        nome: 'João',
        idade: 31,
        frutasPreferidas: ['Banana','Maçã','Manga'],
        habilitado: true
    }
]

// Exibindo o Array users
console.log(users);

// Exibindo o nome do objeto "user" na posição 0 do Array "users"
 console.log(users[0].nome);

 // Primeira fruta preferida do usuars[1]
 console.log(users[1].frutasPreferidas[0]);


 // =========================================================
 //                       forEach

 const contatos = [
    {
       nome: 'Richard',
       celular: '021-99889977',
       email: 'richard@oi.com',
       dtNascimento: '1990-01-01'
   },  {
       nome: 'Amanda',
       celular: '021-88775544',
       email: 'amanda@oi.com',
       dtNascimento: '1990-01-01'
   },  {
       nome: 'Ricardo',
       celular: '021-77884455',
       email: 'ricardo@oi.com',
       dtNascimento: '1990-01-01'
   }
]

console.log(contatos);


// forEach
// Para cada contato existente no Array contatos, faça.
contatos.forEach((contato) => {
    console.log(`Contato do forEach: ${contato.nome}`);
});

// Similar ao forEach, porém é possível retornar um elemento
contatos.map((contato) => {
    console.log(`Contato do map: ${contato.email}`);
})


const contatosForEach = contatos.forEach((contato) => {
    console.log(contato.nome);
    return contato.nome; // Esse return não existe, o forEach naõ retorna nada.
    // Observe que com o forEach não vai funcionar, não há return para ele.
});
console.log("Array de nomes com o forEach: " + contatosForEach);

// Similar ao forEach, porém é possível retornar um elemento
const contatosMap = contatos.map((contato) => {
   console.log(contato.nome)
   return contato.nome;
   // Observe que com o Map vai funcionar, é possível criar um Array desta forma
})

console.log("Array de nomes com o Map: " + contatosMap);


const numerosNaturais = [1,2,3,4,5,6,7,8,9,10];

const numerosParesComMaps = numerosNaturais.map (numero => {
    if (numero % 2 === 0) {
        return numero;
    }
    return undefined;
})

// Usando o filter() para filtrar um Array
// Caso a condição seja falsa, o elemento não entra no novo Array (numerosParesComFilter)
const numerosParesComFilter = numerosNaturais.filter (numero => numero % 2 === 0) 
console.log(`Numero pares com filter: ${numerosParesComFilter}`);


//Consulta quais contatos que atendem a condição
//Esse filtor só foi possível pois a String é um Array
const contatosComA = contatos.filter(contato => contato.nome[0] === 'A' || contato.nome[0] === 'a');
console.log("Contato com A abaixo:");
console.log(contatosComA);


 // =========================================================
 //         REQUISIÇÕES -> Funções Assíncronas

const url = 'https://jsonplaceholder.typicode.com/users'

//Async - Await
//O async diz que se trata de uma função assincrona
 const getData = async () => {
    //O fetch busca o Json na url
    //O await manda o gech aguardar o resultado da url para só então atribuir a variável dados
    const response = await fetch(url);

    // exibindo o json armazenado no Array response, obtido 
    // através da url
    console.log(response);

    //O wait foi usado aqui em baixo para o JS aguardar 
    // o procedimento de conversão do json em objetos (respose.json)
    const dados = await response.json();

    // Exibindo o nome contido no objeto indice 0 do Array dados criado
    // na linha anterior a partir do json
    console.log(dados[0].name);

    //Obs: O await somente pode ser usado quando o retorno for 
    //"Promise" (Parar o mouse sobre o .json() acima como exemplo)

    //fetch == buscar, await == aguardar, async == assíncrono

 }

    //.the()
    const getData2 = () => {
        let dados;
        fetch(url)
        .then(response => response.json())
            // A variável "resp" é criada automaticamente 
            // dentro da arrow function: () => {}, sem ter que ser 
            // declarada
        .then(resp => console.log(resp));
    }

    getData2();


    // =========================================================
    //                  EXERCICIO
    
    const url2 = "https://jsonplaceholder.typicode.com/todos";
    const todosContainer = document.querySelector("#todosContainer");
    
    //localizando o elmenento de id #loading no html
    const loading = document.querySelector("#loading");

    const getDataTarefas = async () => {
        const dadosTarefas = await fetch(url2);

        const tarefas = await dadosTarefas.json();


        loading.classList.add('hide');

        //O filter percorre o vetor tarefas, validando cada tarefa 
        //e atribuindo as que atenderam a condição no vetor tarefasDoUserId1
        const tarefasDoUserId1 = tarefas.filter(tarefa => tarefa.userId === 1);
        console.log(tarefasDoUserId1);

        tarefasDoUserId1.forEach(tarefa => {
            const todoContainer = document.createElement('div');
            const titulo = document.createElement('h2');
            const completed = document.createElement('p');

            titulo.innerText = tarefa.title;
            completed.innerText = tarefa.completed;

            todoContainer.appendChild(titulo);
            todoContainer.appendChild(completed);

            todosContainer.appendChild(todoContainer);

        })
    }

    getDataTarefas();

 // =========================================================



    
