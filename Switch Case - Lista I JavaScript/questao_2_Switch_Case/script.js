/**2) Criar um programa onde o usuário digite a sua data de nascimento e retorne a geração a qual ele pertence:

Sem Geração (até 1945)
Baby Boomers (nascidos entre 1946 e 1964)
Geração X (1965-1980)
Geração Y ou Millennials (1981-1996)
Geração Z (1997-2010)
Geração Alfa (a partir de 2011) */

let data_nascimento

data_nascimento = parseInt(prompt('Digite o ano em que você nasceu: '))

switch (true){
    case data_nascimento > 0 && data_nascimento <= 1945:
        alert('Sem Geração')
     break
    case data_nascimento > 1945 && data_nascimento < 1965:
        alert('Baby Boomers')
     break
    case data_nascimento >= 1965 && data_nascimento <= 1980:
        alert('Geração X')
     break
    case data_nascimento > 1980 && data_nascimento <= 1996:
        alert('Geração Y ou Millennials')
     break
    case data_nascimento > 1996 && data_nascimento <= 2010:
        alert('Geração Z ')
     break
    case data_nascimento > 2010:
        alert('Geração Alfa')
     break
}