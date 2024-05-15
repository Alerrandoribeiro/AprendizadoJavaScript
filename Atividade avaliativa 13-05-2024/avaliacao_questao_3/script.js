/**Desenvolver a lógica de perguntas / respostas / pontuação para um mini-quiz utilizando a estrutura condicional switch/case. O quiz contém 4 perguntas com 4 respostas cada (conforme abaixo). Todas as respostas possuem uma pontuação específica. Realizar o cálculo da pontuação e mostrar ao final.

1) Quais séries a seguir englobam melhor a temática de vampiros e assombração?

A) Van Helsing (2 pontos)
B) Castlevania (3 pontos)
C) The Vampire Diaries (2 pontos)
D) Blade: The Series (1 ponto)


2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia?

A) Alice no País das Maravilhas (4 pontos)
B) O Hobbit (2 pontos)
C) A Fantástica Fábrica de Chocolates (4 pontos)
D) Coraline (3 pontos)


3) Quais das franquias listadas, representam melhor a empresa de jogos Nintendo?

A) The Legend of Zelda (3 pontos)
B) Kirby (2 pontos)
C) Metroid (2 pontos)
D) Super Mario Bros (4 pontos)


4) Quais dos autores citados, representam melhor o gênero de livros de terror?

A) Stephen King (4 pontos)
B) Edgar Allan Poe (2 pontos)
C) H.P. Lovecraft (3 pontos)
D) Mary Shelley (4 pontos)


Critérios de avaliação:

(1,0) Criar uma tela (janela) inicial de boas vindas, explicando o quiz.
(1,0) Validar para que respostas digitadas com letra minúscula (a, b, c, d) também somem os pontos.
(1,0) Incluir uma validação para opções diferentes das alternativas, avisando a soma de 0 pontos.
(1,0) Mostrar os pontos ao final. Se conseguir pontuação máxima (15 pontos), incluir além da pontuação, uma mensagem "Parabéns!" */

let tematica_vampiro_assombracao, tematica_fantasia, melhor_franquia_listada_jogos, melhor_autor_livro_terror, pontuacao_tematica, soma_tematica_vampiro_assombracao, soma_tematica_fantasia, soma_melhor_franquia_listada_jogos, soma_melhor_autor_livro_terror

soma_tematica_fantasia = 0
soma_tematica_vampiro_assombracao = 0
soma_melhor_franquia_listada_jogos = 0
soma_melhor_autor_livro_terror = 0

alert('Olá seja bem vindo ao quiz de avaliação, escolha a sua opção favorita para votação.\n\nLembrando que são quatro perguntas bem simples e objetiva, digite a letra A,B,C ou D referente a sua escolha.')

tematica_vampiro_assombracao = prompt('1) Quais séries a seguir englobam melhor a temática de vampiros e assombração?\n\nA - Van Helsing\nB - Castlevania\nC - The Vampire Diaries\nD - Blade: The Series ').toUpperCase()

switch (true) {
    case tematica_vampiro_assombracao == 'A':
        soma_tematica_vampiro_assombracao = 2
        break
    case tematica_vampiro_assombracao == 'B':
        soma_tematica_vampiro_assombracao = 3
        break
    case tematica_vampiro_assombracao == 'C':
        soma_tematica_vampiro_assombracao = 2
        break
    case tematica_vampiro_assombracao == 'D':
        soma_tematica_vampiro_assombracao = 1
        break
    default:
        alert('Valor inválido, 0 pontos!')
        soma_tematica_vampiro_assombracao = 0
}

tematica_fantasia = prompt('2) Dentre os livros abaixo, quais incluem melhor a temática de fantasia?\n\nA - Alice no País das Maravilhas\nB - O Hobbit\nC - A Fantástica Fábrica de Chocolates\nD - Coraline').toUpperCase()

switch (true) {

    case tematica_fantasia == 'A':
        soma_tematica_fantasia = 4
        break
    case tematica_fantasia == 'B':
        soma_tematica_fantasia = 2
        break
    case tematica_fantasia == 'C':
        soma_tematica_fantasia = 4
        break
    case tematica_fantasia == 'D':
        soma_tematica_fantasia = 3
        break
    default:
        alert('Valor inválido, 0 pontos!')
        soma_tematica_fantasia = 0
}

melhor_franquia_listada_jogos = prompt('3) Quais das franquias listadas, representam melhor a empresa de jogos Nintendo?\n\nA - The Legend of Zelda\nB - Kirby\nC - Metroid\nD - Super Mario Bros').toUpperCase()

switch (true) {

    case melhor_franquia_listada_jogos == 'A':
        soma_melhor_franquia_listada_jogos = 3
        break
    case melhor_franquia_listada_jogos == 'B':
        soma_melhor_franquia_listada_jogos = 2
        break
    case melhor_franquia_listada_jogos == 'C':
        soma_melhor_franquia_listada_jogos = 2
        break
    case melhor_franquia_listada_jogos == 'D':
        soma_melhor_franquia_listada_jogos = 4
        break
    default:
        alert('Valor inválido, 0 pontos!')
        soma_melhor_franquia_listada_jogos = 0
}

melhor_autor_livro_terror = prompt('4) Quais dos autores citados, representam melhor o gênero de livros de terror?\n\nA - Stephen King\nB - Edgar Allan Poe\nC - H.P. Lovecraft\nD - Mary Shelley').toUpperCase()

switch (true) {

    case melhor_autor_livro_terror == 'A':
        soma_melhor_autor_livro_terror = 4
        break
    case melhor_autor_livro_terror == 'B':
        soma_melhor_autor_livro_terror = 2
        break
    case melhor_autor_livro_terror == 'C':
        soma_melhor_autor_livro_terror = 3
        break
    case melhor_autor_livro_terror == 'D':
        soma_melhor_autor_livro_terror = 4
        break
    default:
        alert('Valor inválido, 0 pontos!')
        soma_melhor_autor_livro_terror = 0
}

pontuacao_tematica = soma_tematica_vampiro_assombracao + soma_tematica_fantasia + soma_melhor_franquia_listada_jogos + soma_melhor_autor_livro_terror


if (pontuacao_tematica == 15) {
    alert(`Sua pontuação foi ${pontuacao_tematica} pontos, Parabéns!`)
} else {
    alert(`Sua pontuação foi ${pontuacao_tematica} postos.`)
}
