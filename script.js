const FREE_SHIP = 8700,
  SHIP_FEE = 348;

const PRICING = {
  products: {
    s1: 7400,
    s5: 5600,
    hf1: 7400,
    cu2: 7400,
    r1: 4800,
    r2: 1650,
    r3: 4300,
    r4: 1200,
    r5: 2950,
    r6: 3400,
    r7: 3800,
    r8: 2600,
    s2: 6300,
    hf2: 6300,
    cu1: 6300,
    s6: 6800,
    cu3: 6800,
    n1: 2400,
    n2: 2100,
    n3: 3300,
    n4: 1800,
    n5: 2600,
    n6: 4900,
    n7: 3600,
    n8: 2200,
    s3: 7300,
    hf3: 7300,
    b1: 7300,
    s7: 5600,
    b2: 5600,
    b3: 6100,
    cu4: 6100,
    b4: 6800,
    b6: 7400,
    b7: 5400,
    b5: 3900,
    b8: 2800,
    s4: 5900,
    hf4: 5900,
    e1: 5900,
    s8: 6900,
    e2: 6900,
    e3: 6400,
    e4: 5200,
    e6: 5800,
    e7: 5400,
    e8: 5000,
    e5: 3200,
  },
  engraveFee: 870,
  personalize: { gold: 7250, silver: 3950 },
  chainUpgrade: 580,
};
const peso = (n) =>
  '₱' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const store = {
  get(k, d) {
    try {
      const v = localStorage.getItem(k);
      return v ? JSON.parse(v) : d;
    } catch (e) {
      return d;
    }
  },
  set(k, v) {
    try {
      localStorage.setItem(k, JSON.stringify(v));
    } catch (e) {}
  },
};

const IMG = (n) => `img/${n}.jpg`;
const D = [
  ['s1', null, 1, 'The Sol Signet', '18k recycled gold', 'Bestseller', 'silver'],
  ['s2', null, 1, 'The Lumi Pendant', '18k gold vermeil', 'Engrave me', 'silver'],
  ['s3', null, 1, 'The Forma Cuff', '18k recycled gold', 'New', 'silver'],
  ['s4', null, 1, 'The Alba Hoops', '18k gold vermeil', 'Gold vermeil', 'silver'],
  ['s5', null, 1, 'The Ondine Band', '18k recycled gold', '18k gold', 'silver'],
  ['s6', null, 1, 'The Initial Necklace', 'Personalized · 18k gold vermeil', 'Make it yours', 'silver'],
  ['s7', null, 1, 'The Épure Chain', '18k gold vermeil', 'Gold vermeil', 'silver'],
  ['s8', null, 1, 'The Perle Drops', 'Freshwater pearl · 18k gold vermeil', 'Gold vermeil', 'silver'],
  ['r1', 'rings', 0, 'The Sol Signet', 'Recycled sterling silver · Sizes 4–10', 'Bestseller', 'silver'],
  ['r2', 'rings', 0, 'The Ondine Band', 'Sterling silver · Sizes 4–10', 'Sterling silver', 'silver'],
  ['r3', 'rings', 1, 'The Éclat Band', 'Sterling silver · Lab-grown diamond', 'New', 'silver'],
  ['r4', 'rings', 1, 'The Fil Ring', 'Sterling silver · Stackable', 'Sterling silver', 'silver'],
  ['r5', 'rings', 1, 'The Sol Silver', 'Recycled sterling silver · Sizes 4–10', 'Bestseller', 'silver'],
  ['r6', 'rings', 1, 'The Onde Duo', 'Sterling silver · Set of two', 'Sterling silver', 'silver'],
  ['r7', 'rings', 1, 'The Éclat Petite', 'Sterling silver · Lab-grown diamond', 'New', 'silver'],
  ['r8', 'rings', 1, 'The Fil Trio', 'Sterling silver · Set of three', 'Sterling silver', 'silver'],
  ['n1', 'necklaces', 0, 'The Lumi Pendant', 'Sterling silver · 45 cm', 'Engrave me', 'silver'],
  [
    'n2',
    'necklaces',
    0,
    'The Initial Necklace',
    'Sterling silver · Choose your letter',
    'Personalize',
    'silver',
  ],
  [
    'n3',
    'necklaces',
    1,
    'The Perle Necklace',
    'Freshwater pearl · Sterling silver',
    'Sterling silver',
    'silver',
  ],
  ['n4', 'necklaces', 1, 'The Fil Chain', 'Sterling silver · 40 cm', 'Sterling silver', 'silver'],
  ['n5', 'necklaces', 1, 'The Lumi Petite', 'Sterling silver · 40 cm', 'Sterling silver', 'silver'],
  ['n6', 'necklaces', 1, 'The Keepsake Locket', 'Sterling silver · Engravable', 'Engrave me', 'silver'],
  ['n7', 'necklaces', 1, 'The Perle Long', 'Freshwater pearl · 50 cm chain', 'Sterling silver', 'silver'],
  ['n8', 'necklaces', 1, 'The Fil Silver', 'Sterling silver · 45 cm', 'Sterling silver', 'silver'],
  ['b1', 'bracelets', 0, 'The Forma Cuff', '18k recycled gold · Adjustable', 'Bestseller', 'gold'],
  ['b2', 'bracelets', 0, 'The Épure Chain', '18k gold vermeil · 17–19 cm', 'Gold vermeil', 'gold'],
  ['b3', 'bracelets', 1, 'The Lumi Bracelet', '18k gold vermeil · Engravable', 'Engrave me', 'gold'],
  ['b4', 'bracelets', 1, 'The Perle Bracelet', 'Freshwater pearl · 18k gold vermeil', 'Gold vermeil', 'gold'],
  [
    'b5',
    'bracelets',
    1,
    'The Forma Silver',
    'Recycled sterling silver · Adjustable',
    'Sterling silver',
    'silver',
  ],
  ['b6', 'bracelets', 1, 'The Épure Duo', '18k gold vermeil · Set of two', 'Gold vermeil', 'gold'],
  ['b7', 'bracelets', 1, 'The Lumi Petite Bracelet', '18k gold vermeil · Engravable', 'Gold vermeil', 'gold'],
  [
    'b8',
    'bracelets',
    1,
    'The Perle Silver',
    'Freshwater pearl · Sterling silver',
    'Sterling silver',
    'silver',
  ],
  ['e1', 'earrings', 0, 'The Alba Hoops', '18k gold vermeil · Pair · 20 mm', 'Bestseller', 'gold'],
  ['e2', 'earrings', 0, 'The Perle Drops', 'Freshwater pearl · Pair', '18k gold', 'gold'],
  ['e3', 'earrings', 1, 'The Sol Studs', '18k recycled gold · Pair', '18k gold', 'gold'],
  ['e4', 'earrings', 1, 'The Fil Huggies', '18k gold vermeil · Pair · 12 mm', 'Gold vermeil', 'gold'],
  ['e5', 'earrings', 1, 'The Alba Silver', 'Recycled sterling silver · Pair', 'Sterling silver', 'silver'],
  ['e6', 'earrings', 1, 'The Perle Petite', 'Freshwater pearl · Pair', '18k gold', 'gold'],
  ['e7', 'earrings', 1, 'The Sol Petite', '18k recycled gold · Pair · 5 mm', '18k gold', 'gold'],
  ['e8', 'earrings', 1, 'The Fil Single', '18k gold vermeil · Single earring', 'Sold singly', 'gold'],
  ['hf1', 'home', 0, 'The Sol Signet', '18k recycled gold · Made to order', 'Bestseller', 'silver'],
  ['hf2', 'home', 0, 'The Lumi Pendant', '18k gold vermeil · Adjustable chain', 'Engrave me', 'silver'],
  ['hf3', 'home', 0, 'The Forma Cuff', '18k recycled gold · Sculptural finish', '18k gold', 'silver'],
  ['hf4', 'home', 0, 'The Alba Hoops', '18k gold vermeil · Sold as a pair', 'Bestseller', 'silver'],
  ['cu1', 'custom', 0, 'The Lumi Pendant', 'Engraving available · Up to 8 characters', 'Engrave me', 'gold'],
  ['cu2', 'custom', 0, 'The Sol Signet', 'Engraving available · Up to 3 initials', 'Engrave me', 'gold'],
  ['cu3', 'custom', 0, 'The Initial Necklace', 'Choose a letter · A–Z', 'Personalize', 'gold'],
  [
    'cu4',
    'custom',
    0,
    'The Lumi Bracelet',
    'Engraving available · Up to 12 characters',
    'Engrave me',
    'gold',
  ],
];
const PRODUCTS = D.map((d, i) => ({
  id: d[0],
  page: d[1],
  all: !!d[2],
  name: d[3],
  price: PRICING.products[d[0]],
  mat: d[4],
  tag: d[5],
  metal: d[6],
  img: 'p_' + d[0],
  i,
}));
const byId = (id) => PRODUCTS.find((p) => p.id === id);
const pick = (ids) => ids.map(byId);

const photo = (n, alt = '') => `<img src="${IMG(n)}" alt="${esc(alt)}" loading="lazy" decoding="async">`;
const pArt = (p) => `<div class="art">${photo(p.img, p.name)}</div>`;
const scene = (n, alt) => `<div class="art">${photo(n, alt || 'Lili Gewelry')}</div>`;
const heroArt = () =>
  `<div class="art"><img src="${IMG('hero')}" alt="Diamond hoop and ring on a gold tray over emerald velvet" fetchpriority="high"></div>`;
const esc = (s) =>
  String(s).replace(
    /[&<>"']/g,
    (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[m],
  );

let cart = store.get('lili_cart_v2', []);
cart = Array.isArray(cart)
  ? cart
      .filter((c) => c && c.key && c.img && c.qty > 0 && (c.id === 'per' || byId(c.id)))
      .map((c) => {
        if (c.id === 'per' && !c.metal) {
          const m = /^per-(gold|silver)-.-(.*)$/.exec(c.key) || [];
          c.metal = m[1] || 'gold';
          c.extra = /50 cm/.test(m[2] || '') ? PRICING.chainUpgrade : 0;
        }
        if (c.extra == null) c.extra = String(c.key).startsWith('eng-') ? PRICING.engraveFee : 0;
        return c;
      })
  : [];
const unit = (c) =>
  (c.id === 'per'
    ? PRICING.personalize[c.metal] || PRICING.personalize.gold
    : byId(c.id)
      ? byId(c.id).price
      : 0) + (c.extra || 0);

const saveCart = () => store.set('lili_cart_v2', cart);
const cartCount = () => cart.reduce((a, c) => a + c.qty, 0);
const cartSub = () => cart.reduce((a, c) => a + unit(c) * c.qty, 0);
function addToCart(item, qty = 1) {
  const key = item.key || item.id;
  const ex = cart.find((c) => c.key === key);
  if (ex) ex.qty += qty;
  else
    cart.push({
      key,
      id: item.id,
      name: item.name,
      img: item.img,
      metal: item.metal,
      extra: item.extra || 0,
      note: item.note || '',
      qty,
    });
  saveCart();
  renderCart();
  bumpCart();
  toast(`${item.name} added to cart`);
  openCart();
}
function setQty(key, d) {
  const c = cart.find((x) => x.key === key);
  if (!c) return;
  c.qty += d;
  if (c.qty <= 0) cart = cart.filter((x) => x.key !== key);
  saveCart();
  renderCart();
}
function removeItem(key) {
  cart = cart.filter((x) => x.key !== key);
  saveCart();
  renderCart();
}
function bumpCart() {
  const b = $('#cartCount');
  b.classList.remove('bump');
  void b.offsetWidth;
  b.classList.add('bump');
}
function renderCart() {
  $('#cartCount').textContent = cartCount();
  const box = $('#items'),
    foot = $('#dfoot');
  if (!cart.length) {
    box.innerHTML =
      '<div class="empty"><h4>Your cart is empty</h4><p>Pieces you add will appear here.</p><p style="margin-top:18px"><a class="btn" href="#shop" data-close>Start browsing</a></p></div>';
    foot.innerHTML = '';
    foot.style.display = 'none';
    return;
  }
  foot.style.display = '';
  box.innerHTML = cart
    .map(
      (c) =>
        `<div class="ci"><div class="th">${pArt({ img: c.img, name: c.name })}</div><div><h4>${esc(c.name)}</h4>${c.note ? `<div class="note">${esc(c.note)}</div>` : ''}<div class="price" style="margin-top:2px">${peso(unit(c))}</div><div class="r"><div class="qty"><button data-dec="${c.key}" aria-label="Decrease quantity">−</button><span>${c.qty}</span><button data-inc="${c.key}" aria-label="Increase quantity">+</button></div><div class="price">${peso(unit(c) * c.qty)}</div></div><button class="rm" data-rm="${c.key}">Remove</button></div></div>`,
    )
    .join('');
  const sub = cartSub(),
    ship = sub >= FREE_SHIP ? 0 : SHIP_FEE;
  foot.innerHTML = `<div class="ln"><span>Subtotal (${cartCount()} item${cartCount() > 1 ? 's' : ''})</span><span>${peso(sub)}</span></div><div class="ln"><span>Shipping</span><span>${ship ? peso(ship) : 'Free'}</span></div>${ship ? `<div class="ln" style="font-size:11px">Add ${peso(FREE_SHIP - sub)} more for free shipping</div>` : ''}<div class="ln t"><span>Total</span><b>${peso(sub + ship)}</b></div><button class="btn solid" id="goCheckout">Checkout</button>`;
}

let wish = new Set(store.get('lili_wish_v2', []).filter((id) => byId(id)));
function syncWish() {
  const n = wish.size;
  $('#btnWish').classList.toggle('on', n > 0);
  $('#wishCount').textContent = n;
}
function toggleWish(id) {
  const was = wish.has(id);
  was ? wish.delete(id) : wish.add(id);
  store.set('lili_wish_v2', [...wish]);
  $$(`[data-heart="${id}"]`).forEach((b) => {
    b.classList.toggle('on', !was);
    b.setAttribute('aria-pressed', String(!was));
  });
  syncWish();
  renderWish();
  toast(was ? 'Removed from saved pieces' : 'Saved to your pieces');
}
function renderWish() {
  const box = $('#witems');
  const list = [...wish].map(byId).filter(Boolean);
  box.innerHTML = list.length
    ? list
        .map(
          (p) =>
            `<div class="wi"><div class="th">${pArt(p)}</div><div><h4>${esc(p.name)}</h4><div class="note">${esc(p.mat)}</div><div class="price" style="margin-top:2px">${peso(p.price)}</div><div class="r"><button class="btn solid" data-wadd="${p.id}">Add to cart</button><button class="rm" style="margin:0" data-wrm="${p.id}">Remove</button></div></div></div>`,
        )
        .join('')
    : '<div class="empty"><h4>Nothing saved yet</h4><p>Tap the heart on any piece to keep it here.</p></div>';
}
function openWish() {
  renderWish();
  closeAll(true);
  $('#wdrawer').classList.add('on');
  $('#wdrawer').setAttribute('aria-hidden', 'false');
  $('#scrim').classList.add('on');
}

function openCart() {
  closeAll(true);
  $('#drawer').classList.add('on');
  $('#drawer').setAttribute('aria-hidden', 'false');
  $('#scrim').classList.add('on');
}
function closeAll(keepScrim) {
  $('#wdrawer').classList.remove('on');
  $('#wdrawer').setAttribute('aria-hidden', 'true');
  $('#drawer').classList.remove('on');
  $('#drawer').setAttribute('aria-hidden', 'true');
  $('#modal').classList.remove('on');
  if (!keepScrim) $('#scrim').classList.remove('on');
}
let tt;
function toast(m) {
  const t = $('#toast');
  t.textContent = m;
  t.classList.add('on');
  clearTimeout(tt);
  tt = setTimeout(() => t.classList.remove('on'), 2200);
}
function openModal(html) {
  const m = $('#modal');
  m.innerHTML = html;
  m.classList.add('on');
  $('#drawer').classList.remove('on');
  $('#scrim').classList.add('on');
}

function checkout() {
  const sub = cartSub(),
    ship = sub >= FREE_SHIP ? 0 : SHIP_FEE;
  openModal(`<button class="x" style="float:right" data-close aria-label="Close">×</button><h3>Checkout</h3>
  <div style="margin-bottom:16px">${cart.map((c) => `<div class="ln" style="display:flex;justify-content:space-between;font-size:13px;padding:5px 0"><span>${esc(c.name)} × ${c.qty}</span><span>${peso(unit(c) * c.qty)}</span></div>`).join('')}
  <div class="total"><span class="lbl">Subtotal</span><span>${peso(sub)}</span></div>
  <div style="display:flex;justify-content:space-between;font-size:13px"><span>Shipping</span><span>${ship ? peso(ship) : 'Free'}</span></div>
  <div class="total"><span class="lbl">Total (PHP)</span><b>${peso(sub + ship)}</b></div></div>
  <form id="coForm"><div class="field"><label for="co1">Full name</label><input id="co1" type="text" required></div><div class="field"><label for="co2">Email</label><input id="co2" type="email" required></div><div class="field"><label for="co3">Delivery address</label><input id="co3" type="text" required></div><button class="btn solid" style="width:100%">Place order · ${peso(sub + ship)}</button></form>`);
}
document.addEventListener('submit', (e) => {
  if (e.target.id === 'coForm') {
    e.preventDefault();
    cart = [];
    saveCart();
    renderCart();
    $('#modal').innerHTML =
      '<button class="x" style="float:right" data-close aria-label="Close">×</button><h3>Thank you</h3><p class="lead">Your order has been received. A confirmation is on its way to your inbox.</p><p style="margin-top:18px"><a class="btn" href="#shop" data-close>Continue browsing</a></p>';
  }
});

function searchModal() {
  openModal(
    `<button class="x" style="float:right" data-close aria-label="Close">×</button><h3>Search</h3><input id="sq" type="search" placeholder="Search rings, necklaces, pearls…" autocomplete="off"><div id="sres" style="margin-top:12px"></div>`,
  );
  const draw = () => {
    const q = $('#sq').value.trim().toLowerCase();
    const l = q
      ? PRODUCTS.filter(
          (p) =>
            p.page !== 'home' &&
            p.page !== 'custom' &&
            (p.name + ' ' + p.mat + ' ' + (p.page || '')).toLowerCase().includes(q),
        ).slice(0, 8)
      : [];
    $('#sres').innerHTML = q
      ? l.length
        ? l
            .map(
              (p) =>
                `<div class="sres"><div class="th">${pArt(p)}</div><div><b style="font-weight:500">${p.name}</b><div class="mat" style="font-size:11px;color:var(--muted)">${peso(p.price)}</div></div><button class="btn" style="padding:8px 14px" data-sadd="${p.id}">Add</button></div>`,
            )
            .join('')
        : '<p class="lead">No pieces found.</p>'
      : '';
  };
  $('#sq').oninput = draw;
  setTimeout(() => $('#sq').focus(), 50);
}

const HEART =
  '<svg viewBox="0 0 24 24"><path d="M12 20s-7.500-4.600-7.500-10A4.300 4.300 0 0112 7.600 4.300 4.300 0 0119.500 10c0 5.400-7.500 10-7.500 10z"/></svg>';
const card = (p) =>
  `<article class="card"><div class="ph">${photo(p.img, p.name)}${p.tag ? `<span class="tag">${esc(p.tag)}</span>` : ''}<button class="heart ${wish.has(p.id) ? 'on' : ''}" data-heart="${p.id}" aria-label="Save ${esc(p.name)}" aria-pressed="${wish.has(p.id)}">${HEART}</button></div><div class="body"><div class="head"><h4>${esc(p.name)}</h4><span class="price">${peso(p.price)}</span></div><p class="mat">${esc(p.mat)}</p><div class="dots" aria-hidden="true"><i class="g ${p.metal === 'gold' ? 'cur' : ''}"></i><i class="s ${p.metal === 'silver' ? 'cur' : ''}"></i></div><button class="add" data-add="${p.id}">Add to cart</button></div></article>`;
const hero = (eb, h, sub, crumb) =>
  `<div class="wrap"><div class="crumbs">${crumb || ''}</div></div><section class="pagehero wrap"><span class="eyebrow">${eb}</span><h1>${h}</h1><p>${sub}</p></section>`;
const split = (cls, eb, h, t, link, href, rev, art) =>
  `<section class="split ${rev ? 'rev' : ''}"><div class="pic">${art}</div><div class="copy"><span class="eyebrow">${eb}</span><h2>${h}</h2><p class="lead">${t}</p>${link ? `<a class="more" href="${href}">${link} →</a>` : ''}</div></section>`;
const cta = (h, t, l, href) =>
  `<section class="cta"><div class="wrap"><h3>${h}</h3><p>${t}</p><a class="btn" href="${href}">${l}</a></div></section>`;
const steps = (arr) =>
  `<div class="steps">${arr.map((s, i) => `<div class="s"><span class="n">0${i + 1}</span><h4>${s[0]}</h4><p>${s[1]}</p></div>`).join('')}</div>`;
const faqs = (a) => a.map((f) => `<details><summary>${f[0]}</summary><p>${f[1]}</p></details>`).join('');
const rtable = (heads, rows) =>
  `<div class="tw"><table><thead><tr>${heads.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;

const GROUPS = {
  shop: [
    ['shop', 'All jewelry'],
    ['rings', 'Rings'],
    ['necklaces', 'Necklaces'],
    ['bracelets', 'Bracelets'],
    ['earrings', 'Earrings'],
  ],
  custom: [
    ['make-it-yours', 'Make it yours'],
    ['engraving', 'Engraving'],
    ['personalize', 'Personalize jewelry'],
  ],
  about: [
    ['about', 'The world of Lili'],
    ['story', 'Our story'],
    ['mission', 'Mission & vision'],
    ['reviews', 'Client reviews'],
  ],
  support: [
    ['support', 'Client care'],
    ['faqs', 'FAQs'],
    ['care', 'Jewelry care guide'],
    ['shipping', 'Shipping & returns'],
    ['size', 'Size guide'],
  ],
};
const GROUP_OF = { home: 'home', contact: 'contact' };
Object.entries(GROUPS).forEach(([g, l]) => l.forEach((x) => (GROUP_OF[x[0]] = g)));
let sortMode = 'featured',
  metalMode = 'all';
function shopPage(cat) {
  let list = PRODUCTS.filter((p) => (cat ? p.page === cat : p.all));
  const total = list.length;
  if (metalMode !== 'all') list = list.filter((p) => p.metal === metalMode);
  if (sortMode === 'low') list.sort((a, b) => a.price - b.price);
  else if (sortMode === 'high') list.sort((a, b) => b.price - a.price);
  else if (sortMode === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
  const tabs = [
    ['shop', 'All jewelry'],
    ['rings', 'Rings'],
    ['necklaces', 'Necklaces'],
    ['bracelets', 'Bracelets'],
    ['earrings', 'Earrings'],
  ];
  return `<div class="wrap"><div class="filters"><div class="pills">${tabs.map((x) => `<a class="pill ${(cat || 'shop') === x[0] ? 'on' : ''}" href="#${x[0]}">${x[1]}</a>`).join('')}</div><div style="display:flex;gap:14px;flex-wrap:wrap"><label>Metal <select id="metalSel"><option value="all">All</option><option value="gold" ${metalMode === 'gold' ? 'selected' : ''}>Gold</option><option value="silver" ${metalMode === 'silver' ? 'selected' : ''}>Silver</option></select></label><label>Sort <select id="sortSel"><option value="featured">Featured</option><option value="low" ${sortMode === 'low' ? 'selected' : ''}>Price: low to high</option><option value="high" ${sortMode === 'high' ? 'selected' : ''}>Price: high to low</option><option value="name" ${sortMode === 'name' ? 'selected' : ''}>Name: A to Z</option></select></label></div></div>${list.length ? `<div class="grid">${list.map(card).join('')}</div>` : '<p class="count">No pieces match this filter.</p>'}<p class="count">Showing ${list.length} of ${total} pieces</p></div>`;
}
const SHOPHEAD = {
  shop: [
    'The Lili collection',
    'Jewelry for a life well loved.',
    'Enduring forms, precious materials and a little everyday magic. Discover the pieces that feel like you.',
  ],
  rings: [
    'The ring collection',
    'A circle. A thousand stories.',
    'Sculpted signets, delicate bands and meaningful stackers. Find the ring that becomes part of you.',
  ],
  necklaces: [
    'The necklace collection',
    'Keep something close.',
    'Fine chains, tactile pendants and layers that tell your story. Beautiful on their own, lovely together.',
  ],
  bracelets: [
    'The bracelet collection',
    'A little grace in every gesture.',
    'Fluid chains and sculpted cuffs that move with you from morning to night.',
  ],
  earrings: [
    'The earring collection',
    'Light, at every turn.',
    'Sculpted hoops, pearl drops and quiet studs. Made to catch the light and go with everything.',
  ],
};
const FEAT = {
  shop: [
    'Lili collection',
    'A softer kind of statement.',
    'Fine gold, gentle curves. Meet the new staples of everyday elegance.',
    'hands',
  ],
  rings: [
    'Your signature, in gold',
    'Wear one. Make it yours.',
    'Begin with a simple band, then add a little letter, a date or a name. Our engravers do it by hand.',
    'f_rings',
  ],
  necklaces: [
    'The art of layering',
    'Your story, in layers.',
    'Mix lengths, textures and charms. Short chains sit close, longer ones fall with grace.',
    'f_neck',
  ],
  bracelets: [
    'The finishing touch',
    'The finishing touch.',
    'A little shine at the wrist. Pair a fine chain with a sculpted cuff and call it done.',
    'hands',
  ],
  earrings: [
    'Everyday icons',
    'Your everyday icons.',
    'Light enough for every day, finished well enough to keep for decades.',
    'f_ear',
  ],
};
const BOTTOM = {
  shop: [
    'A beautiful beginning.',
    'Every Lili piece arrives in a keepsake pouch and gift box, ready to give or to keep.',
  ],
  rings: [
    'The perfect fit, without the guesswork.',
    'Use the size guide to measure a ring you already own, or order a free sizing kit.',
  ],
  necklaces: [
    'Words worn close to the heart.',
    'Add a name or a date to any pendant. Discover the details of our engraving service.',
  ],
  bracelets: [
    'Made to move with you.',
    'Every bracelet is adjustable or sized to fit. See how to find your wrist measurement.',
  ],
  earrings: [
    'The details make the difference.',
    'Hypoallergenic posts, secure backs and a finish that stays bright.',
  ],
};
const PAGES = {
  home() {
    const fav = pick(['hf1', 'hf2', 'hf3', 'hf4']);
    return `<section class="hero">${heroArt()}<div class="in"><h1>Discover Your Signature Shine</h1><a class="btn red" href="#shop">Order Now!</a></div></section>
 <section class="sec"><div class="wrap"><div class="sec-h"><div><span class="eyebrow">Find your pieces</span><h2>An expression, all your own.</h2></div><a class="more" href="#shop">Explore all jewelry →</a></div>
 <div class="tiles">${['rings', 'necklaces', 'bracelets', 'earrings'].map((c, i) => `<a class="tile" href="#${c}"><div class="ph" style="position:relative">${scene('hc' + (i + 1), c)}</div><div class="l">${c[0].toUpperCase() + c.slice(1, -1) + (c === 'necklaces' ? 's' : 's')}<span>Discover →</span></div></a>`).join('')}</div></div></section>
 <section class="sec" style="padding-top:0"><div class="wrap"><div class="sec-h"><div><span class="eyebrow">The pieces you return to</span><h2>Forever favorites.</h2></div><a class="more" href="#shop">Shop bestsellers →</a></div><div class="grid">${fav.map(card).join('')}</div></div></section>
 ${split('', 'The Lili atelier', 'Made slowly. Worn always.', 'We believe fine things are worth the wait. Each piece is sketched, cast, filed and polished by hand, then checked twice before it leaves our bench.', 'Our story →', '#story', false, scene('h_atelier', 'Jeweler at the atelier bench'))}
 ${split('', 'Engraving & personalizing', 'A name. A date. A world of meaning.', 'Turn a beautiful piece into a personal one. Add an initial, a date or a few words, engraved by hand.', 'Personalize →', '#engraving', true, scene('h_engrave', 'Engraved pendant beside a hand tool'))}
 <div class="wrap"><div class="strip"><div><b>Crafted with care</b>Recycled gold and silver</div><div><b>Made with intention</b>Finished by hand in small batches</div><div><b>Free shipping ${peso(FREE_SHIP).replace('.00', '')}+</b>Complimentary on every order</div><div><b>Lifetime care</b>Cleaning and repairs</div></div></div>
 <section class="quote"><div class="wrap"><div class="stars">★★★★★</div><q>“It’s the necklace I reach for every morning. A quiet little reminder of the people I love.”</q><small style="color:var(--muted)">Marielle T. · Verified buyer</small></div></section>
 <section class="sec"><div class="wrap"><div class="sec-h"><h2>The art of keeping.</h2></div><div class="three">
 <div class="it"><div class="ph">${scene('k1', 'Woman resting her hands on linen, wearing gold')}</div><span class="eyebrow" style="display:block;margin-top:12px">Everyday</span><h4>The luxury of an everyday ritual</h4><a class="more" href="#care">Read more →</a></div>
 <div class="it"><div class="ph">${scene('k2', 'Gold rings on ivory cloth')}</div><span class="eyebrow" style="display:block;margin-top:12px">Heirloom</span><h4>Treasures for a lifetime</h4><a class="more" href="#care">Read more →</a></div>
 <div class="it"><div class="ph">${scene('k3', 'Gift box and pouch with a gold chain')}</div><span class="eyebrow" style="display:block;margin-top:12px">Gifting</span><h4>For someone, something meaningful</h4><a class="more" href="#make-it-yours">Read more →</a></div></div></div></section>
 <section class="cta"><div class="wrap" style="display:grid;grid-template-columns:1fr 1fr;gap:30px;text-align:left;align-items:center" id="newsWrap"><div><span class="eyebrow">Stay in touch</span><h3 style="margin-top:8px">A little beauty in your inbox.</h3></div><form id="newsForm" style="display:flex;gap:10px;flex-wrap:wrap"><input id="newsEmail" type="email" placeholder="Your email" required style="flex:1;min-width:180px"><button class="btn solid">Subscribe</button></form></div></section>`;
  },
  shop: () => shopPage(null),
  rings: () => shopPage('rings'),
  necklaces: () => shopPage('necklaces'),
  bracelets: () => shopPage('bracelets'),
  earrings: () => shopPage('earrings'),
  'make-it-yours'() {
    return `${hero('Crafted by our atelier', 'Made personal. Made meaningful.', 'A name, a date, a tiny detail. Make every piece unmistakably yours.', 'Home / Customize')}
 <section class="sec wrap" style="padding-top:0"><div class="three c2"><div class="it"><div class="ph" style="height:300px;aspect-ratio:auto">${scene('c_stone', 'Gold pendant on cloth beside engraving tools')}</div><span class="eyebrow" style="display:block;margin-top:12px">Engraving</span><h4>A lasting impression.</h4><a class="more" href="#engraving">Start engraving →</a></div><div class="it"><div class="ph" style="height:300px;aspect-ratio:auto">${scene('c_paper', 'Gold charm necklace on handmade paper')}</div><span class="eyebrow" style="display:block;margin-top:12px">Personalize</span><h4>Entirely your own.</h4><a class="more" href="#personalize">Build yours →</a></div></div></section>
 <section class="band sec"><div class="wrap"><div class="center" style="margin-bottom:30px"><span class="eyebrow">How it works</span><h2 style="font-size:34px;margin-top:8px">Your story starts here.</h2></div>${steps(
   [
     ['Find your piece', 'Choose a pendant, ring or bracelet that suits you.'],
     ['Add your meaning', 'Pick an initial, a short word or a date.'],
     ['Leave the rest to us', 'We engrave, polish and pack it by hand.'],
   ],
 )}</div></section>
 <section class="sec"><div class="wrap"><div class="sec-h"><h2>Begin with a little inspiration.</h2></div><div class="grid">${['cu1', 'cu2', 'cu3', 'cu4'].map((i) => card(byId(i))).join('')}</div></div></section>
 ${cta('A special idea in mind?', 'Tell us what you have in mind and our atelier will help you shape it.', 'Talk to the atelier', '#contact')}`;
  },
  engraving() {
    return `${hero('Engraved by hand', 'Leave a little of yourself.', 'Add a few words to a Lili piece. Preview it here before it goes to the bench.', 'Home / Customize / Engraving')}
 <section class="wrap" style="padding-bottom:56px"><div class="two"><div class="panel" style="padding:0;background:var(--sand);position:relative"><div class="engrave-prev">${scene('c_eng', 'Engraved gold pendant on ivory cloth')}<div class="chip">Preview · <span id="engTxt" style="font-family:'Cormorant Garamond',serif;font-size:20px">Camille</span></div></div></div>
 <div class="panel"><span class="eyebrow">The Lumi Pendant</span><h2 style="font-size:32px;margin:6px 0 16px">Your words, engraved.</h2>
 <div class="field"><label for="engIn">Your engraving (max 12 characters)</label><input id="engIn" type="text" maxlength="12" value="Camille"></div>
 <div class="field"><span class="lbl">Style</span><div class="opts fonts" id="engFont"><button class="opt on" data-f="Cormorant Garamond" style="font-family:'Cormorant Garamond'">Aa</button><button class="opt" data-f="Georgia" style="font-family:Georgia">Aa</button><button class="opt" data-f="Inter" style="font-family:Inter;font-size:22px">Aa</button></div></div>
 <div class="field"><span class="lbl">Price</span><div style="font-size:13px;color:var(--muted)">Pendant ${peso(byId('cu1').price)} + engraving ${peso(PRICING.engraveFee)}</div></div>
 <div class="total"><span class="lbl">Total</span><b>${peso(byId('cu1').price + PRICING.engraveFee)}</b></div>
 <button class="btn solid" id="engAdd" style="width:100%">Add engraved piece to cart</button></div></div></section>
 <section class="band sec"><div class="wrap"><div style="margin-bottom:24px"><span class="eyebrow">A small detail</span><h2 style="font-size:34px;margin-top:8px">An enduring memory.</h2></div>${steps(
   [
     ['Choose your curves', 'Pick from three engraving styles.'],
     ['Make your mark', 'Type up to twelve characters.'],
     ['Finished with care', 'Our engraver does the rest, by hand.'],
   ],
 )}</div></section>
 <section class="sec"><div class="wrap" style="max-width:760px"><h2 style="font-size:32px;margin-bottom:12px">Before you make it personal.</h2>${faqs(
   [
     [
       'What can I engrave?',
       'Letters, numbers and a few simple symbols, up to 12 characters on pendants and 8 on rings.',
     ],
     [
       'Can I change my engraving after ordering?',
       'Engraving starts within 24 hours of your order. Contact us right away and we will do our best to update it.',
     ],
     ['How long does it take?', 'Engraved pieces ship in 5 to 7 business days.'],
     [
       'Can engraved pieces be returned?',
       'Personalized pieces are final sale because they are made only for you.',
     ],
   ],
 )}</div></section>
 ${cta('Need help finding the right words?', 'Our atelier can suggest short phrases, dates and symbols.', 'Ask the atelier', '#contact')}`;
  },
  personalize() {
    return `${hero('Designed with you', 'A piece of your own.', 'Start with a chain. Choose a metal, pick an initial and add a little charm.', 'Home / Customize / Personalize')}
 <section class="wrap" style="padding-bottom:56px"><div class="two"><div class="panel" style="padding:0;background:var(--sand);position:relative;min-height:380px"><div style="position:absolute;inset:0">${pArt({ img: 'p_neck', name: 'Personalized necklace' })}</div><div class="chip">Initial · <span id="perInit" style="font-family:'Cormorant Garamond',serif;font-size:22px">A</span></div></div>
 <div class="panel"><span class="eyebrow">Personalized necklace</span><h2 style="font-size:32px;margin:6px 0 16px">A little more you.</h2>
 <div class="field"><span class="lbl">Choose your metal</span><div class="opts" id="perMetal"><button class="opt on" data-m="gold">Gold vermeil</button><button class="opt" data-m="silver">Sterling silver</button></div></div>
 <div class="field"><span class="lbl">Choose your initial</span><div class="letters" id="perLet">${'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
   .split('')
   .map((l, i) => `<button class="opt ${i === 0 ? 'on' : ''}" data-l="${l}">${l}</button>`)
   .join('')}</div></div>
 <div class="field"><label for="perChain">Chain length</label><select class="f" id="perChain"><option value="0">40 cm · Choker</option><option value="0" selected>45 cm · Classic</option><option value="${PRICING.chainUpgrade}">50 cm · Long (+${peso(PRICING.chainUpgrade)})</option></select></div>
 <div class="total"><span class="lbl">Total</span><b id="perTotal">${peso(PRICING.personalize.gold)}</b></div>
 <button class="btn solid" id="perAdd" style="width:100%">Add to cart</button></div></div></section>
 <section class="band sec"><div class="wrap"><div style="margin-bottom:24px"><h2 style="font-size:34px">Let the details do the talking.</h2></div>${steps(
   [
     ['Your letter', 'Choose the initial that matters most.'],
     ['Your length', 'Choose the chain length that sits where you like.'],
     ['Your finishing touch', 'Add a gift box and a handwritten note.'],
   ],
 )}</div></section>
 <section class="sec"><div class="wrap" style="max-width:760px"><h2 style="font-size:30px;margin-bottom:10px">The finer details.</h2>${faqs(
   [
     ['How long does a custom piece take?', 'Between 5 and 7 business days, plus shipping.'],
     ['Is my piece made to order?', 'Yes. We finish each piece after you order, which keeps waste low.'],
     ['Can I gift it?', 'Yes. Add a note at checkout and we will include it in the gift box.'],
   ],
 )}</div></section>`;
  },
  about() {
    return `${hero('The world of Lili Gewelry', 'For the things that matter.', 'We make modern heirlooms for everyday life, crafted with purpose and a love for detail.', 'Home / About')}
 <div class="wrap" style="padding-bottom:50px"><div style="height:380px">${scene('ab_window', 'The Lili atelier desk by the window')}</div></div>
 ${split('', 'Precious, not precious', 'Luxury is a feeling. Not an occasion.', 'A well-loved piece of jewelry holds more than its weight in gold. It carries the memory of a person, a place, a beginning.', 'Read our story →', '#story', false, scene('portrait', 'Camille at her bench'))}
 <section class="sec"><div class="wrap"><div class="sec-h"><h2>Get to know us.</h2></div>${steps([
   ['Our story', 'A small family atelier that grew from one ring and a lot of patience.'],
   ['Mission & vision', 'What we make, how we make it and why it matters.'],
   ['Your stories', 'The words our clients share with us, in their own voice.'],
 ])}</div></section>
 ${cta('Your story belongs here, too.', 'Share what your Lili piece means to you.', 'Read the reviews', '#reviews')}`;
  },
  story() {
    return `${hero('Our story', 'It began with a ring.', 'A perfect ring is both rare and tiny. It became our reason to start something worth keeping.', 'Home / About / Our story')}
 ${split('', 'Camille’s tale', 'A little gold. A whole life.', 'Camille Laurent started Lili while fixing her grandmother’s ring at a kitchen bench. Years later, that same bench is where every Lili piece begins.', '', '#story', true, scene('portrait', 'Camille Laurent at her bench'))}
 <section class="quote" style="padding:36px 0"><div class="wrap"><q style="font-size:28px;max-width:34ch">“We don’t make jewelry for a box. We make it for a life.”</q></div></section>
 <section class="sec"><div class="wrap" style="max-width:820px"><h2 style="font-size:34px;margin-bottom:20px">Growing slowly. Staying close.</h2>${[
   ['2018', 'A small beginning', 'One bench, one silversmith and twelve rings.'],
   ['2020', 'A more personal touch', 'Engraving arrives, and every order gets a handwritten note.'],
   ['2022', 'A considered shift', 'We move to recycled gold and silver across every collection.'],
   [
     '2026',
     'Still learning. Still making.',
     'A small team, a growing family of clients, and the same bench.',
   ],
 ]
   .map((t) => `<div class="tl"><b>${t[0]}</b><div><h4>${t[1]}</h4><p>${t[2]}</p></div></div>`)
   .join('')}</div></section>
 ${split('', 'Meet the makers', 'The people behind the polish.', 'Our silversmiths, polishers and engravers each have a signature. You will find their initials on the inside of every box.', 'Explore our values →', '#mission', false, scene('h_atelier', 'Jeweler polishing a ring'))}
 ${cta('The next chapter is yours.', 'Find a piece to begin your own story with.', 'Explore the collection', '#shop')}`;
  },
  mission() {
    return `${hero('Mission & vision', 'Beautiful things. Better intentions.', 'Our mission is to make jewelry worth keeping for the people who wear it and the places it comes from.', 'Home / About / Mission & vision')}
 ${split('', 'Our vision', 'A world that treasures what it already has.', 'We want jewelry to be mended, handed down and loved for decades, not replaced each season.', '', '#mission', true, scene('mi_wide', 'Jeweler examining a piece'))}
 <section class="sec"><div class="wrap"><div style="margin-bottom:24px"><span class="eyebrow">Our values</span><h2 style="font-size:34px;margin-top:8px">Three promises we return to.</h2></div>${steps(
   [
     ['Design for the long term', 'Simple shapes that outlast trends.'],
     ['Choose with care', 'Recycled metals, responsibly sourced stones and pearls.'],
     ['Keep the story going', 'Free cleaning and repairs for life.'],
   ],
 )}</div></section>
 <section class="band sec"><div class="wrap"><h2 style="font-size:32px;margin-bottom:18px">What goes into every piece.</h2>${rtable(
   ['Material', 'Our approach', 'Why it matters'],
   [
     ['Sterling silver', 'Recycled 925 silver', 'Bright, durable and endlessly reusable'],
     ['Gold vermeil', 'Thick 18k gold over silver', 'Warm color that lasts with care'],
     ['Freshwater pearls', 'Selected for luster', 'Natural variation, always one of a kind'],
     ['Packaging', 'Recycled paper and cotton', 'Made to be kept, not thrown away'],
   ],
 )}</div></section>
 ${split('', 'Craft that lasts', 'A promise is something you keep working on.', 'Our packaging, our repairs and our sourcing are reviewed every year, so the promise stays true.', 'Care guide →', '#care', false, scene('k2', 'Gold rings on ivory cloth'))}
 ${cta('Good questions make us better.', 'Ask us anything about how our pieces are made.', 'Contact us', '#contact')}`;
  },
  reviews() {
    const R = [
      ['My everyday, forever piece', 'The Sol Signet', 'Marielle T.'],
      ['A gift that felt really personal', 'The Lumi Pendant', 'Joaquin R.'],
      ['Just the right kind of statement', 'The Alba Hoops', 'Bea S.'],
      ['Worth the little wait', 'The Initial Necklace', 'Camille D.'],
      ['Beautiful, with a helpful team', 'The Aurea Cuff', 'Ana P.'],
      ['A lovely little ritual', 'The Perle Drops', 'Nina L.'],
    ];
    return `${hero('Words from our clients', 'The stories you give us.', 'Real thoughts, from the people who wear Lili every day.', 'Home / About / Client reviews')}
 <section class="band" style="padding:34px 0"><div class="wrap score"><div><div class="big">4.9</div><div class="stars">★★★★★</div><small style="color:var(--muted)">Based on 1,248 reviews</small></div><div class="bars">${[
   ['5', 92],
   ['4', 6],
   ['3', 1],
   ['2', 1],
   ['1', 0],
 ]
   .map((b) => `<div>${b[0]}★<i><s style="width:${b[1]}%"></s></i>${b[1]}%</div>`)
   .join('')}</div></div></section>
 <section class="sec"><div class="wrap"><div class="rev-grid">${R.map((r) => `<div class="rcard"><div class="stars">★★★★★</div><h4>${r[0]}</h4><p>The finish is lovely, it arrived beautifully wrapped and I have not taken it off since.</p><small>${r[2]} · ${r[1]}</small></div>`).join('')}</div></div></section>
 ${split('', 'Told in their words', '“The ring I bought to mark a new beginning became the one I never leave behind.”', 'Isabel S. · Verified buyer', 'Find your own forever favorite →', '#shop', true, scene('hands', 'Hand wearing a gold bracelet'))}`;
  },
  support() {
    return `${hero('We are here to help', 'A little care goes a long way.', 'Everything you need to enjoy, wear and keep your Lili pieces.', 'Home / Support')}
 <section class="sec wrap" style="padding-top:0"><div class="three c2 g18">${[
   ['faqs', 'Frequently asked questions', 'Quick answers on orders, materials and engraving.'],
   ['care', 'Jewelry care guide', 'Keep every piece bright, whatever the metal.'],
   ['shipping', 'Shipping & returns', 'Delivery times and our return policy.'],
   ['size', 'Size guide', 'Rings, chains and bracelets, measured simply.'],
 ]
   .map(
     (c) =>
       `<a class="panel" style="background:var(--mint);border:0" href="#${c[0]}"><h4 style="font-size:24px">${c[1]}</h4><p style="color:var(--muted);margin:6px 0 12px">${c[2]}</p><span class="more">Open →</span></a>`,
   )
   .join('')}</div></section>
 <section class="band sec"><div class="wrap" style="max-width:760px"><h2 style="font-size:32px;margin-bottom:12px">A few things you might be wondering.</h2>${faqs(
   [
     ['What is my ring size?', 'Use the size guide, or request a free sizing kit.'],
     [
       'When will my order arrive?',
       'Ready-to-ship pieces arrive in 2 to 5 business days within Metro Manila.',
     ],
     ['Do you offer repairs?', 'Yes, free cleaning and repairs for the life of your piece.'],
   ],
 )}</div></section>
 ${split('', 'Keep the memories', 'Keep the beauty. Keep the memories.', 'Your jewelry is made to be worn. Learn how to look after it so it looks new for decades.', 'Read the care guide →', '#care', false, scene('k2', 'Gold rings on ivory cloth'))}
 ${cta('Still looking for a little help?', 'Write to hello@liligewelry.com and a real person will reply within one business day.', 'Contact us', '#contact')}`;
  },
  faqs() {
    return `${hero('Frequently asked', 'What would you like to know?', 'Can’t find it here? Our team will gladly help.', 'Home / Support / FAQs')}
 <section class="wrap" style="max-width:820px;padding-bottom:56px">${[
   [
     'Orders & payment',
     [
       [
         'How will I pay?',
         'All prices are in Philippine pesos (₱). We accept cards, GCash and bank transfer.',
       ],
       ['Can I change my order?', 'Yes, within 24 hours of placing it. Contact us as soon as you can.'],
     ],
   ],
   [
     'Jewelry & materials',
     [
       ['What is gold vermeil?', 'Thick 18k gold layered over sterling silver, longer lasting than plating.'],
       [
         'Is it hypoallergenic?',
         'Our silver and gold vermeil are nickel free and suited to most sensitive skin.',
       ],
     ],
   ],
   [
     'Personalization & gifting',
     [
       ['How long does engraving take?', 'Allow 5 to 7 business days.'],
       ['Do you offer gift wrapping?', 'Every piece comes in a keepsake pouch and box.'],
     ],
   ],
   [
     'Shipping & returns',
     [
       ['What is the return window?', '30 days for unworn, unpersonalized pieces.'],
       ['Is shipping free?', `Free on orders of ${peso(FREE_SHIP)} or more, otherwise ${peso(SHIP_FEE)}.`],
     ],
   ],
 ]
   .map((s) => `<h3 style="font-size:26px;margin:30px 0 4px">${s[0]}</h3>${faqs(s[1])}`)
   .join('')}</section>
 ${cta('Every question is welcome.', 'Our team replies within one business day.', 'Contact us', '#contact')}`;
  },
  care() {
    return `<section class="pagehero wrap" style="padding-top:56px"><span class="eyebrow">Jewelry care guide</span><h1>A little care. A lasting beauty.</h1><p>Small habits keep every piece looking the way it did on day one.</p></section>
 <div class="wrap" style="height:320px;margin-bottom:40px">${scene('k2', 'Gold rings on cloth beside a ceramic dish')}</div>
 <section class="band sec"><div class="wrap"><div style="margin-bottom:24px"><span class="eyebrow">Daily habits</span><h2 style="font-size:34px;margin-top:8px">Last on. First off.</h2></div>${steps(
   [
     ['Keep it dry', 'Remove jewelry before showers and swimming.'],
     ['Avoid chemicals', 'Perfume, lotion and cleaners dull the finish.'],
     ['Give it space', 'Store pieces apart so they do not scratch.'],
   ],
 )}</div></section>
 <section class="sec"><div class="wrap"><h2 style="font-size:32px;margin-bottom:16px">Different pieces. Different rituals.</h2>${[
   ['Solid gold', 'Wipe with a soft cloth. Wash gently with mild soap and warm water.'],
   ['Gold vermeil', 'Avoid abrasive cleaners. Buff lightly with a dry cloth.'],
   ['Sterling silver', 'Polish with a silver cloth. Store in a sealed pouch to slow tarnish.'],
   ['Freshwater pearls', 'Wipe after wearing. Never soak.'],
 ]
   .map((t, i) => `<div class="tl"><b>0${i + 1}</b><div><h4>${t[0]}</h4><p>${t[1]}</p></div></div>`)
   .join('')}</div></section>
 ${split('', 'Gifting', 'Put them to bed beautifully.', 'Store each piece in its pouch inside the gift box so it stays safe, dry and ready to wear.', 'Shop gifts →', '#shop', false, scene('k3', 'Gift box and pouch'))}
 ${cta('Not sure what your piece needs?', 'Send us a photo and we will tell you how to care for it.', 'Ask our team', '#contact')}`;
  },
  shipping() {
    return `${hero('Shipping & returns', 'Worth the little wait.', 'Delivered with care, wrapped by hand and easy to return if it isn’t right.', 'Home / Support / Shipping & returns')}
 <section class="sec wrap" style="padding-top:0"><div class="steps"><div class="s"><h4>Ready-to-ship pieces</h4><p>Dispatched within 2 business days.</p></div><div class="s"><h4>Made for you</h4><p>Personalized pieces ship in 5 to 7 business days.</p></div><div class="s"><h4>Follow every step</h4><p>Tracking is emailed as soon as your order leaves us.</p></div></div></section>
 <section class="band sec"><div class="wrap"><h2 style="font-size:32px;margin-bottom:16px">A little closer to you.</h2>${rtable(
   ['Destination', 'Delivery', 'Cost'],
   [
     ['Metro Manila', '2 to 3 business days', `${peso(SHIP_FEE)} · Free over ${peso(FREE_SHIP)}`],
     ['Luzon', '3 to 5 business days', `${peso(SHIP_FEE)} · Free over ${peso(FREE_SHIP)}`],
     ['Visayas & Mindanao', '4 to 7 business days', `${peso(464)} · Free over ${peso(FREE_SHIP)}`],
     ['International', '7 to 14 business days', peso(1450)],
   ],
 )}</div></section>
 <section class="sec"><div class="wrap"><h2 style="font-size:32px;margin-bottom:14px">A thoughtful return policy.</h2>${steps(
   [
     ['Get in touch', 'Write to us within 30 days of delivery.'],
     ['Send it safely', 'Pack the piece unworn in its original box.'],
     ['Get refunded', 'Refunds go back to your original payment method within 7 days.'],
   ],
 )}</div></section>
 <section class="band sec"><div class="wrap" style="max-width:760px"><h3 style="font-size:28px;margin-bottom:8px">Good to know.</h3>${faqs(
   [
     [
       'Do I pay duties and taxes?',
       'Philippine orders include all taxes. International orders may incur local duties.',
     ],
     [
       'What cannot be returned?',
       'Engraved and personalized pieces, and pierced earrings, for hygiene reasons.',
     ],
   ],
 )}</div></section>
 ${cta('Your order matters to us.', 'Questions about a delivery? We will look into it right away.', 'Contact us', '#contact')}`;
  },
  size() {
    return `${hero('Size guide', 'Find your perfect fit.', 'A few quick measurements make all the difference.', 'Home / Support / Size guide')}
 <section class="sec wrap" style="padding-top:0"><span class="eyebrow">Rings</span><h2 style="font-size:32px;margin:6px 0 16px">A comfortable kind of close.</h2>${rtable(
   ['US size', 'Diameter (mm)', 'Circumference (mm)', 'PH size'],
   [
     ['5', '15.7', '49.3', '9'],
     ['6', '16.5', '51.8', '11'],
     ['7', '17.3', '54.4', '13'],
     ['8', '18.2', '57.0', '16'],
     ['9', '19.0', '59.5', '18'],
   ],
 )}<p class="lead" style="margin-top:14px">Measure a ring you already own across its inside diameter and match it to the table. If you are between sizes, choose the larger.</p></section>
 <section class="band sec"><div class="wrap"><span class="eyebrow">Necklaces</span><h2 style="font-size:32px;margin:6px 0 16px">Find where your story sits.</h2>${rtable(
   ['Length', 'Style', 'Where it falls'],
   [
     ['40 cm', 'Choker', 'At the base of the neck'],
     ['45 cm', 'Classic', 'Just below the collarbone'],
     ['50 cm', 'Long', 'Mid chest'],
   ],
 )}</div></section>
 <section class="sec wrap"><span class="eyebrow">Bracelets</span><h2 style="font-size:32px;margin:6px 0 16px">A little room to move.</h2>${rtable(
   ['Wrist', 'Chains & cuffs', 'Our advice'],
   [
     ['14 – 15 cm', '16 cm', 'Close fit'],
     ['16 – 17 cm', '18 cm', 'Classic fit'],
     ['18 – 19 cm', '20 cm', 'Loose fit'],
   ],
 )}</section>
 ${cta('Let’s find your fit together.', 'Request a free sizing kit and we will post it to you.', 'Contact us', '#contact')}`;
  },
  contact() {
    return `${hero('Contact us', 'We’d love to hear from you.', 'Questions, ideas or a piece that needs a little love. Write to us.', 'Home / Contact us')}
 <section class="wrap" style="padding-bottom:56px"><div class="two wide"><form class="panel" id="contactForm"><h3 style="font-size:28px;margin-bottom:14px">Send a little note.</h3><div class="f2"><div class="field"><label for="cn">Your name</label><input id="cn" type="text" required></div><div class="field"><label for="ce">Email address</label><input id="ce" type="email" required></div></div><div class="field"><label for="cs">Subject</label><input id="cs" type="text"></div><div class="field"><label for="cm">Message</label><textarea id="cm" required></textarea></div><button class="btn solid">Send message</button></form>
 <div class="panel" style="background:var(--mint)"><span class="eyebrow">Reach us</span><h3 style="font-size:28px;margin:6px 0 12px">Real people. Thoughtful replies.</h3><p class="lead">Email<br><b style="color:var(--ink)">hello@liligewelry.com</b></p><p class="lead" style="margin-top:12px">Phone<br><b style="color:var(--ink)">+63 2 8123 4567</b></p><p class="lead" style="margin-top:12px">Hours<br>Monday to Saturday, 10 am to 6 pm</p></div></div></section>
 ${split('', 'Visit the atelier', 'Visit the atelier.', 'Drop by our Makati studio to try pieces on, get sized and talk through a custom idea. Appointments are welcome.', '', '#contact', false, scene('ab_window', 'The Lili atelier'))}
 <section class="sec"><div class="wrap" style="max-width:760px"><h3 style="font-size:28px;margin-bottom:8px">You might find it here.</h3>${faqs(
   [
     ['Track an order', 'Use the link in your shipping email, or write to us with your order name.'],
     ['Shipping & returns', 'See our policy under Support.'],
     ['Jewelry care & repairs', 'Free cleaning and repairs for the life of your piece.'],
   ],
 )}</div></section>`;
  },
};

const NAME = {
  shop: 'Shop',
  rings: 'Rings',
  necklaces: 'Necklaces',
  bracelets: 'Bracelets',
  earrings: 'Earrings',
};
function route(keep) {
  let r = (location.hash || '#home').slice(1);
  if (!PAGES[r]) r = 'home';
  let html = '';
  if (SHOPHEAD[r]) {
    const h = SHOPHEAD[r],
      f = FEAT[r],
      b = BOTTOM[r];
    html =
      hero(h[0], h[1], h[2], 'Home / Shop' + (r === 'shop' ? '' : ' / ' + NAME[r])) +
      `<section class="split" style="margin-bottom:40px"><div class="copy"><span class="eyebrow">${f[0]}</span><h2>${f[1]}</h2><p class="lead">${f[2]}</p><a class="more" href="#make-it-yours">Make it yours →</a></div><div class="pic">${scene(f[3], f[1])}</div></section>` +
      PAGES[r]() +
      `<section class="cta" style="margin-top:50px"><div class="wrap"><h3>${b[0]}</h3><p>${b[1]}</p><a class="btn" href="#size">Explore the size guide</a></div></section>`;
  } else html = PAGES[r]();
  $('#app').innerHTML = html;
  const g = GROUP_OF[r];
  $$('#menu a').forEach((a) => a.classList.toggle('active', a.dataset.g === g));
  $('#sub').innerHTML = GROUPS[g]
    ? `<div class="subnav"><div class="wrap">${GROUPS[g].map((x) => `<a href="#${x[0]}" class="${x[0] === r ? 'active' : ''}">${x[1]}</a>`).join('')}</div></div>`
    : '';
  document.title = 'Lili Gewelry';
  if (!keep) window.scrollTo(0, 0);
  bindPage(r);
}
function bindPage(r) {
  const s = $('#sortSel');
  if (s)
    s.onchange = (e) => {
      sortMode = e.target.value;
      route(true);
    };
  const ms = $('#metalSel');
  if (ms)
    ms.onchange = (e) => {
      metalMode = e.target.value;
      route(true);
    };
  const nf = $('#newsForm');
  if (nf)
    nf.onsubmit = (e) => {
      e.preventDefault();
      nf.reset();
      toast('Thank you for subscribing');
    };
  const cf = $('#contactForm');
  if (cf)
    cf.onsubmit = (e) => {
      e.preventDefault();
      cf.reset();
      toast('Your note is on its way to the atelier');
    };
  if (r === 'engraving') {
    let font = 'Cormorant Garamond';
    const t = $('#engTxt'),
      inp = $('#engIn');
    inp.oninput = () => (t.textContent = inp.value || ' ');
    $$('#engFont .opt').forEach(
      (b) =>
        (b.onclick = () => {
          $$('#engFont .opt').forEach((x) => x.classList.remove('on'));
          b.classList.add('on');
          font = b.dataset.f;
          t.style.fontFamily = `'${font}',serif`;
        }),
    );
    $('#engAdd').onclick = () => {
      const txt = (inp.value || '').trim();
      if (!txt) {
        toast('Enter your engraving first');
        return;
      }
      const p = byId('cu1');
      addToCart({
        key: 'eng-' + txt + '-' + font,
        id: p.id,
        name: p.name + ' (engraved)',
        extra: PRICING.engraveFee,
        img: 'p_cu1',
        note: `Engraving: “${txt}” · ${font}`,
      });
    };
  }
  if (r === 'personalize') {
    let metal = 'gold',
      letter = 'A';
    const calc = () => PRICING.personalize[metal] + Number($('#perChain').value);
    const upd = () => {
      $('#perTotal').textContent = peso(calc());
    };
    $$('#perMetal .opt').forEach(
      (b) =>
        (b.onclick = () => {
          $$('#perMetal .opt').forEach((x) => x.classList.remove('on'));
          b.classList.add('on');
          metal = b.dataset.m;
          upd();
        }),
    );
    $$('#perLet .opt').forEach(
      (b) =>
        (b.onclick = () => {
          $$('#perLet .opt').forEach((x) => x.classList.remove('on'));
          b.classList.add('on');
          letter = b.dataset.l;
          $('#perInit').textContent = letter;
        }),
    );
    $('#perChain').onchange = upd;
    $('#perAdd').onclick = () => {
      const ch = $('#perChain').selectedOptions[0].textContent.split(' ·')[0];
      addToCart({
        key: `per-${metal}-${letter}-${ch}`,
        id: 'per',
        name: 'Personalized Initial Necklace',
        metal,
        extra: Number($('#perChain').value),
        img: 'p_neck',
        note: `${metal === 'gold' ? 'Gold vermeil' : 'Sterling silver'} · Initial ${letter} · ${ch}`,
      });
    };
  }
}

document.addEventListener('click', (e) => {
  const t = e.target.closest(
    '[data-wadd],[data-wrm],#closeWish,[data-add],[data-inc],[data-dec],[data-rm],[data-heart],[data-close],#btnCart,#closeCart,#goCheckout,#btnSearch,#btnWish,#btnUser,.sres button',
  );
  if (!t) {
    return;
  }
  if (t.dataset.add) {
    const p = byId(t.dataset.add);
    addToCart(p);
  } else if (t.dataset.inc) setQty(t.dataset.inc, 1);
  else if (t.dataset.dec) setQty(t.dataset.dec, -1);
  else if (t.dataset.rm) removeItem(t.dataset.rm);
  else if (t.dataset.heart) toggleWish(t.dataset.heart);
  else if (t.dataset.wadd) {
    addToCart(byId(t.dataset.wadd));
  } else if (t.dataset.wrm) toggleWish(t.dataset.wrm);
  else if (t.id === 'closeWish') closeAll();
  else if (t.id === 'btnCart') openCart();
  else if (t.id === 'closeCart' || t.hasAttribute('data-close')) closeAll();
  else if (t.id === 'goCheckout') checkout();
  else if (t.id === 'btnUser') toast('Account sign-in is coming soon');
  else if (t.id === 'btnWish') openWish();
  else if (t.id === 'btnSearch') searchModal();
  else if (t.dataset.sadd) {
    addToCart(byId(t.dataset.sadd));
  }
});
$('#scrim').onclick = () => closeAll();
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeAll();
});
window.addEventListener('hashchange', () => {
  metalMode = 'all';
  closeAll();
  route();
});
renderCart();
syncWish();
route();
