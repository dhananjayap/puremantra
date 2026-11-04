/**
 * Pure Mantra Ayurvedic Cosmetology
 * Interactive Application Logic & Storefront Management
 * Primary Aesthetic: Minimalist Nature Olive Green with Logo Golden Accents
 * Interaction: 360-Degree Turn on Cursor Hover
 * Sole Store Location: Puthiyara, Kozhikode, Kerala (https://maps.app.goo.gl/14FxJsMqcdhjpaDq7)
 */

window.resolveProductImg = window.resolveProductImg || function(id, defaultPath) {
  if (typeof window !== 'undefined' && window.PURE_MANTRA_ASSETS && window.PURE_MANTRA_ASSETS.products) {
    var p = window.PURE_MANTRA_ASSETS.products;
    var filename = defaultPath ? defaultPath.split('/').pop().replace(/\.[^.]+$/, '') : '';
    return p[id] || p[filename] || p[id.replace(/-oil$/, '')] || p[id.replace(/-snan$/, '')] || defaultPath;
  }
  return defaultPath;
};

// --- Interactive Product Catalog Data (Official Pure Mantra Catalog) ---
const PRODUCTS = [
  {
    id: "neelibringadi-oil",
    pillar: "kesha",
    pillarLabel: "Kesha (Hair Care)",
    name: "Neelibringadi Hair Growth Oil",
    subName: "Traditional Ayurvedic Care for Stronger, Healthier Hair",
    price: 300,
    volume: "100 ml",
    sizes: [
      { size: "100 ml", price: 300 }
    ],
    selectedSize: "100 ml",
    badge: "Bestseller",
    badgeType: "badge-olive",
    concerns: ["hair-fall", "premature-greying", "hair-nourishment"],
    image: "assets/products/neelibringadi-oil.jpg",
    ingredients: "Neeli (Indigo), Bhringraj, Amla, Hibiscus, Sesame Oil",
    benefits: "Nourishes hair roots, Helps reduce hair fall, Promotes hair growth, Strengthens hair & scalp, Keeps hair healthy & lustrous",
    howToUse: "Apply required quantity to scalp and hair. Gently massage and leave for at least 1 hour or overnight. Wash with a mild herbal shampoo.",
    shortDesc: "An authentic Ayurvedic hair oil prepared with Neeli, Bhringraj, and classical herbs to nourish roots, curb hair fall, and restore dense lustre.",
    location: "Puthiyara, Kozhikode, Kerala"
  },
  {
    id: "bringa-brahmi-oil",
    pillar: "kesha",
    pillarLabel: "Kesha (Hair Care)",
    name: "Bringa Brahmi Hair Oil",
    subName: "Traditional Ayurvedic Care for Naturally Healthy Hair",
    price: 200,
    volume: "100 ml",
    sizes: [
      { size: "100 ml", price: 200 }
    ],
    selectedSize: "100 ml",
    badge: "Sneha Paka Method",
    badgeType: "badge-lime",
    concerns: ["hair-fall", "dandruff", "dry-frizzy", "hair-nourishment"],
    image: "assets/products/bringa-brahmi.jpg",
    ingredients: "Amla, Bhringraj, Brahmi, Hibiscus, Rosemary",
    benefits: "Nourishes hair roots, Helps reduce hair fall, Soothes scalp, Promotes stronger healthier hair, Supports natural hair growth",
    howToUse: "Apply to scalp and roots with applicator comb. Gently massage for 5-10 minutes. Leave for 1-2 hours or overnight. Wash with mild shampoo.",
    shortDesc: "Prepared using traditional Ayurvedic Sneha Paka method to nourish roots, soothe crown heat, and stimulate lush, natural growth.",
    location: "Puthiyara, Kozhikode, Kerala"
  },
  {
    id: "krishnaveni-hair-oil",
    pillar: "kesha",
    pillarLabel: "Kesha (Hair Care)",
    name: "Krishnaveni Hair Oil",
    subName: "Ayurvedic Nourishment for Healthy, Strong & Beautiful Hair",
    price: 200,
    volume: "100 ml",
    sizes: [
      { size: "100 ml", price: 200 }
    ],
    selectedSize: "100 ml",
    badge: "Hair Booster",
    badgeType: "badge-coffee",
    concerns: ["hair-fall", "premature-greying", "hair-nourishment"],
    image: "assets/products/krishnaveni-hair-oil.jpg",
    ingredients: "Amla (Indian Gooseberry), Grapes, Almond, Aloe Vera, and traditional herbs",
    benefits: "Nourishes hair roots, Helps reduce hair fall, Promotes new hair growth, Adds natural shine & softness, Keeps scalp healthy",
    howToUse: "Apply required quantity on scalp and hair. Gently massage for a few minutes. Leave for 1-2 hours or overnight for best results. Wash with a mild herbal shampoo.",
    shortDesc: "Infused with antioxidant-rich grapes, amla, and nourishing sweet almond oil for vibrant volume, deep follicle strength, and natural gloss.",
    location: "Puthiyara, Kozhikode, Kerala"
  },
  {
    id: "triphala-shampoo",
    pillar: "kesha",
    pillarLabel: "Kesha (Hair Care)",
    name: "Triphala Shampoo",
    subName: "With Hibiscus & Rosemary Extract",
    price: 200,
    volume: "100 ml",
    sizes: [
      { size: "100 ml", price: 200 }
    ],
    selectedSize: "100 ml",
    badge: "Gentle Cleanser",
    badgeType: "badge-olive",
    concerns: ["dandruff", "hair-fall", "hair-nourishment"],
    image: "assets/products/triphala-shampoo.jpg",
    ingredients: "Triphala (Amalaki, Haritaki, Bibhitaki), Hibiscus, Rosemary Extract",
    benefits: "Cleanses gently, Reduces hair fall, Soothes scalp, Adds natural shine, Nourishes hair roots",
    howToUse: "Apply to wet hair, gently massage into scalp, rinse thoroughly with fresh water.",
    shortDesc: "A gentle, sulfate-conscious Ayurvedic shampoo combining the triple restorative power of Triphala with hibiscus and rosemary extracts.",
    location: "Puthiyara, Kozhikode, Kerala"
  },
  {
    id: "hibiscus-leaf-powder",
    pillar: "kesha",
    pillarLabel: "Kesha (Hair Care)",
    name: "Hibiscus Leaf Powder",
    subName: "Natural Hair Conditioner & Cleanser",
    price: 100,
    volume: "100 gm",
    sizes: [
      { size: "100 gm", price: 100 }
    ],
    selectedSize: "100 gm",
    badge: "100% Pure Leaves",
    badgeType: "badge-lime",
    concerns: ["dandruff", "dry-frizzy", "hair-fall"],
    image: "assets/products/hibiscus-leaf-powder.jpg",
    ingredients: "100% Pure Sun-Dried Hibiscus Leaves (Chemparathi)",
    benefits: "Promotes hair growth, Reduces hair fall, Strengthens hair roots, Helps control dandruff, Keeps hair soft & naturally lustrous",
    howToUse: "Take required quantity of powder, mix with water (or rose water/curd) to make a smooth paste. Apply on hair and scalp, leave for 30-45 minutes and wash with mild water.",
    shortDesc: "Pure micro-pulverized Kerala hibiscus leaves providing instant botanical conditioning, deep frizz control, and natural root strengthening.",
    location: "Puthiyara, Kozhikode, Kerala"
  },
  {
    id: "lavanyam-tailam",
    pillar: "mukha",
    pillarLabel: "Mukha (Skin Care)",
    name: "Lavanyam Mugha Kanthi Tailam",
    subName: "Traditional Ayurvedic Facial Oil for Natural Radiance",
    price: 200,
    volume: "15 ml",
    sizes: [
      { size: "15 ml", price: 200 }
    ],
    selectedSize: "15 ml",
    badge: "Natural Glow",
    badgeType: "badge-coffee",
    concerns: ["pigmentation", "dry-dehydrated", "dull-tired", "glowing-skin"],
    image: "assets/products/lavanyam-tailam.jpg",
    ingredients: "Manjishta, Yashtimadhu, Pure Goat Milk, Pomegranate, Dried Grapes",
    benefits: "Enhances natural glow, Nourishes skin, Improves skin texture, Helps maintain even skin tone, Supports healthy skin",
    howToUse: "Take a few drops and gently massage on cleansed face and neck. Use at night or as part of your skincare routine.",
    shortDesc: "A revered skin-transforming oil slow-compounded with red pomegranate, sweet raisins, pure goat milk, and brightening Manjishta.",
    location: "Puthiyara, Kozhikode, Kerala"
  },
  {
    id: "tejaswini-mugha-lepam",
    pillar: "mukha",
    pillarLabel: "Mukha (Skin Care)",
    name: "Tejaswini Mugha Lepam",
    subName: "Ayurvedic Glow Face Pack",
    price: 100,
    volume: "50 gm",
    sizes: [
      { size: "50 gm", price: 100 }
    ],
    selectedSize: "50 gm",
    badge: "Official Packaging",
    badgeType: "badge-lime",
    concerns: ["acne-prone", "pigmentation", "dull-tired", "glowing-skin"],
    image: "assets/products/tejaswini-mugha-lepam.jpg",
    ingredients: "Navara Rice Powder, Green Gram Powder, Turmeric (Manjal), Sandalwood, Yashtimadhu, Manjishta, Amla, Vetiver, Saffron",
    benefits: "Gently cleanses the skin, Helps remove dullness, Gives a fresh and natural glow, Keeps skin soft and healthy",
    howToUse: "Mix required quantity with water, rose water, aloe vera gel or suitable liquid to make a smooth paste. Apply evenly on cleansed face. Leave for 10-15 minutes and rinse gently with water.",
    shortDesc: "Crafted with medicinal Navara rice, soothing turmeric, and cooling sandalwood for gentle exfoliation and radiant complexion.",
    location: "Puthiyara, Kozhikode, Kerala"
  },
  {
    id: "kumkumadi-tailam",
    pillar: "mukha",
    pillarLabel: "Mukha (Skin Care)",
    name: "Kumkumadi Tailam",
    subName: "Classical Saffron Radiance Facial Elixir",
    price: 400,
    volume: "12 ml",
    sizes: [
      { size: "12 ml", price: 400 }
    ],
    selectedSize: "12 ml",
    badge: "Precious Elixir",
    badgeType: "badge-coffee",
    concerns: ["pigmentation", "dull-tired", "glowing-skin"],
    image: "assets/products/kumkumadi-tailam.jpg",
    ingredients: "Kashmiri Saffron (Kumkuma), Sandalwood (Chandana), Ushira, Manjishta, Lotus Stamen, Goat Milk",
    benefits: "Brightens dark spots, Evens out skin tone, Imparts golden radiance, Rejuvenates tired dermal cells",
    howToUse: "Cleanse face. Dispense 2-3 drops onto palms and press gently into face and neck before sleep.",
    shortDesc: "The revered crown jewel of Ayurvedic cosmetology, crafted with saffron pistils and botanical extracts for luminous tone.",
    location: "Puthiyara, Kozhikode, Kerala"
  },
  {
    id: "danwantaram-tailam",
    pillar: "bath-body",
    pillarLabel: "Kaya (Body Care)",
    name: "Danwantaram Tailam",
    subName: "A Classic Blend for Strength, Flexibility & Holistic Wellbeing",
    price: 300,
    volume: "100 ml",
    sizes: [
      { size: "100 ml", price: 300 },
      { size: "200 ml", price: 550 }
    ],
    selectedSize: "100 ml",
    badge: "Classical Abhyangam",
    badgeType: "badge-olive",
    concerns: ["dry-dehydrated", "glowing-skin"],
    image: "assets/products/danwantaram-tailam.jpg",
    ingredients: "Dashamoola (ten medicated roots), Bala (Sida cordifolia), Ashwagandha, Eranda, Sesame Oil, and selected herbs",
    benefits: "Supports joint health and flexibility, Relaxes muscles and reduces stiffness, Nourishes the body and improves circulation, Helps in postnatal care and rejuvenation, Ideal for daily abhyangam",
    howToUse: "Take required quantity and gently massage on the body. Leave for some time for better absorption. Can be followed by warm water bath.",
    shortDesc: "A classical masterwork for strength, flexibility, muscle relaxation, and postnatal nourishment.",
    location: "Puthiyara, Kozhikode, Kerala"
  },
  {
    id: "virgin-coconut-oil",
    pillar: "bath-body",
    pillarLabel: "Kaya (Body Care)",
    name: "Virgin Coconut Oil",
    subName: "Pure, Traditional & Versatile (Edible Grade)",
    price: 300,
    volume: "100 ml",
    sizes: [
      { size: "100 ml", price: 300 }
    ],
    selectedSize: "100 ml",
    badge: "Cold Extracted",
    badgeType: "badge-lime",
    concerns: ["dry-dehydrated", "dry-frizzy", "hair-nourishment"],
    image: "assets/products/virgin-coconut-oil.jpg",
    ingredients: "100% Pure Coconut (Cocos nucifera) Cold-Extracted from Fresh Kerala Coconuts",
    benefits: "Nourishes hair & scalp, Moisturises skin naturally, Helps maintain natural moisture barrier, Soothes and calms dry skin, Ideal for massage and self-care",
    howToUse: "Apply on hair and scalp, Use on skin as a natural moisturiser, Ideal for body massage, Can be used for lip care, Suitable for cooking (edible grade).",
    shortDesc: "A natural, unrefined coconut oil extracted from fresh coconuts, retaining its pure nutrients and natural goodness.",
    location: "Puthiyara, Kozhikode, Kerala"
  },
  {
    id: "rasnadi-churnam",
    pillar: "wellness",
    pillarLabel: "Rasayana & Wellness",
    name: "Rasnadi Churnam",
    subName: "Ancient Ayurvedic Head Care Powder",
    price: 50,
    volume: "10 gm",
    sizes: [
      { size: "10 gm", price: 50 }
    ],
    selectedSize: "10 gm",
    badge: "Head Care Ritual",
    badgeType: "badge-coffee",
    concerns: ["hair-nourishment"],
    image: "assets/products/rasnadi-churnam.jpg",
    ingredients: "Rasna, Vacha, Devadaru, Musta, Kushta",
    benefits: "Helps relieve headache and heaviness, Protects head from excess moisture, Helps relieve sinus discomfort, Supports a clear, light and refreshed head",
    howToUse: "Rub a small pinch on the crown of the head (Uchhi) immediately after bathing or head wash.",
    shortDesc: "The quintessential Kerala post-bath ritual. Gently rubbed onto the fontanelle/crown to absorb moisture and ward off heaviness.",
    location: "Puthiyara, Kozhikode, Kerala"
  },
  {
    id: "chyavanaprashyam",
    pillar: "wellness",
    pillarLabel: "Rasayana & Wellness",
    name: "Chyavanaprashyam",
    subName: "An Ancient Ayurvedic Rasayana for Timeless Immunity",
    price: 450,
    volume: "350 gm",
    sizes: [
      { size: "350 gm", price: 450 }
    ],
    selectedSize: "350 gm",
    badge: "FSSAI Registered Food",
    badgeType: "badge-lime",
    concerns: ["glowing-skin"],
    image: "assets/products/chyavanaprashyam.jpg",
    ingredients: "Amla (Indian Gooseberry), Over 40 Ayurvedic herbs, Pure Cow's Ghee, Natural Honey",
    benefits: "Supports immunity, Boosts energy & stamina, Supports respiratory health, Aids digestion, Promotes overall wellness",
    howToUse: "Consume 1 teaspoon twice daily for adults, half teaspoon for children, followed by warm milk or water.",
    shortDesc: "Prepared with fresh wild amla and over 40 carefully selected herbs slow-cooked with ghee and honey following classical Samhita principles.",
    location: "Puthiyara, Kozhikode, Kerala"
  },
  {
    id: "manjishta-lip-balm",
    pillar: "lip-care",
    pillarLabel: "Mukha (Lip Care)",
    name: "Manjishta Lip Balm",
    subName: "Nourish. Protect. Naturally. (3 Beautiful Shades)",
    price: 200,
    volume: "8 gm",
    sizes: [
      { size: "8 gm (Plain)", price: 200 },
      { size: "8 gm (Strawberry Pink)", price: 200 },
      { size: "8 gm (Maroon)", price: 200 }
    ],
    selectedSize: "8 gm (Plain)",
    badge: "3 Shades Available",
    badgeType: "badge-coffee",
    concerns: ["dry-dehydrated", "pigmentation"],
    image: "assets/products/manjishta-lip-balm.jpg",
    ingredients: "Manjishta, Cow Ghee, Almond Oil, Beeswax (Available in Plain, Strawberry Pink, Maroon)",
    benefits: "Deeply moisturizes, Protects lips, Keeps lips soft & healthy, Natural care for everyday",
    howToUse: "Apply required amount evenly on lips using clean fingertip. Reapply as needed throughout the day.",
    shortDesc: "A natural lip balm crafted with pure cow ghee and Manjishta root extract to nourish, protect, and restore soft healthy lips.",
    location: "Puthiyara, Kozhikode, Kerala"
  },
  {
    id: "surabhi-soundarya-snan",
    pillar: "bath-body",
    pillarLabel: "Kaya (Body Care)",
    name: "Surabhi Soundarya Snan Churnam",
    subName: "Traditional Herbal Bath Powder & Cleanser",
    price: 300,
    volume: "100 gm",
    sizes: [
      { size: "100 gm", price: 300 }
    ],
    selectedSize: "100 gm",
    badge: "Soap-Free Bath",
    badgeType: "badge-olive",
    concerns: ["acne-prone", "glowing-skin", "dull-tired"],
    image: "assets/products/surabhi-soundarya.jpg",
    ingredients: "Vetiver, Manjishta, Turmeric, Rose Petals, Green Gram, Sandalwood",
    benefits: "Gently cleanses skin, Removes dull dead cells, Imparts natural herbal fragrance, Safe for daily bath without drying",
    howToUse: "Mix 2-3 tablespoons with water into a paste, apply over damp body, massage gently, and rinse thoroughly.",
    shortDesc: "A complete herbal bath powder blending cooling vetiver and fragrant botanicals to cleanse, purify, and nourish without soap.",
    location: "Puthiyara, Kozhikode, Kerala"
  },
  {
    id: "matru-devo-bhava",
    pillar: "gifts-combos",
    pillarLabel: "Gifts & Hampers",
    name: "Matru Devo Bhava Gift Box",
    subName: "Mother & Baby Curated Ayurvedic Gift Box",
    price: 1850,
    volume: "Complete 9-Piece Box",
    sizes: [
      { size: "Curated Gift Box", price: 1850 }
    ],
    selectedSize: "Curated Gift Box",
    badge: "Custom Photo Cover",
    badgeType: "badge-lime",
    concerns: ["dry-dehydrated", "hair-nourishment", "glowing-skin"],
    image: "assets/products/matru-devo-bhava.jpg",
    ingredients: "Lavanyam Oil (15ml), Neelibringadi Oil (100ml), Danwantaram Oil (100ml), Baby Kajal (5g), Muslin Wrap, Bath Scrub, Wooden Rattle, Cotton Cloth, Personalised Card",
    benefits: "Because when a baby is born, a mother is born too. Thoughtful postpartum nourishment for mother and gentle care for baby.",
    howToUse: "Gift box includes detailed daily mother and baby Ayurvedic ritual booklet.",
    shortDesc: "A complete Ayurvedic care box curated with love for a mother and her little one, customisable with your family photo on the box cover.",
    location: "Puthiyara, Kozhikode, Kerala"
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

// --- Asset Watchdog: Guarantees 100% Logo and License Visibility ---
function initAssetGuards() {
  function verifyImage(img, fallbackKey) {
    if (!img) return;
    img.addEventListener("error", function() {
      if (window.PURE_MANTRA_ASSETS && window.PURE_MANTRA_ASSETS[fallbackKey]) {
        this.src = window.PURE_MANTRA_ASSETS[fallbackKey];
      }
    });
    if (img.complete && img.naturalWidth === 0 && window.PURE_MANTRA_ASSETS?.[fallbackKey]) {
      img.src = window.PURE_MANTRA_ASSETS[fallbackKey];
    }
  }

  document.querySelectorAll('img[src*="logo"], .brand-logo-frame img, .preloader-emblem-img, .footer-crest-logo-frame img, .mobile-pwa-pill-logo, .main-menu-logo-mini img').forEach(img => {
    verifyImage(img, "logo");
  });

  document.querySelectorAll('img[src*="fssai"], .fssai-cert-img').forEach(img => {
    verifyImage(img, "fssai");
  });
}

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  try { initAssetGuards(); } catch(e) { console.error("Asset guard error:", e); }
  try { initSitePreloader(); } catch(e) { console.error("Preloader error:", e); }
  try { initMobileTickerFader(); } catch(e) { console.error("Ticker fader error:", e); }
  try { renderProducts(); } catch(e) { console.error("Product render error:", e); }
  try { updateCartUI(); } catch(e) { console.error("Cart UI error:", e); }
  try { initFilterListeners(); } catch(e) { console.error("Filter listeners error:", e); }
  try { initCraftsmanshipReel(); } catch(e) { console.error("Reel error:", e); }
  try { initQuizLogic(); } catch(e) { console.error("Quiz logic error:", e); }
  try { initMobileMenu(); } catch(e) { console.error("Mobile menu error:", e); }
  try { initBotanicalLab(); } catch(e) { console.error("Botanical lab error:", e); }
  try { initBowlScrollTransition(); } catch(e) { console.error("Bowl scroll error:", e); }
  try { initPwaAndMobileApp(); } catch(e) { console.error("PWA init error:", e); }
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
        <p style="font-size: 1.1rem; color: var(--color-text-secondary); margin-bottom: 1rem;">
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
      
      <!-- 360-Degree Rotating Stage (Desktop Mouse Hover & Mobile Touch Swipe) -->
      <div class="product-media" 
           onclick="openProductModal('${item.id}')" 
           onmousemove="handleInteractiveSpin(event, this)" 
           onmouseleave="resetInteractiveSpin(this)"
           ontouchstart="handleTouchSpinStart(event, this)"
           ontouchmove="handleTouchSpinMove(event, this)"
           ontouchend="handleTouchSpinEnd(this)">
        <div class="product-360-indicator">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg>
          <span class="indicator-desktop">360\u00B0 Turn</span>
          <span class="indicator-mobile">Swipe 360\u00B0</span>
        </div>

        <div class="product-360-turntable" id="turntable-${item.id}">
          <img src="${window.resolveProductImg ? window.resolveProductImg(item.id, item.image) : item.image}" alt="${item.name}" class="product-real-img" loading="lazy" onerror="this.onerror=null; if(window.resolveProductImg){this.src=window.resolveProductImg('${item.id}', '${item.image}');}else{this.src='logo.jpg';}">
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
        <span style="font-size: 0.72rem; color: var(--color-text-muted); font-weight: 700;">Size:</span>
        ${item.sizes.map(s => `
          <button class="size-pill-btn ${s.size === item.selectedSize ? 'active' : ''}" onclick="selectProductSize('${item.id}', '${s.size}', ${s.price}, this)">
            ${s.size}
          </button>
        `).join("")}
      </div>

      <div class="product-ingredients-preview">
        <strong>Key Botanicals:</strong> ${truncateText(item.ingredients, 60)}
      </div>

      <div class="product-footer">
        <div class="product-price-box">
          <span class="product-price" id="price-display-${item.id}">\u20B9${item.price.toLocaleString("en-IN")}</span>
          <span class="product-volume" id="volume-display-${item.id}">${item.selectedSize}</span>
        </div>
        <div class="product-card-action-cluster">
          <button class="btn-add-cart" onclick="addToCart('${item.id}')" title="Add to Bag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>
            <span>Add</span>
          </button>
          <button class="btn-whatsapp-direct" onclick="openWhatsAppForProduct('${item.name}')" title="Order directly on WhatsApp">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
            <span>WA</span>
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

// Helper to filter by concern from concern matrix
function filterByConcernCard(concernSlug) {
  currentConcernFilter = concernSlug;
  currentPillarFilter = "all";
  
  document.querySelectorAll(".pillar-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.pillar === "all");
  });
  
  document.querySelectorAll(".concern-pill").forEach(pill => {
    pill.classList.toggle("active", pill.dataset.concern === concernSlug);
  });
  
  renderProducts();
  scrollToSection("shopSection");
}

function filterByPillar(pillarSlug) {
  currentPillarFilter = pillarSlug;
  currentConcernFilter = "all";
  
  document.querySelectorAll(".pillar-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.pillar === pillarSlug);
  });
  
  document.querySelectorAll(".concern-pill").forEach(pill => {
    pill.classList.toggle("active", pill.dataset.concern === "all");
  });
  
  renderProducts();
  scrollToSection("shopSection");
}// --- Interactive 360 Spin on Mouse Hover & Move (Desktop) ---
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

// --- Touch-Driven 360 Spin on Swipe (Android & iOS Mobile) ---
let touchStartCoords = { x: 0, y: 0 };
let isProductTouchActive = false;

function handleTouchSpinStart(e, mediaBox) {
  if (!e.touches || e.touches.length === 0) return;
  touchStartCoords.x = e.touches[0].clientX;
  touchStartCoords.y = e.touches[0].clientY;
  isProductTouchActive = true;
  const turntable = mediaBox.querySelector(".product-360-turntable");
  if (turntable) {
    turntable.style.transition = "none";
  }
}

function handleTouchSpinMove(e, mediaBox) {
  if (!isProductTouchActive || !e.touches || e.touches.length === 0) return;
  const touch = e.touches[0];
  const deltaX = touch.clientX - touchStartCoords.x;
  const deltaY = touch.clientY - touchStartCoords.y;

  // If user is clearly swiping horizontally on the product turntable
  if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 8) {
    const rect = mediaBox.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(1, (touch.clientX - rect.left) / rect.width));
    const degrees = Math.round(percentage * 360);
    const turntable = mediaBox.querySelector(".product-360-turntable");
    if (turntable) {
      turntable.style.transform = `rotateY(${degrees}deg)`;
    }
  }
}

function handleTouchSpinEnd(mediaBox) {
  isProductTouchActive = false;
  const turntable = mediaBox.querySelector(".product-360-turntable");
  if (turntable) {
    turntable.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
    turntable.style.transform = "rotateY(0deg)";
  }
}

// --- Interactive Size Selection ---
function selectProductSize(productId, size, price, btn) {
  const item = PRODUCTS.find(p => p.id === productId);
  if (!item) return;

  item.selectedSize = size;
  item.price = price;

  const priceEl = document.getElementById(`price-display-${productId}`);
  const volumeEl = document.getElementById(`volume-display-${productId}`);

  if (priceEl) priceEl.textContent = `\u20B9${price.toLocaleString("en-IN")}`;
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
  const mobileCountBadge = document.getElementById("mobileCartBadge");
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  
  if (countBadge) {
    countBadge.textContent = totalCount;
    countBadge.style.display = totalCount > 0 ? "flex" : "none";
  }

  if (mobileCountBadge) {
    mobileCountBadge.textContent = totalCount;
    mobileCountBadge.style.display = totalCount > 0 ? "flex" : "none";
  }

  const itemsContainer = document.getElementById("cartItemsContainer");
  const subtotalEl = document.getElementById("cartSubtotalVal");

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  if (subtotalEl) {
    subtotalEl.textContent = `\u20B9${subtotal.toLocaleString("en-IN")}`;
  }

  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: #EDE4D8;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 1rem; opacity: 0.6;">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        <p style="font-size: 1rem; margin-bottom: 0.4rem; color: #FFFDF9; font-weight: 700;">Your bag is empty</p>
        <p style="font-size: 0.85rem; margin-bottom: 1.5rem; color: #EDE4D8;">Handcrafted botanical formulations from Puthiyara, Kozhikode.</p>
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
        <div class="cart-item-price">\u20B9${item.price.toLocaleString("en-IN")}</div>
        <span style="font-size: 0.74rem; color: #EDE4D8;">Size: ${item.volume}</span>
      </div>
      <div class="cart-item-qty">
        <button class="btn-qty-mod" onclick="modifyQty('${item.cartId}', -1)">-</button>
        <span style="font-size: 0.9rem; font-weight: 700; min-width: 18px; text-align: center; color: #FFFDF9;">${item.qty}</span>
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

// --- Product Quick View Modal (Enhanced with Official PDF Spec & Real Photo) ---
function openProductModal(productId) {
  const item = PRODUCTS.find(p => p.id === productId);
  if (!item) return;

  const content = document.getElementById("productModalContent");
  if (!content) return;

  content.innerHTML = `
    <div class="product-pdp-grid">
      <div class="product-pdp-visual">
        <div class="pdp-img-frame">
          <img src="${window.resolveProductImg ? window.resolveProductImg(item.id, item.image) : item.image}" alt="${item.name}" class="pdp-main-photo" onerror="this.onerror=null; if(window.resolveProductImg){this.src=window.resolveProductImg('${item.id}', '${item.image}');}else{this.src='logo.jpg';}">
        </div>
        <span class="product-card-badge ${item.badgeType}" style="margin: 0.8rem auto 0; display: inline-block;">${item.badge}</span>
        <div style="font-size: 0.78rem; color: #EDE4D8; margin-top: 0.5rem; text-align: center;">Sole Batch &bull; Puthiyara, Kozhikode</div>
      </div>

      <div class="product-pdp-details">
        <div style="font-size: 0.74rem; text-transform: uppercase; letter-spacing: 0.12em; color: var(--color-gold-bright); margin-bottom: 0.3rem; font-weight: 700;">
          ${item.pillarLabel}
        </div>
        <h2 style="font-size: 1.85rem; margin-bottom: 0.3rem; color: #FFFDF9;" class="font-serif">${item.name}</h2>
        <div style="font-size: 0.92rem; color: #EDE4D8; margin-bottom: 1rem; font-style: italic;">${item.subName}</div>

        <div style="font-family: var(--font-sans); font-size: 1.85rem; font-weight: 700; color: #f2ffb0; margin-bottom: 1.2rem;">
          \u20B9${item.price.toLocaleString("en-IN")} <span style="font-size: 0.85rem; font-family: var(--font-sans); color: #EDE4D8;">(${item.selectedSize})</span>
        </div>

        <p style="font-size: 0.92rem; color: #EDE4D8; line-height: 1.65; margin-bottom: 1.2rem;">
          ${item.shortDesc}
        </p>

        <!-- PDP Accordion / Tabs -->
        <div class="pdp-info-tabs">
          <div class="pdp-info-block">
            <strong style="color: #f2ffb0; display: block; margin-bottom: 0.25rem;">🌿 Key Ingredients:</strong>
            <span style="color: #EDE4D8; font-size: 0.85rem;">${item.ingredients}</span>
          </div>

          <div class="pdp-info-block">
            <strong style="color: #C89F5A; display: block; margin-bottom: 0.25rem;">✨ Key Benefits:</strong>
            <span style="color: #EDE4D8; font-size: 0.85rem;">${item.benefits}</span>
          </div>

          <div class="pdp-info-block">
            <strong style="color: #FFFDF9; display: block; margin-bottom: 0.25rem;">📋 How to Use:</strong>
            <span style="color: #EDE4D8; font-size: 0.85rem;">${item.howToUse}</span>
          </div>

          <div class="pdp-info-block store-notice-block">
            <strong style="color: #f2ffb0; display: block; margin-bottom: 0.2rem;">&#128205; Sole Physical Store:</strong>
            <span style="color: #EDE4D8; font-size: 0.82rem;">
              Pure Mantra, Puthiyara, Kozhikode, Kerala 673004.
              <a href="https://maps.app.goo.gl/14FxJsMqcdhjpaDq7" target="_blank" rel="noopener noreferrer" style="color: #f2ffb0; font-weight: 700; text-decoration: underline; margin-left: 0.3rem;">
                Open Google Maps &rarr;
              </a>
            </span>
          </div>
        </div>

        <div class="pdp-action-row" style="display: flex; gap: 0.8rem; flex-wrap: wrap; margin-top: 1.3rem;">
          <button class="btn-primary" onclick="addToCart('${item.id}'); closeProductModal();">
            Add to Bag &bull; \u20B9${item.price.toLocaleString("en-IN")}
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
  window.open(`https://wa.me/918891005400?text=${text}`, "_blank");
}

function openWhatsAppOrderFromCart() {
  if (cart.length === 0) {
    showToast("Your apothecary bag is empty. Please select products first.");
    return;
  }

  const itemsList = cart.map(i => `- ${i.name} (${i.volume}) Qty: ${i.qty} - \u20B9${i.price * i.qty}`).join("%0A");
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  const message = `Namaskaram Pure Mantra! I would like to order directly via your Concierge:%0A%0A${itemsList}%0A%0A*Total Order Value:* \u20B9${subtotal}%0A%0APlease share direct payment (UPI/Card/International Wire) & dispatch from Puthiyara, Kozhikode.`;

  window.open(`https://wa.me/918891005400?text=${message}`, "_blank");
}

function openWhatsAppGeneralConcierge() {
  const text = encodeURIComponent(
    `Namaskaram Pure Mantra Team! I would like to inquire about authentic Ayurvedic formulation guidance, walk-in collection at your sole physical store in Puthiyara (Kozhikode), or international shipping to UAE/Dubai.`
  );
  window.open(`https://wa.me/918891005400?text=${text}`, "_blank");
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
        <span style="font-weight: 700; color: var(--color-accent-lime);">\u20B9${(item.price * item.qty).toLocaleString("en-IN")}</span>
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
    shippingCost = 90;
  } else if (region === "uae") {
    shippingCost = 1200; // Flat direct priority air courier to Dubai / UAE
  }

  const shippingDisplay = document.getElementById("shippingCostDisplay");
  const totalDisplay = document.getElementById("checkoutTotalDisplay");

  if (shippingDisplay) {
    if (region === "pickup") {
      shippingDisplay.textContent = "FREE (In-Person Puthiyara Collection)";
    } else if (region === "india") {
      shippingDisplay.textContent = `\u20B9${shippingCost.toLocaleString("en-IN")} (Pan-India Express)`;
    } else {
      shippingDisplay.textContent = `\u20B9${shippingCost.toLocaleString("en-IN")} (UAE Air Courier)`;
    }
  }
  if (totalDisplay) {
    totalDisplay.textContent = `\u20B9${(subtotal + shippingCost).toLocaleString("en-IN")}`;
  }
}

function completeCheckoutSimulation(e) {
  e.preventDefault();
  const name = document.getElementById("checkoutName")?.value || "Patron";
  const phone = document.getElementById("checkoutPhone")?.value || "";
  const address = document.getElementById("checkoutAddress")?.value || "";
  const region = document.getElementById("shippingRegionSelect")?.value || "india";
  const subtotal = cart.reduce((s, i) => s + (i.price * i.qty), 0);
  let shippingCost = 0;
  if (region === "uae") shippingCost = 1200;
  else if (region === "india") shippingCost = 90;
  else if (region === "pickup") shippingCost = 0;

  const total = subtotal + shippingCost;
  const orderNum = "PM-" + Math.floor(100000 + Math.random() * 900000);

  // Format order items
  const itemsText = cart.map(i => `• ${i.name} (${i.volume || i.selectedSize}) x ${i.qty} = \u20B9${i.price * i.qty}`).join("\n");

  // Save order to localStorage history so customer can view it
  try {
    const orderRecord = {
      orderNum,
      date: new Date().toISOString(),
      name,
      phone,
      address,
      region,
      items: [...cart],
      subtotal,
      shippingCost,
      total
    };
    const orders = JSON.parse(localStorage.getItem("pure_mantra_orders") || "[]");
    orders.unshift(orderRecord);
    localStorage.setItem("pure_mantra_orders", JSON.stringify(orders.slice(0, 20)));
  } catch (err) {
    console.warn("Could not save order history:", err);
  }

  // Build structured WhatsApp order message to +91 88910 05400
  const waMsg = encodeURIComponent(
    `*NEW ORDER - PURE MANTRA*\n` +
    `-----------------------------\n` +
    `*Order No:* ${orderNum}\n` +
    `*Customer Name:* ${name}\n` +
    `*Phone:* ${phone}\n` +
    `*Delivery Option:* ${region === 'pickup' ? 'Store Pickup at Puthiyara' : (region === 'uae' ? 'UAE Air Express' : 'Pan-India Domestic Delivery')}\n` +
    `*Address:* ${address || 'In-store collection at Puthiyara, Kozhikode'}\n\n` +
    `*Items Ordered:*\n${itemsText}\n\n` +
    `*Subtotal:* ₹${subtotal}\n` +
    `*Shipping:* ₹${shippingCost}\n` +
    `*Total Order Value:* ₹${total}\n` +
    `-----------------------------\n` +
    `Please confirm dispatch from Puthiyara, Kozhikode & share direct payment details.`
  );

  closeCheckoutModal();

  cart = [];
  saveCart();
  updateCartUI();

  // Directly forward order to official store WhatsApp
  window.open(`https://wa.me/918891005400?text=${waMsg}`, "_blank");

  showOrderSuccessModal(name, phone, region, total, orderNum, waMsg);
}

function showOrderSuccessModal(name, phone, region, total, orderNum, waMsg) {
  const modalContent = document.getElementById("orderSuccessContent");
  if (!modalContent) return;

  const resolvedOrderNum = orderNum || ("PM-" + Math.floor(100000 + Math.random() * 900000));
  
  let routeInfoHtml = "";
  if (region === "pickup") {
    routeInfoHtml = `
      <div style="margin-bottom: 0.4rem;"><strong>Collection Point:</strong> Sole Physical Store, Puthiyara, Kozhikode, Kerala</div>
      <div style="margin-bottom: 0.4rem;"><strong>Google Maps Directions:</strong> <a href="https://maps.app.goo.gl/14FxJsMqcdhjpaDq7" target="_blank" rel="noopener noreferrer" style="color: var(--color-accent-lime); font-weight: 700; text-decoration: underline;">https://maps.app.goo.gl/14FxJsMqcdhjpaDq7</a></div>
    `;
  } else if (region === "uae") {
    routeInfoHtml = `
      <div style="margin-bottom: 0.4rem;"><strong>Dispatch Hub:</strong> Puthiyara, Kozhikode, Kerala</div>
      <div style="margin-bottom: 0.4rem;"><strong>Destination Route:</strong> Direct International Priority Air Express (Kerala &rarr; UAE: Dubai / Abu Dhabi)</div>
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

      <span style="font-size: 0.78rem; font-weight: 700; color: var(--color-accent-lime); text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 0.4rem;">Order Confirmed &bull; ${resolvedOrderNum}</span>
      <h2 style="font-size: 2.2rem; margin-bottom: 0.8rem; color: #FFFDF9;" class="font-serif">Gratitude, ${name || 'Patron'}</h2>
      <p style="font-size: 0.95rem; color: #EDE4D8; max-width: 480px; margin: 0 auto 1.8rem; line-height: 1.65;">
        Your order of <strong>₹${total.toLocaleString("en-IN")}</strong> has been registered with our exclusive store in Puthiyara, Kozhikode.
      </p>

      <div style="background: rgba(9, 13, 7, 0.8); border: 1px dashed var(--color-accent-lime-border); border-radius: var(--radius-sm); padding: 1.2rem 1.4rem; max-width: 470px; margin: 0 auto 1.8rem; text-align: left; font-size: 0.85rem;">
        ${routeInfoHtml}
        <div><strong>WhatsApp Order Updates:</strong> Sent directly to official concierge <strong style="color: #f2ffb0;"><a href="tel:+918891005400" style="color: inherit; text-decoration: none;">+91 88910 05400</a></strong>.</div>
      </div>

      <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
        <button class="btn-primary" onclick="closeOrderSuccessModal()">Continue Exploring</button>
        ${waMsg ? `
          <button class="btn-secondary" onclick="window.open('https://wa.me/918891005400?text=${waMsg}', '_blank')">
            Re-send on WhatsApp (+91 88910 05400)
          </button>
        ` : `
          <button class="btn-secondary" onclick="openWhatsAppForProduct('Order Status: ' + '${resolvedOrderNum}')">Track with Concierge</button>
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
  let recommendedProductIds = ["lavanyam-tailam", "bringa-brahmi-oil", "surabhi-soundarya-snan"];

  if (quizAnswers.primaryConcern === "hair") {
    recommendationHeadline = "Kesha Vardhana Intensive Crown Protocol";
    recommendationSummary = "Targeting follicular heat accumulation and root weakness using classical Bhringaraj and Neeli cold-infusions.";
    recommendedProductIds = ["bringa-brahmi-oil", "neelibringadi-oil", "traditional-chyavanaprashyam"];
  } else if (quizAnswers.primaryConcern === "immunity") {
    recommendationHeadline = "Rasayana & Ritucharya Rejuvenation Protocol";
    recommendationSummary = "Designed to fortify Ojas and Agni (digestive metabolic fire) through classical Charaka Samhita small-batch formulations.";
    recommendedProductIds = ["traditional-chyavanaprashyam", "karkidaka-kanji-kit", "surabhi-soundarya-snan"];
  }

  document.getElementById("quizResultTitle").textContent = recommendationHeadline;
  document.getElementById("quizResultSummary").textContent = recommendationSummary;

  const itemsContainer = document.getElementById("quizRecommendedItems");
  if (itemsContainer) {
    const items = PRODUCTS.filter(p => recommendedProductIds.includes(p.id));
    itemsContainer.innerHTML = items.map(p => `
      <div style="background: rgba(14, 20, 12, 0.7); border: 1px solid rgba(47, 66, 41, 0.6); border-radius: var(--radius-sm); padding: 1.4rem;">
        <span style="font-size: 0.72rem; text-transform: uppercase; color: var(--color-gold-accent); font-weight: 700;">${p.pillarLabel}</span>
        <h4 style="font-size: 1.25rem; color: #FFFDF9; margin: 0.3rem 0;" class="font-serif">${p.name}</h4>
        <p style="font-size: 0.84rem; color: #EDE4D8; margin-bottom: 0.9rem;">${p.shortDesc}</p>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="font-family: var(--font-serif); font-size: 1.25rem; font-weight: 700; color: var(--color-accent-lime);">\u20B9${p.price.toLocaleString("en-IN")}</span>
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
  let ids = ["lavanyam-tailam", "bringa-brahmi-oil", "surabhi-soundarya-snan"];
  if (headline.includes("Crown")) {
    ids = ["bringa-brahmi-oil", "neelibringadi-oil", "traditional-chyavanaprashyam"];
  } else if (headline.includes("Rasayana")) {
    ids = ["traditional-chyavanaprashyam", "karkidaka-kanji-kit", "surabhi-soundarya-snan"];
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
      <h2 style="font-size: 2rem; color: #FFFDF9; margin-bottom: 0.8rem;" class="font-serif">The Authentic Karkidaka Kanji Brewing Ritual</h2>
      <p style="font-size: 0.94rem; color: #EDE4D8; line-height: 1.65; margin-bottom: 1.6rem;">
        Follow this revered Kerala monsoon rejuvenation method (Karkidaka Chikitsa) formulated in synergy with traditional martial arts and seasonal health wisdom in Puthiyara, Kozhikode.
      </p>

      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
        <div style="background: rgba(9, 13, 7, 0.7); border: 1px solid rgba(47, 66, 41, 0.6); border-radius: var(--radius-sm); padding: 1rem;">
          <strong style="color: var(--color-accent-lime); display: block; margin-bottom: 0.2rem;">Step 1: The Njavara Grain Rinse</strong>
          <p style="font-size: 0.86rem; color: #EDE4D8;">Take one pre-measured sachet of organic unpolished Njavara rice from your kit. Wash gently in cold spring water twice. Do not scrub hard to retain medicinal hull nutrients.</p>
        </div>

        <div style="background: rgba(9, 13, 7, 0.7); border: 1px solid rgba(47, 66, 41, 0.6); border-radius: var(--radius-sm); padding: 1rem;">
          <strong style="color: var(--color-accent-lime); display: block; margin-bottom: 0.2rem;">Step 2: Herbal Kizhi Immersion</strong>
          <p style="font-size: 0.86rem; color: #EDE4D8;">Add 7 to 8 cups of water in an earthen pot or thick brass pan. Submerge the pre-tied Dashapushpam &amp; Trikatu Spice Kizhi together with the rinsed Njavara rice.</p>
        </div>

        <div style="background: rgba(9, 13, 7, 0.7); border: 1px solid rgba(47, 66, 41, 0.6); border-radius: var(--radius-sm); padding: 1rem;">
          <strong style="color: var(--color-accent-lime); display: block; margin-bottom: 0.2rem;">Step 3: Slow Simmer (Mridu Paka)</strong>
          <p style="font-size: 0.86rem; color: #EDE4D8;">Bring to a rolling boil, then lower the flame to a gentle simmer for 35-40 minutes. Using a wooden ladle, occasionally press the herbal spice Kizhi against the pot side to extract herbal carminatives.</p>
        </div>

        <div style="background: rgba(9, 13, 7, 0.7); border: 1px solid rgba(47, 66, 41, 0.6); border-radius: var(--radius-sm); padding: 1rem;">
          <strong style="color: var(--color-accent-lime); display: block; margin-bottom: 0.2rem;">Step 4: Fresh Coconut Milk &amp; Ghee Tempering</strong>
          <p style="font-size: 0.86rem; color: #EDE4D8;">Remove the Kizhi. Stir in 1/2 cup of freshly squeezed coconut milk and half a teaspoon of pure cow's ghee. Serve warm as your evening meal during the monsoon phase.</p>
        </div>
      </div>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <button class="btn-primary" onclick="window.print()">Print / Save Brewing Chart</button>
        <button class="btn-secondary" onclick="addToCart('karkidaka-kanji-kit'); closeBrewingGuideModal();">Order 7-Day Kanji Kit &bull; \u20B91,280</button>
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

// --- Open Full High-Resolution FSSAI Certificate in Clean Viewer ---
function openFullFssaiImage() {
  const asset = window.PURE_MANTRA_ASSETS?.fssai || 'fssai-license.png';
  const w = window.open('', '_blank');
  if (w) {
    w.document.write(`<!DOCTYPE html><html><head><title>FSSAI Registration Certificate - Pure Mantra</title><meta name="viewport" content="width=device-width, initial-scale=1.0"><style>body{margin:0;background:#0d140b;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;padding:20px;font-family:sans-serif;color:#FAF6F0;box-sizing:border-box;}img{max-width:100%;max-height:88vh;height:auto;border-radius:8px;box-shadow:0 10px 40px rgba(0,0,0,0.85);border:2px solid #C89F5A;}p{margin-top:14px;font-size:13px;color:#E0B872;letter-spacing:0.05em;text-align:center;}</style></head><body><img src="${asset}" alt="Official FSSAI Registration Certificate"><p>Commissionerate of Food Safety, Government of Kerala &bull; Reg. No. 21323242000345</p></body></html>`);
    w.document.close();
  } else {
    window.open('fssai-license.png', '_blank');
  }
}

// --- FSSAI Verification Modal ---
function openFssaiModal() {
  const content = document.getElementById("fssaiModalContent");
  if (!content) return;

  content.innerHTML = `
    <div>
      <span style="font-size: 0.75rem; font-weight: 700; color: #C89F5A; text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 0.4rem;">Statutory Compliance &bull; Government of Kerala</span>
      <h2 style="font-size: 1.95rem; color: #FFFDF9; margin-bottom: 0.4rem;" class="font-serif">Official FSSAI Registration Certificate</h2>
      <p style="font-size: 0.9rem; color: #EDE4D8; line-height: 1.6; margin-bottom: 1.5rem;">
        Food Safety and Standards Authority of India &bull; Registration Certificate under FSS Act, 2006 (Commissionerate of Food Safety, Kerala).
      </p>

      <div style="display: grid; grid-template-columns: 1fr 1.15fr; gap: 1.8rem; align-items: start; margin-bottom: 1.6rem;">
        <div style="background: #090D07; border-radius: var(--radius-sm); padding: 10px; text-align: center; border: 1.5px solid #C89F5A;">
          <img src="fssai-license.jpg" alt="Pure Mantra Official FSSAI Registration Certificate" style="width: 100%; min-height: 250px; height: auto; border-radius: 4px; display: block; cursor: pointer; object-fit: contain;" onerror="if(window.PURE_MANTRA_ASSETS?.fssai){this.src=window.PURE_MANTRA_ASSETS.fssai;}this.onerror=null;" onclick="openFullFssaiImage()">
          <span style="font-size: 0.72rem; color: #f2ffb0; display: block; margin-top: 0.5rem; font-weight: 600;">Click photo to open full resolution certificate</span>
        </div>

        <div>
          <div style="background: rgba(9, 13, 7, 0.75); border: 1.5px solid rgba(200, 159, 90, 0.4); border-radius: var(--radius-sm); padding: 1.3rem; font-size: 0.84rem;">
            <div style="margin-bottom: 0.9rem;">
              <span style="color: #E0B872; display: block; font-size: 0.72rem; text-transform: uppercase; font-weight: 700;">Official Registration Number:</span>
              <strong style="color: #f2ffb0; font-family: monospace; font-size: 1.25rem; letter-spacing: 0.05em; text-shadow: 0 0 10px rgba(242,255,176,0.3);">21323242000345</strong>
            </div>

            <div style="margin-bottom: 0.9rem;">
              <span style="color: #D9CEC0; display: block; font-size: 0.72rem; text-transform: uppercase; font-weight: 700;">Location &amp; Operating Base:</span>
              <strong style="color: #FFFDF9;">Puthiyara, Kozhikode, Kerala, India</strong>
            </div>

            <div style="margin-bottom: 0.9rem;">
              <span style="color: #D9CEC0; display: block; font-size: 0.72rem; text-transform: uppercase; font-weight: 700;">Kind of Business:</span>
              <span style="color: #EDE4D8; font-weight: 600;">Food Vending Establishment &amp; Artisanal Formulations</span>
            </div>

            <div>
              <span style="color: #D9CEC0; display: block; font-size: 0.72rem; text-transform: uppercase; font-weight: 700;">Statutory Scope:</span>
              <span style="color: #EDE4D8;">Internal Organic Wellness Foods &amp; External Cosmetic Blends</span>
            </div>
          </div>
        </div>
      </div>

      <div style="display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap;">
        <span style="font-size: 0.76rem; color: #EDE4D8;">Verified Food Safety Standards compliance under FSS Act, 2006.</span>
        <div style="display: flex; gap: 0.8rem;">
          <button class="btn-secondary" onclick="openFullFssaiImage()" style="font-size: 0.84rem; padding: 0.65rem 1.2rem;">Open Full Resolution</button>
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

// --- Top Announcement Ticker Fading Rotator (Mobile Mode) ---
function initMobileTickerFader() {
  const container = document.getElementById("topTickerItems");
  if (!container) return;
  const badges = Array.from(container.querySelectorAll(".ticker-badge"));
  if (badges.length === 0) return;

  let activeIndex = 0;

  function cycleBadge() {
    if (window.innerWidth <= 768) {
      badges.forEach((badge, index) => {
        if (index === activeIndex) {
          badge.classList.add("active-fade");
        } else {
          badge.classList.remove("active-fade");
        }
      });
      activeIndex = (activeIndex + 1) % badges.length;
    } else {
      badges.forEach(b => b.classList.remove("active-fade"));
    }
  }

  cycleBadge();
  setInterval(cycleBadge, 3200);
  window.addEventListener("resize", cycleBadge);
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
    if (sectionId === "labSection") {
      const labContent = document.getElementById("labContentContainer");
      const dockedPot = document.getElementById("dockedMortarPot");
      const vessel = document.getElementById("transitionVesselWrapper");
      if (labContent) {
        labContent.style.opacity = "1";
        labContent.style.transform = "none";
      }
      if (dockedPot) dockedPot.style.opacity = "1";
      if (vessel) {
        vessel.style.opacity = "0";
        vessel.style.pointerEvents = "none";
      }
    }
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
      check.textContent = isSelected ? "\u2713" : "+";
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
    statusText.innerHTML = `<strong>Step 1:</strong> Select 3 botanicals from the botanical rack to prepare your compounding formula.`;
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
        <h3 class="font-serif" style="font-size: 2.1rem; color: #FFFDF9;">${formulaTitle}</h3>
      </div>
      <button class="btn-secondary" onclick="resetBotanicalLab()" style="padding: 0.45rem 0.95rem; font-size: 0.8rem;">
        Blend Another ↺
      </button>
    </div>

    <p style="font-size: 0.93rem; color: #EDE4D8; line-height: 1.65; margin-bottom: 1.5rem;">
      ${formulaDesc}
    </p>

    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 1.8rem; background: rgba(9, 13, 7, 0.7); border: 1px solid rgba(47, 66, 41, 0.6); border-radius: var(--radius-sm); padding: 1rem; text-align: center;">
      <div>
        <span style="font-size: 0.72rem; color: #D9CEC0; text-transform: uppercase; font-weight: 700; display: block;">Vata Harmony</span>
        <strong style="color: #f2ffb0; font-size: 0.88rem;">${vataEffect}</strong>
      </div>
      <div>
        <span style="font-size: 0.72rem; color: #D9CEC0; text-transform: uppercase; font-weight: 700; display: block;">Pitta Harmony</span>
        <strong style="color: #f2ffb0; font-size: 0.88rem;">${pittaEffect}</strong>
      </div>
      <div>
        <span style="font-size: 0.72rem; color: #D9CEC0; text-transform: uppercase; font-weight: 700; display: block;">Kapha Harmony</span>
        <strong style="color: #FFFDF9; font-size: 0.88rem;">${kaphaEffect}</strong>
      </div>
    </div>

    <div style="background: rgba(22, 32, 19, 0.9); border: 1.5px solid rgba(242, 255, 176, 0.35); border-radius: var(--radius-md); padding: 1.4rem; display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; flex-wrap: wrap;">
      <div style="display: flex; align-items: center; gap: 1.2rem;">
        <div style="width: 64px; height: 64px; background: #0E140C; border-radius: 8px; display: flex; align-items: center; justify-content: center; border: 1px solid var(--color-accent-lime-border);">
          <span style="font-size: 1.8rem;">🍶</span>
        </div>
        <div>
          <span style="font-size: 0.74rem; color: var(--color-gold-accent); text-transform: uppercase; font-weight: 700;">Matched Store Formulation:</span>
          <h4 class="font-serif" style="font-size: 1.35rem; color: #FFFDF9;">${matchedProduct.name}</h4>
          <span style="font-size: 0.84rem; color: #f2ffb0; font-weight: 700;">\u20B9${matchedProduct.price.toLocaleString("en-IN")} &bull; Handcrafted in Puthiyara</span>
        </div>
      </div>

      <div style="display: flex; gap: 0.8rem; align-items: center; flex-wrap: wrap;">
        <button class="btn-primary" onclick="addToCart('${matchedProduct.id}')">
          Add Formulation to Bag &bull; \u20B9${matchedProduct.price.toLocaleString("en-IN")}
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
  const labSection = document.getElementById("labSection");
  const dockedPot = document.getElementById("dockedMortarPot");

  if (!portal || !vessel || !targetSlot) return;

  let isTicking = false;

  function updateVesselPosition() {
    isTicking = false;
    const portalRect = portal.getBoundingClientRect();
    const portalHeight = portal.offsetHeight;
    const winHeight = window.innerHeight;
    const winWidth = window.innerWidth;
    const labRect = labSection ? labSection.getBoundingClientRect() : null;

    // Check if the user has reached or is viewing the lab section
    if (labRect && labRect.top <= winHeight * 0.75) {
      if (labContent) {
        labContent.style.opacity = "1";
        labContent.style.transform = "none";
      }
      if (dockedPot) dockedPot.style.opacity = "1";
      vessel.style.opacity = "0";
      vessel.style.pointerEvents = "none";
      if (textOverlay) textOverlay.style.opacity = "0";
      return;
    }

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
      if (dockedPot) dockedPot.style.opacity = "0";
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
      const textAlpha = Math.max(0, Math.min(1, 1 - (progress - 0.16) / 0.18));
      textOverlay.style.opacity = textAlpha;
      textOverlay.style.transform = `translate(-50%, -50%) translateY(${-progress * 45}px)`;
    }

    // -------------------------------------------------------------
    // PHASE 2 & 3: BOWL APPEARS, SCALES DOWN & GLIDES (0.24 to 0.88)
    // After scrolling past the message, the big white shade bowl appears,
    // then slowly decreases in size and glides to its workbench place.
    // -------------------------------------------------------------
    let vesselOpacity = 0;
    let currentX = startX;
    let currentY = startY;
    let currentScale = startScale;

    if (progress < 0.22) {
      vesselOpacity = 0;
    } else if (progress < 0.38) {
      vesselOpacity = (progress - 0.22) / 0.16;
      currentX = startX;
      currentY = startY;
      currentScale = startScale;
    } else {
      vesselOpacity = 1;
      const moveProgress = Math.min(1, (progress - 0.38) / 0.48);
      const ease = moveProgress * moveProgress * (3 - 2 * moveProgress);

      currentX = startX + (finalTargetX - startX) * ease;
      currentY = startY + (finalTargetY - startY) * ease;
      currentScale = startScale + (1.0 - startScale) * ease;
    }

    // -------------------------------------------------------------
    // PHASE 4: OTHER SECTIONS GRADUALLY APPEAR & DOCKING (0.62 to 1.0)
    // As the bowl settles into place, the workbench sections fade in!
    // -------------------------------------------------------------
    if (labContent) {
      const labAlpha = Math.max(0, Math.min(1, (progress - 0.62) / 0.28));
      labContent.style.opacity = labAlpha;
      labContent.style.transform = `translateY(${(1 - labAlpha) * 35}px)`;
    }

    if (progress >= 0.88) {
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
      if (dockedPot) dockedPot.style.opacity = "1";
      if (labContent) {
        labContent.style.opacity = "1";
        labContent.style.transform = "none";
      }
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

// ===================================================================
// SITE PRELOADER & CINEMATIC OPENING LOGO TRANSITION
// 1. Shows rotating logo emblem in screen center while loading.
// 2. Smoothly translates & scales down to the header position ("move to aside").
// ===================================================================
function initSitePreloader() {
  const preloader = document.getElementById("sitePreloader");
  const emblemWrap = document.getElementById("preloaderEmblemWrap");
  const textGroup = document.getElementById("preloaderTextGroup");
  const headerFrame = document.getElementById("headerLogoFrame");

  if (!preloader || !emblemWrap || !headerFrame) return;

  function runOpeningTransition() {
    // Hide text group smoothly
    if (textGroup) {
      textGroup.classList.add("fade-down");
    }

    // Get source (preloader emblem center) and target (header frame center) coordinates
    const srcRect = emblemWrap.getBoundingClientRect();
    const tgtRect = headerFrame.getBoundingClientRect();

    const srcCenterX = srcRect.left + srcRect.width / 2;
    const srcCenterY = srcRect.top + srcRect.height / 2;

    const tgtCenterX = tgtRect.left + tgtRect.width / 2;
    const tgtCenterY = tgtRect.top + tgtRect.height / 2;

    const deltaX = tgtCenterX - srcCenterX;
    const deltaY = tgtCenterY - srcCenterY;
    const scaleFactor = tgtRect.width > 0 ? (tgtRect.width / srcRect.width) : 0.54;

    // Apply the glide transition to aside
    emblemWrap.style.transition = "transform 0.95s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.75s ease";
    emblemWrap.style.transform = `translate3d(${deltaX}px, ${deltaY}px, 0) scale(${scaleFactor})`;

    // Fade out preloader curtain in parallel
    setTimeout(() => {
      preloader.classList.add("fade-out");
    }, 450);

    // Clean up when animation finishes
    setTimeout(() => {
      preloader.style.setProperty("display", "none", "important");
      if (preloader.parentNode) {
        preloader.remove();
      }
    }, 1100);
  }

  // Ensure minimum 1.1s so user experiences the elegant loading rotation
  const startTime = Date.now();
  if (document.readyState === "complete") {
    setTimeout(runOpeningTransition, 1100);
  } else {
    window.addEventListener("load", () => {
      const elapsed = Date.now() - startTime;
      const remainingDelay = Math.max(0, 1100 - elapsed);
      setTimeout(runOpeningTransition, remainingDelay);
    });
  }

  // Fallback trigger (ensures preloader never blocks page under any condition)
  setTimeout(() => {
    if (preloader && preloader.parentNode) {
      preloader.classList.add("fade-out");
      setTimeout(() => {
        preloader.style.setProperty("display", "none", "important");
        if (preloader.parentNode) preloader.remove();
      }, 400);
    }
  }, 2500);
}

// ===================================================================
// PRIMARY MAIN MENU DRAWER CONTROLS (CONVENIENT NAVIGATION)
// ===================================================================
function openMainMenu() {
  const drawer = document.getElementById("mainMenuDrawer");
  const backdrop = document.getElementById("mainMenuBackdrop");
  if (drawer && backdrop) {
    drawer.classList.add("active");
    backdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

function closeMainMenu() {
  const drawer = document.getElementById("mainMenuDrawer");
  const backdrop = document.getElementById("mainMenuBackdrop");
  if (drawer && backdrop) {
    drawer.classList.remove("active");
    backdrop.classList.remove("active");
    document.body.style.overflow = "";
  }
}

// Close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMainMenu();
    closeCartDrawer();
  }
});

// ===================================================================
// PWA & NATIVE MOBILE APP INSTALLATION PROMPT (ANDROID & iOS)
// ===================================================================
let deferredPwaPrompt = null;

function initPwaAndMobileApp() {
  // Register Service Worker for offline capability & mobile caching
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(err => {
        console.warn("Service worker registration:", err);
      });
    });
  }

  const pwaPill = document.getElementById("mobilePwaPill");
  if (!pwaPill) return;

  // Never display mobile install pill on desktop viewport (> 768px)
  if (window.innerWidth > 768) {
    pwaPill.style.display = "none";
    return;
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && pwaPill) {
      pwaPill.classList.remove("show");
      pwaPill.style.display = "none";
    }
  });

  // Check if dismissed before in sessionStorage
  if (sessionStorage.getItem("pure_mantra_pwa_dismissed")) {
    return;
  }

  // Detect iOS Safari
  const isIos = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const isStandalone = window.navigator.standalone === true || window.matchMedia("(display-mode: standalone)").matches;

  if (isStandalone) {
    // Already running as standalone installed app
    return;
  }

  // Android Chrome: Capture beforeinstallprompt event
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPwaPrompt = e;
    setTimeout(() => {
      if (window.innerWidth <= 768) {
        pwaPill.style.display = "";
        pwaPill.classList.add("show");
      }
    }, 2500);
  });

  // iOS Safari: Show guide to "Add to Home Screen"
  if (isIos && !isStandalone) {
    const instructionText = document.getElementById("pwaInstructionText");
    const installBtn = document.getElementById("btnPwaInstall");
    if (instructionText) instructionText.textContent = "Tap Share [?] & 'Add to Home Screen' (+)";
    if (installBtn) {
      installBtn.textContent = "How to Install";
      installBtn.onclick = () => {
        alert("To install Pure Mantra on iOS:\n1. Tap the Share button (square with arrow) at the bottom of Safari.\n2. Scroll down and tap 'Add to Home Screen' (+).\n3. Tap 'Add' to launch full-screen from your Home Screen.");
      };
    }
    setTimeout(() => {
      if (window.innerWidth <= 768) {
        pwaPill.style.display = "";
        pwaPill.classList.add("show");
      }
    }, 3500);
  }
}

function triggerPwaInstall() {
  if (deferredPwaPrompt) {
    deferredPwaPrompt.prompt();
    deferredPwaPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        showToast("Pure Mantra installed to Home Screen!");
      }
      deferredPwaPrompt = null;
      dismissPwaBanner();
    });
  }
}

function dismissPwaBanner() {
  const pwaPill = document.getElementById("mobilePwaPill");
  if (pwaPill) {
    pwaPill.classList.remove("show");
    pwaPill.style.display = "none";
    sessionStorage.setItem("pure_mantra_pwa_dismissed", "true");
  }
}
