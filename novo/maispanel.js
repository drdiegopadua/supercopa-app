/* Painel "Mais": ao tocar em Mais no menu inferior, abre a tela de opções de dentro dele. */
(function(){
var P={
 users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6M17 5a3.5 3.5 0 010 7M21.5 20c0-2.6-1.5-4.5-3.5-5.4"/>',
 shield:'<path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"/><path d="M9 12l2 2 4-4"/>',
 help:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 114 2c-.9.6-1.5 1.1-1.5 2.2M12 17h.01"/>',
 star:'<path d="M12 3l2.8 5.8 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.3l1.1-6.2L3 9.7l6.2-.9z"/>',
 live:'<circle cx="12" cy="12" r="2.5"/><path d="M7.5 7.5a6.4 6.4 0 000 9M16.5 7.5a6.4 6.4 0 010 9M4.5 4.5a10.6 10.6 0 000 15M19.5 4.5a10.6 10.6 0 010 15"/>',
 cam:'<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
 cal:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/>',
 doc:'<path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5M10 13h6M10 17h6"/>',
 map:'<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>',
 pin:'<path d="M12 21s7-6 7-11a7 7 0 00-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
 trophy:'<path d="M7 4h10v6a5 5 0 01-10 0zM7 6H4a3 3 0 003 4M17 6h3a3 3 0 01-3 4M12 15v4M8 20h8"/>',
 phone:'<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/>',
 chart:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
 medal:'<circle cx="12" cy="14" r="5.5"/><path d="M8.5 3l2 5M15.5 3l-2 5M12 11.5v5"/>',
 file:'<path d="M6 3h9l4 4v14H6z"/><path d="M9 12h7M9 16h5"/>',
 bag:'<path d="M6 8h12l-1 12H7z"/><path d="M9 8V6.5a3 3 0 016 0V8"/>',
 ig:'<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r=".8"/>'
};
var COR=[['#3d6df2','#1a3fc4','rgba(27,82,224,.38)'],['#8b5cf6','#5b2fd0','rgba(111,63,230,.36)'],['#14b8c6','#0b7f96','rgba(20,150,170,.34)'],['#f59e0b','#c26b00','rgba(220,130,10,.34)'],['#ec4899','#b3246d','rgba(200,50,120,.32)'],['#22c55e','#12873f','rgba(30,160,80,.32)']];
var T=[
 ['Times','12 equipes','users',"nav('timesPage',null);window.renderTimesVolei&&renderTimesVolei()"],
 ['Meu time','Seu elenco','shield',"abrirPickerTime2()"],
 ['Quiz','40 perguntas','help',"nav('quizPage',null)"],
 ['Destaque','Vote no craque','star',"renderGaleraVoting()"],
 ['Melhores','Por jogo','medal',"nav('atletaPage',null)"],
 ['Ao vivo','Transmissão','live',"nav('transmissaoPage',null)"],
 ['Agenda','Programação','cal',"nav('schedulePage',null)"],
 ['Regras','Regulamento','doc',"nav('regrasPage',null)"],
 ['Galeria','Fotos','cam','nav("galleryPage",null),renderGallery("2025")'],
 ['Mapa','Ginásio','map',"nav('mapPage',null)"],
 ['Locais','Saúde e comida','pin',"nav('placesPage',null)"],
 ['Parceiros','Patrocinadores','trophy',"nav('patrocPage',null)"],
 ['Wallpapers','Seu time','phone',"nav('wallpapersPage',null)"],
 ['Números','Impacto','chart',"nav('numerosPage',null)"],
 ['História','Campeões','medal',"nav('historyPage',null)"],
 ['Súmulas','PDF dos jogos','file','nav("sumulasPage",null),renderSumulasFinalizadas()'],
 ['Pedidos','Açaí do Diego','bag',"window.open('https://pedido.anota.ai/loja/acai-do-diego?f=msa','_blank','noopener')"],
 ['Instagram','@supercopaafc','ig',"window.open('https://www.instagram.com/supercopaafc/','_blank','noopener')"]
];
var el=null,aberto=false;
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function monta(){
  if(el)return;el=document.createElement('div');el.id='mp';
  el.innerHTML='<div class="mp-bg"></div><div class="mp-dark"></div><div class="mp-card"><div class="mp-top"><div><b>Guia da Supercopa</b><small>Tudo em um lugar</small></div><button type="button" class="mp-x" aria-label="Fechar"><svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div><div class="mp-grid">'
   +T.map(function(t,i){return '<button type="button" class="mp-t" data-i="'+i+'" style="--i:'+i+'"><i><svg viewBox="0 0 24 24">'+P[t[2]]+'</svg></i><b>'+esc(t[0])+'</b></button>'}).join('')
   +'</div></div>';
  var nb=document.getElementById('nbar');document.body.insertBefore(el,nb||null);
  el.addEventListener('click',function(e){
    if(e.target.closest('.mp-x')||e.target.classList.contains('mp-bg')||e.target.classList.contains('mp-dark'))return fecha();
    var b=e.target.closest('.mp-t');if(!b)return;var code=T[+b.dataset.i][3];fecha(true);
    try{new Function(code)()}catch(er){console.warn(er)}
  });
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&aberto)fecha()});
}
function atualizaMenu(){var pg=document.querySelector('.page.active');if(window.scNavSync&&pg)window.scNavSync(pg.id)}
function abre(){monta();if(aberto)return;aberto=true;document.body.classList.add('mp-on');var g=el.querySelector('.mp-grid');if(g)g.scrollTop=0;void el.offsetWidth;setTimeout(function(){if(aberto)el.classList.add('on')},30);if(window.scNavSync)window.scNavSync('maisPage');try{navigator.vibrate&&navigator.vibrate(8)}catch(e){}}
function fecha(semSync){if(!aberto)return;aberto=false;el.classList.remove('on');document.body.classList.remove('mp-on');if(!semSync)atualizaMenu()}
window.scMais={abre:abre,fecha:fecha,toggle:function(){aberto?fecha():abre()},aberto:function(){return aberto}};
/* qualquer navegação fecha o painel; nav("maisPage") (botões "voltar") abre o painel sobre o início */
var n0=window.nav;
if(typeof n0==='function')window.nav=function(id,el2){
  if(id==='maisPage'){var r=n0('homePage',null);setTimeout(abre,60);return r}
  if(aberto)fecha(true);
  return n0.apply(this,arguments)
};
})();
