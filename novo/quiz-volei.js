/* Quiz de vôlei: 40 perguntas, todas respondidas, em ordem aleatória (e alternativas embaralhadas) a cada tentativa.
   [pergunta, resposta certa, [3 erradas], explicação, categoria]. As alternativas são embaralhadas a cada tentativa.
   Teste sem gravar no ranking: abra o app com ?quizteste=1 */
(function(){
var RODADA={r:99,c:99,s:99,h:99};
var B=[
['Quantos jogadores de cada equipe ficam em quadra ao mesmo tempo?','6',['5','7','8'],'São 6 jogadores por equipe em quadra: 3 na frente e 3 atrás.','r'],
['Até quantos pontos vai um set normal?','25',['15','21','30'],'O set vai a 25 pontos, sempre com 2 de vantagem.','r'],
['Até quantos pontos vai o 3º set, que decide o jogo na Supercopa?','15',['20','25','30'],'O set decisivo é mais curto e vai a 15 pontos, também com 2 de vantagem.','r'],
['Se o set está 24 × 24, o que acontece?','Continua até alguém abrir 2 pontos de vantagem',['Vence quem fizer o próximo ponto','Vai para o tie-break','Termina empatado'],'Não existe empate: o set segue até haver 2 pontos de diferença.','r'],
['Quantos toques, no máximo, uma equipe pode dar na bola antes de passá-la para o outro lado?','3',['2','4','5'],'São até 3 toques (o bloqueio não conta como toque da equipe).','r'],
['O que a equipe faz ao ganhar o direito de sacar?','Gira uma posição no sentido horário',['Troca de lado da quadra','Pede tempo','Escolhe outro sacador'],'É o rodízio: todos giram uma posição no sentido horário.','r'],
['Qual é a função do líbero?','Especialista em defesa, com uniforme de cor diferente',['Atacante principal','Responsável por levantar a bola','Capitão da equipe'],'O líbero só joga no fundo da quadra, defende e recebe o saque.','r'],
['Quantos pedidos de tempo cada equipe tem por set?','2',['1','3','4'],'Cada equipe pode pedir 2 tempos por set.','r'],
['Quantas substituições cada equipe pode fazer por set?','6',['4','8','Quantas quiser'],'São 6 substituições por set para cada equipe.','r'],
['Uma bola que toca a linha da quadra é considerada:','Dentro',['Fora','Para repetir o lance','Falta de quem atacou'],'A linha faz parte da quadra: bola na linha é bola dentro.','r'],
['Quantos sets uma equipe precisa vencer para ganhar o jogo na Supercopa, que é melhor de 3?','2',['1','3','4'],'Vence quem ganhar 2 sets, seja 2×0 ou 2×1.','r'],
['Em que país o vôlei foi inventado?','Estados Unidos',['Brasil','Japão','França'],'O vôlei nasceu nos Estados Unidos, em 1895.','c'],
['Qual era o nome original do esporte?','Mintonette',['Netball','Volley','Ballnet'],'Antes de virar vôlei, o esporte se chamava Mintonette.','c'],
['Quem inventou o vôlei, em 1895?','William G. Morgan',['James Naismith','Pierre de Coubertin','Henri Sauvage'],'William G. Morgan criou o jogo como uma alternativa mais leve ao basquete. (Naismith inventou o basquete.)','c'],
['Quantos jogadores tem cada equipe no vôlei de praia?','2',['1','3','4'],'O vôlei de praia é jogado em duplas.','c'],
['Qual é a altura da rede no vôlei masculino adulto?','2,43 m',['2,24 m','2,35 m','2,50 m'],'A rede masculina fica a 2,43 m. A feminina, a 2,24 m.','c'],
['Quais são as medidas da quadra de vôlei?','18 × 9 m',['15 × 8 m','20 × 10 m','25 × 12 m'],'A quadra tem 18 metros de comprimento por 9 de largura.','c'],
['Quantos jogadores ficam na linha de frente, junto à rede?','3',['2','4','6'],'Três jogadores na frente e três atrás.','c'],
['Em qual Olimpíada a seleção brasileira masculina conquistou o ouro mais recente?','Rio 2016',['Atenas 2004','Londres 2012','Tóquio 2020'],'O Brasil foi ouro em casa, no Rio de Janeiro, em 2016.','c'],
['Qual posição joga no meio da rede, bloqueando e atacando bolas rápidas?','Central',['Líbero','Levantador','Ponteiro'],'O central é o jogador do meio da rede, forte no bloqueio e nos ataques rápidos.','c'],
['Em que cidade acontece a Supercopa?','Afonso Cláudio',['Colatina','Vitória','Cachoeiro de Itapemirim'],'A Supercopa acontece em Afonso Cláudio, no Espírito Santo.','s'],
['Em que datas será a edição 2026 do vôlei?','28 e 29 de novembro',['14 e 15 de novembro','5 e 6 de dezembro','21 e 22 de novembro'],'O vôlei de 2026 acontece em 28 e 29 de novembro.','s'],
['Quantas equipes disputam o vôlei em 2026?','12',['6','8','16'],'São 12 equipes no vôlei.','s'],
['Como é a fase de grupos do vôlei em 2026?','4 grupos de 3 equipes',['3 grupos de 4 equipes','2 grupos de 6 equipes','6 grupos de 2 equipes'],'São 4 grupos com 3 equipes, e todas jogam entre si.','s'],
['Como se chama a quadra principal da Supercopa?','Quadra Eurico Vieira',['Quadra Anadir Barone','Ginásio Municipal','Quadra Central'],'A quadra principal é a Eurico Vieira. A alternativa é a Anadir Barone.','s'],
['Qual é a equipe da casa, de Afonso Cláudio, na edição 2026?','CT das Montanhas',['União Vôlei','Tiger Volley','ES Vôlei'],'O CT das Montanhas representa Afonso Cláudio.','s'],
['Quanto custa a inscrição de uma equipe?','Nada, é 100% gratuita',['R$ 100','R$ 300','R$ 500'],'A participação na Supercopa é 100% gratuita.','s'],
['Quem faz o trabalho de arbitragem ao lado da quadra e anota os pontos na súmula?','O apontador',['O técnico','O capitão','O líbero'],'O apontador é o auxiliar da arbitragem que preenche a súmula.','s'],
['Em 2026, a Supercopa teve uma estreia. Qual?','O basquete entrou na competição',['Transmissão na TV aberta','Jogos à noite','Edição em outra cidade'],'Em 2026 a Supercopa passou a ter também o basquete.','s'],
['Quantos jogos tem a fase de grupos do vôlei na Supercopa 2026?','12',['6','9','16'],'São 4 grupos de 3 equipes: 3 jogos por grupo, 12 no total.','s'],
['Em que ano foi a primeira edição da Supercopa?','2021',['2019','2020','2022'],'A Supercopa nasceu em 2021.','h'],
['Quantas equipes jogaram a 1ª edição?','6',['8','10','12'],'A 1ª edição teve 6 equipes. O número dobrou já no ano seguinte.','h'],
['Quem foi o campeão da 1ª edição, em 2021?','Vôlei VNI',['RPB Vôlei','Equipe UVI','ES Vôlei'],'O Vôlei VNI, de Venda Nova do Imigrante, foi o primeiro campeão.','h'],
['Qual equipe foi campeã em 2022?','RPB Vôlei',['Vôlei VNI','Liverpool Vôlei','Equipe UVI'],'O RPB Vôlei levou o título de 2022.','h'],
['Qual equipe, de Itaperuna (RJ), foi campeã em 2023?','Equipe UVI',['ES Vôlei','RPB Vôlei','Vôlei VNI'],'A Equipe UVI, de Itaperuna, foi campeã em 2023.','h'],
['Quem foi o campeão de 2024?','Liverpool Vôlei',['ES Vôlei','Equipe UVI','Vôlei VNI'],'O Liverpool Vôlei foi o campeão de 2024.','h'],
['Quem foi o campeão de 2025?','ES Vôlei',['Liverpool Vôlei','RPB Vôlei','Vôlei VNI'],'O ES Vôlei foi o campeão de 2025.','h'],
['Em 2025, quanto o campeão levou em dinheiro, pela primeira vez na história do torneio?','R$ 1.000',['R$ 500','R$ 2.000','R$ 5.000'],'Em 2025 a Supercopa passou a premiar em dinheiro: R$ 1.000 ao campeão.','h'],
['Quanto levou o vice-campeão em 2025?','R$ 500',['R$ 250','R$ 1.000','Nada'],'O vice-campeão de 2025 recebeu R$ 500.','h'],
['Quem foi o campeão do basquete na primeira edição de basquete da Supercopa, em 2026?','São Pedro',['CT das Montanhas','Liverpool','ES Vôlei'],'O São Pedro foi o primeiro campeão do basquete da Supercopa.','h']
];
function emb(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1)),t=a[i];a[i]=a[j];a[j]=t}return a}
function monta(b){var o=emb([b[1]].concat(b[2]));return {q:b[0],opts:o,ans:o.indexOf(b[1]),exp:b[3],cat:b[4]}}
window.QUIZ_BANCO_VOLEI=B;
window.quizSorteia=function(sport){
  if(sport!=='volei')return;
  var r=[];Object.keys(RODADA).forEach(function(c){r=r.concat(emb(B.filter(function(b){return b[4]===c})).slice(0,RODADA[c]))});
  window._quizRodadaVolei=emb(r).map(monta);
};
var antes=window.getActiveQuizQuestions;
window.getActiveQuizQuestions=function(){
  if(typeof _quizSport!=='undefined'&&_quizSport==='volei'){if(!window._quizRodadaVolei)window.quizSorteia('volei');return window._quizRodadaVolei}
  return antes?antes():[];
};
var teste=/[?&]quizteste=1/.test(location.search);
if(teste){
  try{_quizOverride.volei='SIM'}catch(e){}
  var envio=window.sendQuizResultToSheet;
  window.sendQuizResultToSheet=function(){try{localStorage.removeItem('quiz_feito_volei')}catch(e){}};
  document.addEventListener('DOMContentLoaded',function(){var d=document.createElement('div');d.textContent='MODO TESTE: nada é gravado no ranking';d.style.cssText='position:fixed;left:0;right:0;top:0;z-index:99999;background:#e5484d;color:#fff;font:700 12px sans-serif;text-align:center;padding:4px';document.body.appendChild(d)});
}
})();
