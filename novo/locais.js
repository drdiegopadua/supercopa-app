/* Locais úteis no visual do quiz: lê os cartões já existentes na página e refaz o layout com as classes qz-*. */
(function(){
var esc=function(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
var ICO={
 saude:'<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z"/>',
 comida:'<path d="M6 3v18M3 3v6a3 3 0 006 0V3M17 3v18M20 3c0 3-3 4-3 7s3 3 3 3"/>',
 pin:'<path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>'
};
function icone(sec,nome){var t=(sec+' '+nome).toLowerCase();if(/sa[uú]de|hospital|farm/.test(t))return ICO.saude;if(/aliment|restaur|pizz|lanch|a[cç]a[ií]|churras|bar\b/.test(t))return ICO.comida;return ICO.pin}
function monta(){
  var pg=document.getElementById('placesPage');if(!pg||pg.dataset.lu)return;
  var as=[].slice.call(pg.querySelectorAll('a[href*="google.com/maps"]'));if(!as.length)return;
  var grupos=[],atual=null;
  as.forEach(function(a){
    var box=a.parentElement,rot='Locais';
    var p=box&&box.previousElementSibling;if(p&&p.textContent&&p.textContent.trim().length<40&&!p.querySelector('a'))rot=p.textContent.trim();
    if(!atual||atual.t!==rot){atual={t:rot,i:[]};grupos.push(atual)}
    var ds=a.querySelectorAll('div'),nome='',sub='';
    for(var k=0;k<ds.length;k++){var tx=(ds[k].children.length===0?ds[k].textContent.trim():'');if(!tx||/^Maps/.test(tx)||tx.length<2||!/[A-Za-zÀ-ÿ]/.test(tx))continue;if(!nome)nome=tx;else if(!sub){sub=tx;break}}
    atual.i.push({n:nome,s:sub,h:a.getAttribute('href')})
  });
  var n=0;
  var html=grupos.map(function(g){
    return '<div class="qz-sec"><h4>'+esc(g.t)+'</h4>'+g.i.map(function(x){
      return '<a class="lu" style="--i:'+Math.min(n++,12)+'" href="'+esc(x.h)+'" target="_blank" rel="noopener"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">'+icone(g.t,x.n)+'</svg></i><span><b>'+esc(x.n)+'</b>'+(x.s?'<small>'+esc(x.s)+'</small>':'')+'</span><em>Mapa<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg></em></a>'
    }).join('')+'</div>'
  }).join('');
  pg.dataset.lu='1';
  pg.innerHTML='<div class="qz lu-wrap"><div class="qz-intro"><i class="qz-pix"></i><b>Perto do evento</b><span>Saúde, alimentação e hospedagem em <em>Afonso Cláudio</em>. Toque para abrir no mapa.</span></div>'+html+'</div>';
}
document.addEventListener('DOMContentLoaded',monta);
if(document.readyState!=='loading')monta();
})();
