/* EquiBill – kleine Demo-Logik für alle Seiten (kein Backend, keine Übertragung an Server)
   1) Mobiles Menü   2) Kategorie-Filter im Shop   3) Warenkorb (lokal im Browser)   4) Effekte
   Jeder Teil prüft, ob seine Elemente auf der aktuellen Seite vorkommen.
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

  /* ---------- 2) Shop-Filter ---------- */
  var products = document.querySelectorAll('.product');
  var filterButtons = document.querySelectorAll('.filter button');
  var toast = document.getElementById('toast');
  var toastTimer;

  // Kurze Meldung unten; das Element hat role="status", Screenreader sagen den Text an
  function showToast(text) {
    if (!toast) { return; }
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
  // Links von anderen Seiten (z. B. Fuß: shop.html?kategorie=tools) öffnen den Shop gefiltert
  var startCategory = new URLSearchParams(window.location.search).get('kategorie');
  if (products.length && /^(software|tools|design)$/.test(startCategory || '')) { applyFilter(startCategory); }

  /* ---------- 3) Warenkorb (Demo, lokal im Browser) ----------
     Gespeichert wird nur eine Artikelliste im localStorage dieses Browsers, keine persönlichen Daten:
       [{ "name": "Tournament Planner", "cents": 2900, "monthly": false, "qty": 1 }]
     - Gespeichert wird erst, wenn jemand etwas hineinlegt; ein leerer Warenkorb wird ganz gelöscht.
     - Name und Preis kommen aus dem HTML (keine Produktliste im Skript):
       [data-cart-product] → [data-cart-name] und <data data-cart-price value="Cent">;
       data-cart-interval="monat" = Abo-Preis; data-cart-variant hängt z. B. „Basic“ an den Namen.
     - Gerechnet wird in Cent (ganze Zahlen, keine Rundungsfehler), angezeigt deutsch: 19,99 €. */
  var CART_KEY = 'equibill-warenkorb';
  var MAX_QTY = 99;
  var cartCounters = document.querySelectorAll('[data-cart-count]');
  var euroFormat = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });

  function formatCents(cents) { return euroFormat.format(cents / 100); }

  // Nur Einträge mit erwarteter Form übernehmen (schützt vor kaputten oder manipulierten Daten)
  function isValidItem(item) {
    return !!item && typeof item.name === 'string' && item.name.length > 0 && item.name.length <= 120 &&
      Number.isInteger(item.cents) && item.cents >= 0 && item.cents <= 10000000 &&
      typeof item.monthly === 'boolean' &&
      Number.isInteger(item.qty) && item.qty >= 1 && item.qty <= MAX_QTY;
  }

  function readCart() {
    var raw = null;
    try { raw = window.localStorage.getItem(CART_KEY); } catch (e) { return []; }
    if (!raw) { return []; }
    try {
      var data = JSON.parse(raw);
      if (!Array.isArray(data)) { return []; }
      return data.filter(isValidItem).map(function (i) {
        return { name: i.name, cents: i.cents, monthly: i.monthly, qty: i.qty }; // nur bekannte Felder
      });
    } catch (e) { return []; }
  }

  // Speichert die Liste; ist sie leer, wird der Eintrag ganz entfernt. Rückgabe: hat es geklappt?
  function writeCart(items) {
    try {
      if (items.length) { window.localStorage.setItem(CART_KEY, JSON.stringify(items)); }
      else { window.localStorage.removeItem(CART_KEY); }
      return true;
    } catch (e) { return false; }
  }

  function countItems(items) { return items.reduce(function (sum, i) { return sum + i.qty; }, 0); }

  function updateCounters(items) {
    var n = String(countItems(items));
    cartCounters.forEach(function (c) { c.textContent = n; });
  }

  function articleWord(n) { return n === 1 ? '1 Artikel' : n + ' Artikel'; }

  // Artikel aus dem umgebenden HTML-Abschnitt lesen
  function itemFromHtml(product) {
    var nameEl = product.querySelector('[data-cart-name]');
    var priceEl = product.querySelector('[data-cart-price]');
    if (!nameEl || !priceEl) { return null; }
    var name = nameEl.textContent.replace(/\s+/g, ' ').trim();
    var variant = product.getAttribute('data-cart-variant');
    if (variant) { name += ' – ' + variant; }
    var item = {
      name: name,
      cents: parseInt(priceEl.getAttribute('value'), 10),
      monthly: priceEl.getAttribute('data-cart-interval') === 'monat',
      qty: 1
    };
    return isValidItem(item) ? item : null;
  }

  document.querySelectorAll('[data-cart-add]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var product = btn.closest('[data-cart-product]');
      var item = product ? itemFromHtml(product) : null;
      if (!item) { showToast('Dieser Artikel konnte nicht in den Warenkorb gelegt werden.'); return; }
      var items = readCart();
      var existing = items.filter(function (i) { return i.name === item.name && i.cents === item.cents && i.monthly === item.monthly; })[0];
      if (existing) {
        if (existing.qty >= MAX_QTY) { showToast('Mehr als ' + MAX_QTY + ' Stück sind nicht möglich.'); return; }
        existing.qty += 1;
      } else {
        items.push(item);
      }
      if (!writeCart(items)) {
        showToast('Der Warenkorb kann in diesem Browser nicht gespeichert werden, z. B. im privaten Modus.');
        return;
      }
      updateCounters(items);
      showToast('„' + item.name + '“ liegt im Warenkorb. Insgesamt ' + articleWord(countItems(items)) + '.');
    });
  });

  // Zähler beim Laden aus dem Speicher setzen (nur lesen, legt nichts an)
  updateCounters(readCart());

  /* 3b) Seite warenkorb.html: Liste, Menge ändern, Entfernen, Summen, Demo-Bestellung.
     Alle Texte werden mit textContent gesetzt, nie als HTML (sicher auch bei manipulierten Daten). */
  var cartPage = document.querySelector('[data-cart]');
  var renderCart = function () {};
  if (cartPage) {
    var listEl = cartPage.querySelector('[data-cart-list]');
    var contentEl = cartPage.querySelector('[data-cart-content]');
    var emptyEl = cartPage.querySelector('[data-cart-empty]');
    var doneEl = cartPage.querySelector('[data-cart-done]');
    var onceRow = cartPage.querySelector('[data-cart-total-once]');
    var monthlyRow = cartPage.querySelector('[data-cart-total-monthly]');

    function el(tag, className, text) {
      var node = document.createElement(tag);
      if (className) { node.className = className; }
      if (text !== undefined) { node.textContent = text; }
      return node;
    }

    function qtyButton(label, symbol, action, index, disabled) {
      var b = el('button', 'cart__qty-btn', symbol);
      b.type = 'button';
      b.setAttribute('aria-label', label);
      b.setAttribute('data-action', action);
      b.setAttribute('data-index', String(index));
      b.disabled = disabled;
      return b;
    }

    renderCart = function () {
      var items = readCart();
      updateCounters(items);
      listEl.textContent = '';
      if (!doneEl.hidden) { return; }           // nach der Demo-Bestellung bleibt die Bestätigung stehen
      emptyEl.hidden = items.length > 0;
      contentEl.hidden = items.length === 0;

      var once = 0, monthly = 0;
      items.forEach(function (item, index) {
        var line = item.cents * item.qty;
        if (item.monthly) { monthly += line; } else { once += line; }
        var suffix = item.monthly ? ' / Monat' : '';

        var li = el('li', 'cart__item');
        var info = el('div', 'cart__info');
        info.appendChild(el('p', 'cart__name', item.name));
        info.appendChild(el('p', 'cart__unit', formatCents(item.cents) + (item.monthly ? ' pro Monat' : ' je Stück')));

        var qty = el('div', 'cart__qty');
        qty.setAttribute('role', 'group');
        qty.setAttribute('aria-label', 'Menge von ' + item.name);
        qty.appendChild(qtyButton('Menge von ' + item.name + ' verringern', '−', 'dec', index, item.qty <= 1));
        qty.appendChild(el('span', 'cart__qty-value', String(item.qty)));
        qty.appendChild(qtyButton('Menge von ' + item.name + ' erhöhen', '+', 'inc', index, item.qty >= MAX_QTY));

        var remove = el('button', 'cart__remove', 'Entfernen');
        remove.type = 'button';
        remove.setAttribute('aria-label', item.name + ' entfernen');
        remove.setAttribute('data-action', 'remove');
        remove.setAttribute('data-index', String(index));

        li.appendChild(info);
        li.appendChild(qty);
        li.appendChild(el('p', 'cart__line', formatCents(line) + suffix));
        li.appendChild(remove);
        listEl.appendChild(li);
      });

      onceRow.hidden = once === 0 && monthly > 0;
      monthlyRow.hidden = monthly === 0;
      onceRow.querySelector('dd').textContent = formatCents(once);
      monthlyRow.querySelector('dd').textContent = formatCents(monthly) + ' / Monat';
    };

    // Ein Klick-Empfänger für die ganze Liste (die Zeilen werden neu aufgebaut)
    listEl.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-action]');
      if (!btn) { return; }
      var items = readCart();
      var index = parseInt(btn.getAttribute('data-index'), 10);
      var item = items[index];
      if (!item) { renderCart(); return; }
      var action = btn.getAttribute('data-action');
      var message;
      if (action === 'inc' && item.qty < MAX_QTY) { item.qty += 1; message = 'Menge von „' + item.name + '“: ' + item.qty + '.'; }
      else if (action === 'dec' && item.qty > 1) { item.qty -= 1; message = 'Menge von „' + item.name + '“: ' + item.qty + '.'; }
      else if (action === 'remove') { items.splice(index, 1); message = '„' + item.name + '“ wurde entfernt.'; }
      else { return; }
      if (!writeCart(items)) { showToast('Der Warenkorb kann in diesem Browser nicht gespeichert werden.'); return; }
      renderCart();
      showToast(message);
      // Tastaturfokus sinnvoll zurücksetzen, weil die Zeilen neu aufgebaut wurden
      var target = null;
      if (action === 'remove') {
        target = listEl.querySelector('[data-action="remove"][data-index="' + Math.min(index, items.length - 1) + '"]') ||
                 emptyEl.querySelector('a');
      } else {
        target = listEl.querySelector('[data-action="' + action + '"][data-index="' + index + '"]:not(:disabled)') ||
                 listEl.querySelector('[data-index="' + index + '"][data-action]:not(:disabled)');
      }
      if (target) { target.focus(); }
    });

    // Demo-Bestellung: keine Datenabfrage, nur Bestätigung; Warenkorb wird geleert
    cartPage.querySelector('[data-cart-order]').addEventListener('click', function () {
      writeCart([]);
      updateCounters([]);
      contentEl.hidden = true;
      emptyEl.hidden = true;
      doneEl.hidden = false;
      doneEl.focus();   // Screenreader lesen die Bestätigung vor
    });

    renderCart();
  }

  // Änderungen aus einem anderen Tab übernehmen (z. B. Shop und Warenkorb parallel geöffnet)
  window.addEventListener('storage', function (e) {
    if (e.key === CART_KEY || e.key === null) { updateCounters(readCart()); renderCart(); }
  });

  /* ---------- 4) Scroll-Effekte ---------- */
  // Wer im System „Bewegung reduzieren“ eingestellt hat, bekommt keine Animationen.
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 4a) Scroll-Reveal: Elemente blenden beim Hineinscrollen sanft ein.
     Die Klasse „reveal“ setzt erst JavaScript; ohne JS bleibt alles sichtbar. */
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var revealTargets = document.querySelectorAll(
      '.section-head p, .intro__body, .catnav__item, .product, .manage__intro, .manage__device, .manage__benefit, .manage__stage, ' +
      '.step, .teaser__item, .about__photo, .about p, .faq__list details, .sw-hero__device, .feature-list li, .example, .tarif'
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

  /* 5) Sortiment: Editorial Category Navigation
     Hover oder Tastaturfokus auf eine Kategorie → zugehöriges Bild blendet über.
     Auf Touch-Geräten (kein Hover) wird die Kategorie aktiv, die in der Bildschirmmitte steht.
     Klick auf eine Kategorie filtert weiterhin den Shop (siehe 2), Links mit data-filter). */
  var catnav = document.querySelector('[data-catnav]');
  if (catnav) {
    var catList = catnav.querySelector('.catnav__list');
    var catItems = catnav.querySelectorAll('[data-catnav-item]');
    var catImgs = catnav.querySelectorAll('[data-catnav-img]');

    function activateCategory(index) {
      catItems.forEach(function (item, i) { item.classList.toggle('is-active', i === index); });
      catImgs.forEach(function (img, i) { img.classList.toggle('is-active', i === index); });
    }

    catItems.forEach(function (item, i) {
      item.addEventListener('mouseenter', function () { activateCategory(i); });
      item.addEventListener('focus', function () { activateCategory(i); });
    });
    // „Benutzt“-Zustand: andere Kategorien treten zurück, solange Maus oder Fokus in der Liste sind
    catList.addEventListener('mouseenter', function () { catList.classList.add('is-engaged'); });
    catList.addEventListener('mouseleave', function () { catList.classList.remove('is-engaged'); });
    catList.addEventListener('focusin', function () { catList.classList.add('is-engaged'); });
    catList.addEventListener('focusout', function (e) {
      if (!catList.contains(e.relatedTarget)) { catList.classList.remove('is-engaged'); }
    });

    // Touch: Das Bild klebt oben (ca. 40 % Höhe); aktiv wird die Kategorie in der Mitte
    // des freien Bereichs darunter (schmaler Streifen bei ca. 72 % der Fensterhöhe als Auslöser)
    if (!window.matchMedia('(hover: hover)').matches && 'IntersectionObserver' in window) {
      var catObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            activateCategory(Array.prototype.indexOf.call(catItems, entry.target));
          }
        });
      }, { rootMargin: '-70% 0px -26% 0px' });
      catItems.forEach(function (item) { catObserver.observe(item); });
    }
  }
})();
