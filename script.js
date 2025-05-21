const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0


//Função chamada quando o jogador clica em uma das opçoes.
const playHuman = (humanChoice) => {

   //Chama a função principal do jogo, passando a escolha do humano e gerando a da máquina.
    playTheGame(humanChoice, playMachine())
}
//Função para a máquina escolher uma opção.
const playMachine = () => {
    const choices = ['rock', 'paper','scissors'] //Array com as opções.
    const randomNumber = Math.floor(Math.random() * 3) //Gera um número aleatório entre 0 e 2.

    return choices[randomNumber] //Retorna a escolha da máquina.
}

 //Função principal que compara as escolhas e determina o vencedor.
const playTheGame = (human, machine) => {

    console.log('Humano: ' + human + " Maquina:" + machine); //Mostra as escolhas no console.

//Lógica para determinar o vencedor.
if (human === machine) {
    result.innerHTML = 'Empatou';

} else if (
    (human ==='paper'&& machine==='rock')||
    (human ==='rock'&& machine==='scissors')||
    (human ==='scissors'&& machine==='paper')
)
{   humanScoreNumber++ //Incrementa a pontuação do humano.
    humanScore.innerHTML = humanScoreNumber; //Atualiza a pontuação na tela.
    result.innerHTML = 'Você Ganhou!';
}
else {
    machineScoreNumber++ //Incrementa a pontuação da máquina.
    machineScore.innerHTML = machineScoreNumber; //Atualiza a pontuação na tela.
    result.innerHTML = 'Você Perdeu';
}
}
const resetGame = () => {
  humanScoreNumber = 0;
  machineScoreNumber = 0;
  humanScore.textContent = 0;
  machineScore.textContent = 0;
  result.textContent = '';
}