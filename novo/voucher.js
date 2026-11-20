/* Voucher: 2 pizzas grátis da Pizzaria Express por equipe. Escolhe o time, digita o PIN, mostra o QR; a pizzaria lê e o voucher fica usado. */
(function(){
var API='https://hngwasixgyvnvfanpuax.supabase.co/functions/v1/api';
var LOGO='novo/parceiros/express-pizzas-e-lanches.png';
var esc=function(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
var PIZZA='<svg viewBox="0 0 64 64" fill="none"><path d="M6 20C20 8 44 8 58 20L32 58z" fill="#f6c453" stroke="#b7791f" stroke-width="3" stroke-linejoin="round"/><path d="M6 20C20 8 44 8 58 20" stroke="#c05621" stroke-width="6" stroke-linecap="round"/><circle cx="26" cy="26" r="4" fill="#e53e3e"/><circle cx="39" cy="28" r="4" fill="#e53e3e"/><circle cx="32" cy="40" r="4" fill="#e53e3e"/></svg>';
var st={equipe:'',pin:'',itens:null,tempo:null,times:null};
function post(acao,o){o=o||{};o.acao=acao;return fetch(API,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(o)}).then(function(r){return r.json()})}
function hora(iso){try{return new Date(iso).toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit',timeZone:'America/Sao_Paulo'})}catch(e){return ''}}
function css(){if(document.getElementById('vcCss'))return;var s=document.createElement('style');s.id='vcCss';s.textContent=
'#voucherPage{min-height:100vh;padding-bottom:130px;background:#f6f8fc!important;overflow-y:auto}#voucherPage *{box-sizing:border-box}.vc-top h1{color:#111827!important}.vc-sh,.vc-sh h3,.vc-sh b{color:#111827!important}.vc-sh p,.vc-sh label,.vc-sh small{color:#475569!important}.vc-hero,.vc-hero b,.vc-hero span{color:#fff!important}'
+'.vc{padding:0 16px 20px;font-family:Barlow,system-ui,sans-serif}'
+'.vc-top{display:flex;align-items:center;gap:10px;padding:20px 0 12px}.vc-top h1{margin:0;font:800 26px Barlow Condensed,Barlow,sans-serif;color:#111827;letter-spacing:.5px}'
+'.vc-back{border:0;background:#fff;border-radius:50%;width:38px;height:38px;box-shadow:0 2px 8px rgba(0,0,0,.12);font-size:18px;cursor:pointer;color:#0d1f5c}'
+'.vc-hero{background:linear-gradient(145deg,#b3261e,#e8590c);border-radius:24px;padding:22px 18px;text-align:center;color:#fff;box-shadow:0 14px 32px rgba(190,60,20,.35);position:relative;overflow:hidden}'
+'.vc-hero:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 80% -10%,rgba(255,255,255,.3),transparent 55%)}'
+'.vc-logo{position:relative;width:150px;height:150px;border-radius:50%;background:#fff;margin:0 auto 12px;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 22px rgba(0,0,0,.25)}.vc-logo img{max-width:78%;max-height:78%;object-fit:contain}'
+'.vc-hero b{position:relative;display:block;font:800 28px Barlow Condensed,Barlow,sans-serif;letter-spacing:1px;text-transform:uppercase}.vc-hero span{position:relative;font-size:14px;opacity:.92}'
+'.vc-eq{margin:14px 0 4px;font-size:13px;color:#475569;text-align:center}.vc-eq b{color:#0d1f5c}'
+'.vc-cards{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:14px}'
+'.vc-p{border:0;background:#fff;border-radius:22px;padding:18px 10px 16px;box-shadow:0 8px 22px rgba(13,31,92,.14);text-align:center;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:6px;font-family:inherit;color:#111827}'
+'.vc-p svg{width:84px;height:84px;animation:vcF 3s ease-in-out infinite}.vc-p:nth-child(2) svg{animation-delay:-1.5s}@keyframes vcF{50%{transform:translateY(-5px) rotate(4deg)}}'
+'.vc-p b{font:800 20px Barlow Condensed,Barlow,sans-serif;letter-spacing:.5px;text-transform:uppercase}.vc-p small{font-size:12px;font-weight:700;color:#e8590c}'
+'.vc-p.ok{background:#ecfdf3;box-shadow:none;cursor:default}.vc-p.ok svg{filter:grayscale(1);opacity:.45;animation:none}.vc-p.ok small{color:#15803d}'
+'.vc-note{margin-top:16px;font-size:12.5px;color:#64748b;text-align:center;line-height:1.45}'
+'.vc-ov{position:fixed;inset:0;z-index:9999;background:rgba(5,10,40,.7);display:flex;align-items:flex-end;justify-content:center;animation:vcO .25s}@keyframes vcO{from{opacity:0}}'
+'.vc-sh{width:min(100%,520px);background:#fff;border-radius:26px 26px 0 0;padding:22px 20px calc(26px + env(safe-area-inset-bottom,0px));animation:vcS .35s cubic-bezier(.2,.9,.2,1);max-height:92vh;overflow:auto;color:#111827;font-family:Barlow,system-ui,sans-serif}@keyframes vcS{from{transform:translateY(100%)}}'
+'.vc-sh h3{margin:0 0 4px;font:800 24px Barlow Condensed,Barlow,sans-serif;text-transform:uppercase}.vc-sh p{margin:0 0 14px;color:#64748b;font-size:14px}'
+'.vc-sh label{display:block;font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#475569;margin:12px 0 6px}'
+'.vc-sh select,.vc-sh input{width:100%;box-sizing:border-box;border:2px solid #dbe5f3;border-radius:14px;padding:14px;font-size:17px;font-family:inherit;background:#fff;color:#111827}'
+'.vc-sh input.pin{text-align:center;letter-spacing:14px;font-size:26px;font-weight:800}'
+'.vc-go{width:100%;margin-top:16px;border:0;border-radius:16px;padding:16px;font:800 18px Barlow,sans-serif;background:linear-gradient(135deg,#e8590c,#b3261e);color:#fff;cursor:pointer}.vc-go[disabled]{opacity:.6}'
+'.vc-x{background:none;border:0;width:100%;margin-top:8px;padding:12px;font-size:15px;color:#64748b;cursor:pointer}'
+'.vc-err{color:#b3261e;font-size:14px;font-weight:600;min-height:18px;margin-top:10px;text-align:center}'
+'.vc-qr{background:#fff;border-radius:22px;padding:14px;width:min(78vw,300px);margin:6px auto 12px;box-shadow:0 0 0 4px #e8590c,0 14px 30px rgba(0,0,0,.18);position:relative;overflow:hidden}.vc-qr svg{display:block;width:100%;height:auto}'
+'.vc-qr:after{content:"";position:absolute;left:0;right:0;height:50px;top:-50px;background:linear-gradient(180deg,transparent,rgba(232,89,12,.28),transparent);animation:vcScan 2.4s linear infinite}@keyframes vcScan{to{top:100%}}'
+'.vc-done{text-align:center;padding:14px 0}.vc-done i{display:inline-flex;width:92px;height:92px;border-radius:50%;background:#22c55e;color:#fff;align-items:center;justify-content:center;font-size:54px;font-style:normal;animation:vcP .6s cubic-bezier(.2,1.6,.4,1)}@keyframes vcP{from{transform:scale(0)}}'
+'.vc-done b{display:block;margin-top:12px;font:800 26px Barlow Condensed,Barlow,sans-serif;text-transform:uppercase}'
+'.vc-ban{display:flex;align-items:center;gap:14px;margin:14px 16px 0;background:linear-gradient(135deg,#b3261e,#e8590c);border:2px solid #ffd34d;border-radius:18px;padding:14px 16px;cursor:pointer;box-shadow:0 8px 22px rgba(190,60,20,.32);color:#fff;overflow:hidden;position:relative}'
+'.vc-ban:after{content:"";position:absolute;top:0;bottom:0;left:-40%;width:25%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.4),transparent);transform:skewX(-20deg);animation:vcSh 4.5s ease-in-out infinite}@keyframes vcSh{0%,60%{left:-40%}100%{left:140%}}'
+'.vc-ban .pz{width:50px;height:50px;flex:none;animation:vcF 3s ease-in-out infinite}.vc-ban .pz svg{width:100%;height:100%}'
+'.vc-ban div.t{flex:1;min-width:0}.vc-ban small{display:block;font-size:10px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:#ffd34d}.vc-ban strong{display:block;font-size:17px;font-weight:900;margin-top:2px}.vc-ban em{display:block;font-style:normal;font-size:11.5px;opacity:.9;margin-top:2px}'
+'.vc-ban .go{font-size:12px;font-weight:900;color:#7a1d0c;background:#ffd34d;padding:9px 14px;border-radius:999px;white-space:nowrap}';
document.head.appendChild(s)}
function carregaTimes(){if(st.times)return Promise.resolve(st.times);
 return fetch(API+'?action=timesPublicos').then(function(r){return r.json()}).then(function(r){st.times=(r.times||[]).map(function(t){return t.nome}).sort(function(a,b){return a.localeCompare(b)});return st.times}).catch(function(){return[]})}
function itemHtml(i,it){var n=i+1,ok=it&&it.retirado;
 return '<button type="button" class="vc-p'+(ok?' ok':'')+'" data-i="'+i+'">'+PIZZA+'<b>Pizza '+n+'</b><small>'+(ok?'Retirada às '+esc(hora(it.em)):(st.equipe?'Toque para usar':'Toque para resgatar'))+'</small></button>'}
function render(){var pg=document.getElementById('vcBody');if(!pg)return;
 pg.innerHTML='<div class="vc-hero"><div class="vc-logo"><img src="'+LOGO+'" alt="Pizzaria Express"></div><b>2 pizzas grátis</b><span>Cortesia da Pizzaria Express para cada equipe da Supercopa</span></div>'
 +(st.equipe?'<div class="vc-eq">Equipe: <b>'+esc(st.equipe)+'</b></div>':'')
 +'<div class="vc-cards">'+itemHtml(0,st.itens&&st.itens[0])+itemHtml(1,st.itens&&st.itens[1])+'</div>'
 +'<div class="vc-note">Cada pizza gera um QR code que vale <b>uma única vez</b>. Mostre na Pizzaria Express para retirar.</div>'}
function fecha(){clearInterval(st.tempo);st.tempo=null;var o=document.getElementById('vcOv');if(o)o.remove()}
function sheet(html){fecha();var o=document.createElement('div');o.id='vcOv';o.className='vc-ov';o.innerHTML='<div class="vc-sh">'+html+'</div>';o.addEventListener('click',function(e){if(e.target===o)fecha()});document.body.appendChild(o);return o}
function pedePin(i){
 carregaTimes().then(function(times){
  var saved='';try{saved=localStorage.getItem('sc_vc_eq')||''}catch(e){}
  var o=sheet('<h3>Pizza '+(i+1)+'</h3><p>Escolha a sua equipe e digite o PIN dela.</p><label>Equipe</label><select id="vcEq"><option value="">Selecione…</option>'+times.map(function(t){return '<option'+((st.equipe||saved)===t?' selected':'')+'>'+esc(t)+'</option>'}).join('')+'</select><label>PIN da equipe</label><input id="vcPin" class="pin" type="tel" inputmode="numeric" maxlength="4" autocomplete="off" placeholder="••••"><div class="vc-err" id="vcErr"></div><button class="vc-go" id="vcGo">Gerar QR code</button><button class="vc-x" id="vcNo">Cancelar</button>');
  o.querySelector('#vcNo').onclick=fecha;
  var go=o.querySelector('#vcGo'),err=o.querySelector('#vcErr');
  function enviar(){var eq=o.querySelector('#vcEq').value,pin=o.querySelector('#vcPin').value.trim();
   if(!eq)return err.textContent='Escolha a equipe.';if(!/^\d{4}$/.test(pin))return err.textContent='O PIN tem 4 números.';
   err.textContent='';go.disabled=true;go.textContent='Verificando…';
   post('voucherQr',{equipe:eq,pin:pin,item:'pizza'+(i+1)}).then(function(r){go.disabled=false;go.textContent='Gerar QR code';
    if(!r||!r.ok){err.textContent=(r&&r.erro)||'Não foi possível validar.';return}
    st.equipe=eq;st.pin=pin;try{localStorage.setItem('sc_vc_eq',eq)}catch(e){}
    post('voucherEstado',{equipe:eq,pin:pin}).then(function(e){if(e&&e.ok){st.itens=e.itens;render()}});
    if(r.retirado){mostraFeito(r.em,i);return}
    mostraQr(r.codigo,i)}).catch(function(){go.disabled=false;go.textContent='Gerar QR code';err.textContent='Sem conexão. Tente de novo.'})}
  go.onclick=enviar;o.querySelector('#vcPin').addEventListener('keydown',function(e){if(e.key==='Enter')enviar()})})}
function mostraFeito(em,i){sheet('<div class="vc-done"><i>✓</i><b>Pizza '+(i+1)+' retirada!</b><p>Registrado às '+esc(hora(em))+'. Este voucher não vale mais.</p></div><button class="vc-go" id="vcOk">Fechar</button>').querySelector('#vcOk').onclick=fecha;try{navigator.vibrate&&navigator.vibrate([80,60,80])}catch(e){}}
function mostraQr(cod,i){
 var svg='';try{var q=qrcode(0,'M');q.addData(cod);q.make();svg=q.createSvgTag({cellSize:6,margin:0,scalable:true})}catch(e){}
 var o=sheet('<h3 style="text-align:center">Pizza '+(i+1)+' · '+esc(st.equipe)+'</h3><p style="text-align:center">Mostre este QR code na <b>Pizzaria Express</b>. Vale uma única vez.</p><div class="vc-qr">'+svg+'</div><div style="text-align:center;font-size:13px;color:#64748b">Aguardando a leitura…</div><button class="vc-x" id="vcNo">Fechar</button>');
 o.querySelector('#vcNo').onclick=fecha;
 st.tempo=setInterval(function(){post('voucherQr',{equipe:st.equipe,pin:st.pin,item:'pizza'+(i+1)}).then(function(r){
   if(r&&r.ok&&r.retirado){post('voucherEstado',{equipe:st.equipe,pin:st.pin}).then(function(e){if(e&&e.ok){st.itens=e.itens;render()}});mostraFeito(r.em,i)}}).catch(function(){})},3500)}
function pagina(){
 css();var pg=document.getElementById('voucherPage');if(pg)return pg;
 var home=document.getElementById('homePage');if(!home)return null;
 pg=document.createElement('div');pg.id='voucherPage';pg.className='page';
 pg.innerHTML='<div class="vc"><div class="vc-top"><button class="vc-back" type="button" aria-label="Voltar" onclick="nav(\'homePage\',null)">←</button><h1>Voucher</h1></div><div id="vcBody"></div></div>';
 home.parentNode.insertBefore(pg,home.nextSibling);
 pg.addEventListener('click',function(e){var b=e.target.closest('.vc-p');if(!b||b.classList.contains('ok'))return;pedePin(+b.dataset.i)});
 return pg}
function abre(){pagina();render();window.scrollTo(0,0)}
function banner(){var home=document.getElementById('homePage');if(!home||document.getElementById('vcBan'))return;css();
 var b=document.createElement('div');b.id='vcBan';b.className='vc-ban';b.innerHTML='<div class="pz">'+PIZZA+'</div><div class="t"><small>Cortesia Pizzaria Express</small><strong>Voucher · 2 pizzas grátis</strong><em>Resgate com o PIN da sua equipe</em></div><div class="go">Abrir →</div>';
 b.onclick=function(){nav('voucherPage',null);abre()};
 home.appendChild(b);posBanner()}
/* até sábado 28/11 às 13h fica logo abaixo do cadastro de atletas; a partir daí sobe para o topo da página inicial */
function posBanner(){var home=document.getElementById('homePage'),b=document.getElementById('vcBan');if(!home||!b)return;
 var topo=Date.now()>=new Date(2026,10,28,13,0,0).getTime();
 var cad=[].slice.call(home.children).filter(function(e){return /cadastroAtletasPage/.test(e.getAttribute('onclick')||'')})[0];
 var av=document.getElementById('homeAvisos');
 if(!topo&&cad){if(cad.nextSibling!==b)home.insertBefore(b,cad.nextSibling)}
 else if(av){if(av.nextSibling!==b)home.insertBefore(b,av.nextSibling)}
 else if(home.firstChild!==b)home.insertBefore(b,home.firstChild)}
setInterval(posBanner,60000);
window.scVoucher={abre:abre,pos:posBanner};
function ini(){pagina();banner()}
document.addEventListener('DOMContentLoaded',ini);if(document.readyState!=='loading')ini();
})();
