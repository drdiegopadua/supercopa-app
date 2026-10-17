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
function loadTeams(){return fetch(API+'?action=timesPublicos').then(function(r){return r.json()}).then(function(d){if(d.ok&&d.times&&d.times.length){TEAMS=d.times.map(function(x){if(/^ct das montanhas$/i.test(x.nome)){x.escudo='novo/escudos/ct-das-montanhas.png';x.responsavel='Diego Padua';x.instagram='@ctdasmontanhas'}return x});try{localStorage.setItem('sc_times_app',JSON.stringify(TEAMS))}catch(e){}}return TEAMS}).catch(function(){return null}).then(function(r){if(r)return r;try{TEAMS=JSON.parse(localStorage.getItem('sc_times_app'))}catch(e){}if(TEAMS&&TEAMS.length)return TEAMS;return fetch('novo/times.json').then(function(x){return x.json()}).then(function(j){TEAMS=j;return j}).catch(function(){return null})})}
window.nOpenTeam=function(i){if(TEAMS&&TEAMS[i])teamSheet(TEAMS[i])};
window.renderTimesVolei=function(){var box=$('#timesVolei');if(!box)return;box.innerHTML='<div style="padding:8px;color:#6b7aa5;font-size:13px">Carregando equipes…</div>';loadTeams().then(function(t){t=t||[];box.innerHTML=t.length?t.map(function(x,i){return '<div class="ntm" onclick="nOpenTeam('+i+')" style="animation-delay:'+(i*.05)+'s"><div class="e">'+(x.escudo?'<img src="'+esc(x.escudo)+'" alt="" onerror="this.style.display=\'none\'">':I('shield').replace('<svg','<svg style="width:40px;height:40px;stroke:#1b52e0;fill:none;stroke-width:1.6"'))+'</div><div style="flex:1;min-width:0"><b>'+esc(x.nome)+'</b><small>'+esc(x.cidade)+'</small></div><span style="color:#9fb0d8;font-size:22px">›</span></div>'}).join('')+'<div class="ntm" style="border-style:dashed;justify-content:center;color:#6b7aa5;cursor:default"><b style="color:#6b7aa5">Vaga '+(t.length+1)+' · aberta</b></div>':'<div style="padding:12px;color:#6b7aa5">Os times confirmados aparecem aqui.</div>'})};
window.openTimeInfo=function(nome,grupo,insta,resp,escudo,mod){teamSheet({nome:nome,cidade:'',instagram:insta,responsavel:resp,escudo:escudo,alojamento:'',inscritaEm:'',como:'',mod:mod==='basquete'?'b':'v'})};
/* home nova */
var NEWSFETCH=null;
function buildHome(){
 var h=$('#homePage');if(!h||h.dataset.nb)return;h.dataset.nb='1';
 var tiles=$$('.home-card',h).map(function(b){var l=b.querySelector('.home-lbl');return {l:l?l.textContent.trim():'',on:b.getAttribute('onclick')}});
 tiles.forEach(function(t){if(/^Regras$/i.test(t.l))t.on="nav('regrasPage',null)"});tiles.push({l:'Patrocinadores',on:"nav('patrocPage',null)"});
 $$(':scope > div',h).forEach(function(d){var tx=d.textContent||'';if(d.querySelector('.home-card')||/^\s*(\S+\s+)?Modalidades/.test(tx.slice(0,40))||/Not[ií]cias/.test(tx.slice(0,40))&&!d.id)d.classList.add('nold')});
 var box=document.createElement('div');box.id='nhome';var box1=document.createElement('div');box1.id='nhome1';box1.style.padding='0 14px';
 box1.innerHTML='<div id="nmeu" style="margin-top:14px"></div><div class="nb"><div class="nt2 c2 blue"><div class="nbg" style="background-image:url(novo/fotos/jogos.webp)"></div><div class="lb">Faltam para o vôlei</div><div class="v" id="ncd">–</div><div style="font:600 12px var(--body);margin-top:6px;opacity:.9">28 e 29 de novembro<br>Afonso Cláudio · ES</div></div><div class="nt2 c2" id="nteams"><div class="lb">Equipes confirmadas</div><div class="v" id="nteamn">11</div><div class="nescrow" id="nescrow"></div></div></div>'+
 '<div id="nrailw"></div>';
 box.innerHTML='<div class="nsh2"><b>Guia da Supercopa</b></div><div class="nico" id="nico">'+tiles.filter(function(t){return t.l}).map(function(t,i){return '<button data-i="'+i+'" style="animation-delay:'+(.2+i*.045)+'s"><span>'+I(ICMAP[t.l]||'star')+'</span>'+esc(t.l)+'</button>'}).join('')+'</div>'+PSTRIP()+'<div class="nsh2"><b>Notícias</b></div><div id="nnews"></div>';
 var ref=$('#homeAvisos');if(ref&&ref.nextSibling)h.insertBefore(box1,ref.nextSibling);else h.appendChild(box1);
 var spons=Array.prototype.slice.call(h.children).filter(function(c){return !c.id&&/APOIO/i.test(c.textContent||'')})[0];
 h.appendChild(box);box.style.padding='0 14px';if(spons)spons.classList.add('nold');$$('img[src*="rodape"]',h).forEach(function(i){var p=i;while(p&&p.parentNode!==h)p=p.parentNode;if(p)p.classList.add('nold')});
 $('#nico').addEventListener('click',function(e){var b=e.target.closest('button[data-i]');if(!b)return;var t=tiles.filter(function(x){return x.l})[+b.dataset.i];if(t&&t.on){try{(new Function(t.on)).call(b)}catch(x){console.error(x)}}});
 function cd(){var s=Math.max(0,Math.floor((new Date('2026-11-28T08:00:00-03:00').getTime()-Date.now())/1000));var d=Math.floor(s/86400),hh=Math.floor(s%86400/3600),m=Math.floor(s%3600/60);var e=$('#ncd');if(e)e.textContent=d+'d '+hh+'h '+m+'min'}cd();setInterval(cd,30000);
 loadTeams().then(function(t){renderMeuTime();if(!t)return;var n=$('#nteamn');if(n)n.textContent=t.length;var r=$('#nescrow');if(r)r.innerHTML=t.filter(function(x){return x.escudo}).slice(0,8).map(function(x,i){return '<img src="'+esc(x.escudo)+'" alt="" style="animation-delay:'+(i*.2)+'s" onerror="this.remove()">'}).join('')});
 /* jogos */
 if(typeof scTorneioApp_==='function')scTorneioApp_().then(function(r){var T=r.t;window.__TORN=T;renderMeuTime();var J=(T.jogos||[]).filter(function(j){return j.data});if(!J.length)return;var hoje=new Date().toISOString().slice(0,10);var L=J.filter(function(j){return j.data===hoje});if(!L.length)L=J.filter(function(j){return !(j.status==='finalizado'||j.status==='wo')}).slice(0,8);if(!L.length)L=J.slice(-8);
  var nm=function(j,k){return k==='c'?(j.casaDefinida===false?(j.rotuloCasa||'A definir'):j.casa):(j.visitanteDefinida===false?(j.rotuloVisitante||'A definir'):j.visitante)};
  $('#nrailw').innerHTML='<div class="nsh2"><b>'+(L[0].data===hoje?'Jogos de hoje':'Próximos jogos')+'</b><button type="button" class="lnk" onclick="nav(\'gamesPage\',null)">VER TODOS</button></div><div class="nrail">'+L.map(function(j,i){var on=j.status==='ao_vivo'||j.status==='finalizado'||j.status==='wo';return '<div class="nrc" style="animation-delay:'+(i*.08)+'s"><div class="m">'+(j.fase==='grupos'?'Grupo '+j.grupo:j.fase)+' · '+(j.hora||'')+'</div><div class="l"><span>'+esc(nm(j,'c'))+'</span><b>'+(on?j.setsCasa:'–')+'</b></div><div class="l"><span>'+esc(nm(j,'v'))+'</span><b>'+(on?j.setsVisitante:'–')+'</b></div></div>'}).join('')+'</div>'}).catch(function(){});
 /* notícias */
 fetch(API+'?action=noticias').then(function(r){return r.json()}).then(function(d){var n=(d.noticias||[]);$('#nnews').innerHTML=n.length?n.map(function(x,i){return '<div class="nnews" style="animation-delay:'+(i*.06)+'s"><div class="k">'+esc(x.cat)+' · '+esc(x.data)+'</div><b>'+esc(x.titulo)+'</b>'+(x.corpo?'<p>'+esc(x.corpo)+'</p>':'')+'</div>'}).join(''):'<p style="color:#6b7aa5;font-size:13px">Sem notícias por enquanto.</p>'}).catch(function(){});
}
/* ===== regras e patrocinadores dentro do app ===== */
var PARC=[['Realização',[['prefeitura-afonso-claudio','Prefeitura Municipal de Afonso Cláudio']],'1 real'],['Patrocinador Master',[['coroa-instituto','Coroa Instituto']],'1'],['Patrocinadores Prata',[['planet-sports','Planet Sports'],['acai-do-diego','Açaí do Diego'],['casa-homem-do-campo','Casa Homem do Campo'],['sicredi','Sicredi'],['express-pizzas-e-lanches','Express Pizzas e Lanches']],'2'],['Patrocinador Bronze',[['prato-fino','Prato Fino Restaurante e Churrascaria']],'1'],['Apoio',[['basquetebol-das-montanhas','Basquetebol das Montanhas'],['instituto-cultural-das-montanhas','Instituto Cultural das Montanhas']],'2']];
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
PAGES.inscricaoPage=['Sem taxa de inscrição','Inscrição da equipe','inscricao'];
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

buildHome();onPage($('.page.active')||$('#homePage'));
})();
