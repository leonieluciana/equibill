/* EquiBill Startseite – kleine Demo-Logik (kein Backend, keine Datenspeicherung)
   1) Mobiles Menü   2) Kategorie-Filter im Shop   3) Demo-Warenkorb-Zähler mit Rückmeldung
   Ohne JavaScript bleibt alles nutzbar: das Menü ist ein <details>-Element,
   alle Produkte sind sichtbar. */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  /* ---------- 1) Mobiles Menü ---------- */
  var menu = document.querySelector('.nav-mobile');
  var desktopQuery = window.matchMedia('(min-width: 1240px)'); // ab hier gilt die Desktop-Navigation (gleicher Wert wie in css/style.css)

  function closeMenu(returnFocus) {
    if (!menu || !menu.open) { return; }
    menu.open = false;
    if (returnFocus) { menu.querySelector('summary').focus(); }
  }

  if (menu) {
    // Tipp auf einen Menüpunkt: Menü schließt, die Seite springt zum Abschnitt
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { closeMenu(false); });
    });
    // Escape-Taste schließt das Menü und gibt den Fokus an „Menü“ zurück
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeMenu(true); }
    });
    // Tipp außerhalb des Menüs schließt es
    document.addEventListener('click', function (e) {
      if (!menu.contains(e.target)) { closeMenu(false); }
    });
    // Wechsel auf Desktopbreite (z. B. Tablet drehen): offenes Menü zurücksetzen
    desktopQuery.addEventListener('change', function (e) {
      if (e.matches) { closeMenu(false); }
    });
  }

  /* ---------- 2) Shop-Filter und 3) Demo-Warenkorb ---------- */
  var products = document.querySelectorAll('.product');
  var filterButtons = document.querySelectorAll('.filter button');
  var toast = document.getElementById('toast');
  var cartCounters = document.querySelectorAll('[data-cart-count]');
  var count = 0;      // nur im Browserfenster, wird nirgends gespeichert
  var toastTimer;

  function showToast(text) {
    toast.textContent = text;
    toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('is-visible'); }, 3200);
  }

  function applyFilter(category) {
    products.forEach(function (p) {
      p.hidden = !(category === 'all' || p.getAttribute('data-category') === category);
    });
    filterButtons.forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-filter') === category));
    });
  }

  filterButtons.forEach(function (b) {
    b.addEventListener('click', function () { applyFilter(b.getAttribute('data-filter')); });
  });
  // Kategorie-Karten und Footer-Links setzen den Filter und springen zum Shop
  document.querySelectorAll('a[data-filter]').forEach(function (a) {
    a.addEventListener('click', function () { applyFilter(a.getAttribute('data-filter')); });
  });

  document.querySelectorAll('[data-add]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      count += 1;
      cartCounters.forEach(function (c) { c.textContent = String(count); });
      showToast('Demo: „' + btn.getAttribute('data-add') + '“ wurde zum Warenkorb hinzugefügt. Die Warenkorb-Seite folgt.');
    });
  });

  var cartLink = document.querySelector('[data-cart-link]');
  if (cartLink) {
    cartLink.addEventListener('click', function (e) {
      e.preventDefault();
      showToast('Demo: Die Warenkorb-Seite ist noch nicht umgesetzt.');
    });
  }

  /* ---------- 4) Scroll-Effekte ---------- */
  // Wer im System „Bewegung reduzieren“ eingestellt hat, bekommt keine Animationen.
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 4a) Scroll-Reveal: Elemente blenden beim Hineinscrollen sanft ein.
     Die Klasse „reveal“ setzt erst JavaScript; ohne JS bleibt alles sichtbar. */
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var revealTargets = document.querySelectorAll(
      '.hero__values li, .section-head p, .cat, .product, .manage__intro, .manage__stage, .benefit, .about__photo, .about p, .faq__list details'
    );
    // Geschwister in einer Reihe nacheinander einblenden (gestaffelt, max. 4 Stufen)
    revealTargets.forEach(function (el) {
      var index = Array.prototype.indexOf.call(el.parentElement.children, el);
      el.classList.add('reveal');
      el.style.setProperty('--reveal-delay', (Math.min(index, 3) * 0.12) + 's');
    });
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          el.classList.add('is-visible');
          revealObserver.unobserve(el); // nur einmal einblenden
          // Nach dem Einblenden aufräumen, damit z. B. der Hover der Kacheln wieder greift
          el.addEventListener('transitionend', function cleanUp(e) {
            if (e.target !== el || e.propertyName !== 'opacity') { return; }
            el.classList.remove('reveal', 'is-visible');
            el.style.removeProperty('--reveal-delay');
            el.removeEventListener('transitionend', cleanUp);
          });
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    revealTargets.forEach(function (el) { revealObserver.observe(el); });
  }

  /* 4b) Text Reveal: Überschriften leuchten beim Scrollen Wort für Wort auf.
     Jede Überschrift wird in einzelne <span class="word"> zerlegt (sicher per textContent,
     kein innerHTML). Fortschritt: Überschrift wandert von 88 % auf 40 % der Fensterhöhe.
     Kursives <em> (z. B. im Hero) bleibt unberührt, weil der Hero nicht dazugehört. */
  var revealHeadings = [];
  if (!reduceMotion) {
    document.querySelectorAll('.section-head h2, .manage h2, .about h2').forEach(function (heading) {
      var words = heading.textContent.trim().split(/\s+/);
      heading.textContent = '';
      var wordEls = words.map(function (w, i) {
        var span = document.createElement('span');
        span.className = 'word';
        span.textContent = w;
        heading.appendChild(span);
        if (i < words.length - 1) { heading.appendChild(document.createTextNode(' ')); }
        return span;
      });
      heading.classList.add('statement--split');
      revealHeadings.push({ el: heading, words: wordEls });
    });
  }

  var ticking = false;
  function updateHeadings() {
    var vh = window.innerHeight, start = vh * 0.88, end = vh * 0.40;
    revealHeadings.forEach(function (h) {
      var top = h.el.getBoundingClientRect().top;
      var progress = Math.min(1, Math.max(0, (start - top) / (start - end)));
      var lit = Math.round(progress * h.words.length);
      h.words.forEach(function (w, i) { w.classList.toggle('is-lit', i < lit); });
    });
    ticking = false;
  }
  if (revealHeadings.length) {
    // requestAnimationFrame: höchstens einmal pro Bildschirm-Bild rechnen (schont den Prozessor)
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(updateHeadings); }
    }, { passive: true });
    window.addEventListener('resize', updateHeadings);
    updateHeadings();
  }

  /* 4c) Animierte Produkt-Demo: Rechnung baut sich auf, sobald sie sichtbar wird.
     Positionen erscheinen nacheinander (CSS), die Summe zählt hoch (hier). Werte sind fiktiv. */
  var invoice = document.querySelector('[data-invoice]');
  if (invoice && !reduceMotion && 'IntersectionObserver' in window) {
    var totalEl = invoice.querySelector('[data-invoice-total]');
    var total = 0;
    invoice.querySelectorAll('[data-amount]').forEach(function (el) { total += Number(el.getAttribute('data-amount')); });
    var euro = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });
    invoice.classList.add('invoice--ready');
    totalEl.textContent = euro.format(0);

    var invoiceObserver = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) { return; }
      invoiceObserver.disconnect();
      invoice.classList.add('is-playing');
      // Summe ab 2,4 s (wenn die Gesamtzeile erscheint) in 1,2 s hochzählen
      setTimeout(function () {
        var startTime = null, duration = 1200;
        function step(now) {
          if (!startTime) { startTime = now; }
          var t = Math.min(1, (now - startTime) / duration);
          var eased = 1 - Math.pow(1 - t, 3); // erst schnell, dann sanft auslaufend
          totalEl.textContent = euro.format(total * eased);
          if (t < 1) { window.requestAnimationFrame(step); }
        }
        window.requestAnimationFrame(step);
      }, 2400);
    }, { threshold: 0.4 });
    invoiceObserver.observe(invoice);
  }

  /* 4d) Horizontal Scrolling (ab 900 px): Beim Herunterscrollen wandern die Funktionskarten
     nach links. Der Bereich wird so hoch gemacht, wie das Band breit ist; darin klebt eine
     Bühne (CSS „position: sticky“), deren Band per transform verschoben wird.
     Auf dem Handy bleibt das Band normal wischbar (kein Umlenken der Scroll-Richtung). */
  var hScroller = document.querySelector('[data-hscroll]');
  if (hScroller && !reduceMotion) {
    var hTrack = hScroller.querySelector('[data-hscroll-track]');
    var hSticky = hTrack.parentElement;
    var hDistance = 0, hTicking = false;
    var hQuery = window.matchMedia('(min-width: 900px)'); // ab hier horizontal, darunter wischbar

    function hLayout() {
      var active = hQuery.matches;
      hScroller.classList.toggle('is-hscroll', active);
      if (!active) { hScroller.style.removeProperty('height'); hTrack.style.removeProperty('transform'); return; }
      hDistance = Math.max(0, hTrack.scrollWidth - hSticky.clientWidth);
      // Höhe = sichtbare Bühne + Weg, den das Band zurücklegt
      hScroller.style.height = (hSticky.offsetHeight + hDistance) + 'px';
      hUpdate();
    }
    function hUpdate() {
      hTicking = false;
      if (!hScroller.classList.contains('is-hscroll')) { return; }
      var rect = hScroller.getBoundingClientRect();
      var stickyTop = parseFloat(getComputedStyle(hSticky).top) || 0;
      var progress = Math.min(1, Math.max(0, (stickyTop - rect.top) / Math.max(1, hDistance)));
      hTrack.style.transform = 'translateX(' + (-progress * hDistance) + 'px)';
    }
    window.addEventListener('scroll', function () {
      if (!hTicking) { hTicking = true; window.requestAnimationFrame(hUpdate); }
    }, { passive: true });
    window.addEventListener('resize', hLayout);
    hQuery.addEventListener('change', hLayout);
    hLayout();
  }

  /* 4e) Magnetic Buttons: Buttons folgen der Maus ein kleines Stück (nur mit Maus, nicht auf Touch).
     Verschoben wird per CSS-Eigenschaft „translate“, damit andere Effekte nicht gestört werden. */
  if (!reduceMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.querySelectorAll('.btn').forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var r = btn.getBoundingClientRect();
        var dx = e.clientX - (r.left + r.width / 2);
        var dy = e.clientY - (r.top + r.height / 2);
        btn.style.translate = (dx * 0.15).toFixed(1) + 'px ' + (dy * 0.3).toFixed(1) + 'px'; // 15 % bzw. 30 % der Mausentfernung
      });
      btn.addEventListener('mouseleave', function () { btn.style.translate = ''; });
    });
  }
})();
