/* ═══════════════════════════════════════
   181 SUSHI BAR — script.js
   ═══════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Nav: fundo sólido ao rolar ── */
  const nav = document.querySelector('nav');
  const scrollThreshold = document.body.classList.contains('page-cardapio') ? 20 : 60;

  window.addEventListener('scroll', function () {
    if (window.scrollY > scrollThreshold) {
      nav.style.background = 'rgba(8, 8, 6, .98)';
      nav.style.backdropFilter = 'blur(8px)';
    } else {
      nav.style.background = '';
      nav.style.backdropFilter = '';
    }
  });

  /* ── Links suaves (só na home) ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ── Tabs (só no cardápio) ── */
  const tabs    = document.querySelectorAll('.tab');
  const paineis = document.querySelectorAll('.painel');

  if (tabs.length) {
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        const alvo = this.dataset.tab;
        tabs.forEach(t => t.classList.remove('ativo'));
        paineis.forEach(p => p.classList.remove('ativo'));
        this.classList.add('ativo');
        document.getElementById(alvo).classList.add('ativo');
      });
    });
  }

  /* ── QR Code (só no cardápio) ── */
  const qrEl = document.getElementById('qrcode');
  if (qrEl) {
    const qrAlvo = window.location.href;
    new QRCode(qrEl, {
      text: qrAlvo,
      width: 156,
      height: 156,
      colorDark:  '#080806',
      colorLight: '#f0e8d8',
      correctLevel: QRCode.CorrectLevel.H
    });
  }

});
