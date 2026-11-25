/* EquiBill Startseite – kleine Demo-Logik (kein Backend, keine Datenspeicherung)
   1) Kategorie-Filter im Shop   2) Demo-Warenkorb-Zähler mit Rückmeldung
   Ohne JavaScript bleiben alle Produkte sichtbar. */
(function () {
  'use strict';
  document.documentElement.classList.add('js');

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
