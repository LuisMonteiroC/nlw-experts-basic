const perguntas = [
    {
        pergunta: "Qual é a função principal do comando 'console.log()' em JavaScript?",
        respostas: [
            "Imprimir uma mensagem na tela do usuário.",
            "Abrir um pop-up com uma mensagem.",
            "Definir uma variável."
        ],
        correta: 0
    },
    {
        pergunta: "O que o operador '===' faz em JavaScript?",
        respostas: [
            "Compara dois valores quanto ao seu tipo e valor.",
            "Compara dois valores apenas quanto ao seu valor.",
            "Converte os valores antes de compará-los."
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
        respostas: [
            "var myVar = 5;",
            "myVar := 5;",
            "let myVar = 5;"
        ],
        correta: 2
    },
    {
        pergunta: "Como você adiciona um comentário de linha em JavaScript?",
        respostas: [
            "/* Comentário aqui */",
            "// Comentário aqui",
            "<!-- Comentário aqui -->"
        ],
        correta: 1
    },
    {
        pergunta: "O que o método 'indexOf()' retorna quando não encontra um elemento em um array?",
        respostas: [
            "Null",
            "-1",
            "0"
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a forma correta de escrever um loop 'for' em JavaScript?",
        respostas: [
            "for (let i = 0; i < 10; i++) {}",
            "for (i = 0; i < 10; i++) {}",
            "for (i < 10; i++) {}"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a forma correta de escrever um loop 'for' em JavaScript?",
        respostas: [
            "for (let i = 0; i < 10; i++) {}",
            "for (i = 0; i < 10; i++) {}",
            "for (i < 10; i++) {}"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a forma correta de escrever um loop 'for' em JavaScript?",
        respostas: [
            "for (let i = 0; i < 10; i++) {}",
            "for (i = 0; i < 10; i++) {}",
            "for (i < 10; i++) {}"
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a forma correta de escrever um loop 'for' em JavaScript?",
        respostas: [
            "for (let i = 0; i < 10; i++) {}",
            "for (i = 0; i < 10; i++) {}",
            "for (i < 10; i++) {}"
        ],
        correta: 0
    },{
        pergunta: "Qual é a forma correta de escrever um loop 'for' em JavaScript?",
        respostas: [
            "for (let i = 0; i < 10; i++) {}",
            "for (i = 0; i < 10; i++) {}",
            "for (i < 10; i++) {}"
        ],
        correta: 0
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }
        
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    quiz.appendChild(quizItem)
}