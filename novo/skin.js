/* ===== Supercopa AFC · novo visual do app (camada sobre o app atual) ===== */
(function(){
'use strict';
var API='https://hngwasixgyvnvfanpuax.supabase.co/functions/v1/api';
var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var esc=function(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
var IC={home:'<path d="M3 11l9-8 9 8v10h-6v-6H9v6H3z"/>',cal:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/>',tab:'<path d="M4 6h16M4 12h16M4 18h10"/>',star:'<path d="M12 3l2.8 5.8 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.3l1.1-6.2L3 9.7l6.2-.9z"/>',more:'<circle cx="5" cy="12" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="19" cy="12" r="1.2"/>',users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6M17 5a3.5 3.5 0 010 7M21.5 20c0-2.6-1.5-4.5-3.5-5.4"/>',trophy:'<path d="M7 4h10v6a5 5 0 01-10 0zM7 6H4a3 3 0 003 4M17 6h3a3 3 0 01-3 4M12 15v4M8 20h8"/>',doc:'<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>',pin:'<path d="M12 21s7-6 7-11a7 7 0 00-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',edit:'<path d="M4 20h4L19 9l-4-4L4 16zM13 7l4 4"/>',live:'<circle cx="12" cy="12" r="2.5"/><path d="M7.5 7.5a6.4 6.4 0 000 9M16.5 7.5a6.4 6.4 0 010 9M4.5 4.5a10.6 10.6 0 000 15M19.5 4.5a10.6 10.6 0 010 15"/>',cam:'<path d="M4 8h3l2-3h6l2 3h3v12H4z"/><circle cx="12" cy="13.5" r="3.5"/>',help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.6 2.6 0 015 1c0 1.8-2.5 2-2.5 3.7M12 17.5h.01"/>',shield:'<path d="M12 3l8 3v6c0 5-3.6 8-8 9-4.4-1-8-4-8-9V6z"/>'};
var I=function(n){return '<svg viewBox="0 0 24 24">'+(IC[n]||IC.star)+'</svg>'};
var ICMAP={'Times':'users','Jogos':'cal','Tabela':'tab','Mata-mata':'trophy','Regras':'doc','Locais Úteis':'pin','Inscrição':'edit','Live':'live','Votar Destaque':'star','Atleta Destaque':'star','Quiz':'help','Meu Time':'shield','Cadastrar Atletas':'users','Galeria':'cam'};
try{window.isDayTime=function(){return true};if(typeof applyTheme==='function')applyTheme(true)}catch(e){}
document.body.classList.add('day');
/* abertura */
var sp=document.createElement('div');sp.id='nsplash';sp.innerHTML='<canvas class="spc"></canvas><div class="spglow"></div><div class="sptiles"></div><div class="splogo"><div class="slz z1"><img src="novo/logo-branco.png" alt=""></div><div class="slz z2"><img src="novo/logo-branco.png" alt=""></div><div class="slz z3"><img src="novo/logo-branco.png" alt=""></div><div class="slshine"></div></div><div class="spbar"><i></i></div><div class="spedge"></div>';
(function(){var tl=sp.querySelector('.sptiles'),cols=7,rows=15,h='';for(var r=0;r<rows;r++)for(var c=0;c<cols;c++){var d=Math.hypot(c-(cols-1)/2,(r-(rows-1)/2)*.55);h+='<i style="--d:'+(d*.075).toFixed(3)+'s;--o:'+(.25+Math.random()*.55).toFixed(2)+'"></i>'}tl.style.gridTemplateColumns='repeat('+cols+',1fr)';tl.innerHTML=h;
 var cv=sp.querySelector('.spc'),W=cv.width=innerWidth,H=cv.height=innerHeight,x=cv.getContext('2d'),t0=performance.now(),L=[],S=[];
 for(var i=0;i<46;i++){var a=Math.random()*Math.PI*2,rr=Math.max(W,H)*(.55+Math.random()*.4);L.push({a:a,r:rr,v:.55+Math.random()*.9,len:40+Math.random()*120,w:1+Math.random()*2,d:Math.random()*.5})}
 var burst=false;
 function bst(){burst=true;for(var i=0;i<90;i++){var a=Math.random()*Math.PI*2,v=2+Math.random()*7;S.push({x:W/2,y:H*.46,vx:Math.cos(a)*v,vy:Math.sin(a)*v-1.2,l:1,s:1.5+Math.random()*3.5,c:Math.random()<.35?'#fcc038':'#ffffff'})}if(navigator.vibrate)try{navigator.vibrate([18,40,18])}catch(e){}}
 (function f(){var t=(performance.now()-t0)/1000;if(t>3.6||!sp.isConnected)return;x.clearRect(0,0,W,H);
  if(t<1.5){L.forEach(function(s){var p=Math.max(0,t-s.d)/1.15;if(p<=0||p>1)return;var e=1-Math.pow(1-p,3),r0=s.r*(1-e*.96),r1=r0+s.len*(1-e);x.strokeStyle='rgba('+(150+Math.round(90*e))+','+(200+Math.round(40*e))+',255,'+(.75*(1-p*.6)).toFixed(2)+')';x.lineWidth=s.w;x.beginPath();x.moveTo(W/2+Math.cos(s.a)*r0,H*.46+Math.sin(s.a)*r0);x.lineTo(W/2+Math.cos(s.a)*r1,H*.46+Math.sin(s.a)*r1);x.stroke()})}
  if(t>1.55&&!burst)bst();
  S.forEach(function(p){p.x+=p.vx;p.y+=p.vy;p.vy+=.12;p.vx*=.985;p.l-=.014;if(p.l<=0)return;x.globalAlpha=Math.max(0,p.l);x.fillStyle=p.c;x.shadowColor=p.c;x.shadowBlur=10;x.beginPath();x.arc(p.x,p.y,p.s*p.l,0,7);x.fill()});x.globalAlpha=1;x.shadowBlur=0;
  requestAnimationFrame(f)})();
})();
try{if(sessionStorage.getItem('sc_splash')){sp.style.display='none';sp.remove()}else{sessionStorage.setItem('sc_splash','1');document.body.appendChild(sp)}}catch(e){document.body.appendChild(sp)}setTimeout(function(){sp.remove()},4100);
/* topo da home */
var tb=$('.topbar');if(tb){var bg=document.createElement('div');bg.className='nbg';bg.style.backgroundImage='url(novo/fotos/home.webp)';var sh=document.createElement('div');sh.className='nsh';var lg=document.createElement('img');lg.className='tblogo';lg.src='novo/logo-branco.png';lg.alt='';tb.prepend(sh);tb.prepend(bg);tb.insertBefore(lg,sh.nextSibling)}
/* páginas */
var PAGES={gamesPage:['Vôlei · 28 e 29 de novembro','Jogos','jogos'],tablePage:['Fase de grupos','Classificação','tabela'],bracketPage:['Fase final','Mata-mata','mata'],schedulePage:['Programação','Agenda','agenda'],maisPage:['Recursos','Mais','mais'],quizPage:['40 perguntas','Quiz da Supercopa','quiz'],timesPage:['Supercopa 2026','Times inscritos','times'],transmissaoPage:['Ao vivo','Transmissão','live'],atletaPage:['Melhores por jogo','Atleta destaque','destaque'],historyPage:['Desde 2021','História','historia'],mapPage:['Ginásio','Mapa do ginásio','mapa'],placesPage:['Afonso Cláudio','Locais úteis','locais'],sumulasPage:['Partidas encerradas','Súmulas','sumulas'],jogoDetalhePage:['Detalhes','Jogo','jogo'],wallpapersPage:['Downloads','Wallpapers','wallpapers'],cadastroAtletasPage:['Equipes · prazo até 27/11','Cadastrar atletas','cadastro'],cardgenPage:['Compartilhe','Card social','card'],qrPage:['Compartilhe','QR Code','qr']};
function words(el){var idx=0;(function walk(n){Array.prototype.slice.call(n.childNodes).forEach(function(c){if(c.nodeType===3){var f=document.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(function(t){if(!t)return;if(/^\s+$/.test(t)){f.appendChild(document.createTextNode(' '));return}var w=document.createElement('span');w.className='w';var i=document.createElement('i');i.textContent=t;i.style.animationDelay=(.15+idx++*.09)+'s';w.appendChild(i);f.appendChild(w)});c.replaceWith(f)}else if(c.nodeType===1&&c.tagName!=='BR')walk(c)})})(el)}
function decorate(pg){
 var cfg=PAGES[pg.id];if(!cfg||pg.dataset.nd)return;pg.dataset.nd='1';
 var hd=document.createElement('div');hd.className='nhd';
 hd.innerHTML='<div class="nbg" style="background-image:url(novo/fotos/'+cfg[2]+'.webp)"></div><div class="nsh"></div><div class="nk"><img class="nlogo" src="novo/logo-branco.png" alt=""><span>'+esc(cfg[0])+'</span></div><h1 class="nt">'+esc(cfg[1])+'</h1>';
 var first=pg.firstElementChild;
 if(first){
  var back=$('.icon-btn',first)||(first.querySelector('button[onclick*="nav("]'));
  var isHeaderRow=first.querySelector('.ptitle')||/#1565c0|1565c0,#1976d2/.test(first.getAttribute('style')||'');
  if(back&&isHeaderRow){hd.querySelector('.nk').prepend(back);back.classList.add('nback')}
  if(isHeaderRow)first.classList.add('nhide');
 }
 $$('[style*="font-size:26px"]',pg).slice(0,2).forEach(function(t){
  if(t.closest('.nhd'))return;var par=t.parentElement;
  if(par&&par!==pg&&par.querySelector('.refresh-cd-wrap')&&t===par.firstElementChild){t.classList.add('nhide')}
  else{t.classList.add('nhide');var n=t.nextElementSibling;if(n&&/font-size:1[23]px/.test(n.getAttribute('style')||'')&&/9ca3af|9CA3AF/i.test(n.getAttribute('style')||''))n.classList.add('nhide')}
 });
 pg.insertBefore(hd,pg.firstChild);words(hd.querySelector('.nt'));
}
/* barra de baixo */
var TABS=[['homePage','Início','home'],['gamesPage','Jogos','cal'],['tablePage','Tabela','tab'],['bracketPage','Mata-mata','trophy'],['maisPage','Mais','more']];
var nb=document.createElement('nav');nb.id='nbar';nb.innerHTML='<span class="ind"></span>'+TABS.map(function(t){return '<button type="button" data-p="'+t[0]+'">'+I(t[2])+t[1]+'</button>'}).join('');document.body.appendChild(nb);
nb.addEventListener('click',function(e){var a=e.target.closest('button[data-p]');if(!a)return;var p=a.dataset.p;nav(p,null);if(p==='homePage'){}});
function syncTabs(id){var ix=TABS.findIndex(function(t){return t[0]===id});if(ix<0)ix=4;$$('button',nb).forEach(function(a,i){a.classList.toggle('on',i===ix)});$('.ind',nb).style.transform='translateX('+(ix*100)+'%)'}
/* ao trocar de página */
var last='';
function onPage(pg){
 if(!pg)return;var _s=document.getElementById('nsheet');if(_s)_s.classList.remove('open');decorate(pg);if(window.nPageHook)window.nPageHook(pg);if(pg.id===last&&pg.dataset.na)return;last=pg.id;pg.dataset.na='1';document.body.classList.toggle('on-home',pg.id==='homePage');syncTabs(pg.id);
 $$('.gc,.sched-card,.news,.card',pg).slice(0,14).forEach(function(e,i){e.style.animation='nUp .5s '+(.04*i)+'s both'});
}
new MutationObserver(function(ms){ms.forEach(function(m){var t=m.target;if(t.classList&&t.classList.contains('page')&&t.classList.contains('active'))onPage(t)})}).observe(document.body,{attributes:true,subtree:true,attributeFilter:['class']});
/* paralaxe */
addEventListener('scroll',function(){var p=scrollY;var b=$('.page.active .nhd .nbg')||$('.topbar .nbg');if(b&&p<700)b.style.translate='0 '+(p*.3)+'px'},{passive:true});
/* ondas ao toque */
document.addEventListener('pointerdown',function(e){var el=e.target.closest('.nico button,.ntm,.nrc,.nt2,.home-card,.gc,.nnews');if(!el)return;var r=el.getBoundingClientRect(),s=Math.max(r.width,r.height)*2,d=document.createElement('span');d.className='nrp';d.style.cssText='width:'+s+'px;height:'+s+'px;left:'+(e.clientX-r.left-s/2)+'px;top:'+(e.clientY-r.top-s/2)+'px';if(getComputedStyle(el).position==='static')el.style.position='relative';el.style.overflow='hidden';el.appendChild(d);setTimeout(function(){d.remove()},650);if(navigator.vibrate)navigator.vibrate(8)});
/* confete */
var cf=document.createElement('canvas');cf.id='ncf';document.body.appendChild(cf);
function confetti(){var W=cf.width=innerWidth,H=cf.height=innerHeight,x=cf.getContext('2d');var C=['#1b52e0','#0b2a8f','#ffffff','#b9d0ff','#071a5c'];var P=[];for(var i=0;i<110;i++)P.push({x:W/2,y:H*.7,vx:(Math.random()-.5)*13,vy:-Math.random()*15-4,s:4+Math.random()*7,c:C[Math.random()*5|0],r:Math.random()*6,vr:(Math.random()-.5)*.4});var f=0;(function go(){x.clearRect(0,0,W,H);P.forEach(function(p){p.vy+=.38;p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;x.save();x.translate(p.x,p.y);x.rotate(p.r);x.fillStyle=p.c;x.fillRect(-p.s/2,-p.s/4,p.s,p.s/2);x.restore()});if(++f<120)requestAnimationFrame(go);else x.clearRect(0,0,W,H)})()}
window.nConfetti=confetti;
if(typeof window.enviarVotoDestaque==='function'){var _ev=window.enviarVotoDestaque;window.enviarVotoDestaque=async function(){var antes=localStorage.getItem('sc_voto_destaque');await _ev.apply(this,arguments);if(!antes&&localStorage.getItem('sc_voto_destaque'))confetti()}}
/* ficha da equipe */
var sheet=document.createElement('div');sheet.id='nsheet';sheet.innerHTML='<div class="bg"></div><div class="sh"></div>';document.body.appendChild(sheet);
sheet.querySelector('.bg').onclick=function(){sheet.classList.remove('open')};
function openSheet(h){sheet.querySelector('.sh').innerHTML='<div class="grab"></div>'+h;sheet.classList.add('open');sheet.querySelector('.sh').scrollTop=0}
window.nCloseSheet=function(){sheet.classList.remove('open')};
var igUrl=function(u){return 'https://instagram.com/'+String(u||'').replace('@','').replace(/\s/g,'')};
function teamSheet(t){var rows=[['Cidade',esc(t.cidade)],['Instagram',t.instagram?'<a href="'+igUrl(t.instagram)+'" target="_blank" rel="noopener">'+esc(t.instagram)+'</a>':''],['Responsável',esc(t.responsavel)],['Inscrição em',t.inscritaEm?t.inscritaEm.split('-').reverse().join('/'):''],['Como conheceu',esc(t.como)]].filter(function(r){return r[1]});
 openSheet('<div class="bigesc">'+(t.escudo?'<img src="'+esc(t.escudo)+'" alt="Escudo">':I('shield').replace('<svg','<svg style="width:90px;height:90px;stroke:#1b52e0;fill:none;stroke-width:1.5"'))+'</div><h3>'+esc(t.nome)+'</h3><span class="pillok">'+(t.mod==='b'?(t.nome==='São Pedro'?'Campeão 2026 · Basquete':'Basquete'):'Presença confirmada')+'</span><div style="margin-top:16px">'+rows.map(function(r){return '<div class="irow"><span>'+r[0]+'</span><b>'+r[1]+'</b></div>'}).join('')+'</div><button class="fechar" onclick="nCloseSheet()">Fechar</button>')}
var TEAMS=null;
function loadTeams(){return fetch(API+'?action=timesPublicos').then(function(r){return r.json()}).then(function(d){if(d.ok&&d.times&&d.times.length){TEAMS=d.times.map(function(x){if(/^uni[aã]o v[oô]lei$/i.test(x.nome)){x.escudo='novo/escudos/uniao-volei.png'}if(/^ct das montanhas$/i.test(x.nome)){x.escudo='novo/escudos/ct-das-montanhas.png';x.responsavel='Diego Padua';x.instagram='@ctdasmontanhas'}return x});try{localStorage.setItem('sc_times_app',JSON.stringify(TEAMS))}catch(e){}}return TEAMS}).catch(function(){return null}).then(function(r){if(r)return r;try{TEAMS=JSON.parse(localStorage.getItem('sc_times_app'))}catch(e){}if(TEAMS&&TEAMS.length)return TEAMS;return fetch('novo/times.json').then(function(x){return x.json()}).then(function(j){TEAMS=j;return j}).catch(function(){return null})})}
window.nOpenTeam=function(i){if(TEAMS&&TEAMS[i])teamSheet(TEAMS[i])};
window.renderTimesVolei=function(){var box=$('#timesVolei');if(!box)return;box.innerHTML='<div style="padding:8px;color:#6b7aa5;font-size:13px">Carregando equipes…</div>';loadTeams().then(function(t){t=t||[];box.innerHTML=t.length?t.map(function(x,i){return '<div class="ntm" onclick="nOpenTeam('+i+')" style="animation-delay:'+(i*.05)+'s"><div class="e">'+(x.escudo?'<img src="'+esc(x.escudo)+'" alt="" onerror="this.style.display=\'none\'">':I('shield').replace('<svg','<svg style="width:40px;height:40px;stroke:#1b52e0;fill:none;stroke-width:1.6"'))+'</div><div style="flex:1;min-width:0"><b>'+esc(x.nome)+'</b><small>'+esc(x.cidade)+'</small>'+(x.responsavel?'<small>Responsável: '+esc(x.responsavel)+'</small>':'')+(x.instagram?'<small class="ig">'+esc(x.instagram)+'</small>':'')+'</div><span style="color:#9fb0d8;font-size:22px">›</span></div>'}).join('')+'<div class="ntm" style="border-style:dashed;justify-content:center;color:#6b7aa5;cursor:default"><b style="color:#6b7aa5">Vaga '+(t.length+1)+' · aberta</b></div>':'<div style="padding:12px;color:#6b7aa5">Os times confirmados aparecem aqui.</div>'})};
window.openTimeInfo=function(nome,grupo,insta,resp,escudo,mod){teamSheet({nome:nome,cidade:'',instagram:insta,responsavel:resp,escudo:escudo,alojamento:'',inscritaEm:'',como:'',mod:mod==='basquete'?'b':'v'})};
/* home nova */
var NEWSFETCH=null;
function buildHome(){
 var h=$('#homePage');if(!h||h.dataset.nb)return;h.dataset.nb='1';
 var tiles=$$('.home-card',h).map(function(b){var l=b.querySelector('.home-lbl');return {l:l?l.textContent.trim():'',on:b.getAttribute('onclick')}});
 tiles.forEach(function(t){if(/^Regras$/i.test(t.l))t.on="nav('regrasPage',null)"});tiles=tiles.filter(function(t){return !/^Inscri/i.test(t.l)});tiles.push({l:'Números',on:"nav('numerosPage',null)"});tiles.push({l:'Patrocinadores',on:"nav('patrocPage',null)"});
 $$(':scope > div',h).forEach(function(d){var tx=d.textContent||'';if(d.querySelector('.home-card')||/^\s*(\S+\s+)?Modalidades/.test(tx.slice(0,40))||/Not[ií]cias/.test(tx.slice(0,40))&&!d.id)d.classList.add('nold')});
 var box=document.createElement('div');box.id='nhome';var box1=document.createElement('div');box1.id='nhome1';box1.style.padding='0 14px';
 box1.innerHTML='<div id="nmeu" style="margin-top:14px"></div><div class="nb"><div class="nt2 c2 blue"><div class="nbg" style="background-image:url(novo/fotos/jogos.webp)"></div><div class="lb">Faltam para o vôlei</div><div class="v" id="ncd">–</div><div style="font:600 12px var(--body);margin-top:6px;opacity:.9">28 e 29 de novembro<br>Afonso Cláudio · ES</div></div><div class="nt2 c2" id="nteams"><div class="lb">Equipes confirmadas</div><div class="v" id="nteamn">11</div><div class="nescrow" id="nescrow"></div><div class="vt">Ver todas as equipes ›</div></div></div>'+
 '<div id="nrailw"></div>';
 box.innerHTML='<div class="nsh2"><b>Guia da Supercopa</b></div><div class="nico" id="nico">'+tiles.filter(function(t){return t.l}).map(function(t,i){return '<button data-i="'+i+'" style="animation-delay:'+(.2+i*.045)+'s"><span>'+I(ICMAP[t.l]||'star')+'</span>'+esc(t.l)+'</button>'}).join('')+'</div>'+PSTRIP()+'<div class="nsh2"><b>Notícias</b></div><div id="nnews"></div>';
 var ref=$('#homeAvisos');if(ref&&ref.nextSibling)h.insertBefore(box1,ref.nextSibling);else h.appendChild(box1);
 var spons=Array.prototype.slice.call(h.children).filter(function(c){return !c.id&&/APOIO/i.test(c.textContent||'')})[0];
 h.appendChild(box);box.style.padding='0 14px';if(spons)spons.classList.add('nold');$$('img[src*="rodape"]',h).forEach(function(i){var p=i;while(p&&p.parentNode!==h)p=p.parentNode;if(p)p.classList.add('nold')});
 $('#nico').addEventListener('click',function(e){var b=e.target.closest('button[data-i]');if(!b)return;var t=tiles.filter(function(x){return x.l})[+b.dataset.i];if(t&&t.on){try{(new Function(t.on)).call(b)}catch(x){console.error(x)}}});
 function cd(){var s=Math.max(0,Math.floor((new Date('2026-11-28T08:00:00-03:00').getTime()-Date.now())/1000));var d=Math.floor(s/86400),hh=Math.floor(s%86400/3600),m=Math.floor(s%3600/60);var e=$('#ncd');if(e)e.textContent=d+'d '+hh+'h '+m+'min'}cd();setInterval(cd,30000);
 var _tb=$('#nteams');if(_tb){_tb.style.cursor='pointer';_tb.onclick=function(){nav('timesPage',null);if(window.renderTimesVolei)renderTimesVolei()}}loadTeams().then(function(t){renderMeuTime();if(!t)return;var n=$('#nteamn');if(n)n.textContent=t.length;var r=$('#nescrow');if(r)r.innerHTML=t.filter(function(x){return x.escudo}).slice(0,8).map(function(x,i){return '<img src="'+esc(x.escudo)+'" alt="" style="animation-delay:'+(i*.2)+'s" onerror="this.remove()">'}).join('')});
 /* jogos */
 if(typeof scTorneioApp_==='function')scTorneioApp_().then(function(r){var T=r.t;window.__TORN=T;renderMeuTime();var J=(T.jogos||[]).filter(function(j){return j.data});if(!J.length)return;var hoje=new Date().toISOString().slice(0,10);var L=J.filter(function(j){return j.data===hoje});if(!L.length)L=J.filter(function(j){return !(j.status==='finalizado'||j.status==='wo')}).slice(0,8);if(!L.length)L=J.slice(-8);
  var nm=function(j,k){return k==='c'?(j.casaDefinida===false?(j.rotuloCasa||'A definir'):j.casa):(j.visitanteDefinida===false?(j.rotuloVisitante||'A definir'):j.visitante)};
  $('#nrailw').innerHTML='<div class="nsh2"><b>'+(L[0].data===hoje?'Jogos de hoje':'Próximos jogos')+'</b><button type="button" class="lnk" onclick="nav(\'gamesPage\',null)">VER TODOS</button></div><div class="nrail">'+L.map(function(j,i){var on=j.status==='ao_vivo'||j.status==='finalizado'||j.status==='wo';return '<div class="nrc" style="animation-delay:'+(i*.08)+'s"><div class="m">'+(j.fase==='grupos'?'Grupo '+j.grupo:j.fase)+' · '+(j.hora||'')+'</div><div class="l"><span>'+esc(nm(j,'c'))+'</span><b>'+(on?j.setsCasa:'–')+'</b></div><div class="l"><span>'+esc(nm(j,'v'))+'</span><b>'+(on?j.setsVisitante:'–')+'</b></div></div>'}).join('')+'</div>'}).catch(function(){});
 /* notícias */
 fetch(API+'?action=noticias').then(function(r){return r.json()}).then(function(d){var n=(d.noticias||[]);$('#nnews').innerHTML=n.length?n.map(function(x,i){return '<div class="nnews" style="animation-delay:'+(i*.06)+'s"><div class="k">'+esc(x.cat)+' · '+esc(x.data)+'</div><b>'+esc(x.titulo)+'</b>'+(x.corpo?'<p>'+esc(x.corpo)+'</p>':'')+'</div>'}).join(''):'<p style="color:#6b7aa5;font-size:13px">Sem notícias por enquanto.</p>'}).catch(function(){});
}
/* ===== regras e patrocinadores dentro do app ===== */
var PARC=[['Realização',[['prefeitura-afonso-claudio','Prefeitura Municipal de Afonso Cláudio']],'1 real'],['Patrocinador Master',[['coroa-instituto','Coroa Instituto']],'1'],['Patrocinadores Prata',[['planet-sports','Planet Sports'],['acai-do-diego','Açaí do Diego'],['casa-homem-do-campo','Casa Homem do Campo'],['sicredi','Sicredi'],['express-pizzas-e-lanches','Express Pizzas e Lanches']],'2'],['Patrocinador Bronze',[['prato-fino','Prato Fino Restaurante e Churrascaria'],['restaurante-do-marcao','Restaurante do Marcão']],'1'],['Apoio',[['basquetebol-das-montanhas','Basquetebol das Montanhas'],['instituto-cultural-das-montanhas','Instituto Cultural das Montanhas']],'2']];
var PALL=[];PARC.forEach(function(t){t[1].forEach(function(x){PALL.push(x)})});
function PSTRIP(){return '<div class="nsh2"><b>Patrocinadores</b><button type="button" class="lnk" onclick="nav(\'patrocPage\',null)">VER TODOS</button></div><div class="nlmq"><div>'+PALL.concat(PALL).map(function(x){return '<img src="novo/parceiros/'+x[0]+'.png" alt="'+esc(x[1])+'" loading="lazy">'}).join('')+'</div></div>'}
function mkPage(id,html){var s=document.createElement('section');s.id=id;s.className='page';s.innerHTML=html;document.body.insertBefore(s,document.getElementById('nbar'));return s}
mkPage('patrocPage','<div class="wrapR"><p class="mut" style="margin:6px 2px 14px">Empresas e instituições que acreditam no esporte da Região das Montanhas e tornam a Supercopa gratuita para as equipes.</p>'+PARC.map(function(t){return '<div class="nsh2" style="margin:20px 2px 10px"><b>'+t[0]+'</b></div><div class="plg c'+t[2]+'">'+t[1].map(function(x,i){return '<figure class="plc" style="animation-delay:'+(i*.08)+'s"><img src="novo/parceiros/'+x[0]+'.png" alt="'+esc(x[1])+'" loading="lazy"><figcaption>'+esc(x[1])+'</figcaption></figure>'}).join('')+'</div>'}).join('')+'</div>');
mkPage('regrasPage','<div class="wrapR"><div class="nseg" id="regseg"><span class="th"></span><button type="button" class="on" data-k="volei">Vôlei</button><button type="button" data-k="basquete">Basquete</button></div><a class="nbtn" id="regpdf" href="regulamento-volei.pdf" download>Baixar PDF · Vôlei</a><div id="regbody"><p class="mut">Carregando…</p></div></div>');
var REGD=null,REGK='volei';
function regHtml(k){return REGD[k].map(function(b){
 if(b.t==='meta')return '<div class="rmeta">'+b.items.map(function(i){return '<span>'+esc(i)+'</span>'}).join('')+'</div>';
 if(b.t==='ch')return '<div class="rch"><small>'+esc(b.n)+'</small><h3>'+esc(b.h)+'</h3></div>';
 if(b.t==='art')return '<div class="rart"><b>'+esc(b.n)+'</b><p>'+b.x+'</p></div>';
 if(b.t==='par')return '<div class="rpar">'+(b.l?'<b>'+esc(b.l)+'</b>':'')+'<ul>'+b.inc.map(function(i){return '<li><i>'+esc(i[0])+'</i><span>'+esc(i[1])+'</span></li>'}).join('')+'</ul>'+(b.x?'<p>'+b.x+'</p>':'')+'</div>';
 if(b.t==='crit')return '<ol class="rcrit">'+b.items.map(function(i){return '<li>'+esc(i.replace(/^\d+\s*/,''))+'</li>'}).join('')+'</ol>';
 if(b.t==='tbl')return '<table class="rtbl">'+b.rows.map(function(r,ri){return '<tr>'+r.map(function(c){return ri?'<td>'+esc(c)+'</td>':'<th>'+esc(c)+'</th>'}).join('')+'</tr>'}).join('')+'</table>';
 if(b.t==='hl')return '<div class="rhl"><b>'+esc(b.h)+'</b><p>'+b.x+'</p></div>';return ''}).join('')}
function showReg(k){REGK=k;var bd=document.getElementById('regbody');if(!REGD){return}bd.innerHTML=regHtml(k);var sg=document.getElementById('regseg');$$('button',sg).forEach(function(b){b.classList.toggle('on',b.dataset.k===k)});var p=document.getElementById('regpdf');p.href='regulamento-'+k+'.pdf';p.textContent='Baixar PDF · '+(k==='volei'?'Vôlei':'Basquete');window.scrollTo(0,0)}
function loadReg(){if(REGD){showReg(REGK);return}fetch('novo/regulamento.json').then(function(r){return r.json()}).then(function(d){REGD=d;showReg(REGK)}).catch(function(){var bd=document.getElementById('regbody');if(bd)bd.innerHTML='<p class="mut">Não foi possível carregar o regulamento agora.</p>'})}
document.addEventListener('click',function(e){var b=e.target.closest('#regseg button');if(b)showReg(b.dataset.k)});
window.nPageHook=function(pg){if(pg.id==='regrasPage')loadReg()};
/* tudo que abria o regulamento fora do app agora abre dentro */
$$('[onclick*="regulamento.html"]').forEach(function(e){e.setAttribute('onclick',"nav('regrasPage',null)")});
PAGES.patrocPage=['Quem apoia','Patrocinadores','patrocinadores'];PAGES.regrasPage=['Regulamento oficial','Regras','regras'];

/* ===== inscrição dentro do app ===== */
mkPage('inscricaoPage','<div class="wrapR"><div id="insbody"><p class="mut">Carregando…</p></div></div>');
PAGES.inscricaoPage=['Supercopa 2026','Inscrições encerradas','inscricao'];
var INSD=null;
function insHtml(d){return '<p class="mut" style="margin:6px 2px 14px">Envie sua inscrição apenas se estiver totalmente de acordo com os termos e compromissos estabelecidos.</p>'+
'<form id="insf" onsubmit="return false">'+
'<div class="fs"><b>Modalidade</b><div class="opts2"><label><input type="radio" name="mod" checked><span>Vôlei</span></label><label class="off"><input type="radio" name="mod" disabled><span>Basquete · FECHADO</span></label></div></div>'+
'<div class="fs"><b>Dados da equipe</b><input class="fld" name="nomeEquipe" placeholder="Nome da equipe *"><input class="fld" name="cidade" placeholder="Cidade *"><select class="fld" name="estado"><option>Estado *</option>'+d.estados.map(function(e){return '<option>'+esc(e)+'</option>'}).join('')+'</select><input class="fld" name="instagram" placeholder="@instagram da equipe *"></div>'+
'<div class="fs"><b>Responsável pela equipe</b><input class="fld" name="nomeResp" placeholder="Nome completo do responsável *"><input class="fld" name="telefone" type="tel" placeholder="Telefone / WhatsApp *"></div>'+
'<div class="fs"><b>Escudo do time</b><label class="drop2">Imagem do escudo (PNG) *<input name="escudo" type="file" accept=".png,image/png"><small>Somente arquivos .PNG</small></label></div>'+
'<div class="fs"><b>Alojamento</b><p class="mut" style="margin:-4px 0 10px">100% gratuito para equipes visitantes · máximo de 16 pessoas</p><div class="opts2"><label><input type="radio" name="aj" data-v="nao" checked><span>Não preciso de alojamento</span></label><label><input type="radio" name="aj" data-v="sim"><span>Sim, precisarei de alojamento</span></label></div><input class="fld" name="ajq" id="ajq" type="number" min="1" max="16" placeholder="Para quantas pessoas? (máx. 16) *" style="display:none;margin-top:8px"></div>'+
'<div class="fs"><b>Como você conheceu a Supercopa?</b><select class="fld" name="como"><option>Selecione...</option>'+d.como.map(function(e){return '<option>'+esc(e)+'</option>'}).join('')+'</select></div>'+
'<div class="fs"><b>Termos e compromissos</b>'+d.termos.map(function(t){return '<details class="trm"><summary>'+esc(t.t)+'</summary><div>'+t.x.map(function(p){return '<p>'+esc(p)+'</p>'}).join('')+'</div></details><label class="ckA"><input type="checkbox" class="ckt"><span>'+esc(t.ck)+'</span></label>'}).join('')+'</div>'+
'<div id="insmsg" class="insmsg" style="display:none"></div><button type="button" class="nbtn" id="insenv">Enviar inscrição</button></form>'+
'<div id="insok" style="display:none;text-align:center;padding:40px 10px"><div style="font:800 80px var(--display);color:var(--b1)">✓</div><div class="h2a" style="font:800 34px var(--display);text-transform:uppercase;color:var(--b2)">Inscrição enviada!</div><p class="mut" style="margin-top:8px">Nossa comissão vai analisar e entrar em contato pelo WhatsApp para confirmar a vaga da sua equipe.</p></div>'}
function insSend(){var f=document.getElementById('insf'),v=function(n){return ((f.querySelector('[name='+n+']')||{}).value||'').trim()},m=document.getElementById('insmsg'),b=document.getElementById('insenv');
 function er(t){m.textContent=t;m.style.display='block';m.scrollIntoView({block:'center',behavior:'smooth'})}
 var aj=f.querySelector('input[name=aj]:checked').dataset.v==='sim',qty=v('ajq'),file=f.querySelector('input[type=file]').files[0];
 if(!v('nomeEquipe')||!v('cidade')||v('estado').indexOf('Estado')===0||!v('instagram')||!v('nomeResp'))return er('Preencha todos os campos obrigatórios (*).');
 if(v('telefone').replace(/\D/g,'').length<10)return er('Telefone inválido.');
 if(!file||!(/png$/i.test(file.name)||file.type==='image/png'))return er('Envie o escudo em formato PNG.');
 if(aj&&(!qty||+qty<1||+qty>16))return er('Informe a quantidade de pessoas no alojamento (máximo 16).');
 if(v('como').indexOf('Selecione')===0)return er('Selecione como você conheceu a Supercopa.');
 if($$('.ckt',f).some(function(c){return !c.checked}))return er('Você precisa aceitar os dois termos para continuar.');
 m.style.display='none';b.disabled=true;b.textContent='Enviando…';
 var rd=new FileReader();rd.onload=function(ev){fetch(API,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({acao:'inscrever',modalidade:'Vôlei',nomeEquipe:v('nomeEquipe'),nomeResp:v('nomeResp'),instagram:v('instagram'),cidade:v('cidade')+' - '+v('estado'),telefone:v('telefone'),alojamento:aj?'sim':'nao',alojQty:aj?qty:'',comoConheceu:v('como'),termoAloj:true,termoComp:true,escudoBase64:ev.target.result,escudoNome:file.name})}).then(function(r){return r.json()}).then(function(r){if(r.status==='ok'||r.ok){f.style.display='none';document.getElementById('insok').style.display='block';window.scrollTo(0,0);if(window.nConfetti)window.nConfetti()}else{er('Erro ao enviar: '+(r.msg||r.erro||'tente novamente.'));b.disabled=false;b.textContent='Enviar inscrição'}}).catch(function(){er('Falha de conexão. Verifique sua internet e tente novamente.');b.disabled=false;b.textContent='Enviar inscrição'})};rd.readAsDataURL(file)}
function loadIns(){if(INSD)return;fetch('novo/inscricao.json').then(function(r){return r.json()}).then(function(d){INSD=d;document.getElementById('insbody').innerHTML=insHtml(d);var f=document.getElementById('insf');f.addEventListener('change',function(e){if(e.target.name==='aj')document.getElementById('ajq').style.display=e.target.dataset.v==='sim'?'block':'none'});document.getElementById('insenv').onclick=insSend}).catch(function(){document.getElementById('insbody').innerHTML='<p class="mut">Não foi possível carregar o formulário agora.</p>'})}
var _hk=window.nPageHook;window.nPageHook=function(pg){_hk&&_hk(pg);if(pg.id==='inscricaoPage')loadIns()};
$$('[onclick*="inscricao.html"]').forEach(function(e){e.setAttribute('onclick',"nav('inscricaoPage',null)")});

/* ENCERRADAS: inscrições */
loadIns=function(){document.getElementById('insbody').innerHTML='<div style="text-align:center;padding:36px 10px"><div style="font:800 64px var(--display);color:var(--b1)">✓</div><div style="font:800 34px/1 var(--display);text-transform:uppercase;color:#0b2a8f;margin-top:6px">Inscrições encerradas</div><p class="mut" style="margin:10px auto 18px;max-width:300px">Obrigado a todas as equipes que se inscreveram na Supercopa 2026.</p><button type="button" class="nbtn" onclick="nav(\'timesPage\',null);loadTimes()">Ver os times confirmados</button></div>'};
$$('[onclick*="nav(\'inscricaoPage\'"]').forEach(function(e){e.style.display='none'});
/* ===== Meu time (novo) ===== */
function meuTime(){try{return localStorage.getItem('meu_time')||''}catch(e){return ''}}
function teamByName(n){var a=(TEAMS||[]).filter(function(t){return String(t.nome).toLowerCase()===String(n).toLowerCase()});return a[0]||null}
function shieldHtml(t,sz){var s=sz||46;return t&&t.escudo?'<img src="'+esc(t.escudo)+'" alt="" style="width:'+s+'px;height:'+s+'px;object-fit:contain" onerror="this.style.display=\'none\'">':I('shield').replace('<svg','<svg style="width:'+s+'px;height:'+s+'px;stroke:#1b52e0;fill:none;stroke-width:1.6"')}
function proximoJogoDe(nome){var T=window.__TORN;if(!T||!T.jogos)return null;var n=String(nome).toLowerCase();var L=T.jogos.filter(function(j){return j.status!=='finalizado'&&j.status!=='wo'&&((j.casa||'').toLowerCase()===n||(j.visitante||'').toLowerCase()===n)});L.sort(function(a,b){return ((a.data||'9')+(a.hora||'')).localeCompare((b.data||'9')+(b.hora||''))});return L[0]||null}
function renderMeuTime(){
 var box=document.getElementById('nmeu');if(!box)return;var nome=meuTime();
 if(!nome){box.innerHTML='<button type="button" class="mtcta" onclick="abrirPickerTime2()"><span class="mti">'+I('shield')+'</span><span style="flex:1;text-align:left"><b>Escolha seu time</b><small>Acompanhe só os jogos dele e receba destaque aqui</small></span><span class="mtgo">›</span></button>';return}
 var t=teamByName(nome),j=proximoJogoDe(nome),adv='';
 if(j){var casa=(j.casa||'').toLowerCase()===nome.toLowerCase();adv='<div class="mtjg"><small>Próximo jogo</small><b>vs '+esc(casa?j.visitante:j.casa)+'</b><span>'+(j.data?j.data.split('-').reverse().slice(0,2).join('/'):'')+(j.hora?' · '+esc(j.hora):'')+(j.quadra?' · '+esc(j.quadra):'')+'</span></div>'}
 else adv='<div class="mtjg"><small>Próximo jogo</small><b>Aguardando a tabela</b><span>Você será avisado aqui</span></div>';
 box.innerHTML='<div class="mtc"><div class="mtbg"></div><div class="mtrow"><div class="mtsh">'+shieldHtml(t,64)+'</div><div style="flex:1;min-width:0"><small>Meu time</small><b>'+esc(nome)+'</b></div><button type="button" class="mtchg" onclick="abrirPickerTime2()">Trocar</button></div>'+adv+'</div>'}
function fecharPicker(){var s=document.getElementById('nsheet');if(s)s.classList.remove('open')}
window.abrirPickerTime2=function(){
 loadTeams().then(function(t){t=t||[];var cur=meuTime().toLowerCase();
  openSheet('<div class="h2a" style="font:800 30px/.95 var(--display);text-transform:uppercase;color:#0b2a8f;text-align:center">Qual é o seu <span style="color:#1b52e0">time</span>?</div><p class="mut" style="text-align:center;margin:8px 0 14px">Escolha para o app destacar seus jogos e colocar eles nos favoritos.</p><div class="pkg">'+t.map(function(x,i){var on=x.nome.toLowerCase()===cur;return '<button type="button" class="pk'+(on?' on':'')+'" data-n="'+esc(x.nome)+'" style="animation-delay:'+(i*.04)+'s"><span class="pke">'+shieldHtml(x,52)+'</span><b>'+esc(x.nome)+'</b><small>'+esc(x.cidade)+'</small>'+(on?'<i class="pkc">✓</i>':'')+'</button>'}).join('')+'</div>'+(cur?'<button type="button" class="pkrm" id="pkrm">Remover meu time</button>':'')+'<button class="fechar" onclick="nCloseSheet()">Fechar</button>');
  var sh=document.getElementById('nsheet');sh.querySelectorAll('.pk').forEach(function(b){b.onclick=function(){var n=b.dataset.n;try{escolherMeuTimeEFavoritar(n)}catch(e){try{localStorage.setItem('meu_time',n)}catch(x){}}try{localStorage.setItem('meu_time',n)}catch(x){}b.classList.add('on');if(window.nConfetti)window.nConfetti();setTimeout(function(){fecharPicker();renderMeuTime()},650)}});
  var rm=document.getElementById('pkrm');if(rm)rm.onclick=function(){try{localStorage.removeItem('meu_time')}catch(e){}fecharPicker();renderMeuTime()}})};

/* ===== QUIZ redesenhado (mesma lógica: 1 tentativa, ranking, planilha) ===== */
(function(){
var esc=function(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
var SN={volei:'Vôlei',basquete:'Basquete'};
var IC={
 volei:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="24" cy="24" r="19"/><path d="M24 5c3 9 2 18-6 25M5.6 29c9-1 16 2 21 10M42 14c-8 1-15 6-17 15"/></svg>',
 basquete:'<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="24" cy="24" r="19"/><path d="M24 5v38M5 24h38M9 10c7 5 7 23 0 28M39 10c-7 5-7 23 0 28"/></svg>'
};
var IOK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
var IX='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';
var ILOCK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>';
var tick=null,streak=0;
var EMO=/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}]/gu;function cl(s){return String(s==null?'':s).replace(EMO,'').replace(/\s+([!?.,])/g,'$1').replace(/\s{2,}/g,' ').trim()}
function root(){return document.getElementById('quizContent')}
function stopTick(){if(tick){clearInterval(tick);tick=null}}
function fmt(s){s=Math.max(0,Math.round(s));var m=Math.floor(s/60),r=s%60;return(m<10?'0':'')+m+':'+(r<10?'0':'')+r}
function view(html,cls){stopTick();var e=root();if(!e)return null;e.innerHTML='<div class="qz '+(cls||'')+'">'+html+'</div>';var p=document.getElementById('quizPage');if(p)p.scrollTop=0;try{window.scrollTo(0,0)}catch(x){}return e}
function saved(sport){try{var v=localStorage.getItem('quiz_feito_'+sport);return v?JSON.parse(v):null}catch(e){return null}}
function back(label){return '<button type="button" class="qz-back" onclick="initQuiz()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>'+(label||'Voltar')+'</button>'}
function ring(pct,size){var r=46,c=2*Math.PI*r;return '<svg class="qz-ring" viewBox="0 0 108 108" width="'+size+'" height="'+size+'"><circle cx="54" cy="54" r="'+r+'" fill="none" stroke="rgba(255,255,255,.18)" stroke-width="9"/><circle class="qz-rg" cx="54" cy="54" r="'+r+'" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round" transform="rotate(-90 54 54)" stroke-dasharray="'+c.toFixed(1)+'" stroke-dashoffset="'+c.toFixed(1)+'" data-to="'+(c*(1-pct/100)).toFixed(1)+'"/></svg>'}
function animRing(){requestAnimationFrame(function(){requestAnimationFrame(function(){var g=document.querySelector('.qz-rg');if(g)g.style.strokeDashoffset=g.getAttribute('data-to')})})}
function countUp(el,to,ms){if(!el)return;var t0=performance.now();(function f(t){var k=Math.min(1,(t-t0)/ms);k=1-Math.pow(1-k,3);el.textContent=Math.round(to*k);if(k<1)requestAnimationFrame(f)})(t0)}

/* ---------- início ---------- */
window.initQuiz=function(){
 qIdx=0;qAcertos=0;qErros=0;qNome='';qFone='';qStartTime=null;streak=0;
 try{updateQuizStrip()}catch(e){}
 function card(sp){
  var on=isQuizSportEnabled(sp),cl=isQuizSportClosed(sp),s=saved(sp),st,cls='';
  if(s){st='Respondido · '+s.pct+'%';cls='done'}
  else if(on){st='40 perguntas';cls='open'}
  else if(cl){st='Encerrado';cls='off'}
  else{st='Libera em '+QUIZ_ENABLED_DATES[sp].split('-').reverse().slice(0,2).join('/');cls='off'}
  return '<button type="button" class="qz-sp '+cls+'" onclick="initQuizSport(\''+sp+'\')"><span class="qz-spi">'+IC[sp]+'</span><b>'+SN[sp]+'</b><small>'+st+'</small>'+(cls==='off'?'<span class="qz-lk">'+ILOCK+'</span>':'')+(cls==='done'?'<span class="qz-lk ok">'+IOK+'</span>':'')+'</button>'}
 view('<div class="qz-intro"><i class="qz-pix"></i><b>Teste o que você sabe</b><span>de vôlei e basquete. Você tem <em>uma única tentativa</em> por esporte.</span></div>'
 +'<div class="qz-sec"><h4>Escolha o esporte</h4><div class="qz-sports">'+card('volei')+card('basquete')+'</div></div>'
 +'<button type="button" class="qz-rank" onclick="showQuizRanking()"><span>Ver ranking geral</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg></button>'
 +'<div class="qz-rules"><h4>Como ganhar</h4><ol><li><b>Responda as 40 perguntas</b> do esporte escolhido.</li><li>Quem tiver a <b>maior % de acertos</b> ganha.</li><li>Em caso de empate, vence quem <b>terminou primeiro</b>.</li><li>Você tem <b>apenas 1 tentativa</b>.</li></ol><p>O campeão será premiado no intervalo entre a Semifinal 1 e a Semifinal 2. Fique de olho no ranking! O vencedor precisa estar na quadra no momento da chamada; se não estiver, chamaremos o próximo colocado.</p></div>');
};

/* ---------- escolha de esporte: telas de estado ---------- */
function aviso(sport,titulo,msg){view('<div class="qz-box">'+back()+'<div class="qz-big">'+ILOCK+'</div><h3>'+titulo+'</h3><p>'+msg+'</p></div>')}
window.initQuizSport=function(sport){
 _quizSport=sport;
 var s=saved(sport);
 if(s){
  view('<div class="qz-res"><div class="qz-resh">'+back('Início')+'<span class="qz-kick">'+SN[sport]+'</span><div class="qz-rw">'+ring(s.pct,150)+'<div class="qz-rn"><b>'+s.pct+'</b><small>%</small></div></div><h3>Quiz já respondido</h3><p>'+esc(s.nome)+' · '+s.acertos+' de '+s.total+' acertos</p></div><div class="qz-box in"><p class="mut">Cada pessoa tem apenas uma tentativa por esporte. Veja sua posição no ranking.</p><button type="button" class="qz-btn" onclick="showQuizRanking()">Ver ranking</button><button type="button" class="qz-btn gh" onclick="initQuiz()">Outro esporte</button><button type="button" class="qz-lnk" onclick="responderQuizNovamente(\''+sport+'\')">Equipe: liberar nova resposta</button></div></div>');
  animRing();return}
 if(!isQuizSportEnabled(sport)){
  if(isQuizSportClosed(sport))return aviso(sport,'Quiz encerrado','O quiz de '+SN[sport]+' já foi encerrado. Veja o resultado final no ranking.');
  return aviso(sport,'Ainda não liberado','O quiz de '+SN[sport]+' libera em <b>'+QUIZ_ENABLED_DATES[sport].split('-').reverse().join('/')+'</b>.');
 }
 qIdx=0;qAcertos=0;qErros=0;qNome='';qFone='';qStartTime=null;streak=0;
 var pn='',pf='';try{var l=JSON.parse(localStorage.getItem('sc_quiz_id')||'{}');pn=l.n||'';pf=l.f||''}catch(e){}
 view('<div class="qz-form">'+back()+'<div class="qz-fh"><span class="qz-fi">'+IC[sport]+'</span><div><small>Quiz de</small><h3>'+SN[sport]+'</h3></div></div>'
 +'<div class="qz-chips"><span><b>40</b> perguntas</span><span><b>1</b> tentativa</span><span>Valendo ranking</span></div>'
 +'<label class="qz-f"><span>Seu nome completo</span><input id="quizNomeInput" type="text" autocomplete="name" placeholder="Como você se chama?" value="'+esc(pn)+'"></label>'
 +'<label class="qz-f"><span>Seu WhatsApp</span><input id="quizFoneInput" type="tel" inputmode="tel" autocomplete="tel" placeholder="(27) 99999-9999" value="'+esc(pf)+'"></label>'
 +'<div class="qz-err" id="qzErr"></div>'
 +'<button type="button" class="qz-btn" onclick="startQuizComNome()">Começar o quiz</button><p class="qz-fine">Seu WhatsApp é usado só para contato caso você vença.</p></div>');
};
window.responderQuizNovamente=window.responderQuizNovamente||function(){};

window.startQuizComNome=function(){
 var ni=document.getElementById('quizNomeInput'),fi=document.getElementById('quizFoneInput'),er=document.getElementById('qzErr');if(!ni||!fi)return;
 var nome=ni.value.trim(),fone=fi.value.trim();
 function bad(m,el){if(er)er.textContent=m;el.classList.remove('shake');void el.offsetWidth;el.classList.add('shake');el.focus()}
 if(nome.length<3||nome.indexOf(' ')<0&&nome.length<4)return bad('Informe seu nome completo.',ni);
 if(fone.replace(/\D/g,'').length<8)return bad('Informe um WhatsApp válido.',fi);
 qNome=nome;qFone=fone;qStartTime=Date.now();qIdx=0;qAcertos=0;qErros=0;streak=0;
 try{localStorage.setItem('sc_quiz_id',JSON.stringify({n:nome,f:fone}))}catch(e){}
 renderQuizQuestion();
};

/* ---------- pergunta ---------- */
window.renderQuizQuestion=function(){
 var qs=getActiveQuizQuestions();if(qIdx>=qs.length){finishQuiz();return}
 var q=qs[qIdx],tot=qs.length,n=qIdx+1;
 view('<div class="qz-top"><button type="button" class="qz-x" aria-label="Sair" onclick="initQuiz()">'+IX+'</button><div class="qz-pg"><i style="width:'+(qIdx/tot*100)+'%"></i></div><span class="qz-tm" id="qzT">'+fmt((Date.now()-qStartTime)/1000)+'</span></div>'
 +'<div class="qz-meta"><span class="qz-num"><b>'+(n<10?'0'+n:n)+'</b>/'+tot+'</span><span class="qz-sc ok">'+IOK+qAcertos+'</span><span class="qz-sc er">'+IX+qErros+'</span><span class="qz-st" id="qzSt"'+(streak>=3?'':' hidden')+'>Sequência '+streak+'</span></div>'
 +'<h3 class="qz-q">'+cl(q.q)+'</h3><div class="qz-opts">'+q.opts.map(function(o,i){return '<button type="button" class="qz-o" style="--i:'+i+'" onclick="answerQuiz('+i+')"><i>'+String.fromCharCode(65+i)+'</i><span>'+cl(o)+'</span></button>'}).join('')+'</div><div class="qz-fb" id="qzFb"></div>','qz-play');
 requestAnimationFrame(function(){var f=document.querySelector('.qz-pg i');if(f)f.style.width=((qIdx+0.0001)/tot*100)+'%'});
 tick=setInterval(function(){var t=document.getElementById('qzT');if(!t){stopTick();return}t.textContent=fmt((Date.now()-qStartTime)/1000)},1000);
 try{updateQuizStrip()}catch(e){}
};
window.answerQuiz=function(idx){
 var qs=getActiveQuizQuestions(),q=qs[qIdx];if(!q)return;
 var box=document.querySelector('.qz-opts');if(!box||box.classList.contains('lock'))return;box.classList.add('lock');
 var opts=box.querySelectorAll('.qz-o'),ok=idx===q.ans;
 opts.forEach(function(o,i){if(i===q.ans)o.classList.add('correct');else if(i===idx)o.classList.add('wrong');else o.classList.add('dim')});
 if(ok){qAcertos++;streak++}else{qErros++;streak=0}
 try{navigator.vibrate&&navigator.vibrate(ok?18:[40,30,40])}catch(e){}
 var last=qIdx+1>=qs.length,fb=document.getElementById('qzFb');
 var pg=document.querySelector('.qz-pg i');if(pg)pg.style.width=((qIdx+1)/qs.length*100)+'%';
 var sc=document.querySelectorAll('.qz-sc');if(sc[0])sc[0].lastChild.textContent=qAcertos;if(sc[1])sc[1].lastChild.textContent=qErros;
 var st=document.getElementById('qzSt');if(st){if(streak>=3){st.hidden=false;st.textContent='Sequência '+streak;st.classList.remove('pop');void st.offsetWidth;st.classList.add('pop')}else st.hidden=true}
 if(fb){fb.className='qz-fb show '+(ok?'ok':'er');fb.innerHTML='<div class="qz-fbh"><span class="qz-fbi">'+(ok?IOK:IX)+'</span><b>'+(ok?'Resposta certa!':'Não foi dessa vez')+'</b></div>'+(ok?'':'<div class="qz-ca">Resposta: <b>'+String.fromCharCode(65+q.ans)+'. '+q.opts[q.ans]+'</b></div>')+'<p>'+cl(q.exp)+'</p><button type="button" class="qz-btn" onclick="qzNext()">'+(last?'Ver meu resultado':'Próxima pergunta')+'</button>';
  setTimeout(function(){try{fb.scrollIntoView({behavior:'smooth',block:'nearest'})}catch(e){}},120)}
 try{updateQuizStrip()}catch(e){}
};
window.qzNext=function(){qIdx++;renderQuizQuestion()};

/* ---------- resultado ---------- */
window.finishQuiz=function(){
 var qs=getActiveQuizQuestions(),total=qs.length,pct=Math.round(qAcertos/total*100),secs=Math.round((Date.now()-qStartTime)/1000);
 var data={nome:qNome,fone:qFone,acertos:qAcertos,total:total,pct:pct,tempo:secs,data:new Date().toLocaleString('pt-BR')};
 try{localStorage.setItem('quiz_feito_'+_quizSport,JSON.stringify(data))}catch(e){}
 var t=pct>=80?['Craque da Supercopa','Você mandou muito bem!']:pct>=60?['Muito bem!','Bom conhecimento de quadra.']:pct>=40?['Razoável','Dá pra melhorar, continue acompanhando o torneio.']:['Faltou um pouco','Acompanhe os jogos e aprenda mais sobre o esporte.'];
 view('<div class="qz-res"><div class="qz-resh"><span class="qz-kick">'+SN[_quizSport]+' · concluído</span><div class="qz-rw">'+ring(pct,170)+'<div class="qz-rn"><b id="qzPct">0</b><small>%</small></div></div><h3>'+t[0]+'</h3><p>'+t[1]+'</p></div>'
 +'<div class="qz-box in"><div class="qz-stats"><div><b class="ok">'+qAcertos+'</b><small>Acertos</small></div><div><b class="er">'+qErros+'</b><small>Erros</small></div><div><b>'+fmt(secs)+'</b><small>Tempo</small></div></div>'
 +'<div class="qz-saved">'+IOK+'<span>Resultado salvo para <b>'+esc(qNome)+'</b>. Em caso de empate, vence quem terminou primeiro.</span></div>'
 +'<button type="button" class="qz-btn" onclick="showQuizRanking()">Ver ranking</button><button type="button" class="qz-btn gh" onclick="initQuiz()">Jogar outro esporte</button></div></div>');
 animRing();countUp(document.getElementById('qzPct'),pct,1400);
 if(pct>=60&&window.nConfetti)setTimeout(window.nConfetti,500);
 sendQuizResultToSheet(data);
};

/* ---------- ranking ---------- */
window.showQuizRanking=function(){
 view('<div class="qz-rkh">'+back('Início')+'<span class="qz-kick">Quiz</span><h3>Ranking geral</h3><p>Maior % de acertos. No empate, vence quem terminou primeiro.</p></div><div id="quizRankingList" class="qz-rkl"><div class="qz-sk"></div><div class="qz-sk"></div><div class="qz-sk"></div><div class="qz-sk"></div></div>');
 loadQuizRanking();
};
window.loadQuizRanking=async function(){
 var el=document.getElementById('quizRankingList');if(!el)return;
 try{
  var r=await fetch(QUIZ_SHEETS_URL+'?action=ranking_quiz'),d=await r.json(),rk=d.ranking||[];
  if(!rk.length){el.innerHTML='<div class="qz-box in"><div class="qz-big">'+IC.volei+'</div><h3>Ninguém no ranking ainda</h3><p>Seja o primeiro a responder!</p></div>';return}
  var mine={};['volei','basquete'].forEach(function(s){var o=saved(s);if(o)mine[(o.nome||'').trim().toLowerCase()]=1});
  function row(p,i){return '<div class="qz-row'+(mine[String(p.nome||'').trim().toLowerCase()]?' me':'')+'" style="--i:'+Math.min(i,12)+'"><span class="qz-pos">'+(i+1)+'</span><div class="qz-rn2"><b>'+esc(p.nome)+'</b><small>'+p.acertos+' de '+p.total+' · '+fmt(p.tempo)+'</small></div><span class="qz-pc">'+p.pct+'<small>%</small></span></div>'}
  var top=rk.slice(0,3),h='';
  if(top.length){
   var ord=top.length>=3?[1,0,2]:top.length===2?[1,0]:[0];
   h+='<div class="qz-pod">'+ord.map(function(i){var p=top[i];return '<div class="pd p'+(i+1)+(mine[String(p.nome||'').trim().toLowerCase()]?' me':'')+'" style="--i:'+i+'"><span class="pn">'+esc(String(p.nome).split(' ')[0])+'</span><div class="pb"><b>'+(i+1)+'</b><em>'+p.pct+'%</em></div></div>'}).join('')+'</div>';
  }
  h+=rk.map(row).join('');
  el.innerHTML=h;
 }catch(err){el.innerHTML='<div class="qz-box in"><h3>Não foi possível carregar</h3><p>Verifique sua conexão e tente novamente.</p><button type="button" class="qz-btn" onclick="showQuizRanking()">Tentar de novo</button></div>'}
};
window.updateQuizHomeButtons=function(){};
window.addEventListener('pageshow',function(){});
})();

/* ===== Números da Supercopa (dashboard) ===== */
const NM_API='https://hngwasixgyvnvfanpuax.supabase.co/functions/v1/api';
const NM_ANOS=[2021,2022,2023,2024,2025,2026];
const NM_TIMES=[6,12,12,12,12,18];
const NM_ALCANCE=[5000,150000,340000,580000,880000];
const NM_KM={'Afonso Cláudio':0,'Castelo':90,'Cachoeiro de Itapemirim':125,'Venda Nova do Imigrante':50,'Santa Maria de Jetibá':80,'Vitória':125,'Vila Velha':135,'Serra':115,'Itabaiana':150,'Itaperuna':330,'Atílio Vivácqua':150,'Manhuaçu':180,'Baixo Guandu':160,'Aracruz':170,'Colatina':130,'São Paulo':950};
const NM_C23=['Vitória','Serra','Vila Velha','Itabaiana','Itaperuna','Cachoeiro de Itapemirim','Atílio Vivácqua'];
const NM_CID={2021:['Afonso Cláudio','Castelo','Cachoeiro de Itapemirim','Venda Nova do Imigrante','Santa Maria de Jetibá'],2022:['Vitória','Vila Velha','Cachoeiro de Itapemirim','Venda Nova do Imigrante'],2023:NM_C23,2024:NM_C23.concat(['Manhuaçu']),2025:NM_C23.concat(['Manhuaçu']),2026:['Baixo Guandu','Afonso Cláudio','Aracruz','Colatina','Itaperuna','Vitória','Serra','Cachoeiro de Itapemirim','São Paulo']};
const NM_PREM={alim:85,hosp:90,noites:1,gas:6.3,kml:10,carros:4,pess:16,dias:2};
const nmN=n=>Math.round(n).toLocaleString('pt-BR');
const nmR=n=>'R$ '+nmN(n);
const nmC=n=>n>=1e6?(n/1e6).toFixed(2).replace('.',',')+' mi':n>=1e3?nmN(n/1e3)+' mil':nmN(n);

function nmBars(d,o){o=o||{};const W=560,H=o.h||250,pl=10,pr=10,pt=30,pb=38,mx=Math.max.apply(null,d.map(x=>x.v))*1.12||1,bw=(W-pl-pr)/d.length;
 let s='<svg viewBox="0 0 '+W+' '+H+'" class="nmc" role="img" aria-label="'+(o.al||'')+'">';
 for(let i=0;i<=3;i++){const y=pt+(H-pt-pb)*i/3;s+='<line x1="'+pl+'" x2="'+(W-pr)+'" y1="'+y+'" y2="'+y+'" class="nmg"/>'}
 d.forEach((x,i)=>{const h=(H-pt-pb)*x.v/mx,x0=pl+i*bw+bw*.16,w=bw*.68,y=H-pb-h;
  s+='<rect x="'+x0+'" y="'+y+'" width="'+w+'" height="'+h+'" class="nmb'+(x.hi?' hi':'')+'" style="--d:'+i*90+'ms"/><text x="'+(x0+w/2)+'" y="'+(y-8)+'" class="nmv" text-anchor="middle" style="--d:'+(i*90+300)+'ms">'+(o.fmt?o.fmt(x.v):nmN(x.v))+'</text><text x="'+(x0+w/2)+'" y="'+(H-14)+'" class="nml" text-anchor="middle">'+x.l+'</text>'});
 return s+'</svg>'}
function nmStack(d,o){o=o||{};const W=560,H=250,pl=10,pr=10,pt=26,pb=38,mx=Math.max.apply(null,d.map(x=>x.a+x.b))*1.1||1,bw=(W-pl-pr)/d.length;
 let s='<svg viewBox="0 0 '+W+' '+H+'" class="nmc">';
 for(let i=0;i<=3;i++){const y=pt+(H-pt-pb)*i/3;s+='<line x1="'+pl+'" x2="'+(W-pr)+'" y1="'+y+'" y2="'+y+'" class="nmg"/>'}
 d.forEach((x,i)=>{const ha=(H-pt-pb)*x.a/mx,hb=(H-pt-pb)*x.b/mx,x0=pl+i*bw+bw*.14,w=bw*.72,yb=H-pb-hb,ya=yb-ha;
  s+='<rect x="'+x0+'" y="'+yb+'" width="'+w+'" height="'+hb+'" class="nmb app" style="--d:'+i*50+'ms"/><rect x="'+x0+'" y="'+ya+'" width="'+w+'" height="'+ha+'" class="nmb" style="--d:'+(i*50+80)+'ms"/><text x="'+(x0+w/2)+'" y="'+(H-14)+'" class="nml" text-anchor="middle">'+x.l+'</text>'});
 return s+'</svg>'}
function nmLine(d,o){o=o||{};const W=560,H=230,pl=22,pr=22,pt=30,pb=38,mx=Math.max.apply(null,d.map(x=>x.v))*1.15||1,st=(W-pl-pr)/(d.length-1||1);
 const P=d.map((x,i)=>[pl+i*st,H-pb-(H-pt-pb)*x.v/mx]);
 let s='<svg viewBox="0 0 '+W+' '+H+'" class="nmc">';
 for(let i=0;i<=3;i++){const y=pt+(H-pt-pb)*i/3;s+='<line x1="'+pl+'" x2="'+(W-pr)+'" y1="'+y+'" y2="'+y+'" class="nmg"/>'}
 const path=P.map((p,i)=>(i?'L':'M')+p[0].toFixed(1)+' '+p[1].toFixed(1)).join('');
 s+='<path d="'+path+'L'+P[P.length-1][0]+' '+(H-pb)+'L'+P[0][0]+' '+(H-pb)+'Z" class="nmar"/><path d="'+path+'" class="nmln" pathLength="1"/>';
 d.forEach((x,i)=>{s+='<circle cx="'+P[i][0]+'" cy="'+P[i][1]+'" r="5" class="nmdot" style="--d:'+(600+i*120)+'ms"/><text x="'+P[i][0]+'" y="'+(P[i][1]-12)+'" class="nmv" text-anchor="middle" style="--d:'+(600+i*120)+'ms">'+(o.fmt?o.fmt(x.v):nmN(x.v))+'</text><text x="'+P[i][0]+'" y="'+(H-14)+'" class="nml" text-anchor="middle">'+x.l+'</text>'});
 return s+'</svg>'}
function nmHBars(d,fmt){const mx=Math.max.apply(null,d.map(x=>x.v))||1;return '<div class="nmh">'+d.map((x,i)=>'<div class="nmhr"><span>'+x.l+'</span><div class="nmht"><i style="width:'+(x.v/mx*100).toFixed(1)+'%;--d:'+i*70+'ms"></i></div><b>'+(fmt?fmt(x.v):nmN(x.v))+'</b></div>').join('')+'</div>'}
function nmDonut(parts){const tot=parts.reduce((s,p)=>s+p.v,0)||1,R=54,C=2*Math.PI*R;let off=0,s='<svg viewBox="0 0 140 140" class="nmdn"><circle cx="70" cy="70" r="'+R+'" class="nmdb"/>';
 parts.forEach((p,i)=>{const len=C*p.v/tot;s+='<circle cx="70" cy="70" r="'+R+'" class="nmds s'+i+'" stroke-dasharray="'+len.toFixed(1)+' '+(C-len).toFixed(1)+'" stroke-dashoffset="'+(-off).toFixed(1)+'" transform="rotate(-90 70 70)"/>';off+=len});
 return s+'<text x="70" y="68" text-anchor="middle" class="nmdt">'+nmC(tot)+'</text><text x="70" y="86" text-anchor="middle" class="nmds2">acessos</text></svg>'}

function nmCalc(p){
 const out=[];
 NM_ANOS.forEach((a,i)=>{const t=NM_TIMES[i],cs=NM_CID[a].filter(c=>c!=='Afonso Cláudio'),dist=cs.length?cs.reduce((s,c)=>s+(NM_KM[c]||150),0)/cs.length:0,
  alim=p.pess*p.alim*p.dias,hosp=p.pess*p.hosp*p.noites,comb=p.carros*(2*dist/p.kml)*p.gas;
  const vis=Math.max(0,t-1);
  out.push({a:a,t:t,dist:dist,alim:alim,hosp:hosp,comb:comb,visita:alim+hosp+comb,alimT:t*alim,hospT:vis*hosp,combT:vis*comb,total:t*alim+vis*(hosp+comb)})});
 return out}

function nmInit(){
 const $=id=>document.getElementById(id);if(!$('nmK'))return;
 const rev=()=>{const els=document.querySelectorAll('.nmcard');if(!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('in'));return}
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.2});els.forEach(e=>io.observe(e))};
 const allc={};NM_ANOS.forEach(a=>NM_CID[a].forEach(c=>allc[c]=1));
 $('nmK').innerHTML=[[NM_ANOS.length,'Edições'],[NM_TIMES[5]*16,'Atletas em 2026'],[Object.keys(allc).length,'Cidades já representadas'],[nmC(NM_ALCANCE.reduce((s,v)=>s+v,0)),'Visualizações no Instagram']].map(x=>'<div class="stat"><b>'+x[0]+'</b><small>'+x[1]+'</small></div>').join('');
 $('nmTimes').innerHTML=nmBars(NM_ANOS.map((a,i)=>({l:a,v:NM_TIMES[i],hi:i===5})),{al:'Times por edição'});
 $('nmAtl').innerHTML=nmLine(NM_ANOS.map((a,i)=>({l:a,v:NM_TIMES[i]*16})),{});
 $('nmAlc').innerHTML=nmBars(NM_ALCANCE.map((v,i)=>({l:NM_ANOS[i],v:v,hi:i===4})),{fmt:nmC,al:'Alcance Instagram'});
 $('nmAlcK').innerHTML='<b>'+nmC(NM_ALCANCE[4])+'</b><small>visualizações em 2025</small><p>Crescimento de <b>'+nmN(NM_ALCANCE[4]/NM_ALCANCE[0])+' vezes</b> desde 2021 e de <b>'+Math.round((NM_ALCANCE[4]/NM_ALCANCE[3]-1)*100)+'%</b> sobre 2024.</p>';
 $('nmCid').innerHTML=nmBars(NM_ANOS.map((a,i)=>({l:a,v:NM_CID[a].length,hi:i===5})),{al:'Cidades por edição'});
 $('nmCidL').innerHTML=NM_ANOS.slice().reverse().map(a=>'<div class="nmy"><b>'+a+'</b><div>'+NM_CID[a].map(c=>'<span>'+c+'</span>').join('')+'</div></div>').join('');
 const campos=[['alim','Alimentação por pessoa/dia (R$)'],['hosp','Hospedagem por pessoa/noite (R$)'],['noites','Noites de hospedagem'],['gas','Gasolina (R$/litro)'],['kml','Consumo (km/litro)'],['carros','Carros por equipe'],['pess','Pessoas por equipe'],['dias','Dias de competição']];
 const p=Object.assign({},NM_PREM);
 $('nmF').innerHTML=campos.map(c=>'<label><span>'+c[1]+'</span><input type="number" step="any" min="0" data-k="'+c[0]+'" value="'+p[c[0]]+'"></label>').join('');
 const draw=()=>{const r=nmCalc(p),u=r[5],acum=r.reduce((s,x)=>s+x.total,0);
  $('nmE').innerHTML=[[nmR(u.visita),'Gasto de uma equipe visitante em 2026'],[nmR(u.total),'Movimento estimado em 2026'],[nmR(acum),'Acumulado 2021 a 2026']].map(x=>'<div class="stat"><b>'+x[0]+'</b><small>'+x[1]+'</small></div>').join('');
  $('nmEq').innerHTML=nmHBars([{l:'Alimentação ('+p.dias+' dias)',v:u.alim},{l:'Hospedagem ('+p.noites+' noite'+(p.noites==1?'':'s')+')',v:u.hosp},{l:'Combustível (~'+Math.round(u.dist)+' km de ida)',v:u.comb}],nmR)+'<p class="nmfn" style="margin-top:12px">Total por equipe: <b>'+nmR(u.visita)+'</b>, ou '+nmR(u.visita/p.pess)+' por pessoa.</p>';
  $('nmTot').innerHTML=nmBars(r.map((x,i)=>({l:x.a,v:x.total,hi:i===5})),{fmt:nmC,al:'Movimento por edição'})};
 draw();$('nmF').addEventListener('input',e=>{const k=e.target.dataset.k;if(!k)return;const v=parseFloat(e.target.value);p[k]=isFinite(v)&&v>=0?v:0;draw()});
 rev();
 /* acessos reais */
 const get=a=>fetch(NM_API+'?action='+a).then(r=>r.json());
 Promise.all([get('count_acessos_site'),get('count_acessos'),get('count_installs'),get('acessos_log'),get('ranking_quiz').catch(()=>({}))]).then(r=>{
  const s=r[0]||{},a=r[1]||{},ins=r[2]||{},log=(r[3]&&r[3].log)||[],q=(r[4]&&r[4].ranking)||[];
  const uni=(s.unicos||0)+(a.unicos||0),tot=(s.total||0)+(a.total||0);
  $('nmD').innerHTML=[[nmN(uni),'Aparelhos únicos'],[nmN(tot),'Acessos no total'],[nmN(ins.total||0),'Instalações do app'],[nmN(q.length),'Participantes do quiz']].map(x=>'<div class="stat"><b>'+x[0]+'</b><small>'+x[1]+'</small></div>').join('');
  const m={};log.forEach(x=>{const k=String(x.data).slice(0,7);(m[k]=m[k]||{a:0,b:0});if(x.plataforma==='app')m[k].b++;else m[k].a++});
  const ks=Object.keys(m).sort().slice(-12),MS=['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'];
  $('nmMes').innerHTML=ks.length?nmStack(ks.map(k=>({l:MS[+k.slice(5)-1]+'/'+k.slice(2,4),a:m[k].a,b:m[k].b}))):'<p class="nmfn">Ainda sem acessos registrados.</p>';
  $('nmPl').innerHTML=nmDonut([{v:s.total||0},{v:a.total||0}])+'<div class="nmdl"><div><i class="s0"></i>Site<b>'+nmN(s.total||0)+'</b><small>'+nmN(s.unicos||0)+' aparelhos únicos</small></div><div><i class="s1"></i>App<b>'+nmN(a.total||0)+'</b><small>'+nmN(a.unicos||0)+' aparelhos únicos</small></div></div>';
  rev()}).catch(()=>{$('nmD').innerHTML='<div class="stat"><b>—</b><small>Não foi possível carregar os acessos agora</small></div>'})}

/* ===== Números da Supercopa (app) ===== */
mkPage('numerosPage','<div class="wrapR"><p class="mut" style="margin:6px 2px 14px">Crescimento, alcance, impacto na economia local e audiência digital da Supercopa desde 2021.</p>'
+'<div class="grid2 nmk" id="nmK"></div>'
+'<div class="nsh2"><b>Times por edição</b></div><div class="nmcard"><div id="nmTimes"></div></div>'
+'<div class="nsh2"><b>Atletas inscritos</b></div><div class="nmcard"><div id="nmAtl"></div></div>'
+'<div class="nsh2"><b>Alcance no Instagram</b></div><div class="nmcard"><div id="nmAlc"></div><div id="nmAlcK" class="nmbig"></div></div>'
+'<div class="nsh2"><b>Cidades por edição</b></div><div class="nmcard"><div id="nmCid"></div><div id="nmCidL" class="nmyrs" style="margin-top:14px"></div></div>'
+'<div class="nsh2"><b>Impacto econômico</b></div><div class="nmcard nmin"><h3>Premissas</h3><div class="nmf" id="nmF"></div><p class="nmfn">Valores médios estimados. Altere para recalcular.</p></div>'
+'<div class="grid2 nmk" id="nmE"></div>'
+'<div class="nmcard"><h3>Gasto de uma equipe visitante (2026)</h3><div id="nmEq"></div></div>'
+'<div class="nmcard"><h3>Movimento total por edição</h3><div id="nmTot"></div></div>'
+'<div class="nsh2"><b>Premiação</b></div><div class="nmcard"><div class="nmbig"><small>2021 a 2024</small><b>Troféus</b></div><div class="nmbig" style="margin-top:12px"><small>2025 · campeão e vice</small><b>R$ 1.000 + R$ 500</b></div></div>'
+'<div class="nsh2"><b>Audiência digital</b></div><div class="grid2 nmk" id="nmD"><div class="stat"><b>...</b><small>Carregando</small></div></div>'
+'<div class="nmcard"><h3>Acessos por mês</h3><div id="nmMes"></div><div class="nmleg"><i></i>Site <i class="app"></i>App</div></div>'
+'<div class="nmcard"><h3>Site x App</h3><div id="nmPl" class="nmdw"></div></div>'
+'<p class="nmfn" style="margin:14px 2px 0">Fontes: dados da organização, cadastro de times 2026 e registros anônimos de acesso. Gastos são estimativas.</p></div>');
PAGES.numerosPage=['Desde 2021','Números da Supercopa','historia'];
(function(){var _h=window.nPageHook;window.nPageHook=function(pg){_h&&_h(pg);if(pg.id==='numerosPage')setTimeout(nmInit,0)}})();

/* ===== destaques das partidas no app ===== */
(function(){
 var API='https://hngwasixgyvnvfanpuax.supabase.co/functions/v1/api';
 function card(x,i){return '<article class="dpc" style="animation-delay:'+Math.min(i,8)*70+'ms"><div class="dpf">'+(x.foto?'<img src="'+esc(x.foto)+'" alt="'+esc(x.nome)+'" loading="lazy">':'<span></span>')+'<i>'+esc(x.modalidade||'')+'</i></div><div class="dpi"><small>'+esc(x.jogo||'Destaque da partida')+'</small><h3>'+esc(x.nome)+'</h3><b>'+esc(x.equipe)+'</b>'+(x.observacao?'<p>'+esc(x.observacao)+'</p>':'')+'</div></article>'}
 function load(pg){
  var box=pg.querySelector('#dpjA');
  if(!box){box=document.createElement('div');box.id='dpjA';box.className='wrapR';box.innerHTML='<div class="nsh2" style="margin:8px 2px 12px"><b>Destaques dos jogos</b></div><div class="dpg" id="dpjAg"><p class="mut">Carregando...</p></div>';var hd=pg.querySelector('.nhd');if(hd&&hd.nextSibling)pg.insertBefore(box,hd.nextSibling);else pg.appendChild(box)}
  fetch(API+'?action=destaques',{cache:'no-store'}).then(function(r){return r.json()}).then(function(j){
   var l=(j.destaques||[]).filter(function(x){return x.nome}).reverse(),g=document.getElementById('dpjAg');if(!g)return;
   g.innerHTML=l.length?l.map(card).join(''):'<p class="mut">Os destaques de cada partida aparecem aqui assim que os jogos acontecem.</p>'
  }).catch(function(){var g=document.getElementById('dpjAg');if(g)g.innerHTML='<p class="mut">Não foi possível carregar agora.</p>'})}
 var _h=window.nPageHook;window.nPageHook=function(pg){_h&&_h(pg);if(pg.id==='atletaPage')setTimeout(function(){load(pg)},0)};
})();

/* ===== jogos, classificação e mata-mata: escudos, sem emojis ===== */

/* ===== chave do mata-mata em árvore (modelo: sorteio da Champions) ===== */
function nbBracket(T,esc,shf){
 var J={};(T.jogos||[]).forEach(function(j){J[j.id]=j});
 function dtx(j){return j.data?j.data.split('-').reverse().slice(0,2).join('/')+(j.hora?' '+j.hora:''):''}
 function team(j,s){
  var n=s?j.visitante:j.casa,def=s?j.visitanteDefinida:j.casaDefinida,rot=s?j.rotuloVisitante:j.rotuloCasa,sc=s?j.setsVisitante:j.setsCasa;
  var fin=j.status==='finalizado'||j.status==='wo',lv=j.status==='ao_vivo',win=fin&&j.vencedor&&j.vencedor===n;
  return '<div class="nbt'+(win?' w':fin?' l':'')+'"><i>'+shf(def?n:'')+'</i><span>'+esc(def?n:(rot||'A definir'))+'</span><b>'+((fin||lv)?(sc||0):'')+'</b></div>'}
 function box(id,tit,cls){
  var j=J[id];if(!j)return '<div class="nbm ph '+(cls||'')+'"></div>';
  return '<div class="nbm '+(cls||'')+(j.status==='ao_vivo'?' live':'')+'"><div class="nbh"><span>'+tit+'</span><em>'+(j.status==='ao_vivo'?'AO VIVO':dtx(j))+'</em></div>'+team(j,0)+team(j,1)+'</div>'}
 var fin=J.FINAL,camp=T.campeao;
 var champ='<div class="nbc3"><div class="nbfin">'+box('FINAL','Grande final')+'</div>'
  +'<div class="nbcamp'+(camp?' on':'')+'"><small>Campeão</small>'+(camp?'<span>'+shf(camp)+'</span><b>'+esc(camp)+'</b>':'<b>A definir</b>')+'</div></div>';
 return '<div class="nbw"><div class="nbk">'
  +'<div class="nbq" style="grid-area:1/1">'+box('Q1','Quartas 1')+'</div><div class="nbq" style="grid-area:2/1">'+box('Q2','Quartas 2')+'</div>'
  +'<div class="nbq" style="grid-area:3/1">'+box('Q3','Quartas 3')+'</div><div class="nbq" style="grid-area:4/1">'+box('Q4','Quartas 4')+'</div>'
  +'<div class="nbv" style="grid-area:1/2/3/3"></div><div class="nbv" style="grid-area:3/2/5/3"></div>'
  +'<div class="nbs" style="grid-area:1/3/3/4">'+box('SF1','Semifinal 1')+'</div><div class="nbs" style="grid-area:3/3/5/4">'+box('SF2','Semifinal 2')+'</div>'
  +'<div class="nbv big" style="grid-area:1/4/5/5"></div>'
  +'<div class="nbf" style="grid-area:1/5/5/6">'+champ+'</div>'
  +'</div><p class="nbh2">Deslize para o lado para ver a chave inteira</p></div>';
}

(function(){
 var _f=window.fetch;
 window.fetch=function(u){var p=_f.apply(this,arguments);try{if(/action=torneio/.test(String(u)))p.then(function(r){return r.clone?r.clone().json():r.json()}).then(function(d){if(d&&d.ok){window.__TN=d;window.nbDraw&&window.nbDraw()}}).catch(function(){})}catch(e){}return p};
})();
(function(){
 var EMO=/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}]/gu,MAP=null,T=null;
 function norm(s){return String(s||'').trim().toLowerCase()}
 function mapa(){if(MAP)return Promise.resolve(MAP);return loadTeams().then(function(t){MAP={};(t||[]).forEach(function(x){if(x.escudo)MAP[norm(x.nome)]=x.escudo});return MAP})}
 function img(src){return '<img class="nesc" src="'+esc(src)+'" alt="" onerror="this.remove()">'}
 function nbDraw(){var host=document.getElementById('bracketVolei');if(!host||!window.__TN)return;mapa().then(function(M){var h=document.getElementById('nbkApp');if(!h){h=document.createElement('div');h.id='nbkApp';host.insertBefore(h,host.querySelector('.bracket-scroll')||host.firstChild)}var html=nbBracket(window.__TN,esc,function(n){var s=n&&M[norm(n)];return s?img(s):'<span class="nph"></span>'});if(h.__h!==html){h.__h=html;h.innerHTML=html}})}
 window.nbDraw=nbDraw;
 function enhance(){nbDraw();
  mapa().then(function(M){
   ['tablePage','bracketPage','gamesPage'].forEach(function(id){
    var pg=document.getElementById(id);if(!pg)return;
    pg.querySelectorAll('.mt').forEach(function(m){var ic=m.querySelector('.mt-ic'),nm=m.querySelector('.mt-nm');if(!ic||!nm||ic.dataset.e===nm.textContent)return;ic.dataset.e=nm.textContent;var s=M[norm(nm.textContent)];ic.innerHTML=s?img(s):'<span class="nesc ph"></span>'});
    pg.querySelectorAll('.gc-t').forEach(function(m){var ic=m.querySelector('.gc-t-ic'),nm=m.querySelector('.gc-t-nm');if(!ic||!nm||ic.dataset.e===nm.textContent)return;ic.dataset.e=nm.textContent;var s=M[norm(nm.textContent)];ic.innerHTML=s?img(s):'<span class="nesc ph"></span>';ic.classList.add('nsh')});
    pg.querySelectorAll('.td-nm').forEach(function(n){if(n.dataset.e)return;var nome=n.textContent;n.dataset.e='1';var s=M[norm(nome)];if(s)n.innerHTML=img(s)+'<span>'+esc(nome)+'</span>';else n.innerHTML='<span class="nesc ph"></span><span>'+esc(nome)+'</span>'});
    pg.querySelectorAll('.gc').forEach(function(g,i){g.classList.toggle('alt',i%2===1)});var w=document.createTreeWalker(pg,NodeFilter.SHOW_TEXT,null);var n;while((n=w.nextNode())){if(EMO.test(n.nodeValue)){EMO.lastIndex=0;n.nodeValue=n.nodeValue.replace(EMO,'').replace(/^\s{2,}/,' ')}EMO.lastIndex=0}
   })
  })
 }
 new MutationObserver(function(){clearTimeout(T);T=setTimeout(enhance,150)}).observe(document.body,{childList:true,subtree:true});
})();

buildHome();onPage($('.page.active')||$('#homePage'));
})();
