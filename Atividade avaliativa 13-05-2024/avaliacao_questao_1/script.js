/**O CETAS (Centro de Triagem de Animais Silvestres) está com processo seletivo de integrantes para as suas equipes. Criar um sistema que receba os dados do candidato (nome, idade, formação e cidade) para sinalizar se ele pode concorrer às vagas. Após receber os dados, mostrar o nome do candidato e mensagem para qual tipo de vaga o candidato está apto a concorrer. Caso não esteja apto a concorrer a nenhuma das duas categorias de vagas, mostrar mensagem de "Não apto a concorrer".

Vaga para Equipe de Resgate -> O candidato deve ter de 25 a 50 anos, possuir formação em "Biologia" ou "Ecologia" e residir em Florianópolis.
Vaga para Equipe de Tratamento -> O candidato deve ter de 22 a 60 anos, possuir formação em "Veterinária" e residir em Florianópolis.


Critérios de avaliação:

(1,0) Receber e armazenar os dados do candidato.
(1,0) Validar os dados e critérios para cada tipo de vaga, ou caso não possa concorrer.
(1,0) Mostrar mensagem com o nome do candidato e o tipo de vaga que pode concorrer, ou mensagem de "Não apto a concorrer". */

let nome, idade, formacao, cidade, vaga_equipe_resgate

vaga_equipe_resgate = 0

nome = prompt('Digite seu nome: ')
idade = Number(prompt('Digite sua idade: '))
formacao = prompt('Você possui formação em "Biologia","Ecologia" ou "Veterinária"\n\nDigite sua formacão: ').toLowerCase()
cidade = prompt('Informe o nome da sua cidade: ')

if ((idade >= 25 && idade <= 50) && (formacao == 'biologia' || formacao == 'ecologia') && cidade == 'florianópolis') {
    alert(`${nome} possui ${idade} anos, reside em ${cidade}, formado em ${formacao} e pode concorrer a vaga para equipe de resgate`)
} else if ((idade >= 22 && idade <= 60) && formacao == 'veterinária' && cidade == 'florianópolis') {
    alert(`${nome} possui ${idade} anos, reside em ${cidade}, formado em ${formacao} e pode concorrer a vaga para equipe de tratamento`)
} else {
    alert(`${nome} não está apto a concorrer a nenhuma das vagas`)
}