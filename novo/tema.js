/* Tema escuro (auto à noite ou pelo sistema, com botão no painel Mais) + esqueletos de carregamento */
(function(){
var K='sc_tema';
function modo(){try{return localStorage.getItem(K)||'auto'}catch(e){return 'auto'}}
function noite(){var h=new Date().getHours();return h>=19||h<6}
function sistemaEscuro(){try{return window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches}catch(e){return false}}
function escuro(){var m=modo();return m==='escuro'||(m==='auto'&&(sistemaEscuro()||noite()))}
function aplica(){
  var d=escuro();document.documentElement.classList.toggle('dk',d);if(document.body)document.body.classList.toggle('dk',d);
  var mt=document.querySelector('meta[name=theme-color]');if(mt)mt.setAttribute('content',d?'#0a1130':'#1b52e0');
  var l=document.getElementById('mpTema');if(l)l.textContent={auto:'Tema: auto',escuro:'Tema: escuro',claro:'Tema: claro'}[modo()];
}
window.scTema={modo:modo,aplica:aplica,ciclo:function(){var n={auto:'escuro',escuro:'claro',claro:'auto'}[modo()];try{localStorage.setItem(K,n)}catch(e){}aplica();return n}};
document.addEventListener('DOMContentLoaded',aplica);if(document.body)aplica();
try{matchMedia('(prefers-color-scheme: dark)').addEventListener('change',aplica)}catch(e){}
setInterval(aplica,5*60*1000);

/* "Carregando…" vira esqueleto animado */
var TAGS={DIV:1,P:1,TD:1,LI:1};
function troca(el){
  if(!el||el.nodeType!==1||el.__sk||!TAGS[el.tagName])return;
  var t=(el.textContent||'').trim();
  if(t.length>40||!/^Carregando/i.test(t)||el.children.length>1)return;
  el.__sk=1;el.innerHTML='<div class="sc-sk"><i></i><i></i><i></i></div>';
}
new MutationObserver(function(ms){ms.forEach(function(m){
  troca(m.target.nodeType===1?m.target:m.target.parentElement);
  m.addedNodes&&[].forEach.call(m.addedNodes,function(n){if(n.nodeType===1)troca(n)})
})}).observe(document.documentElement,{childList:true,subtree:true,characterData:true});
})();
