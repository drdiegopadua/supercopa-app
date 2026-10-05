/* Visual "card esportivo" da Supercopa: fundo claro com manchas de tinta azul, listras e card de resultado.
   Usado pelo telão (fundo) e pelo botão "card do resultado" do app. */
(function (w) {
  var AZUL = '#2336c4', AZUL2 = '#16239a', LARANJA = '#d9441f', TINTA = '#14206b';

  function prng(seed) {
    var s = Math.abs(Math.floor(seed)) % 2147483647 || 12345;
    return function () { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
  }
  function circ(ctx, x, y, r) { ctx.beginPath(); ctx.arc(x, y, Math.max(r, 0.6), 0, Math.PI * 2); ctx.fill(); }

  function mancha(ctx, cx, cy, R, rnd, cor) {
    ctx.fillStyle = cor;
    circ(ctx, cx, cy, R * 0.55);
    var i, a, d, r;
    for (i = 0; i < 70; i++) { a = rnd() * 6.2832; d = rnd() * R * 0.85; r = R * (0.10 + rnd() * 0.26); circ(ctx, cx + Math.cos(a) * d, cy + Math.sin(a) * d, r); }
    for (i = 0; i < 160; i++) { a = rnd() * 6.2832; d = R * (0.75 + rnd() * 1.15); r = 1.2 + rnd() * rnd() * R * 0.075; circ(ctx, cx + Math.cos(a) * d, cy + Math.sin(a) * d, r); }
  }

  function listras(ctx, W, H, canto) {
    ctx.save();
    ctx.beginPath();
    if (canto === 'tl') { ctx.moveTo(0, 0); ctx.lineTo(W * 0.27, 0); ctx.lineTo(0, H * 0.46); }
    else { ctx.moveTo(W, H); ctx.lineTo(W * 0.80, H); ctx.lineTo(W, H * 0.62); }
    ctx.closePath(); ctx.clip();
    ctx.lineWidth = Math.max(18, W * 0.022);
    var passo = ctx.lineWidth * 1.55, n = 18, i;
    for (i = 0; i < n; i++) {
      ctx.strokeStyle = (i % 3 === 2) ? LARANJA : (i % 2 ? AZUL2 : AZUL);
      var x0 = canto === 'tl' ? i * passo - passo * 2 : W - i * passo + passo * 2;
      ctx.beginPath();
      if (canto === 'tl') { ctx.moveTo(x0, -40); ctx.lineTo(x0 - H * 0.7, H * 0.8); }
      else { ctx.moveTo(x0, H + 40); ctx.lineTo(x0 + H * 0.7, H * 0.2); }
      ctx.stroke();
    }
    ctx.restore();
  }

  function textoVertical(ctx, x, W, H, lado) {
    ctx.save();
    ctx.translate(x, H / 2);
    ctx.rotate(lado === 'l' ? -Math.PI / 2 : Math.PI / 2);
    ctx.font = '400 ' + Math.round(H * 0.115) + 'px "Bebas Neue", Impact, sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.lineWidth = 3; ctx.strokeStyle = 'rgba(35,54,196,.55)'; ctx.fillStyle = 'rgba(35,54,196,.05)';
    var t = 'SUPERCOPA SUPERCOPA SUPERCOPA';
    ctx.strokeText(t, 0, 0); ctx.fillText(t, 0, 0);
    ctx.restore();
  }

  function fundo(ctx, W, H, seed) {
    var rnd = prng(seed || 7), i;
    ctx.fillStyle = '#e3e3e5'; ctx.fillRect(0, 0, W, H);
    var g = ctx.createRadialGradient(W / 2, H * 0.45, H * 0.1, W / 2, H * 0.5, Math.max(W, H) * 0.75);
    g.addColorStop(0, 'rgba(255,255,255,.75)'); g.addColorStop(1, 'rgba(160,160,170,.18)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    var n = Math.round(W * H / 170);
    for (i = 0; i < n; i++) {
      ctx.fillStyle = rnd() < 0.7 ? 'rgba(20,20,40,' + (0.03 + rnd() * 0.10) + ')' : 'rgba(255,255,255,' + (0.20 + rnd() * 0.30) + ')';
      circ(ctx, rnd() * W, rnd() * H, 0.5 + rnd() * rnd() * 2.4);
    }
    if (W / H > 1.2) { textoVertical(ctx, W * 0.032, W, H, 'l'); textoVertical(ctx, W * 0.968, W, H, 'r'); }
    else { textoVertical(ctx, W * 0.045, W, H, 'l'); textoVertical(ctx, W * 0.955, W, H, 'r'); }
    mancha(ctx, W * 0.00, H * 0.60, H * 0.20, rnd, AZUL);
    mancha(ctx, W * 1.00, H * 0.42, H * 0.22, rnd, AZUL);
    mancha(ctx, W * 0.97, H * 1.00, H * 0.20, rnd, AZUL2);
    mancha(ctx, W * 0.05, H * 1.02, H * 0.10, rnd, AZUL2);
    mancha(ctx, W * 0.80, H * 0.02, H * 0.06, rnd, AZUL);
    for (i = 0; i < 40; i++) { ctx.fillStyle = AZUL; var gx = rnd() < 0.5 ? rnd() * W * 0.18 : W - rnd() * W * 0.18; circ(ctx, gx, rnd() * H, 1 + rnd() * rnd() * 5); }
    listras(ctx, W, H, 'tl'); listras(ctx, W, H, 'br');
    var v = ctx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.45, W / 2, H / 2, Math.max(W, H) * 0.8);
    v.addColorStop(0, 'rgba(0,0,0,0)'); v.addColorStop(1, 'rgba(10,15,60,.22)');
    ctx.fillStyle = v; ctx.fillRect(0, 0, W, H);
  }

  function fontes() {
    if (!w.document || !document.fonts) return Promise.resolve();
    return Promise.all([
      document.fonts.load('900 120px "Playfair Display"'),
      document.fonts.load('400 120px "Bebas Neue"')
    ]).catch(function () {});
  }

  function carregarImg(url) {
    return new Promise(function (resolve) {
      if (!url) return resolve(null);
      var im = new Image(); im.crossOrigin = 'anonymous';
      var t = setTimeout(function () { resolve(null); }, 5000);
      im.onload = function () { clearTimeout(t); resolve(im); };
      im.onerror = function () { clearTimeout(t); resolve(null); };
      im.src = url;
    });
  }

  function iniciais(nome) {
    var p = String(nome || '').replace(/[^A-Za-zÀ-ú ]/g, '').split(' ').filter(Boolean).slice(0, 2);
    return (p.map(function (x) { return x[0]; }).join('') || '?').toUpperCase();
  }

  function escudo(ctx, img, nome, cx, cy, r) {
    ctx.save();
    ctx.fillStyle = '#fff'; circ(ctx, cx, cy, r + 8);
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.clip();
    if (img) { ctx.drawImage(img, cx - r, cy - r, r * 2, r * 2); }
    else { ctx.fillStyle = '#eef1ff'; ctx.fillRect(cx - r, cy - r, r * 2, r * 2); ctx.fillStyle = AZUL2; ctx.font = '400 ' + Math.round(r * 1.0) + 'px "Bebas Neue", Impact, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(iniciais(nome), cx, cy + r * 0.05); }
    ctx.restore();
  }

  function ajustar(ctx, txt, fonte, larg, tamIni) {
    var t = tamIni;
    ctx.font = fonte.replace('{s}', t);
    while (ctx.measureText(txt).width > larg && t > 18) { t -= 2; ctx.font = fonte.replace('{s}', t); }
    return t;
  }

  /* d: {titulo:'FIM DE JOGO', equipeA, equipeB, placarA, placarB, linhas:[...], escudoA, escudoB, rodape} */
  function card(canvas, d) {
    var W = 1080, H = 1080;
    canvas.width = W; canvas.height = H;
    var ctx = canvas.getContext('2d');
    return Promise.all([fontes(), carregarImg(d.escudoA), carregarImg(d.escudoB)]).then(function (r) {
      fundo(ctx, W, H, 11);
      ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic'; ctx.fillStyle = AZUL;
      var tit = (d.titulo || 'FIM DE JOGO').split(' ');
      if (tit.length === 3) {
        ctx.font = '900 190px "Playfair Display", Georgia, serif'; ctx.fillText(tit[0], W / 2 - 20, 215);
        ctx.fillText(tit[2], W / 2 - 40, 385);
        ctx.font = '900 62px "Playfair Display", Georgia, serif'; ctx.fillText(tit[1], W / 2 + 262, 296);
      } else {
        ctx.font = '900 150px "Playfair Display", Georgia, serif'; ctx.fillText(d.titulo, W / 2, 300);
      }
      ctx.fillStyle = AZUL2; ctx.fillRect(130, 470, 820, 190);
      escudo(ctx, r[1], d.equipeA, 225, 565, 74);
      escudo(ctx, r[2], d.equipeB, 855, 565, 74);
      ctx.fillStyle = AZUL; ctx.fillRect(340, 410, 400, 330);
      ctx.fillStyle = '#fff'; ctx.textBaseline = 'middle';
      ctx.font = '400 270px "Bebas Neue", Impact, sans-serif';
      ctx.textAlign = 'right'; ctx.fillText(String(d.placarA), 520, 585);
      ctx.textAlign = 'left'; ctx.fillText(String(d.placarB), 560, 585);
      ctx.textAlign = 'center'; ctx.font = '400 60px "Bebas Neue", Impact, sans-serif'; ctx.fillText('x', 540, 610);
      ctx.fillStyle = TINTA; ctx.textBaseline = 'alphabetic';
      ajustar(ctx, d.equipeA, '400 {s}px "Bebas Neue", Impact, sans-serif', 190, 40); ctx.textAlign = 'center'; ctx.fillText(d.equipeA, 225, 715);
      ajustar(ctx, d.equipeB, '400 {s}px "Bebas Neue", Impact, sans-serif', 190, 40); ctx.fillText(d.equipeB, 855, 715);
      var y = 800;
      (d.linhas || []).slice(0, 5).forEach(function (l, i) {
        ctx.fillStyle = i === 0 ? LARANJA : TINTA;
        ajustar(ctx, l, '400 {s}px "Bebas Neue", Impact, sans-serif', 560, i === 0 ? 54 : 44);
        ctx.fillText(l, W / 2, y); y += i === 0 ? 62 : 52;
      });
      ctx.fillStyle = AZUL2; ctx.font = '400 28px "Bebas Neue", Impact, sans-serif'; ctx.textAlign = 'center';
      ctx.fillText(d.rodape || 'SUPERCOPA AFC 2026 · AFONSO CLÁUDIO-ES', W / 2, 1040);
      return canvas;
    });
  }

  w.SC = { AZUL: AZUL, AZUL2: AZUL2, LARANJA: LARANJA, TINTA: TINTA, fundo: fundo, fontes: fontes, card: card, carregarImg: carregarImg, iniciais: iniciais };
})(window);
