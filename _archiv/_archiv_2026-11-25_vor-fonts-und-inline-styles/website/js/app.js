/* EquiBill Startseite – kleine Demo-Logik (kein Backend, keine Datenspeicherung)
   1) Mobiles Menü   2) Kategorie-Filter im Shop   3) Demo-Warenkorb-Zähler mit Rückmeldung
   Ohne JavaScript bleibt alles nutzbar: das Menü ist ein <details>-Element,
   alle Produkte sind sichtbar. */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  /* ---------- 1) Mobiles Menü ---------- */
  var menu = document.querySelector('.nav-mobile');
  var desktopQuery = window.matchMedia('(min-width: 900px)'); // ab hier gilt die Desktop-Navigation

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
})();
