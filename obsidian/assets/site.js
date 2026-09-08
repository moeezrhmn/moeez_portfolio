/* ══════════════════════════════════════════════════════════════════════
   OBSIDIAN — shared behaviour. Vanilla, no dependencies.
   Every block is defensive: a missing element on a page is not an error.
   ══════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── Theme ─────────────────────────────────────────────────────────
     Light is the default. An explicit choice persists; the OS setting is
     deliberately not consulted. The <head> of each page sets the
     attribute before paint, so this only wires up the button. */
  var root = document.documentElement;
  var themeBtn = document.getElementById('theme');

  var paintTheme = function () {
    var dark = root.getAttribute('data-theme') === 'dark';
    if (!themeBtn) return;
    themeBtn.textContent = dark ? 'Light' : 'Dark';
    themeBtn.setAttribute('aria-label', 'Switch to ' + (dark ? 'light' : 'dark') + ' theme');
  };

  paintTheme();

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      paintTheme();
    });
  }

  /* ── Headline reveal on load ───────────────────────────────────────── */
  var hero = document.querySelector('[data-reveal]');
  if (hero) requestAnimationFrame(function () { hero.classList.add('lit'); });

  /* ── Live Lahore clock ─────────────────────────────────────────────── */
  var clock = document.getElementById('clock');
  if (clock) {
    var fmt = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Karachi', hour: '2-digit', minute: '2-digit',
      second: '2-digit', hour12: false
    });
    var tick = function () { clock.textContent = fmt.format(new Date()); };
    tick();
    setInterval(tick, 1000);
  }

  /* ── Reveal on scroll ──────────────────────────────────────────────── */
  var fades = document.querySelectorAll('.fade');
  if (!('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(fades, function (el) { el.classList.add('in'); });
  } else if (fades.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });

    Array.prototype.forEach.call(fades, function (el, i) {
      el.style.transitionDelay = Math.min(i % 4, 3) * 70 + 'ms';
      io.observe(el);
    });
  }

  /* ── Accordions. One open at a time within each group. ─────────────── */
  var groups = {};
  Array.prototype.forEach.call(document.querySelectorAll('[data-acc]'), function (row) {
    var name = row.getAttribute('data-acc') || 'default';
    (groups[name] = groups[name] || []).push(row);
  });

  Object.keys(groups).forEach(function (name) {
    var rows = groups[name];
    rows.forEach(function (row) {
      var btn = row.querySelector('button');
      var panel = row.querySelector('.panel');
      if (!btn || !panel) return;

      btn.setAttribute('aria-expanded', 'false');
      panel.setAttribute('aria-hidden', 'true');

      btn.addEventListener('click', function () {
        var wasOpen = row.classList.contains('open');
        rows.forEach(function (r) {
          r.classList.remove('open');
          var b = r.querySelector('button'), p = r.querySelector('.panel');
          if (b) b.setAttribute('aria-expanded', 'false');
          if (p) p.setAttribute('aria-hidden', 'true');
        });
        if (!wasOpen) {
          row.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
          panel.setAttribute('aria-hidden', 'false');
        }
      });
    });
  });

  /* ── Mobile drawer ─────────────────────────────────────────────────── */
  var burger = document.getElementById('burger');
  var drawer = document.getElementById('drawer');
  if (burger && drawer) {
    var setOpen = function (open) {
      drawer.classList.toggle('open', open);
      burger.classList.toggle('on', open);
      burger.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    };
    burger.addEventListener('click', function () {
      setOpen(!drawer.classList.contains('open'));
    });
    drawer.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });
  }

  /* ── Reading progress ──────────────────────────────────────────────── */
  var prog = document.getElementById('prog');
  if (prog) {
    var paint = function () {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      prog.style.width = (h > 0 ? (window.scrollY / h) * 100 : 0) + '%';
    };
    paint();
    window.addEventListener('scroll', paint, { passive: true });
    window.addEventListener('resize', paint);
  }
})();
