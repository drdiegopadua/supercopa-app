/* Votação do atleta da galera, no mesmo visual do quiz (classes qz-*). Usa a lógica já existente: _vot, _vMeu, _vDev, VOTO_KEY, TESTE_V. */
(function(){
var esc=function(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
var IOK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
var ILOCK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>';
var ISTAR='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/></svg>';
var CH='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg>';
var BK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>';
var sel=-1;
function ensure(){var p=document.getElementById('socialGaleraPanel');if(!p)return null;var r=document.getElementById('glRoot');if(!r){p.innerHTML='<div id="glRoot" style="width:100%"></div>';r=document.getElementById('glRoot')}return r}
function view(html){var r=ensure();if(!r)return;r.innerHTML='<div class="qz gl">'+html+'</div>';var pg=document.getElementById('chatPage');if(pg)pg.scrollTop=0;try{window.scrollTo(0,0)}catch(e){}}
function back(fn,label){return '<button type="button" class="qz-back" onclick="'+fn+'">'+BK+(label||'Voltar')+'</button>'}
function teste(){return (typeof TESTE_V!=='undefined'&&TESTE_V)?'<div class="qz-chips"><span><b>MODO TESTE</b> nada vai para o ranking real</span></div>':''}
function rankBtn(){return '<button type="button" class="qz-rank" onclick="glRank()"><span>Ver ranking</span>'+CH+'</button>'}
function aviso(titulo,msg){view(teste()+'<div class="qz-box in"><div class="qz-big">'+ILOCK+'</div><h3>'+titulo+'</h3><p>'+msg+'</p></div>'+rankBtn())}
function fdt(x){try{return new Date(x).toLocaleString('pt-BR',{timeZone:'America/Sao_Paulo',day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'}).replace(',',' às')}catch(e){return '28/11 às 14:30'}}

window.initGaleraVoting=async function(){
  view('<div class="qz-sk"></div><div class="qz-sk"></div><div class="qz-sk"></div>');
  try{
    var u=SC_API_APP_+'?action=votacao'+(TESTE_V?'&teste=1':''),r=await fetch(u),d=await r.json();
    if(!d.ok)throw 0;
    _vot.equipes=d.equipes||[];_vot.aberta=d.aberta;_vot.antes=d.antes;_vot.abreEm=d.abreEm;
    try{localStorage.setItem('sc_votacao_cache',JSON.stringify(d))}catch(e){}
  }catch(e){
    try{var c=JSON.parse(localStorage.getItem('sc_votacao_cache')||'null');if(c){_vot.equipes=c.equipes||[];_vot.aberta=c.aberta;_vot.antes=c.antes;_vot.abreEm=c.abreEm}else return aviso('Sem conexão','Tente novamente em instantes.')}catch(x){return aviso('Sem conexão','Tente novamente em instantes.')}
  }
  window.glHome();
};
window.glHome=function(){
  var meu=_vMeu();if(meu)return glFeito(meu);
  if(_vot.antes&&!TESTE_V)return aviso('A votação ainda não abriu','Abre em <b>'+fdt(_vot.abreEm)+'</b> e fecha no domingo às 14h. Volte aqui para votar no atleta da galera.');
  if(!_vot.aberta&&!TESTE_V)return aviso('Votação encerrada','Confira o resultado no ranking.');
  if(!_vot.equipes.length)return aviso('A votação abre com o 1º jogo','Assim que uma partida terminar, os atletas que jogaram aparecem aqui para você votar.');
  view(teste()+'<div class="qz-intro"><i class="qz-pix"></i><b>Quem foi o destaque?</b><span>Vote no jogador que mais brilhou. <em>Uma pessoa, um voto.</em></span></div>'
   +'<div class="qz-sec"><h4>1. Escolha o time</h4><div class="qz-sports">'+_vot.equipes.map(function(e,i){return '<button type="button" class="qz-sp open" onclick="glTime('+i+')"><span class="qz-spi gl-ini">'+esc(String(e.equipe).trim().charAt(0).toUpperCase())+'</span><b>'+esc(e.equipe)+'</b><small>'+e.atletas.length+' atletas</small></button>'}).join('')+'</div></div>'+rankBtn());
};
window.glTime=function(i){
  var e=_vot.equipes[i];if(!e)return;_vot.eq=e.equipe;_vot.idx=i;sel=-1;
  view(teste()+back('glHome()','Times')+'<div class="qz-fh"><span class="qz-fi">'+ISTAR+'</span><div><small>2. Toque no atleta de</small><h3 class="gl-t">'+esc(e.equipe)+'</h3></div></div>'
   +'<div class="qz-opts gl-opts">'+e.atletas.map(function(a,k){return '<button type="button" class="qz-o" style="--i:'+Math.min(k,10)+'" onclick="glForm('+k+')"><i>'+(a.numero?esc(a.numero):'–')+'</i><span>'+esc(a.nome)+'</span></button>'}).join('')+'</div>');
};
window.glForm=function(k){
  var e=_vot.equipes[_vot.idx],a=e&&e.atletas[k];if(!a)return;sel=k;_vot.sel=a.nome;_vot.eq=e.equipe;
  var nm='',tl='';try{nm=localStorage.getItem('galera_nome')||'';tl=localStorage.getItem('galera_tel')||''}catch(x){}
  view(teste()+back('glTime('+_vot.idx+')','Atletas')+'<div class="qz-fh"><span class="qz-fi">'+(a.numero?'<b class="gl-num">'+esc(a.numero)+'</b>':ISTAR)+'</span><div><small>Seu voto</small><h3 class="gl-t">'+esc(a.nome)+'</h3></div></div>'
   +'<div class="qz-chips"><span>'+esc(e.equipe)+'</span><span><b>1</b> voto por pessoa</span></div>'
   +'<label class="qz-f"><span>Seu nome completo</span><input id="glNome" type="text" autocomplete="name" placeholder="Como você se chama?" value="'+esc(nm)+'"></label>'
   +'<label class="qz-f"><span>Seu WhatsApp</span><input id="glTel" type="tel" inputmode="tel" autocomplete="tel" placeholder="(27) 99999-9999" value="'+esc(tl)+'"></label>'
   +'<label class="gl-ck"><input id="glAc" type="checkbox"><span>Concordo que cada pessoa vota só 1 vez e que meu WhatsApp seja usado apenas para evitar votos repetidos.</span></label>'
   +'<div class="qz-err" id="glErr"></div><button type="button" class="qz-btn" id="glBtn" onclick="glEnviar()">Confirmar meu voto</button>');
};
window.glEnviar=async function(){
  var ni=document.getElementById('glNome'),ti=document.getElementById('glTel'),ac=document.getElementById('glAc'),er=document.getElementById('glErr'),b=document.getElementById('glBtn');if(!ni||!ti)return;
  function bad(m,el){er.textContent=m;if(el){el.classList.remove('shake');void el.offsetWidth;el.classList.add('shake');el.focus()}}
  var nome=ni.value.trim(),tel=ti.value.trim();
  if(nome.length<3)return bad('Digite seu nome completo.',ni);
  if(tel.replace(/\D/g,'').length<10)return bad('Digite um WhatsApp válido com DDD.',ti);
  if(!ac.checked)return bad('Marque a caixa de concordância.');
  er.textContent='';b.disabled=true;b.textContent='Enviando…';
  try{
    localStorage.setItem('galera_nome',nome);localStorage.setItem('galera_tel',tel);
    var r=await fetch(SC_API_APP_,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({acao:'votarDestaque',nome:nome,whatsapp:tel,aceite:true,equipe:_vot.eq,atletaNome:_vot.sel,teste:TESTE_V,deviceId:TESTE_V?'teste-'+Math.random().toString(36).slice(2):_vDev()})});
    var d=await r.json();
    if(d.ok){var m={equipe:d.voto.equipe,nome:d.voto.nome,numero:d.voto.numero};if(!TESTE_V)localStorage.setItem(VOTO_KEY,JSON.stringify(m));if(navigator.vibrate)navigator.vibrate([20,40,20]);glFeito(m);if(window.nConfetti)setTimeout(window.nConfetti,300);return}
    if(d.jaVotou){var m2={equipe:'',nome:'(seu voto já foi registrado)',numero:''};localStorage.setItem(VOTO_KEY,JSON.stringify(m2));return glFeito(m2,true)}
    bad(d.erro||'Não foi possível votar.');
  }catch(e){bad('Sem conexão. Tente de novo.')}
  b.disabled=false;b.textContent='Confirmar meu voto';
};
function glFeito(m,ja){
  view(teste()+'<div class="qz-box in"><div class="qz-big">'+IOK+'</div><h3>'+(ja?'Você já votou':'Voto registrado!')+'</h3>'
   +'<p>'+(m.numero?'<b>#'+esc(m.numero)+'</b> ':'')+'<b>'+esc(m.nome)+'</b>'+(m.equipe?'<br>'+esc(m.equipe):'')+'</p></div>'+rankBtn());
}
window.glRank=async function(){
  view(teste()+'<div class="qz-rkh">'+back('glHome()','Voltar')+'<span class="qz-kick">Atleta da galera</span><h3>Mais votados</h3><p>Ranking atualizado com os votos do público.</p></div><div id="glRkl" class="qz-rkl"><div class="qz-sk"></div><div class="qz-sk"></div><div class="qz-sk"></div></div>');
  var el=document.getElementById('glRkl');
  try{
    var r=await fetch(SC_API_APP_+'?action=rankingDestaque'+(TESTE_V?'&teste=1':'')),d=await r.json();if(!d.ok)throw 0;
    try{localStorage.setItem('sc_rank_cache',JSON.stringify(d))}catch(e){}
    desenhaRank(el,d);
  }catch(e){
    var c=null;try{c=JSON.parse(localStorage.getItem('sc_rank_cache')||'null')}catch(x){}
    if(c)desenhaRank(el,c);else el.innerHTML='<div class="qz-box in"><h3>Não foi possível carregar</h3><p>Verifique sua conexão e tente novamente.</p><button type="button" class="qz-btn" onclick="glRank()">Tentar de novo</button></div>';
  }
};
function desenhaRank(el,d){
  var rk=d.ranking||[];
  if(!rk.length){el.innerHTML='<div class="qz-box in"><div class="qz-big">'+ISTAR+'</div><h3>Nenhum voto ainda</h3><p>Seja o primeiro a votar!</p></div>';return}
  var top=rk.slice(0,3),h='',ord=top.length>=3?[1,0,2]:top.length===2?[1,0]:[0];
  h+='<div class="qz-pod">'+ord.map(function(i){var p=top[i];return '<div class="pd p'+(i+1)+'" style="--i:'+i+'"><span class="pn">'+esc(String(p.nome).split(' ')[0])+'</span><div class="pb"><b>'+(i+1)+'</b><em>'+p.votos+' votos</em></div></div>'}).join('')+'</div>';
  h+=rk.map(function(p,i){return '<div class="qz-row" style="--i:'+Math.min(i,12)+'"><span class="qz-pos">'+(i+1)+'</span><div class="qz-rn2"><b>'+(p.numero?'#'+esc(p.numero)+' ':'')+esc(p.nome)+'</b><small>'+esc(p.equipe)+'</small></div><span class="qz-pc">'+p.votos+'<small> votos</small></span></div>'}).join('');
  h+='<p class="qz-fine">'+d.totalVotos+' votos no total</p>';
  el.innerHTML=h;
}
window.galeraSubTab=function(t){t==='ranking'?window.glRank():window.glHome()};
window.loadGaleraRanking=function(){window.glRank()};
})();
