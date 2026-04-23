/* ==========================================================
   Sri Varalakshmi Catering — script.js (vanilla, offline)
   ========================================================== */
(function () {
  'use strict';

  // ---------- Brand ----------
  var BRAND = {
    phone: '+91 73964 99996',
    phoneTel: '+917396499996',
    whatsapp: '917396499996'
  };
  function waLink(message) {
    var text = encodeURIComponent(message || "Namaste! I'd like to enquire about catering services.");
    return 'https://wa.me/' + BRAND.whatsapp + '?text=' + text;
  }

  // ---------- Data ----------
  var SERVICES = [
    {
      icon: '♥',
      title: 'Wedding Catering',
      img: 'images/service-wedding.webp',
      desc: "Grand banana-leaf feasts for muhurtham, reception & sangeet — tailored to each community's traditions."
    },
    {
      icon: '🎂',
      title: 'Birthday & Events',
      img: 'images/service-birthday.webp',
      desc: 'Intimate gatherings to milestone celebrations, with tiffin counters, live dosa stations & themed thalis.'
    },
    {
      icon: '💼',
      title: 'Corporate Catering',
      img: 'images/service-corporate.webp',
      desc: 'Office lunches, conferences & annual-day events — portioned, punctual & presentation-first.'
    },
    {
      icon: '🚚',
      title: 'Outdoor & Bulk Orders',
      img: 'images/service-outdoor.webp',
      desc: 'Temple functions, village fairs & 2000+ pax orders with dedicated chef teams and mobile kitchens.'
    }
  ];

  var MENU = [
    // Breakfast
    { id: 'ghee-podi-idli', name: 'Ghee Podi Idli', desc: 'Soft steamed rice cakes tossed in aromatic ghee and house-ground gunpowder.', cat: 'breakfast', img: 'images/menu-ghee-podi-idli.webp', pick: true },
    { id: 'masala-dosa', name: 'Masala Dosa', desc: 'Crisp rice crepe filled with spiced potato masala, served with sambar & chutneys.', cat: 'breakfast', img: 'images/menu-masala-dosa.webp' },
    { id: 'pesarattu-upma', name: 'Pesarattu Upma', desc: 'Andhra moong dal crepe paired with semolina upma — a regional signature.', cat: 'breakfast', img: 'images/menu-pesarattu-upma.webp' },
    { id: 'mini-tiffin', name: 'Mini Tiffin Combo', desc: 'Idli, vada, pongal, poori — a wedding morning favourite.', cat: 'breakfast', img: 'images/menu-mini-tiffin.webp', pick: true },
    // Meals
    { id: 'banana-leaf', name: 'Andhra Banana Leaf Meals', desc: '25+ item traditional feast served on banana leaf — rice, sambar, rasam, pappu, curries & payasam.', cat: 'meals', img: 'images/menu-banana-leaf.webp', pick: true },
    { id: 'pulihora', name: 'Pulihora (Tamarind Rice)', desc: 'Temple-style tangy tamarind rice tempered with peanuts and curry leaves.', cat: 'meals', img: 'images/menu-pulihora.webp' },
    { id: 'bagara-rice', name: 'Bagara Rice & Mirchi Ka Salan', desc: 'Fragrant ghee rice paired with Hyderabadi chilli gravy.', cat: 'meals', img: 'images/menu-bagara-rice.webp' },
    { id: 'gongura-pappu', name: 'Gongura Pappu', desc: 'Sorrel leaves lentil curry — a Godavari delta classic.', cat: 'meals', img: 'images/menu-gongura-pappu.webp' },
    // Sweets
    { id: 'bobbatlu', name: 'Bobbatlu (Puran Poli)', desc: 'Sweet lentil stuffed flatbread, served warm with ghee.', cat: 'sweets', img: 'images/menu-bobbatlu.webp', pick: true },
    { id: 'qubani', name: 'Qubani Ka Meetha', desc: 'Slow-cooked apricot dessert topped with malai cream.', cat: 'sweets', img: 'images/menu-qubani.webp' },
    { id: 'kaju-katli', name: 'Kaju Katli', desc: 'Silken cashew fudge with a delicate silver leaf.', cat: 'sweets', img: 'images/menu-kaju-katli.webp' },
    { id: 'semiya-payasam', name: 'Semiya Payasam', desc: 'Vermicelli kheer simmered in milk, cardamom & saffron.', cat: 'sweets', img: 'images/menu-semiya-payasam.webp' },
    // Snacks
    { id: 'mirchi-bajji', name: 'Mirchi Bajji', desc: 'Rajahmundry-style stuffed green chillies — crispy and tangy.', cat: 'snacks', img: 'images/menu-mirchi-bajji.webp', pick: true },
    { id: 'punugulu', name: 'Punugulu', desc: 'Godavari riverside fritters made from dosa batter.', cat: 'snacks', img: 'images/menu-punugulu.webp' },
    { id: 'samosa-chaat', name: 'Samosa Chaat', desc: 'Crisp samosa layered with chutneys, yogurt, sev and pomegranate.', cat: 'snacks', img: 'images/menu-samosa-chaat.webp' },
    { id: 'masala-vada', name: 'Masala Vada', desc: 'Chana dal fritters spiced with fennel and curry leaves.', cat: 'snacks', img: 'images/menu-masala-vada.webp' }
  ];

  var TESTIMONIALS = [
    { name: 'Ramya & Karthik', role: 'Wedding Reception • Rajahmundry', msg: "SVC catered our 800-guest reception flawlessly. The Andhra meals were authentic and the team's warmth made our family feel at home.", rating: 5 },
    { name: 'Suresh Babu', role: 'Corporate Event • KIMS Hospital', msg: "Punctual, hygienic and consistently delicious. We've trusted Sri Varalakshmi Catering for every company function over the last six years.", rating: 5 },
    { name: 'Lakshmi Devi', role: 'Housewarming • Kovvur', msg: "Chef Siva's hand — you can taste it. Gongura pappu and bobbatlu just like my grandmother's kitchen. Guests still talk about the menu.", rating: 5 },
    { name: 'Pavan Kumar', role: 'Birthday Celebration', msg: 'Premium quality at an honest price. The presentation was elegant and the staff were courteous throughout the evening.', rating: 5 }
  ];

  // ---------- Helpers ----------
  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      for (var k in attrs) {
        if (k === 'class') node.className = attrs[k];
        else if (k === 'html') node.innerHTML = attrs[k];
        else if (k.indexOf('data-') === 0 || k === 'href' || k === 'src' || k === 'alt' || k === 'target' || k === 'rel' || k === 'loading' || k === 'aria-label' || k === 'role') node.setAttribute(k, attrs[k]);
        else node[k] = attrs[k];
      }
    }
    if (children) {
      if (!Array.isArray(children)) children = [children];
      children.forEach(function (c) {
        if (c == null) return;
        node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
      });
    }
    return node;
  }

  // ---------- Render: Services ----------
  function renderServices() {
    var grid = document.getElementById('servicesGrid');
    if (!grid) return;
    SERVICES.forEach(function (s, i) {
      var slug = s.title.toLowerCase().replace(/[^a-z]+/g, '-').replace(/-$/, '');
      var card = el('article', { class: 'card service-card', 'data-testid': 'service-card-' + slug });

      var media = el('div', { class: 'service-media' });
      media.appendChild(el('img', { src: s.img, alt: s.title, loading: 'lazy' }));
      media.appendChild(el('span', { class: 'service-icon', 'aria-hidden': 'true' }, s.icon));
      media.appendChild(el('h3', { class: 'service-title' }, s.title));
      card.appendChild(media);

      var body = el('div', { class: 'service-body' });
      body.appendChild(el('p', {}, s.desc));
      var link = el('a', {
        href: waLink("Hello SVC! I'd like to enquire about \"" + s.title + "\" for an upcoming event."),
        target: '_blank', rel: 'noopener',
        class: 'service-link', 'data-testid': 'service-enquire-' + i
      });
      link.appendChild(document.createTextNode('Enquire on WhatsApp '));
      link.appendChild(arrowSVG());
      body.appendChild(link);
      card.appendChild(body);

      grid.appendChild(card);
    });
  }

  function arrowSVG() {
    var s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    s.setAttribute('viewBox', '0 0 24 24');
    s.setAttribute('aria-hidden', 'true');
    var p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    p.setAttribute('d', 'M7 17L17 7M9 7h8v8');
    p.setAttribute('stroke', 'currentColor'); p.setAttribute('stroke-width', '1.8');
    p.setAttribute('fill', 'none'); p.setAttribute('stroke-linecap', 'round');
    s.appendChild(p);
    return s;
  }

  // ---------- Render: Menu ----------
  function renderMenu(cat) {
    var grid = document.getElementById('menuGrid');
    if (!grid) return;
    grid.innerHTML = '';
    var list = (cat && cat !== 'all') ? MENU.filter(function (m) { return m.cat === cat; }) : MENU;
    if (!list.length) {
      grid.appendChild(el('div', { class: 'menu-empty', 'data-testid': 'menu-empty' }, 'Menu is being prepared. Please check back shortly.'));
      return;
    }
    list.forEach(function (item) {
      var card = el('article', { class: 'card menu-card', 'data-testid': 'menu-item-' + item.id });
      var media = el('div', { class: 'menu-media' });
      media.appendChild(el('img', { src: item.img, alt: item.name, loading: 'lazy' }));
      if (item.pick) media.appendChild(el('span', { class: 'menu-chip pick' }, "Chef's Pick"));
      media.appendChild(el('span', { class: 'menu-chip cat' }, item.cat));
      card.appendChild(media);
      var body = el('div', { class: 'menu-body' });
      body.appendChild(el('h3', {}, item.name));
      body.appendChild(el('p', {}, item.desc));
      body.appendChild(el('a', {
        class: 'menu-enquire',
        href: waLink("Hello SVC! I'd like to know more about \"" + item.name + "\" for my event."),
        target: '_blank', rel: 'noopener',
        'data-testid': 'menu-enquire-' + item.id
      }, 'Enquire ↗'));
      card.appendChild(body);
      grid.appendChild(card);
    });
  }

  // ---------- Render: Testimonials ----------
  function renderTestimonials() {
    var grid = document.getElementById('testiGrid');
    if (!grid) return;
    TESTIMONIALS.forEach(function (t, i) {
      var card = el('figure', { class: 'card testi-card gold-corner', 'data-testid': 'testimonial-' + i });
      card.appendChild(el('div', { class: 'testi-quote' }, '“'));
      card.appendChild(el('blockquote', { class: 'testi-msg' }, '“' + t.msg + '”'));
      var stars = '';
      for (var s = 0; s < t.rating; s++) stars += '★';
      card.appendChild(el('div', { class: 'testi-stars' }, stars));
      var foot = el('figcaption', { class: 'testi-foot' });
      foot.appendChild(el('div', { class: 'testi-name' }, t.name));
      foot.appendChild(el('div', { class: 'testi-role' }, t.role));
      card.appendChild(foot);
      grid.appendChild(card);
    });
  }

  // ---------- Navbar ----------
  function initNavbar() {
    var nav = document.getElementById('nav');
    var toggle = document.getElementById('navToggle');
    var mobile = document.getElementById('navMobile');

    function onScroll() {
      if (window.scrollY > 40) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    toggle.addEventListener('click', function () {
      var isHidden = mobile.hasAttribute('hidden');
      if (isHidden) {
        mobile.removeAttribute('hidden');
        toggle.setAttribute('aria-expanded', 'true');
      } else {
        mobile.setAttribute('hidden', '');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close mobile menu after clicking link
    mobile.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        mobile.setAttribute('hidden', '');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ---------- Menu tabs ----------
  function initMenuTabs() {
    var tabs = document.getElementById('menuTabs');
    if (!tabs) return;
    tabs.addEventListener('click', function (e) {
      var btn = e.target.closest('.menu-tab');
      if (!btn) return;
      Array.prototype.forEach.call(tabs.querySelectorAll('.menu-tab'), function (b) {
        b.classList.remove('is-active');
      });
      btn.classList.add('is-active');
      renderMenu(btn.getAttribute('data-cat'));
    });
  }

  // ---------- Booking form ----------
  function showToast(msg, isError) {
    var t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.style.background = isError ? '#B42318' : '';
    t.classList.add('show');
    setTimeout(function () { t.classList.remove('show'); }, 2800);
  }

  function initForm() {
    var form = document.getElementById('bookingForm');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var name = (data.get('name') || '').toString().trim();
      var phone = (data.get('phone') || '').toString().trim();
      if (!name || !phone) {
        showToast('Please share your name and phone to proceed.', true);
        return;
      }
      var msg = 'Namaste SVC Team!\nI\'d like to enquire about catering.\n\n' +
        '• Name: ' + name + '\n' +
        '• Phone: ' + phone + '\n' +
        '• Event: ' + (data.get('event') || '—') + '\n' +
        '• Guests: ' + (data.get('guests') || '—') + '\n' +
        '• Date: ' + (data.get('date') || '—') + '\n' +
        '• Location: ' + (data.get('location') || '—') + '\n' +
        '• Notes: ' + (data.get('message') || '—');
      window.open(waLink(msg), '_blank');
      showToast('Opening WhatsApp to finalise your enquiry…');
    });
  }

  // ---------- Reveal on scroll ----------
  function initReveal() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(function (n) { n.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (ent) {
        if (ent.isIntersecting) {
          ent.target.classList.add('in');
          io.unobserve(ent.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach(function (n) { io.observe(n); });
  }

  // ---------- Init ----------
  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('year').textContent = new Date().getFullYear();
    renderServices();
    renderMenu('all');
    renderTestimonials();
    initNavbar();
    initMenuTabs();
    initForm();
    initReveal();
  });
})();
