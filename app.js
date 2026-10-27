/**
 * Pure Mantra Ayurvedic Cosmetology
 * Interactive Application Logic & Storefront Management
 * Primary Aesthetic: Minimalist Nature Olive Green with Logo Golden Accents
 * Interaction: 360-Degree Turn on Cursor Hover
 * Sole Store Location: Puthiyara, Kozhikode, Kerala (https://maps.app.goo.gl/14FxJsMqcdhjpaDq7)
 */

// --- Interactive Product Catalog Data ---
const PRODUCTS = [
  {
    id: "lavanyam-mukha-kanthi",
    pillar: "mukha",
    pillarLabel: "Mukha & Kaya",
    name: "Lavanyam Mukha Kanthi Tailam",
    subName: "Luxury Facial Glow Elixir",
    price: 1450,
    volume: "30 ml / 1.0 fl oz",
    sizes: [
      { size: "30 ml", price: 1450 },
      { size: "50 ml", price: 2190 }
    ],
    selectedSize: "30 ml",
    badge: "Flagship Elixir",
    badgeType: "badge-lime",
    concerns: ["skin-glow", "barrier-repair", "anti-pigmentation"],
    scentAccord: "Wild Sandalwood • Vetiver • Sweet Saffron Honey",
    texture: "Silky, golden fast-absorbing nectar oil",
    shortDesc: "Rich golden elixir formulated for deep epidermal barrier repair, cellular renewal, and authentic natural radiance.",
    ingredients: "Manjishta (Rubia cordifolia), Yashtimadhu (Licorice), Pure A2 Goat Milk, Fresh Pomegranate juice, Draksha (Raisin), Cold-pressed Sesame Base.",
    formulationNotes: "Formulated following traditional Sahasrayogam Taila Paka protocols. Slow-simmered in pure copper vessels for 72 hours.",
    ritual: "Warm 3-4 drops between clean palms. Gently press onto cleansed damp skin in upward circular motions at night (Sandhyakala ritual).",
    location: "Puthiyara, Kozhikode, Kerala",
    svgIllustration: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="product-illustration-art">
      <path d="M50 12 C44 26 28 48 28 66 C28 80 38 90 50 90 C62 90 72 80 72 66 C72 48 56 26 50 12 Z" fill="#C89F5A" fill-opacity="0.35" stroke="#f2ffb0" stroke-width="2.5"/>
      <circle cx="50" cy="62" r="14" fill="#f2ffb0" fill-opacity="0.65"/>
      <path d="M46 54 Q50 48 54 54" stroke="#090D07" stroke-width="2" stroke-linecap="round"/>
      <circle cx="44" cy="68" r="3" fill="#090D07"/>
      <circle cx="56" cy="68" r="3" fill="#090D07"/>
    </svg>`
  },
  {
    id: "bringa-brahmi-oil",
    pillar: "kesha",
    pillarLabel: "Kesha (Hair Care)",
    name: "Bringa Brahmi Hair Oil",
    subName: "Intensive Scalp & Follicle Tonic",
    price: 890,
    volume: "200 ml / 6.7 fl oz",
    sizes: [
      { size: "100 ml", price: 490 },
      { size: "200 ml", price: 890 }
    ],
    selectedSize: "200 ml",
    badge: "Flagship Scalp Tonic",
    badgeType: "badge-lime",
    concerns: ["hair-fall", "stress-cooling", "scalp-health"],
    scentAccord: "Cooling Camphor • Herbaceous Bhringaraj • Earthy Amla",
    texture: "Deep forest emerald oil, non-sticky and soothing",
    shortDesc: "Premium small-batch head oil formulated with concentrated active Bhringaraj & Brahmi to strengthen roots and calm the nervous system.",
    ingredients: "Bhringaraj (Eclipta alba), Brahmi (Bacopa monnieri), Amla, Neeli, Gunja seeds, Cold-pressed Virgin Coconut Oil.",
    formulationNotes: "Formulated and compounded in Puthiyara, Kozhikode. Manual herb crushing ensures intact volatile phytochemicals; zero mineral oils.",
    ritual: "Part hair into sections. Apply warm oil directly to the scalp with gentle finger pad pressure. Allow 45 minutes of absorption before rinsing.",
    location: "Puthiyara, Kozhikode, Kerala",
    svgIllustration: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="product-illustration-art">
      <rect x="36" y="24" width="28" height="58" rx="8" fill="#22301E" stroke="#f2ffb0" stroke-width="2.5"/>
      <rect x="42" y="14" width="16" height="10" rx="3" fill="#EEDDC9" stroke="#f2ffb0" stroke-width="1.5"/>
      <path d="M50 34 C44 44 42 54 50 64 C58 54 56 44 50 34 Z" fill="#f2ffb0"/>
    </svg>`
  },
  {
    id: "neelibringadi-oil",
    pillar: "kesha",
    pillarLabel: "Kesha (Hair Care)",
    name: "Neelibringadi Hair Oil",
    subName: "Classical Kerala Crown Elixir",
    price: 950,
    volume: "200 ml / 6.7 fl oz",
    sizes: [
      { size: "100 ml", price: 540 },
      { size: "200 ml", price: 950 }
    ],
    selectedSize: "200 ml",
    badge: "Traditional Formula",
    badgeType: "badge-olive",
    concerns: ["hair-fall", "hair-density", "premature-greying"],
    scentAccord: "Botanical Neeli Leaf • Coconut Milk Cream • Vetiver",
    texture: "Rich dark nourishing herbal oil",
    shortDesc: "Time-tested classical Kerala formulation combining fresh botanical juices infused into virgin coconut oil for dense, dark follicular nourishment.",
    ingredients: "Neeli (Indigofera tinctoria juice), Bhringaraj juice, Dhatri (Amla), Shatakratulata, Goat milk, Cow milk, Buffalo milk, Coconut milk.",
    formulationNotes: "Sahasrayogam classical method. The fresh four-milk blend neutralizes crown heat and supports dark hair density.",
    ritual: "Massage thoroughly into the root bed 2-3 times weekly. Excellent for overnight immersion or pre-bath Shiroabhyanga.",
    location: "Puthiyara, Kozhikode, Kerala",
    svgIllustration: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="product-illustration-art">
      <rect x="34" y="22" width="32" height="62" rx="10" fill="#162013" stroke="#C89F5A" stroke-width="2.5"/>
      <path d="M43 14 L57 14 L55 22 L45 22 Z" fill="#EEDDC9"/>
      <path d="M40 45 Q50 35 60 45 Q50 55 40 45 Z" fill="#f2ffb0"/>
      <circle cx="50" cy="62" r="5" fill="#f2ffb0"/>
    </svg>`
  },
  {
    id: "surabhi-bath-powder",
    pillar: "mukha",
    pillarLabel: "Mukha & Kaya",
    name: "Surabhi Soundarya Snan Churnam",
    subName: "Aromatic Daily Bath Cleanser",
    price: 680,
    volume: "150 g / 5.3 oz",
    sizes: [
      { size: "150 g", price: 680 },
      { size: "300 g", price: 1250 }
    ],
    selectedSize: "150 g",
    badge: "Zero-Soap Ritual",
    badgeType: "badge-coffee",
    concerns: ["daily-bath", "skin-glow", "body-clarity"],
    scentAccord: "Wild Rose • Aromatic Vetiver Root • Mysore Sandalwood",
    texture: "Velvety micro-pulverized botanical cleansing scrub",
    shortDesc: "Replaces synthetic drying soaps with an aromatic, grounding herbal cleansing ritual that restores skin biome and natural oils.",
    ingredients: "Vetiver (Usheera), Manjishta root, Wild Turmeric, Rose Petals, Green Gram (Mudga), Sandalwood powder, Kacholam.",
    formulationNotes: "Micro-pulverized raw botanicals. Preserves natural saponins and botanical aroma without added synthetic perfumes.",
    ritual: "Mix 2 tablespoons with lukewarm water, milk, or rose water into a creamy paste. Massage over damp body and rinse without soap.",
    location: "Puthiyara, Kozhikode, Kerala",
    svgIllustration: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="product-illustration-art">
      <ellipse cx="50" cy="70" rx="32" ry="18" fill="#22301E" stroke="#f2ffb0" stroke-width="2.5"/>
      <path d="M22 68 C22 42 78 42 78 68" stroke="#EEDDC9" stroke-width="2.5" fill="none"/>
      <circle cx="50" cy="48" r="6" fill="#f2ffb0"/>
    </svg>`
  },
  {
    id: "manjishta-lip-balm",
    pillar: "mukha",
    pillarLabel: "Mukha & Kaya",
    name: "Manjishta Lip Balm",
    subName: "The Debut Classic Tint & Care",
    price: 380,
    volume: "15 g / 0.5 oz",
    sizes: [
      { size: "15 g", price: 380 },
      { size: "30 g (Duo)", price: 690 }
    ],
    selectedSize: "15 g",
    badge: "The Debut Classic",
    badgeType: "badge-lime",
    concerns: ["lip-nourishment", "pigmentation-correction"],
    scentAccord: "Warm Ghee • Subtle Almond • Sweet Manjishta Root",
    texture: "Buttery, melting organic balm with subtle ruby flush",
    shortDesc: "Deeply nourishing, pigment-correcting lip care compounded with Manjishta root extract and pure organic cow's ghee.",
    ingredients: "Wild Manjishta (Indian Madder) root extract, Pure Vedic Cow's Ghee (Ghrita), Virgin Coconut Oil, Sweet Almond Oil, Natural Unbleached Beeswax.",
    formulationNotes: "Zero petroleum jelly, zero synthetic colorants. The soft ruby hue is drawn purely from sun-cured Manjishta root.",
    ritual: "Glide smoothly over lips throughout the day and before sleep for overnight lip nourishment and natural tint restoration.",
    location: "Puthiyara, Kozhikode, Kerala",
    svgIllustration: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="product-illustration-art">
      <rect x="36" y="32" width="28" height="48" rx="6" fill="#162013" stroke="#f2ffb0" stroke-width="2.5"/>
      <path d="M40 32 L40 22 C40 18 60 18 60 22 L60 32 Z" fill="#C89F5A" stroke="#f2ffb0" stroke-width="1.5"/>
      <circle cx="50" cy="56" r="4" fill="#f2ffb0"/>
    </svg>`
  },
  {
    id: "clarifying-lepa-mask",
    pillar: "mukha",
    pillarLabel: "Mukha & Kaya",
    name: "Kasturi Manjal & Chandan Lepa",
    subName: "Clarifying Herbal Face Mask",
    price: 820,
    volume: "100 g / 3.5 oz",
    sizes: [
      { size: "100 g", price: 820 }
    ],
    selectedSize: "100 g",
    badge: "Artisanal Blend",
    badgeType: "badge-olive",
    concerns: ["skin-glow", "blemish-control", "body-clarity"],
    scentAccord: "Raw Turmeric Root • Mysore Sandalwood • Nutmeg",
    texture: "Fine clarifying botanical clay powder",
    shortDesc: "Topical clarifying face mask crafted using Kasturi turmeric, pure Mysore sandalwood, and cold-pressed botanical clays.",
    ingredients: "Wild Turmeric (Curcuma aromatica), Mysore Sandalwood (Santalum album), Lodhra, Multani Mitti, Yashtimadhu, Nutmeg.",
    formulationNotes: "Formulated free from parabens, sulfates, and fillers. Clinically tested to calm Kapha-Pitta heat accumulations on facial skin.",
    ritual: "Mix 1 scoop with cucumber juice or tender coconut water. Apply thin layer, leave for 12-15 minutes until semi-dry, then rinse with cool water.",
    location: "Puthiyara, Kozhikode, Kerala",
    svgIllustration: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="product-illustration-art">
      <rect x="28" y="30" width="44" height="48" rx="8" fill="#162013" stroke="#C89F5A" stroke-width="2.5"/>
      <rect x="32" y="24" width="36" height="6" rx="2" fill="#EEDDC9"/>
      <circle cx="50" cy="54" r="10" fill="#f2ffb0"/>
    </svg>`
  },
  {
    id: "traditional-chyavanaprashyam",
    pillar: "rasayana",
    pillarLabel: "Rasayana (Internal Wellness)",
    name: "Traditional Chyavanaprashyam",
    subName: "Handcrafted Vitality & Immunity Paste",
    price: 1150,
    volume: "500 g / 17.6 oz",
    sizes: [
      { size: "500 g", price: 1150 },
      { size: "1 kg", price: 2150 }
    ],
    selectedSize: "500 g",
    badge: "FSSAI Registered Food",
    badgeType: "badge-lime",
    concerns: ["deep-immunity", "metabolic-vitality", "seasonal-wellness"],
    scentAccord: "Tart Amalaki • Cardamom • Ceylon Cinnamon • Forest Honey",
    texture: "Dense, dark, slow-simmered herbal medicinal paste",
    shortDesc: "Slow-cooked, small-batch immunity and vitality paste prepared strictly according to classical Charaka Samhita texts.",
    ingredients: "Fresh wild organic Amla (Amalaki), Guduchi (Giloy), Bilva, Shatavari, Ashwagandha, Pippali, Cardamom, Ceylon Cinnamon, Raw Forest Honey, A2 Ghee.",
    formulationNotes: "Prepared in artisanal batches under low heat to protect sensitive heat-labile vitamin complexes and active phytochemicals.",
    ritual: "Consume 1 teaspoon (10-12g) twice daily, preferably followed by a cup of warm organic milk or lukewarm water on an empty stomach.",
    location: "Puthiyara, Kozhikode, Kerala",
    svgIllustration: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="product-illustration-art">
      <path d="M30 40 Q50 32 70 40 L65 78 Q50 86 35 78 Z" fill="#22301E" stroke="#f2ffb0" stroke-width="2.5"/>
      <ellipse cx="50" cy="38" rx="22" ry="7" fill="#EEDDC9" stroke="#f2ffb0" stroke-width="1.5"/>
      <circle cx="50" cy="58" r="6" fill="#f2ffb0"/>
    </svg>`
  },
  {
    id: "karkidaka-kanji-kit",
    pillar: "ritucharya",
    pillarLabel: "Ritucharya (Seasonal)",
    name: "Karkidaka Kanji Rejuvenation Kit",
    subName: "7-Day Monsoon Wellness Regimen",
    price: 1280,
    volume: "Complete 7-Day Box",
    sizes: [
      { size: "7-Day Kit", price: 1280 },
      { size: "14-Day Family Box", price: 2350 }
    ],
    selectedSize: "7-Day Kit",
    badge: "Monsoon Special",
    badgeType: "badge-lime",
    concerns: ["monsoon-detox", "gut-immunity", "seasonal-wellness"],
    scentAccord: "Roasted Fenugreek • Trikatu Pepper • Dashapushpam Herbs",
    texture: "Wholesome red medicinal grain with spice sachets",
    shortDesc: "Specialized medicinal porridge program structured for monsoon rejuvenation with Njavara grains and pre-measured spice Kizhis.",
    ingredients: "Authentic Njavara medicinal raw grain, Dashapushpam extract pouches, Trikatu (Black Pepper, Long Pepper, Ginger), Fenugreek (Methi), Garden Cress (Asali), Cumin.",
    formulationNotes: "Formulated in Puthiyara, Kozhikode for classical monsoon metabolic resetting and digestive immunity.",
    ritual: "Boil 1 pouch of Njavara grains with the herbal spice Kizhi in 8 cups of water. Simmer until soft; stir in fresh coconut milk and consume warm for supper.",
    location: "Puthiyara, Kozhikode, Kerala",
    svgIllustration: `<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="product-illustration-art">
      <path d="M26 62 Q50 86 74 62 L78 50 Q50 42 22 50 Z" fill="#162013" stroke="#f2ffb0" stroke-width="2.5"/>
      <path d="M38 42 Q40 28 44 20" stroke="#EEDDC9" stroke-width="2" stroke-linecap="round"/>
      <path d="M50 40 Q52 24 56 16" stroke="#f2ffb0" stroke-width="2" stroke-linecap="round"/>
      <path d="M62 42 Q64 28 68 20" stroke="#EEDDC9" stroke-width="2" stroke-linecap="round"/>
    </svg>`
  }
];

// --- Craftsmanship Reel Stages ---
const CRAFTSMANSHIP_STAGES = [
  {
    stage: 1,
    title: "1. Botanical Grading & Hand-Sorting",
    subtitle: "Raw Root Selection",
    time: "0:45",
    desc: "Every single root of Manjishta and Yashtimadhu is visually inspected and graded by our compounders in Puthiyara, Kozhikode. No machine sorting, zero bruised botanicals.",
    visualTitle: "Manjishta & Yashtimadhu Grading",
    visualDetail: "Inspecting organic wild-harvested roots for peak sap and tannin concentration."
  },
  {
    stage: 2,
    title: "2. Kwath Simmering in Copper Vessels",
    subtitle: "Traditional Decoction (72 hrs)",
    time: "1:20",
    desc: "Herbal decoctions (Kwath) simmer on slow heat inside traditional heavy-bottom copper cauldrons, releasing water-soluble curative actives without burning volatile essences.",
    visualTitle: "Slow Copper Vessel Simmering",
    visualDetail: "Continuous gentle stirring according to classical Sahasrayogam heating guidelines."
  },
  {
    stage: 3,
    title: "3. Sneha Kalpana (Oil Infusion Stages)",
    subtitle: "Mridu to Madhyama Paka",
    time: "2:10",
    desc: "Virgin cold-pressed coconut and sesame oils are integrated into the decoction. We observe the foam transformation until Madhyama Paka is attained for peak follicular penetration.",
    visualTitle: "Madhyama Paka Attainment",
    visualDetail: "Testing moisture elimination: zero sputtering sound, perfect golden sheen."
  },
  {
    stage: 4,
    title: "4. Artisanal Compounding & Bottling",
    subtitle: "Manual Small-Batch Hand Pouring",
    time: "1:15",
    desc: "Bottled directly into amber glass and food-grade packaging in small, dated batches at Puthiyara, Kozhikode. Ready for local walk-ins and direct concierge dispatch.",
    visualTitle: "Hand-Numbered Small Batches",
    visualDetail: "Sealed fresh with complete batch provenance and registered standards."
  }
];

// --- State Management ---
let cart = JSON.parse(localStorage.getItem("pure_mantra_cart") || "[]");
let currentPillarFilter = "all";
let currentConcernFilter = "all";

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateCartUI();
  initFilterListeners();
  initCraftsmanshipReel();
  initQuizLogic();
  initMobileMenu();
  initBotanicalLab();
  initBowlScrollTransition();
});

// --- Product Rendering with 360-Degree Turn Interaction ---
function renderProducts() {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  const filtered = PRODUCTS.filter(p => {
    const matchesPillar = currentPillarFilter === "all" || p.pillar === currentPillarFilter;
    const matchesConcern = currentConcernFilter === "all" || p.concerns.includes(currentConcernFilter);
    return matchesPillar && matchesConcern;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
        <p style="font-size: 1.1rem; color: #C8BEB3; margin-bottom: 1rem;">
          No formulations match this combination.
        </p>
        <button class="btn-secondary" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(item => `
    <article class="product-card" data-id="${item.id}">
      <span class="product-card-badge ${item.badgeType}">${item.badge}</span>
      
      <!-- 360-Degree Rotating Stage -->
      <div class="product-media" onclick="openProductModal('${item.id}')" onmousemove="handleInteractiveSpin(event, this)" onmouseleave="resetInteractiveSpin(this)">
        <div class="product-360-indicator">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg>
          <span>360° Turn</span>
        </div>

        <div class="product-360-turntable" id="turntable-${item.id}">
          ${item.svgIllustration}
        </div>

        <div class="product-pedestal-shadow"></div>

        <button class="btn-quick-view" onclick="event.stopPropagation(); openProductModal('${item.id}')">
          View Formulation
        </button>
      </div>

      <div class="product-pillar-label">${item.pillarLabel}</div>
      <h3 class="product-name font-serif" onclick="openProductModal('${item.id}')" style="cursor: pointer;">${item.name}</h3>
      <p class="product-snippet">${item.shortDesc}</p>

      <!-- Size Selector -->
      <div class="product-size-selector">
        <span style="font-size: 0.72rem; color: #9E9385; font-weight: 600;">Size:</span>
        ${item.sizes.map(s => `
          <button class="size-pill-btn ${s.size === item.selectedSize ? 'active' : ''}" onclick="selectProductSize('${item.id}', '${s.size}', ${s.price}, this)">
            ${s.size}
          </button>
        `).join("")}
      </div>

      <div class="product-ingredients-preview">
        <strong>Aroma &amp; Accord:</strong> ${truncateText(item.scentAccord, 55)}
      </div>

      <div class="product-footer">
        <div class="product-price-box">
          <span class="product-price" id="price-display-${item.id}">₹${item.price.toLocaleString("en-IN")}</span>
          <span class="product-volume" id="volume-display-${item.id}">${item.selectedSize}</span>
        </div>
        <button class="btn-add-cart" onclick="addToCart('${item.id}')">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>
          Add to Bag
        </button>
      </div>
    </article>
  `).join("");
}

// --- Interactive 360 Spin on Mouse Hover & Move ---
function handleInteractiveSpin(e, mediaBox) {
  const turntable = mediaBox.querySelector(".product-360-turntable");
  if (!turntable) return;

  const rect = mediaBox.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const percentage = mouseX / rect.width;
  
  // Interactive full 360-degree rotation responsive to cursor position
  const degrees = Math.round(percentage * 360);
  turntable.style.transform = `rotateY(${degrees}deg)`;
}

function resetInteractiveSpin(mediaBox) {
  const turntable = mediaBox.querySelector(".product-360-turntable");
  if (!turntable) return;
  // Smoothly return or settle
  turntable.style.transform = "rotateY(0deg)";
}

// --- Interactive Size Selection ---
function selectProductSize(productId, size, price, btn) {
  const item = PRODUCTS.find(p => p.id === productId);
  if (!item) return;

  item.selectedSize = size;
  item.price = price;

  const priceEl = document.getElementById(`price-display-${productId}`);
  const volumeEl = document.getElementById(`volume-display-${productId}`);

  if (priceEl) priceEl.textContent = `₹${price.toLocaleString("en-IN")}`;
  if (volumeEl) volumeEl.textContent = size;

  const parent = btn.parentElement;
  if (parent) {
    parent.querySelectorAll(".size-pill-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  }
}

function truncateText(str, length) {
  if (str.length <= length) return str;
  return str.substring(0, length) + "...";
}

// --- Filter Event Handlers ---
function initFilterListeners() {
  const pillarTabs = document.querySelectorAll(".pillar-tab");
  pillarTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      pillarTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentPillarFilter = tab.getAttribute("data-pillar");
      renderProducts();
    });
  });

  const concernPills = document.querySelectorAll(".concern-pill");
  concernPills.forEach(pill => {
    pill.addEventListener("click", () => {
      concernPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      currentConcernFilter = pill.getAttribute("data-concern");
      renderProducts();
    });
  });
}

function resetFilters() {
  currentPillarFilter = "all";
  currentConcernFilter = "all";

  document.querySelectorAll(".pillar-tab").forEach(t => {
    t.classList.toggle("active", t.getAttribute("data-pillar") === "all");
  });
  document.querySelectorAll(".concern-pill").forEach(p => {
    p.classList.toggle("active", p.getAttribute("data-concern") === "all");
  });

  renderProducts();
}

// --- Cart Operations ---
function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const cartId = `${product.id}-${product.selectedSize}`;
  const existing = cart.find(item => item.cartId === cartId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      cartId: cartId,
      id: product.id,
      name: product.name,
      subName: product.subName,
      price: product.price,
      volume: product.selectedSize,
      qty: qty
    });
  }

  saveCart();
  updateCartUI();
  showToast(`Added "${product.name}" (${product.selectedSize}) to your bag.`);
  openCartDrawer();
}

function modifyQty(cartId, delta) {
  const item = cart.find(i => i.cartId === cartId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.cartId !== cartId);
    showToast("Item removed from your bag.");
  }

  saveCart();
  updateCartUI();
}

function saveCart() {
  localStorage.setItem("pure_mantra_cart", JSON.stringify(cart));
}

function updateCartUI() {
  const countBadge = document.getElementById("cartCountBadge");
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  if (countBadge) {
    countBadge.textContent = totalCount;
    countBadge.style.display = totalCount > 0 ? "flex" : "none";
  }

  const itemsContainer = document.getElementById("cartItemsContainer");
  const subtotalEl = document.getElementById("cartSubtotalVal");

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  if (subtotalEl) {
    subtotalEl.textContent = `₹${subtotal.toLocaleString("en-IN")}`;
  }

  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: #9E9385;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 1rem; opacity: 0.6;">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        <p style="font-size: 1rem; margin-bottom: 0.4rem; color: var(--color-cream-pure); font-weight: 700;">Your bag is empty</p>
        <p style="font-size: 0.85rem; margin-bottom: 1.5rem;">Handcrafted botanical formulations from Puthiyara, Kozhikode.</p>
        <button class="btn-primary" onclick="closeCartDrawer(); scrollToSection('shopSection')">Explore Formulations</button>
      </div>
    `;
    return;
  }

  itemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item-row">
      <div class="cart-item-thumb">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f2ffb0" stroke-width="2">
          <circle cx="12" cy="12" r="9"/>
          <path d="M12 7v5l3 3"/>
        </svg>
      </div>
      <div class="cart-item-meta">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-price">₹${item.price.toLocaleString("en-IN")}</div>
        <span style="font-size: 0.74rem; color: #A4988B;">Size: ${item.volume}</span>
      </div>
      <div class="cart-item-qty">
        <button class="btn-qty-mod" onclick="modifyQty('${item.cartId}', -1)">-</button>
        <span style="font-size: 0.9rem; font-weight: 700; min-width: 18px; text-align: center; color: var(--color-cream-pure);">${item.qty}</span>
        <button class="btn-qty-mod" onclick="modifyQty('${item.cartId}', 1)">+</button>
      </div>
    </div>
  `).join("");
}

function openCartDrawer() {
  document.getElementById("cartDrawerBackdrop")?.classList.add("active");
  document.getElementById("cartDrawer")?.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
  document.getElementById("cartDrawerBackdrop")?.classList.remove("active");
  document.getElementById("cartDrawer")?.classList.remove("active");
  document.body.style.overflow = "";
}

// --- Product Quick View Modal ---
function openProductModal(productId) {
  const item = PRODUCTS.find(p => p.id === productId);
  if (!item) return;

  const content = document.getElementById("productModalContent");
  if (!content) return;

  content.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1.3fr; gap: 2.2rem; align-items: start;">
      <div style="background: var(--color-black-pure); border-radius: var(--radius-md); padding: 2.2rem; text-align: center; border: 1px solid rgba(47, 66, 41, 0.6); position: relative;">
        <div style="width: 170px; height: 170px; margin: 0 auto 1.5rem; display: flex; align-items: center; justify-content: center;">
          ${item.svgIllustration}
        </div>

        <span class="product-card-badge ${item.badgeType}" style="position: static; display: inline-block; margin-bottom: 0.6rem;">${item.badge}</span>
        <div style="font-size: 0.78rem; color: #BDB2A5;">Interactive 360° Visual Model &bull; Photo Ready</div>
      </div>

      <div>
        <div style="font-size: 0.74rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--color-gold-accent); margin-bottom: 0.3rem; font-weight: 700;">
          ${item.pillarLabel}
        </div>
        <h2 style="font-size: 2rem; margin-bottom: 0.3rem; color: var(--color-cream-pure);" class="font-serif">${item.name}</h2>
        <div style="font-size: 0.95rem; color: #BDB2A5; margin-bottom: 1.2rem;">${item.subName}</div>

        <div style="font-family: var(--font-serif); font-size: 1.9rem; font-weight: 700; color: var(--color-accent-lime); margin-bottom: 1.2rem;">
          ₹${item.price.toLocaleString("en-IN")} <span style="font-size: 0.85rem; font-family: var(--font-sans); color: #9E9385;">(${item.selectedSize})</span>
        </div>

        <p style="font-size: 0.94rem; color: #D3C9BD; line-height: 1.65; margin-bottom: 1.4rem;">
          ${item.shortDesc}
        </p>

        <div style="background: rgba(9, 13, 7, 0.7); border: 1px solid rgba(47, 66, 41, 0.6); border-radius: var(--radius-sm); padding: 1rem; margin-bottom: 1.1rem; font-size: 0.84rem;">
          <strong style="color: var(--color-accent-lime); display: block; margin-bottom: 0.2rem;">Botanical Formulation:</strong>
          <span style="color: #C8BEB3;">${item.ingredients}</span>
        </div>

        <div style="background: rgba(34, 48, 30, 0.4); border-left: 3px solid var(--color-accent-lime); padding: 0.7rem 1rem; margin-bottom: 1.1rem; font-size: 0.82rem; color: #C8BEB3;">
          <strong style="color: var(--color-cream-pure);">Dinacharya Ritual:</strong> ${item.ritual}
        </div>

        <div style="background: rgba(9, 13, 7, 0.8); border: 1px dashed var(--color-accent-lime-border); border-radius: var(--radius-sm); padding: 0.75rem 1rem; margin-bottom: 1.6rem; font-size: 0.82rem;">
          <strong style="color: var(--color-accent-lime); display: block; margin-bottom: 0.2rem;">★ Sole Physical Sales Point:</strong>
          <span style="color: #C8BEB3;">
            Sold in person exclusively at our Puthiyara location (Kozhikode, Kerala).
            <a href="https://maps.app.goo.gl/14FxJsMqcdhjpaDq7" target="_blank" rel="noopener noreferrer" style="color: var(--color-accent-lime); font-weight: 700; text-decoration: underline; margin-left: 0.3rem;">
              Open Google Maps &rarr;
            </a>
          </span>
        </div>

        <div style="display: flex; gap: 0.8rem; flex-wrap: wrap;">
          <button class="btn-primary" onclick="addToCart('${item.id}'); closeProductModal();">
            Add to Bag &bull; ₹${item.price.toLocaleString("en-IN")}
          </button>
          <button class="btn-secondary" onclick="openWhatsAppForProduct('${item.name}')">
            Order via WhatsApp Concierge
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById("productModal")?.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProductModal() {
  document.getElementById("productModal")?.classList.remove("active");
  document.body.style.overflow = "";
}

// --- WhatsApp Concierge Order Handler ---
function openWhatsAppForProduct(productName) {
  const text = encodeURIComponent(
    `Hello Pure Mantra Team! I am interested in inquiring and placing an order for *${productName}*. Could you please confirm batch availability at Puthiyara, Kozhikode and dispatch details (India / International Dubai route)? Thank you!`
  );
  window.open(`https://wa.me/919447000000?text=${text}`, "_blank");
}

function openWhatsAppOrderFromCart() {
  if (cart.length === 0) {
    showToast("Your apothecary bag is empty. Please select products first.");
    return;
  }

  const itemsList = cart.map(i => `• ${i.name} (${i.volume}) Qty: ${i.qty} - ₹${i.price * i.qty}`).join("%0A");
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  const message = `Namaskaram Pure Mantra! I would like to order directly via your Concierge:%0A%0A${itemsList}%0A%0A*Total Order Value:* ₹${subtotal}%0A%0APlease share direct payment (UPI/Card/International Wire) & dispatch from Puthiyara, Kozhikode.`;

  window.open(`https://wa.me/919447000000?text=${message}`, "_blank");
}

function openWhatsAppGeneralConcierge() {
  const text = encodeURIComponent(
    `Namaskaram Pure Mantra Team! I would like to inquire about authentic Ayurvedic formulation guidance, walk-in collection at your sole physical store in Puthiyara (Kozhikode), or international shipping to UAE/Dubai.`
  );
  window.open(`https://wa.me/919447000000?text=${text}`, "_blank");
}

// --- Checkout Modal Flow ---
function openCheckoutModal() {
  if (cart.length === 0) {
    showToast("Please add items to your bag before checking out.");
    return;
  }
  closeCartDrawer();

  const checkoutItemsSummary = document.getElementById("checkoutItemsSummary");
  if (checkoutItemsSummary) {
    checkoutItemsSummary.innerHTML = cart.map(item => `
      <div style="display: flex; justify-content: space-between; font-size: 0.88rem; margin-bottom: 0.4rem; color: var(--color-cream-soft);">
        <span>${item.name} (${item.volume}) × ${item.qty}</span>
        <span style="font-weight: 700; color: var(--color-accent-lime);">₹${(item.price * item.qty).toLocaleString("en-IN")}</span>
      </div>
    `).join("");
  }

  calculateShippingAndUpdateTotal();
  document.getElementById("checkoutModal")?.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeCheckoutModal() {
  document.getElementById("checkoutModal")?.classList.remove("active");
  document.body.style.overflow = "";
}

function calculateShippingAndUpdateTotal() {
  const region = document.getElementById("shippingRegionSelect")?.value || "pickup";
  const subtotal = cart.reduce((s, i) => s + (i.price * i.qty), 0);
  let shippingCost = 0;

  const pickupNote = document.getElementById("pickupStoreNote");
  if (pickupNote) {
    pickupNote.style.display = region === "pickup" ? "block" : "none";
  }

  if (region === "pickup") {
    shippingCost = 0;
  } else if (region === "india") {
    shippingCost = subtotal >= 999 ? 0 : 90;
  } else if (region === "uae") {
    shippingCost = 1200; // Flat direct priority air courier to Dubai / UAE
  }

  const shippingDisplay = document.getElementById("shippingCostDisplay");
  const totalDisplay = document.getElementById("checkoutTotalDisplay");

  if (shippingDisplay) {
    if (region === "pickup") {
      shippingDisplay.textContent = "FREE (In-Person Puthiyara Collection)";
    } else {
      shippingDisplay.textContent = shippingCost === 0 ? "FREE (Orders over ₹999)" : `₹${shippingCost.toLocaleString("en-IN")}`;
    }
  }
  if (totalDisplay) {
    totalDisplay.textContent = `₹${(subtotal + shippingCost).toLocaleString("en-IN")}`;
  }
}

function completeCheckoutSimulation(e) {
  e.preventDefault();
  const name = document.getElementById("checkoutName")?.value;
  const phone = document.getElementById("checkoutPhone")?.value;
  const region = document.getElementById("shippingRegionSelect")?.value;
  const subtotal = cart.reduce((s, i) => s + (i.price * i.qty), 0);
  let shippingCost = 0;
  if (region === "uae") shippingCost = 1200;
  else if (region === "india") shippingCost = subtotal >= 999 ? 0 : 90;
  else if (region === "pickup") shippingCost = 0;

  const total = subtotal + shippingCost;

  closeCheckoutModal();

  cart = [];
  saveCart();
  updateCartUI();

  showOrderSuccessModal(name, phone, region, total);
}

function showOrderSuccessModal(name, phone, region, total) {
  const modalContent = document.getElementById("orderSuccessContent");
  if (!modalContent) return;

  const orderNum = "PM-" + Math.floor(100000 + Math.random() * 900000);
  
  let routeInfoHtml = "";
  if (region === "pickup") {
    routeInfoHtml = `
      <div style="margin-bottom: 0.4rem;"><strong>Collection Point:</strong> Sole Physical Store, Puthiyara, Kozhikode, Kerala</div>
      <div style="margin-bottom: 0.4rem;"><strong>Google Maps Directions:</strong> <a href="https://maps.app.goo.gl/14FxJsMqcdhjpaDq7" target="_blank" rel="noopener noreferrer" style="color: var(--color-accent-lime); font-weight: 700; text-decoration: underline;">https://maps.app.goo.gl/14FxJsMqcdhjpaDq7</a></div>
    `;
  } else if (region === "uae") {
    routeInfoHtml = `
      <div style="margin-bottom: 0.4rem;"><strong>Dispatch Hub:</strong> Puthiyara, Kozhikode, Kerala</div>
      <div style="margin-bottom: 0.4rem;"><strong>Destination Route:</strong> Direct International Priority Air Express (Kerala ➔ UAE: Dubai / Abu Dhabi)</div>
    `;
  } else {
    routeInfoHtml = `
      <div style="margin-bottom: 0.4rem;"><strong>Dispatch Hub:</strong> Puthiyara, Kozhikode, Kerala</div>
      <div style="margin-bottom: 0.4rem;"><strong>Destination Route:</strong> Domestic Express Courier (Pan-India)</div>
    `;
  }

  modalContent.innerHTML = `
    <div style="text-align: center; padding: 1.5rem 0.5rem;">
      <div style="width: 70px; height: 70px; background: rgba(242, 255, 176, 0.2); border: 2px solid var(--color-accent-lime); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; color: var(--color-accent-lime);">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      </div>

      <span style="font-size: 0.78rem; font-weight: 700; color: var(--color-accent-lime); text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 0.4rem;">Order Confirmed • ${orderNum}</span>
      <h2 style="font-size: 2.2rem; margin-bottom: 0.8rem; color: var(--color-cream-pure);" class="font-serif">Gratitude, ${name || 'Patron'}</h2>
      <p style="font-size: 0.95rem; color: #D3C9BD; max-width: 480px; margin: 0 auto 1.8rem; line-height: 1.65;">
        Your artisanal order of <strong>₹${total.toLocaleString("en-IN")}</strong> has been registered with our exclusive store in Puthiyara, Kozhikode.
      </p>

      <div style="background: rgba(9, 13, 7, 0.8); border: 1px dashed var(--color-accent-lime-border); border-radius: var(--radius-sm); padding: 1.2rem 1.4rem; max-width: 470px; margin: 0 auto 1.8rem; text-align: left; font-size: 0.85rem;">
        ${routeInfoHtml}
        <div><strong>WhatsApp Order Updates:</strong> Will be shared to ${phone || 'your registered number'}.</div>
      </div>

      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <button class="btn-primary" onclick="closeOrderSuccessModal()">Continue Exploring</button>
        ${region === 'pickup' ? `
          <a href="https://maps.app.goo.gl/14FxJsMqcdhjpaDq7" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="text-decoration: none;">
            Get Directions to Store
          </a>
        ` : `
          <button class="btn-secondary" onclick="openWhatsAppForProduct('Order Status: ' + '${orderNum}')">Track with Concierge</button>
        `}
      </div>
    </div>
  `;

  document.getElementById("orderSuccessModal")?.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeOrderSuccessModal() {
  document.getElementById("orderSuccessModal")?.classList.remove("active");
  document.body.style.overflow = "";
}

// --- Craftsmanship Reel Logic ---
function initCraftsmanshipReel() {
  const buttons = document.querySelectorAll(".reel-step-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const stageIndex = parseInt(btn.getAttribute("data-stage") || "1", 10) - 1;
      const stageData = CRAFTSMANSHIP_STAGES[stageIndex];
      if (!stageData) return;

      const visualTitle = document.getElementById("reelVisualTitle");
      const visualDetail = document.getElementById("reelVisualDetail");
      const timeDisplay = document.getElementById("reelTimeDisplay");

      if (visualTitle) visualTitle.textContent = stageData.visualTitle;
      if (visualDetail) visualDetail.textContent = stageData.visualDetail;
      if (timeDisplay) timeDisplay.textContent = stageData.time;
    });
  });
}

function playReelVideoMock() {
  showToast("Streaming live artisanal compounding capture from Puthiyara Workshop...");
}

// --- Interactive Ayurvedic Ritual Quiz ---
let quizAnswers = {
  skinType: null,
  primaryConcern: null,
  climate: null,
  timeCommitment: null
};

function initQuizLogic() {
  document.querySelectorAll(".quiz-option-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const stepEl = btn.closest(".quiz-step");
      if (!stepEl) return;

      stepEl.querySelectorAll(".quiz-option-btn").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");

      const category = btn.getAttribute("data-quiz-category");
      const value = btn.getAttribute("data-quiz-val");
      quizAnswers[category] = value;
    });
  });
}

function nextQuizStep(currentStep) {
  const currentStepEl = document.getElementById(`quizStep${currentStep}`);
  const selected = currentStepEl?.querySelector(".quiz-option-btn.selected");
  if (!selected) {
    showToast("Please select an option to continue your diagnosis.");
    return;
  }

  currentStepEl.classList.remove("active");

  if (currentStep < 3) {
    const next = currentStep + 1;
    document.getElementById(`quizStep${next}`)?.classList.add("active");
    const progressFill = document.getElementById("quizProgressFill");
    if (progressFill) progressFill.style.width = `${next * 33.3}%`;
  } else {
    showQuizResults();
  }
}

function prevQuizStep(currentStep) {
  if (currentStep <= 1) return;
  document.getElementById(`quizStep${currentStep}`)?.classList.remove("active");
  const prev = currentStep - 1;
  document.getElementById(`quizStep${prev}`)?.classList.add("active");

  const progressFill = document.getElementById("quizProgressFill");
  if (progressFill) progressFill.style.width = `${prev * 33.3}%`;
}

function showQuizResults() {
  document.querySelectorAll(".quiz-step").forEach(s => s.classList.remove("active"));
  document.getElementById("quizProgressBar")?.style.setProperty("display", "none");

  const resultBox = document.getElementById("quizResultBox");
  if (!resultBox) return;

  let recommendationHeadline = "Pitta-Vata Balancing Dinacharya Regimen";
  let recommendationSummary = "Your responses reveal a need for thermal cooling at the crown, lipid-barrier replenishing herbs, and classical metabolic stabilization.";
  let recommendedProductIds = ["lavanyam-mukha-kanthi", "bringa-brahmi-oil", "surabhi-bath-powder"];

  if (quizAnswers.primaryConcern === "hair") {
    recommendationHeadline = "Kesha Vardhana Intensive Crown Protocol";
    recommendationSummary = "Targeting follicular heat accumulation and root weakness using classical Bhringaraj and Neeli cold-infusions.";
    recommendedProductIds = ["bringa-brahmi-oil", "neelibringadi-oil", "traditional-chyavanaprashyam"];
  } else if (quizAnswers.primaryConcern === "immunity") {
    recommendationHeadline = "Rasayana & Ritucharya Rejuvenation Protocol";
    recommendationSummary = "Designed to fortify Ojas and Agni (digestive metabolic fire) through classical Charaka Samhita small-batch formulations.";
    recommendedProductIds = ["traditional-chyavanaprashyam", "karkidaka-kanji-kit", "surabhi-bath-powder"];
  }

  document.getElementById("quizResultTitle").textContent = recommendationHeadline;
  document.getElementById("quizResultSummary").textContent = recommendationSummary;

  const itemsContainer = document.getElementById("quizRecommendedItems");
  if (itemsContainer) {
    const items = PRODUCTS.filter(p => recommendedProductIds.includes(p.id));
    itemsContainer.innerHTML = items.map(p => `
      <div style="background: rgba(14, 20, 12, 0.7); border: 1px solid rgba(47, 66, 41, 0.6); border-radius: var(--radius-sm); padding: 1.4rem;">
        <span style="font-size: 0.72rem; text-transform: uppercase; color: var(--color-gold-accent); font-weight: 700;">${p.pillarLabel}</span>
        <h4 style="font-size: 1.25rem; color: var(--color-cream-pure); margin: 0.3rem 0;" class="font-serif">${p.name}</h4>
        <p style="font-size: 0.84rem; color: #C8BEB3; margin-bottom: 0.9rem;">${p.shortDesc}</p>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-family: var(--font-serif); font-size: 1.25rem; font-weight: 700; color: var(--color-accent-lime);">₹${p.price.toLocaleString("en-IN")}</span>
          <button class="btn-add-cart" style="padding: 0.4rem 0.85rem; font-size: 0.78rem;" onclick="addToCart('${p.id}')">Add to Bag</button>
        </div>
      </div>
    `).join("");
  }

  resultBox.classList.add("active");
}

function resetQuiz() {
  quizAnswers = { skinType: null, primaryConcern: null, climate: null, timeCommitment: null };
  document.querySelectorAll(".quiz-option-btn").forEach(b => b.classList.remove("selected"));
  document.getElementById("quizResultBox")?.classList.remove("active");
  document.getElementById("quizProgressBar")?.style.setProperty("display", "block");
  const progressFill = document.getElementById("quizProgressFill");
  if (progressFill) progressFill.style.width = "33.3%";

  document.querySelectorAll(".quiz-step").forEach((s, idx) => {
    s.classList.toggle("active", idx === 0);
  });
}

function addQuizBundleToCart() {
  const headline = document.getElementById("quizResultTitle")?.textContent || "";
  let ids = ["lavanyam-mukha-kanthi", "bringa-brahmi-oil", "surabhi-bath-powder"];
  if (headline.includes("Crown")) {
    ids = ["bringa-brahmi-oil", "neelibringadi-oil", "traditional-chyavanaprashyam"];
  } else if (headline.includes("Rasayana")) {
    ids = ["traditional-chyavanaprashyam", "karkidaka-kanji-kit", "surabhi-bath-powder"];
  }

  ids.forEach(id => addToCart(id, 1));
  showToast("Complete prescribed Dinacharya ritual bundle added to your bag!");
}

// --- Karkidaka Kanji Step-by-Step Guide Modal ---
function openBrewingGuideModal() {
  const content = document.getElementById("brewingGuideContent");
  if (!content) return;

  content.innerHTML = `
    <div>
      <span style="font-size: 0.75rem; font-weight: 700; color: var(--color-gold-accent); text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 0.4rem;">Classical Ritucharya Protocol</span>
      <h2 style="font-size: 2rem; color: var(--color-cream-pure); margin-bottom: 0.8rem;" class="font-serif">The Authentic Karkidaka Kanji Brewing Ritual</h2>
      <p style="font-size: 0.94rem; color: #D3C9BD; line-height: 1.65; margin-bottom: 1.6rem;">
        Follow this revered Kerala monsoon rejuvenation method (Karkidaka Chikitsa) formulated in synergy with traditional martial arts and seasonal health wisdom in Puthiyara, Kozhikode.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        <div style="background: rgba(9, 13, 7, 0.7); border: 1px solid rgba(47, 66, 41, 0.6); border-radius: var(--radius-sm); padding: 1rem;">
          <strong style="color: var(--color-accent-lime); display: block; margin-bottom: 0.2rem;">Step 1: The Njavara Grain Rinse</strong>
          <p style="font-size: 0.86rem; color: #C8BEB3;">Take one pre-measured sachet of organic unpolished Njavara rice from your kit. Wash gently in cold spring water twice. Do not scrub hard to retain medicinal hull nutrients.</p>
        </div>

        <div style="background: rgba(9, 13, 7, 0.7); border: 1px solid rgba(47, 66, 41, 0.6); border-radius: var(--radius-sm); padding: 1rem;">
          <strong style="color: var(--color-accent-lime); display: block; margin-bottom: 0.2rem;">Step 2: Herbal Kizhi Immersion</strong>
          <p style="font-size: 0.86rem; color: #C8BEB3;">Add 7 to 8 cups of water in an earthen pot or thick brass pan. Submerge the pre-tied Dashapushpam &amp; Trikatu Spice Kizhi together with the rinsed Njavara rice.</p>
        </div>

        <div style="background: rgba(9, 13, 7, 0.7); border: 1px solid rgba(47, 66, 41, 0.6); border-radius: var(--radius-sm); padding: 1rem;">
          <strong style="color: var(--color-accent-lime); display: block; margin-bottom: 0.2rem;">Step 3: Slow Simmer (Mridu Paka)</strong>
          <p style="font-size: 0.86rem; color: #C8BEB3;">Bring to a rolling boil, then lower the flame to a gentle simmer for 35-40 minutes. Using a wooden ladle, occasionally press the herbal spice Kizhi against the pot side to extract herbal carminatives.</p>
        </div>

        <div style="background: rgba(9, 13, 7, 0.7); border: 1px solid rgba(47, 66, 41, 0.6); border-radius: var(--radius-sm); padding: 1rem;">
          <strong style="color: var(--color-accent-lime); display: block; margin-bottom: 0.2rem;">Step 4: Fresh Coconut Milk &amp; Ghee Tempering</strong>
          <p style="font-size: 0.86rem; color: #C8BEB3;">Remove the Kizhi. Stir in 1/2 cup of freshly squeezed coconut milk and half a teaspoon of pure cow's ghee. Serve warm as your evening meal during the monsoon phase.</p>
        </div>
      </div>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <button class="btn-primary" onclick="window.print()">Print / Save Brewing Chart</button>
        <button class="btn-secondary" onclick="addToCart('karkidaka-kanji-kit'); closeBrewingGuideModal();">Order 7-Day Kanji Kit &bull; ₹1,280</button>
      </div>
    </div>
  `;

  document.getElementById("brewingGuideModal")?.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeBrewingGuideModal() {
  document.getElementById("brewingGuideModal")?.classList.remove("active");
  document.body.style.overflow = "";
}

// --- FSSAI Verification Modal ---
function openFssaiModal() {
  const content = document.getElementById("fssaiModalContent");
  if (!content) return;

  content.innerHTML = `
    <div>
      <span style="font-size: 0.75rem; font-weight: 700; color: var(--color-gold-accent); text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 0.4rem;">Statutory Compliance &bull; Government of Kerala</span>
      <h2 style="font-size: 1.95rem; color: var(--color-cream-pure); margin-bottom: 0.4rem;" class="font-serif">Official FSSAI Registration Certificate</h2>
      <p style="font-size: 0.9rem; color: #D3C9BD; line-height: 1.6; margin-bottom: 1.5rem;">
        Food Safety and Standards Authority of India &bull; Registration Certificate under FSS Act, 2006 (Commissionerate of Food Safety, Kerala).
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.8rem; align-items: start; margin-bottom: 1.6rem;">
        <div style="background: #090D07; border-radius: var(--radius-sm); padding: 10px; text-align: center; border: 1px solid rgba(47, 66, 41, 0.6);">
          <img src="fssai-license.png" alt="Pure Mantra Official FSSAI Registration Certificate" style="width: 100%; height: auto; border-radius: 4px; display: block; cursor: pointer;" onclick="window.open('fssai-license.png', '_blank')">
          <span style="font-size: 0.72rem; color: var(--color-accent-lime); display: block; margin-top: 0.5rem;">Click photo to open full resolution certificate</span>
        </div>

        <div>
          <div style="background: rgba(9, 13, 7, 0.75); border: 1px solid rgba(47, 66, 41, 0.6); border-radius: var(--radius-sm); padding: 1.3rem; font-size: 0.84rem;">
            <div style="margin-bottom: 0.9rem;">
              <span style="color: #9E9385; display: block; font-size: 0.72rem; text-transform: uppercase; font-weight: 700;">Official Registration Number:</span>
              <strong style="color: var(--color-accent-lime); font-family: monospace; font-size: 1.25rem; letter-spacing: 0.05em;">21323242000345</strong>
            </div>

            <div style="margin-bottom: 0.9rem;">
              <span style="color: #9E9385; display: block; font-size: 0.72rem; text-transform: uppercase; font-weight: 700;">Location &amp; Operating Base:</span>
              <strong style="color: var(--color-cream-pure);">Puthiyara, Kozhikode, Kerala, India</strong>
            </div>

            <div style="margin-bottom: 0.9rem;">
              <span style="color: #9E9385; display: block; font-size: 0.72rem; text-transform: uppercase; font-weight: 700;">Kind of Business:</span>
              <span style="color: var(--color-cream-soft); font-weight: 600;">Food Vending Establishment &amp; Artisanal Formulations</span>
            </div>

            <div>
              <span style="color: #9E9385; display: block; font-size: 0.72rem; text-transform: uppercase; font-weight: 700;">Statutory Scope:</span>
              <span style="color: var(--color-cream-soft);">Internal Organic Wellness Foods &amp; External Cosmetic Blends</span>
            </div>
          </div>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap;">
        <span style="font-size: 0.76rem; color: #9E9385;">Verified Food Safety Standards compliance under FSS Act, 2006.</span>
        <div style="display: flex; gap: 0.8rem;">
          <a href="fssai-license.png" target="_blank" class="btn-secondary" style="text-decoration: none; font-size: 0.84rem; padding: 0.65rem 1.2rem;">Open Full Image</a>
          <button class="btn-primary" onclick="closeFssaiModal()" style="font-size: 0.84rem; padding: 0.65rem 1.2rem;">Close Certificate</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById("fssaiModal")?.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeFssaiModal() {
  document.getElementById("fssaiModal")?.classList.remove("active");
  document.body.style.overflow = "";
}

// --- Mobile Navigation ---
function initMobileMenu() {
  const toggle = document.querySelector(".mobile-menu-toggle");
  const header = document.querySelector(".site-header");
  if (!toggle || !header) return;

  toggle.addEventListener("click", () => {
    header.classList.toggle("nav-mobile-open");
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      header.classList.remove("nav-mobile-open");
    });
  });
}

// --- Smooth Scroll & Utility ---
function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

// --- Toast Notice ---
function showToast(message) {
  let toast = document.getElementById("toastNotice");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toastNotice";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.__toastTimeout);
  window.__toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

// ===================================================================
// INTERACTIVE BOTANICAL LAB (MORTAR & PESTLE ALCHEMIST PLAYGROUND)
// ===================================================================
const BOTANICAL_HERBS = [
  {
    id: "saffron",
    name: "Kashmiri Kumkumapoo",
    sanskrit: "Kumkuma (Crocus sativus)",
    benefit: "Ignites Tejas microcirculation & restores golden skin luster.",
    token: "🌸",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 2a4 4 0 0 0-4 4v1a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4z"/><path d="M12 17a4 4 0 0 0-4 4v1h8v-1a4 4 0 0 0-4-4z"/><path d="M2 12a4 4 0 0 0 4 4h1a4 4 0 0 0 0-8H6a4 4 0 0 0-4 4z"/><path d="M17 12a4 4 0 0 0 4-4h1a4 4 0 0 0 0 8h-1a4 4 0 0 0-4-4z"/></svg>`
  },
  {
    id: "manjishta",
    name: "Indian Madder",
    sanskrit: "Manjishta (Rubia cordifolia)",
    benefit: "Revered Rakta-Shodhaka (blood purifier) for even complexion.",
    token: "🌿",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`
  },
  {
    id: "brahmi",
    name: "Sacred Gotu Kola",
    sanskrit: "Brahmi (Bacopa monnieri)",
    benefit: "Calms mental Pitta heat, revitalizing fragile hair follicles.",
    token: "🌱",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a8 8 0 0 0-8 8c0 5 8 12 8 12s8-7 8-12a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg>`
  },
  {
    id: "bringaraj",
    name: "King of Hair Herbs",
    sanskrit: "Bringaraj (Eclipta alba)",
    benefit: "Awakens dormant hair roots and boosts natural melanin retention.",
    token: "🍃",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22v-9"/><path d="M9 13a4.5 4.5 0 0 0 3-4 4.5 4.5 0 0 0 3 4"/><path d="M6 9a6 6 0 0 1 6-6 6 6 0 0 1 6 6"/></svg>`
  },
  {
    id: "njavara",
    name: "Njavara Red Rice",
    sanskrit: "Shashtika Shali (Oryza sativa)",
    benefit: "Kerala's prized medicinal grain for cellular tissue regeneration.",
    token: "🌾",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 22s5-2 10-8c2.5-3 5-8 5-8s-5 2.5-8 5c-6 5-7 11-7 11z"/><path d="m14 6 4 4"/></svg>`
  },
  {
    id: "kasturi",
    name: "Wild Kasturi Manjal",
    sanskrit: "Aranyaharidra (Curcuma aromatica)",
    benefit: "Pure non-staining botanical shield with antibacterial glow.",
    token: "✨",
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
  }
];

let selectedBotanicalHerbs = [];
let grindProgress = 0;

function initBotanicalLab() {
  const rack = document.getElementById("herbCardsRack");
  if (!rack) return;

  rack.innerHTML = BOTANICAL_HERBS.map(herb => `
    <div class="herb-card" id="herbCard_${herb.id}" onclick="toggleHerbSelection('${herb.id}')">
      <div class="herb-card-top">
        <div class="herb-icon-circle">${herb.icon}</div>
        <div class="herb-check-pill" id="herbCheck_${herb.id}">+</div>
      </div>
      <div class="herb-card-name">${herb.name}</div>
      <div class="herb-card-botanical">${herb.sanskrit}</div>
      <div class="herb-card-benefit">${herb.benefit}</div>
    </div>
  `).join("");

  const mortarBox = document.getElementById("mortarVisualBox");
  if (mortarBox) {
    let lastX = 0;
    mortarBox.addEventListener("mousemove", (e) => {
      if (selectedBotanicalHerbs.length < 3 || grindProgress >= 100) return;
      const delta = Math.abs(e.clientX - lastX);
      if (delta > 8) {
        lastX = e.clientX;
        stepGrinding(2);
        const pestle = document.getElementById("mortarPestle");
        if (pestle) {
          const rect = mortarBox.getBoundingClientRect();
          const angle = ((e.clientX - rect.left) / rect.width - 0.5) * 40;
          pestle.style.transform = `rotate(${angle}deg) translateY(6px)`;
        }
      }
    });

    mortarBox.addEventListener("touchmove", (e) => {
      if (selectedBotanicalHerbs.length < 3 || grindProgress >= 100) return;
      stepGrinding(2.5);
    }, { passive: true });
  }
}

function toggleHerbSelection(herbId) {
  const herb = BOTANICAL_HERBS.find(h => h.id === herbId);
  if (!herb) return;

  const index = selectedBotanicalHerbs.findIndex(h => h.id === herbId);
  if (index > -1) {
    selectedBotanicalHerbs.splice(index, 1);
  } else {
    if (selectedBotanicalHerbs.length >= 3) {
      showToast("You have already selected 3 botanicals. Click one to swap!");
      return;
    }
    selectedBotanicalHerbs.push(herb);
  }

  BOTANICAL_HERBS.forEach(h => {
    const card = document.getElementById(`herbCard_${h.id}`);
    const check = document.getElementById(`herbCheck_${h.id}`);
    const isSelected = selectedBotanicalHerbs.some(item => item.id === h.id);
    if (card) {
      card.classList.toggle("selected", isSelected);
      card.classList.toggle("disabled", !isSelected && selectedBotanicalHerbs.length >= 3);
    }
    if (check) {
      check.textContent = isSelected ? "✓" : "+";
    }
  });

  const badge = document.getElementById("herbSelectionBadge");
  if (badge) {
    badge.textContent = `Selected: ${selectedBotanicalHerbs.length} of 3`;
    badge.style.color = selectedBotanicalHerbs.length === 3 ? "var(--color-accent-lime)" : "var(--color-cream-soft)";
  }

  const tokensContainer = document.getElementById("mortarHerbsInside");
  const portalTokens = document.getElementById("portalBowlTokens");
  const tokensHtml = selectedBotanicalHerbs.map(h => `
    <span class="mortar-herb-token" title="${h.name}">${h.token}</span>
  `).join("");
  if (tokensContainer) tokensContainer.innerHTML = tokensHtml;
  if (portalTokens) portalTokens.innerHTML = tokensHtml;

  grindProgress = 0;
  updateInfusionUI();
  const res = document.getElementById("formulationResultCard");
  if (res) res.style.display = "none";
}

function triggerGrindButton() {
  if (selectedBotanicalHerbs.length < 3) {
    showToast("Please choose 3 botanicals from the apothecary rack first!");
    return;
  }
  if (grindProgress >= 100) return;
  stepGrinding(16);
}

function stepGrinding(amount) {
  if (selectedBotanicalHerbs.length < 3 || grindProgress >= 100) return;

  grindProgress = Math.min(100, grindProgress + amount);
  const container = document.getElementById("mortarStageContainer");
  if (container) {
    container.classList.add("grinding");
    clearTimeout(window.__grindDebounce);
    window.__grindDebounce = setTimeout(() => {
      container.classList.remove("grinding");
    }, 400);
  }

  updateInfusionUI();

  if (grindProgress >= 100) {
    setTimeout(completeFormulationReveal, 350);
  }
}

function updateInfusionUI() {
  const fill = document.getElementById("infusionProgressFill");
  if (fill) fill.style.width = grindProgress + "%";

  const liquidHeight = (grindProgress * 0.72) + "%";
  const liquid = document.getElementById("mortarInnerLiquid");
  if (liquid) liquid.style.height = liquidHeight;
  const portalLiquid = document.getElementById("portalBowlLiquid");
  if (portalLiquid) portalLiquid.style.height = liquidHeight;

  const statusText = document.getElementById("infusionStatusText");
  if (!statusText) return;

  if (selectedBotanicalHerbs.length < 3) {
    statusText.innerHTML = `<strong>Step 1:</strong> Select 3 botanicals from the rack on the left to prepare your compounding formula.`;
  } else if (grindProgress === 0) {
    statusText.innerHTML = `<strong>Ready:</strong> Click <em>"Pound & Grind Botanicals"</em> or stir your cursor inside the stone Khalva!`;
  } else if (grindProgress < 30) {
    statusText.innerHTML = `<strong>Grinding:</strong> Pulverizing active plant cellulose into potent medicinal churna (${Math.round(grindProgress)}%)...`;
  } else if (grindProgress < 65) {
    statusText.innerHTML = `<strong>Infusing:</strong> Virgin sesame oil base added (Sneha Kalpana). Phyto-nutrients binding (${Math.round(grindProgress)}%)...`;
  } else if (grindProgress < 99) {
    statusText.innerHTML = `<strong>Clarifying:</strong> Straining active botanicals through double-cloth weave (${Math.round(grindProgress)}%)...`;
  } else {
    statusText.innerHTML = `<strong style="color: var(--color-accent-lime);">Complete:</strong> Formulation compounded! Unveiling your bespoke elixir below...`;
  }
}

function completeFormulationReveal() {
  const resultCard = document.getElementById("formulationResultCard");
  if (!resultCard) return;

  const herbIds = selectedBotanicalHerbs.map(h => h.id);
  let matchedProduct = PRODUCTS[0];
  let formulaTitle = "Bespoke Tejas Facial Elixir";
  let formulaDesc = "Formulated with precious Saffron carotenoids and purifying Indian Madder to clear dermal blemishes, enhance microcirculation, and impart a luminous golden glow.";
  let vataEffect = "-25% (Calmed)";
  let pittaEffect = "-40% (Deeply Pacified)";
  let kaphaEffect = "Balanced";

  if (herbIds.includes("bringaraj") || herbIds.includes("brahmi")) {
    matchedProduct = PRODUCTS.find(p => p.id === "bringa-brahmi-oil") || PRODUCTS[4];
    formulaTitle = "Bespoke Kesha Shirodhara Follicle Elixir";
    formulaDesc = "Rich in Ecliptine and Bacosides to activate dormant hair papillae, soothe excessive scalpal heat, and promote dense melanin retention.";
    vataEffect = "-30% (Grounding)";
    pittaEffect = "-45% (Cooling)";
    kaphaEffect = "-10% (Clarified)";
  } else if (herbIds.includes("njavara")) {
    matchedProduct = PRODUCTS.find(p => p.id === "karkidaka-kanji-kit") || PRODUCTS[7];
    formulaTitle = "Bespoke Dhatu Ojas Rejuvenation Mash";
    formulaDesc = "Crafted with sacred red medicinal rice to rebuild depleted bodily Dhatus, restore digestive Agni, and replenish vital Ojas.";
    vataEffect = "-35% (Nourished)";
    pittaEffect = "-20% (Soothed)";
    kaphaEffect = "+10% (Anabolic)";
  } else if (herbIds.includes("kasturi") && herbIds.includes("manjishta")) {
    matchedProduct = PRODUCTS.find(p => p.id === "surabhi-snan-churnam") || PRODUCTS[1];
    formulaTitle = "Bespoke Snana Soundarya Body Ubtan";
    formulaDesc = "A zero-soap, 100% whole-herb body cleanser formulated with wild Kasturi Manjal and Madder root for velvety dermal rejuvenation.";
    vataEffect = "-15% (Protected)";
    pittaEffect = "-35% (Purified)";
    kaphaEffect = "-25% (Detoxified)";
  }

  resultCard.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.2rem;">
      <div>
        <span style="font-size: 0.75rem; font-weight: 700; color: var(--color-accent-lime); text-transform: uppercase; letter-spacing: 0.12em; display: block; margin-bottom: 0.3rem;">
          ✨ Your Compounded Formulation
        </span>
        <h3 class="font-serif" style="font-size: 2.1rem; color: var(--color-cream-pure);">${formulaTitle}</h3>
      </div>
      <button class="btn-secondary" onclick="resetBotanicalLab()" style="padding: 0.45rem 0.95rem; font-size: 0.8rem;">
        Blend Another ↺
      </button>
    </div>

    <p style="font-size: 0.93rem; color: #D3C9BD; line-height: 1.65; margin-bottom: 1.5rem;">
      ${formulaDesc}
    </p>

    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.8rem; background: rgba(9, 13, 7, 0.7); border: 1px solid rgba(47, 66, 41, 0.6); border-radius: var(--radius-sm); padding: 1rem; text-align: center;">
      <div>
        <span style="font-size: 0.72rem; color: #A39686; text-transform: uppercase; font-weight: 700; display: block;">Vata Harmony</span>
        <strong style="color: var(--color-accent-lime); font-size: 0.88rem;">${vataEffect}</strong>
      </div>
      <div>
        <span style="font-size: 0.72rem; color: #A39686; text-transform: uppercase; font-weight: 700; display: block;">Pitta Harmony</span>
        <strong style="color: var(--color-accent-lime); font-size: 0.88rem;">${pittaEffect}</strong>
      </div>
      <div>
        <span style="font-size: 0.72rem; color: #A39686; text-transform: uppercase; font-weight: 700; display: block;">Kapha Harmony</span>
        <strong style="color: var(--color-cream-pure); font-size: 0.88rem;">${kaphaEffect}</strong>
      </div>
    </div>

    <div style="background: rgba(22, 32, 19, 0.9); border: 1.5px solid rgba(242, 255, 176, 0.35); border-radius: var(--radius-md); padding: 1.4rem; display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; flex-wrap: wrap;">
      <div style="display: flex; align-items: center; gap: 1.2rem;">
        <div style="width: 64px; height: 64px; background: #0E140C; border-radius: 8px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--color-accent-lime-border);">
          <span style="font-size: 1.8rem;">🍶</span>
        </div>
        <div>
          <span style="font-size: 0.74rem; color: var(--color-gold-accent); text-transform: uppercase; font-weight: 700;">Matched Store Formulation:</span>
          <h4 class="font-serif" style="font-size: 1.35rem; color: var(--color-cream-pure);">${matchedProduct.name}</h4>
          <span style="font-size: 0.84rem; color: var(--color-accent-lime); font-weight: 700;">₹${matchedProduct.price.toLocaleString("en-IN")} &bull; Handcrafted in Puthiyara</span>
        </div>
      </div>

      <div style="display: flex; gap: 0.8rem; align-items: center; flex-wrap: wrap;">
        <button class="btn-primary" onclick="addToCart('${matchedProduct.id}')">
          Add Formulation to Bag &bull; ₹${matchedProduct.price.toLocaleString("en-IN")}
        </button>
        <a href="https://www.instagram.com/puremantra_ayurveda/" target="_blank" rel="noopener noreferrer" class="btn-instagram-pill" style="padding: 0.65rem 1rem;">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
          <span>Share @puremantra_ayurveda</span>
        </a>
      </div>
    </div>
  `;

  resultCard.style.display = "block";
  resultCard.scrollIntoView({ behavior: "smooth", block: "center" });
}

function resetBotanicalLab() {
  selectedBotanicalHerbs = [];
  grindProgress = 0;
  BOTANICAL_HERBS.forEach(h => {
    const card = document.getElementById(`herbCard_${h.id}`);
    const check = document.getElementById(`herbCheck_${h.id}`);
    if (card) {
      card.classList.remove("selected", "disabled");
    }
    if (check) check.textContent = "+";
  });

  const badge = document.getElementById("herbSelectionBadge");
  if (badge) {
    badge.textContent = "Selected: 0 of 3";
    badge.style.color = "var(--color-cream-soft)";
  }

  const tokens = document.getElementById("mortarHerbsInside");
  if (tokens) tokens.innerHTML = "";
  const portalTokens = document.getElementById("portalBowlTokens");
  if (portalTokens) portalTokens.innerHTML = "";

  const resultCard = document.getElementById("formulationResultCard");
  if (resultCard) resultCard.style.display = "none";

  updateInfusionUI();
}

// ===================================================================
// SCROLL-DRIVEN TRANSITION: THE SACRED WHITE COMPOUNDING VESSEL
// ===================================================================
function initBowlScrollTransition() {
  const portal = document.getElementById("bowlTransitionPortal");
  const vessel = document.getElementById("transitionVesselWrapper");
  const targetSlot = document.getElementById("mortarVisualBox");
  const textOverlay = document.getElementById("portalTextOverlay");
  const labContent = document.getElementById("labContentContainer");

  if (!portal || !vessel || !targetSlot) return;

  let isTicking = false;

  function updateVesselPosition() {
    isTicking = false;
    const portalRect = portal.getBoundingClientRect();
    const portalHeight = portal.offsetHeight;
    const winHeight = window.innerHeight;
    const winWidth = window.innerWidth;

    // Distance through the portal scroll track
    const scrolledPastTop = -portalRect.top;
    const totalScrollRange = portalHeight - winHeight * 0.3;

    // If completely above the portal (e.g. at hero, shop, or clinic):
    if (portalRect.top > winHeight * 0.85) {
      vessel.style.opacity = "0";
      vessel.style.pointerEvents = "none";
      if (labContent) {
        labContent.style.opacity = "0";
        labContent.style.transform = "translateY(35px)";
      }
      if (textOverlay) {
        textOverlay.style.opacity = "1";
        textOverlay.style.transform = "translate(-50%, -50%) translateY(0)";
      }
      return;
    }

    // Normalized progress: 0.0 at top of portal -> 1.0 when reached workbench
    let progress = totalScrollRange > 0 ? scrolledPastTop / totalScrollRange : 0;
    progress = Math.max(0, Math.min(1, progress));

    const isMobile = winWidth <= 768;
    const startScale = isMobile ? 1.6 : 2.3;
    const startX = winWidth / 2;
    const startY = winHeight * 0.52;

    // Target coordinates: center of #mortarVisualBox in viewport
    const targetRect = targetSlot.getBoundingClientRect();
    const targetX = targetRect.left + targetRect.width / 2;
    const targetY = targetRect.top + targetRect.height / 2;

    const validTarget = targetRect.width > 0 && targetRect.height > 0;
    const finalTargetX = validTarget ? targetX : (isMobile ? winWidth / 2 : winWidth * 0.72);
    const finalTargetY = validTarget ? targetY : winHeight * 0.6;

    // -------------------------------------------------------------
    // PHASE 1: MESSAGE PART (0.0 to 0.25)
    // The user sees the "Transition to Apothecary Sanctum" message.
    // The bowl is HIDDEN until the user scrolls past this message.
    // -------------------------------------------------------------
    if (textOverlay) {
      // Message is 100% visible at start, then fades out as user scrolls past (0.18 to 0.36)
      const textAlpha = Math.max(0, Math.min(1, 1 - (progress - 0.16) / 0.18));
      textOverlay.style.opacity = textAlpha;
      textOverlay.style.transform = `translate(-50%, -50%) translateY(${-progress * 45}px)`;
    }

    // -------------------------------------------------------------
    // PHASE 2 & 3: BOWL APPEARS, SCALES DOWN & GLIDES (0.26 to 0.88)
    // After scrolling past the message, the big white shade bowl appears,
    // then slowly decreases in size and glides to its workbench place.
    // -------------------------------------------------------------
    let vesselOpacity = 0;
    let currentX = startX;
    let currentY = startY;
    let currentScale = startScale;

    if (progress < 0.24) {
      // Before scrolling the message part: bowl is hidden!
      vesselOpacity = 0;
    } else if (progress < 0.40) {
      // After message part: bowl gracefully blooms into view at full large scale!
      vesselOpacity = (progress - 0.24) / 0.16;
      currentX = startX;
      currentY = startY;
      currentScale = startScale;
    } else {
      // Bowl is fully visible: now slowly decreases in size and moves to target slot!
      vesselOpacity = 1;
      const moveProgress = Math.min(1, (progress - 0.40) / 0.46); // 0.40 to 0.86
      // Smoothstep easing for organic deceleration into the workbench
      const ease = moveProgress * moveProgress * (3 - 2 * moveProgress);

      currentX = startX + (finalTargetX - startX) * ease;
      currentY = startY + (finalTargetY - startY) * ease;
      currentScale = startScale + (1.0 - startScale) * ease;
    }

    // -------------------------------------------------------------
    // PHASE 4: OTHER SECTIONS GRADUALLY APPEAR & DOCKING (0.70 to 1.0)
    // As the bowl settles into place, the workbench sections fade in!
    // -------------------------------------------------------------
    if (labContent) {
      const labAlpha = Math.max(0, Math.min(1, (progress - 0.68) / 0.26));
      labContent.style.opacity = labAlpha;
      labContent.style.transform = `translateY(${(1 - labAlpha) * 35}px)`;
    }

    const dockedPot = document.getElementById("dockedMortarPot");
    if (progress >= 0.95) {
      // Seamlessly handoff to in-flow docked mortar pot on workbench
      if (dockedPot) dockedPot.style.opacity = "1";
      vessel.style.opacity = "0";
      vessel.style.pointerEvents = "none";
    } else {
      if (dockedPot) dockedPot.style.opacity = "0";
      vessel.style.opacity = vesselOpacity;
      vessel.style.pointerEvents = "none";
    }

    vessel.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%) scale(${currentScale})`;

    // If scrolled way past labSection (e.g. into concierge or footer):
    if (portalRect.bottom + (targetRect.height * 2) < 0) {
      vessel.style.opacity = "0";
      vessel.style.pointerEvents = "none";
    }
  }

  function onScroll() {
    if (!isTicking) {
      requestAnimationFrame(updateVesselPosition);
      isTicking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  updateVesselPosition();
}
