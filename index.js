const perguntas = [
    {
      pergunta: "Qual é o maior planeta do sistema solar?",
      respostas: [
        "Marte",
        "Júpiter",
        "Saturno",
      ],
      correta: 1
    },
    {
      pergunta: "Quem escreveu a obra 'Dom Quixote'?",
      respostas: [
        "Miguel de Cervantes",
        "William Shakespeare",
        "Fernando Pessoa",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o animal símbolo da Austrália?",
      respostas: [
        "Koala",
        "Canguru",
        "Equidna",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o segundo maior oceano do mundo?",
      respostas: [
        "Oceano Índico",
        "Oceano Atlântico",
        "Oceano Pacífico",
      ],
      correta: 1
    },
    {
      pergunta: "Quem pintou a 'Mona Lisa'?",
      respostas: [
        "Pablo Picasso",
        "Leonardo da Vinci",
        "Vincent van Gogh",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o país com a maior população do mundo?",
      respostas: [
        "Índia",
        "Estados Unidos",
        "China",
      ],
      correta: 2
    },
    {
      pergunta: "Quem foi o primeiro homem a pisar na Lua?",
      respostas: [
        "Buzz Aldrin",
        "Neil Armstrong",
        "Yuri Gagarin",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o elemento químico mais abundante na crosta terrestre?",
      respostas: [
        "Hidrogênio",
        "Oxigênio",
        "Carbono",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o rio mais longo do mundo?",
      respostas: [
        "Rio Amazonas",
        "Rio Nilo",
        "Rio Mississipi",
      ],
      correta: 1
    },
    {
      pergunta: "Quem escreveu 'Romeu e Julieta'?",
      respostas: [
        "Jane Austen",
        "William Shakespeare",
        "Charles Dickens",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
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
  
    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
  }