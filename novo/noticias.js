/* Página "Notícias": todas, da mais nova para a mais velha. A home mostra só as 3 mais novas com "Ver mais". */
(function(){
var API='https://hngwasixgyvnvfanpuax.supabase.co/functions/v1/api';
var esc=function(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
function lista(){
  if(window.__NOT&&window.__NOT.length)return Promise.resolve(window.__NOT);
  return fetch(API+'?action=noticias').then(function(r){return r.json()}).then(function(d){return (d.noticias||[]).slice().sort(function(a,b){return (+b.id||0)-(+a.id||0)})}).catch(function(){return[]})
}
function pagina(){
  var pg=document.getElementById('noticiasPage');if(pg)return pg;
  var home=document.getElementById('homePage');if(!home)return null;
  pg=document.createElement('div');pg.id='noticiasPage';pg.className='page';pg.style.cssText='min-height:100vh;padding:0 16px 130px;background:#f6f8fc;overflow-y:auto';
  pg.innerHTML='<div style="display:flex;align-items:center;gap:10px;padding:20px 0 12px"><button type="button" aria-label="Voltar" onclick="nav(\'homePage\',null)" style="border:0;background:#fff;border-radius:50%;width:38px;height:38px;box-shadow:0 2px 8px rgba(0,0,0,.12);font-size:18px;cursor:pointer;color:#0d1f5c">←</button><div style="font:800 26px Barlow Condensed,Barlow,sans-serif;color:#111827;text-transform:uppercase;letter-spacing:.5px">Notícias</div></div><div id="noticiasLista"></div>';
  home.parentNode.insertBefore(pg,home.nextSibling);return pg
}
function abre(){
  pagina();nav('noticiasPage',null);if(window.scNavSync)scNavSync('homePage');window.scrollTo(0,0);
  var box=document.getElementById('noticiasLista');box.innerHTML='<p style="color:#6b7aa5;font-size:13px">Carregando…</p>';
  lista().then(function(n){
    box.innerHTML=n.length?n.map(function(x,i){return '<div class="nnews" style="animation-delay:'+Math.min(i,10)*.05+'s"><div class="k">'+esc(x.cat)+' · '+esc(x.data)+'</div><b>'+esc(x.titulo)+'</b>'+(x.corpo?'<p>'+esc(x.corpo)+'</p>':'')+'</div>'}).join(''):'<p style="color:#6b7aa5;font-size:13px">Sem notícias por enquanto.</p>'
  })
}
window.scNoticias={abre:abre};
})();
