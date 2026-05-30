// ===== PRODUCT DATA WITH ADDITIONAL EXTENDED ATTRIBUTES =====
const products = [
    {
        id: 1,
        name: "Urea Fertilizer 50kg",
        category: "chemical",
        price: 450,
        oldPrice: 600,
        emoji: "🧪",
        desc: "High-nitrogen chemical urea (46% N) for rapid green vegetative growth in major crops like paddy, wheat, and sugarcane.",
        rating: 4.5,
        stock: 15,
        stockStatus: "instock",
        isPopular: true
    },
    {
        id: 2,
        name: "Organic Vermicompost 10kg",
        category: "organic",
        price: 320,
        oldPrice: 400,
        emoji: "🪱",
        desc: "100% natural earthworm compost rich in humic materials and essential nutrients, ideal for organic vegetables, fruits, and flowers.",
        rating: 4.8,
        stock: 4,
        stockStatus: "lowstock"
    },
    {
        id: 3,
        name: "DAP Fertilizer 50kg",
        category: "chemical",
        price: 1350,
        oldPrice: 1500,
        emoji: "⚗️",
        desc: "Di-Ammonium Phosphate providing balanced nitrogen and highly soluble phosphorus for early root development and strong crop foundation.",
        rating: 4.4,
        stock: 22,
        stockStatus: "instock",
        isPopular: true
    },
    {
        id: 4,
        name: "Bt Cotton Hybrid Seeds 450g",
        category: "seeds",
        price: 860,
        oldPrice: 950,
        emoji: "☁️",
        desc: "High-yielding F1 Hybrid Bt Cotton seeds, genetically optimized for excellent boll retention and highly resistant to bollworms.",
        rating: 4.7,
        stock: 0,
        stockStatus: "outstock",
        isPopular: true
    },
    {
        id: 5,
        name: "Paddy (Rice) Seeds 10kg",
        category: "seeds",
        price: 650,
        oldPrice: 800,
        emoji: "🌾",
        desc: "Premium quality fine-grain rice seeds with high germination rate, rapid seedling establishment, and excellent disease resistance.",
        rating: 4.6,
        stock: 40,
        stockStatus: "instock"
    },
    {
        id: 6,
        name: "Hybrid Maize (Corn) Seeds 4kg",
        category: "seeds",
        price: 920,
        oldPrice: 1100,
        emoji: "🌽",
        desc: "Drought-tolerant hybrid corn seeds with strong stalks, robust root anchorage, and exceptionally uniform cob sizing.",
        rating: 4.5,
        stock: 2,
        stockStatus: "lowstock"
    },
    {
        id: 7,
        name: "High-Yield Wheat Seeds 40kg",
        category: "seeds",
        price: 1400,
        oldPrice: 1700,
        emoji: "🌾",
        desc: "Certified rust-resistant seed grain wheat tailored for optimal grain weight, high tillering, and premium flour quality output.",
        rating: 4.4,
        stock: 12,
        stockStatus: "instock"
    },
    {
        id: 8,
        name: "Rhizobium Bio-Fertilizer 1kg",
        category: "bio",
        price: 150,
        oldPrice: 200,
        emoji: "🦠",
        desc: "Eco-friendly biological culture designed to form root nodules and fix atmospheric nitrogen in groundnuts, soy, pulses, and legumes.",
        rating: 4.3,
        stock: 18,
        stockStatus: "instock"
    },
    {
        id: 9,
        name: "NPK 19:19:19 Water Soluble 1kg",
        category: "chemical",
        price: 240,
        oldPrice: 300,
        emoji: "💧",
        desc: "Perfectly balanced NPK fertilizer specifically engineered for drip irrigation systems and foliar spray applications.",
        rating: 4.6,
        stock: 8,
        stockStatus: "instock"
    },
    {
        id: 10,
        name: "Cow Dung Manure 25kg",
        category: "organic",
        price: 350,
        oldPrice: 450,
        emoji: "🐄",
        desc: "Fully aged, well-decomposed cow dung manure to condition garden soils, improve aeration, and boost microbial activity.",
        rating: 4.5,
        stock: 0,
        stockStatus: "outstock"
    },
    {
        id: 11,
        name: "Neem Cake Powder 25kg",
        category: "organic",
        price: 650,
        oldPrice: 800,
        emoji: "🌿",
        desc: "Organic neem kernel residual powder offering dual protection: rich plant nutrition and excellent root nematode prevention.",
        rating: 4.7,
        stock: 14,
        stockStatus: "instock"
    },
    {
        id: 12,
        name: "Trichoderma Viride Bio-Fungicide 1kg",
        category: "bio",
        price: 180,
        oldPrice: 240,
        emoji: "🍄",
        desc: "Natural biocontrol formulation that actively targets and suppresses root rot, collar rot, wilt, and damping-off crop diseases.",
        rating: 4.5,
        stock: 3,
        stockStatus: "lowstock"
    },
    {
        id: 13,
        name: "Muriate of Potash (MOP) 50kg",
        category: "chemical",
        price: 1200,
        oldPrice: 1450,
        emoji: "🧱",
        desc: "Highly soluble potassium-rich fertilizer essential for grain filling, cell wall strength, sugar transport, and environmental stress tolerance.",
        rating: 4.3,
        stock: 25,
        stockStatus: "instock"
    },
    {
        id: 14,
        name: "Hybrid Tomato Seeds 10g",
        category: "seeds",
        price: 350,
        oldPrice: 420,
        emoji: "🍅",
        desc: "Premium F1 hybrid tomato seeds designed to harvest firm, uniform, and glossy red tomatoes with extended storage shelf life.",
        rating: 4.6,
        stock: 50,
        stockStatus: "instock"
    },
    {
        id: 15,
        name: "Epsom Salt (Magnesium Sulfate) 5kg",
        category: "chemical",
        price: 400,
        oldPrice: 550,
        emoji: "🧂",
        desc: "Highly water soluble magnesium and sulfur source, preventing yellowing leaves and maximizing chlorophyll production.",
        rating: 4.4,
        stock: 0,
        stockStatus: "outstock"
    },
    {
        id: 16,
        name: "Azotobacter Bio-Fertilizer 1L",
        category: "bio",
        price: 220,
        oldPrice: 280,
        emoji: "🧪",
        desc: "Concentrated liquid nitrogen-fixing bacterial strain suitable for non-leguminous crops like wheat, paddy, cotton, and vegetables.",
        rating: 4.2,
        stock: 9,
        stockStatus: "instock"
    },
    {
        id: 17,
        name: "Mustard Cake Fertilizer 5kg",
        category: "organic",
        price: 280,
        oldPrice: 350,
        emoji: "🌼",
        desc: "Highly nutritious organic mustard oil-extraction cake, rich in natural proteins for strong root expansion and bright blooms.",
        rating: 4.6,
        stock: 2,
        stockStatus: "lowstock"
    },
    {
        id: 18,
        name: "Hybrid Chilli Seeds 10g",
        category: "seeds",
        price: 420,
        oldPrice: 500,
        emoji: "🌶️",
        desc: "Extremely pungent, disease resistant hybrid green chilli seeds with high fruit-setting capacity under hot Indian summer climates.",
        rating: 4.5,
        stock: 35,
        stockStatus: "instock"
    },
    {
        id: 19,
        name: "Liquid Seaweed Extract 500ml",
        category: "organic",
        price: 290,
        oldPrice: 390,
        emoji: "🌱",
        desc: "Natural seaweed concentration rich in growth hormones (auxins, cytokinins) and 60+ trace minerals to boost overall harvest quality.",
        rating: 4.8,
        stock: 11,
        stockStatus: "instock"
    },
    {
        id: 20,
        name: "Manual Knapsack Sprayer 16L",
        category: "tools",
        price: 1150,
        oldPrice: 1500,
        emoji: "🎒",
        desc: "Highly durable backpack compression crop sprayer with adjustable dual nozzles for easy chemical and bio mist application.",
        rating: 4.4,
        stock: 0,
        stockStatus: "outstock"
    },
    {
        id: 21,
        name: "Zinc Sulfate Micro-Nutrient 5kg",
        category: "chemical",
        price: 380,
        oldPrice: 450,
        emoji: "🧪",
        desc: "Essential micro-nutrient (21% Zn) that prevents leaf chlorosis, stunted internodes, and Khaira disease in paddy.",
        rating: 4.4,
        stock: 18,
        stockStatus: "instock"
    },
    {
        id: 22,
        name: "Premium Bone Meal Powder 10kg",
        category: "organic",
        price: 490,
        oldPrice: 600,
        emoji: "🦴",
        desc: "Organic slow-release fertilizer rich in phosphorus and calcium, encouraging heavy flowering and exceptional root structural density.",
        rating: 4.7,
        stock: 6,
        stockStatus: "lowstock"
    },
    {
        id: 23,
        name: "Single Super Phosphate (SSP) 50kg",
        category: "chemical",
        price: 550,
        oldPrice: 650,
        emoji: "🧱",
        desc: "High quality SSP fertilizer supplying phosphorus, calcium, and sulfur directly to oilseeds, pulses, and groundnut fields.",
        rating: 4.3,
        stock: 30,
        stockStatus: "instock"
    },
    {
        id: 24,
        name: "Hybrid Okra (Lady Finger) Seeds 100g",
        category: "seeds",
        price: 260,
        oldPrice: 320,
        emoji: "🥒",
        desc: "High-yield okra hybrid seeds, producing tender, dark green slim pods with excellent resistance to Yellow Vein Mosaic Virus.",
        rating: 4.6,
        stock: 45,
        stockStatus: "instock"
    },
    {
        id: 25,
        name: "De-Oiled Castor Cake Powder 25kg",
        category: "organic",
        price: 580,
        oldPrice: 700,
        emoji: "🍂",
        desc: "Castor cake organic manure with natural insecticidal compounds, preventing white grubs and termites in soil systems.",
        rating: 4.5,
        stock: 0,
        stockStatus: "outstock"
    },
    {
        id: 26,
        name: "Pseudomonas Fluorescens Bio-Pesticide 1kg",
        category: "bio",
        price: 190,
        oldPrice: 250,
        emoji: "🍄",
        desc: "Biological bacterial fungicide targeting sheath blight, blast, leaf spot, and seedling damping-off in commercial crops.",
        rating: 4.6,
        stock: 14,
        stockStatus: "instock"
    },
    {
        id: 27,
        name: "Mycorrhiza Bio-Fertilizer Granules 4kg",
        category: "bio",
        price: 420,
        oldPrice: 500,
        emoji: "🌱",
        desc: "Vesicular Arbuscular Mycorrhiza (VAM) fungal granules that develop symbiotic networks to maximize moisture and phosphorus absorption.",
        rating: 4.8,
        stock: 3,
        stockStatus: "lowstock"
    },
    {
        id: 28,
        name: "Foliar Spray Boron (20%) 1kg",
        category: "chemical",
        price: 310,
        oldPrice: 390,
        emoji: "💧",
        desc: "Water soluble Disodium Octaborate Tetrahydrate designed to improve calcium absorption, pollination success, and crop fruit set.",
        rating: 4.5,
        stock: 22,
        stockStatus: "instock"
    },
    {
        id: 29,
        name: "Humic Acid Shiny Granules 5kg",
        category: "organic",
        price: 450,
        oldPrice: 550,
        emoji: "🪵",
        desc: "High quality humic, fulvic, and organic matter granules, designed to improve heavy clay soils and boost mineral uptake.",
        rating: 4.7,
        stock: 19,
        stockStatus: "instock"
    },
    {
        id: 30,
        name: "Battery Operated Sprayer 16L",
        category: "tools",
        price: 2800,
        oldPrice: 3500,
        emoji: "🔋",
        desc: "Heavy-duty dual-mode rechargeable battery electric farm sprayer with integrated pressure regulator and telescopic spraying wand.",
        rating: 4.6,
        stock: 8,
        stockStatus: "instock"
    },
    {
        id: 31,
        name: "Hybrid Marigold Orange Seeds 20g",
        category: "seeds",
        price: 180,
        oldPrice: 220,
        emoji: "🌼",
        desc: "Brilliant orange double-flowered marigold seeds, excellent companion crop that actively repels soil nematodes organically.",
        rating: 4.4,
        stock: 50,
        stockStatus: "instock"
    },
    {
        id: 32,
        name: "Ammonium Sulfate Fertilizer 50kg",
        category: "chemical",
        price: 950,
        oldPrice: 1100,
        emoji: "⚗️",
        desc: "Premium grade fertilizer supplying nitrogen and active sulfur, highly suited for oilseeds, pulses, and alkaline soils.",
        rating: 4.2,
        stock: 0,
        stockStatus: "outstock"
    },
    {
        id: 33,
        name: "Potassium Humate Liquid 1L",
        category: "organic",
        price: 340,
        oldPrice: 450,
        emoji: "🧪",
        desc: "Liquid humic booster formulated to trigger secondary white root growth, increase seed germination, and reduce chemical run-offs.",
        rating: 4.6,
        stock: 12,
        stockStatus: "instock"
    },
    {
        id: 34,
        name: "Phospho-Bacteria (PSB) Bio-Liquid 1L",
        category: "bio",
        price: 240,
        oldPrice: 300,
        emoji: "💧",
        desc: "Concentrated phosphate solubilizing biological culture designed to unlock fixed soil phosphorus and feed commercial crops.",
        rating: 4.5,
        stock: 7,
        stockStatus: "instock"
    },
    {
        id: 35,
        name: "Heavy Duty Garden Lopper 26 Inch",
        category: "tools",
        price: 750,
        oldPrice: 990,
        emoji: "✂️",
        desc: "Carbon steel bypass blades designed with premium lever mechanics, allowing effortless pruning of orchard tree branches up to 2 inches.",
        rating: 4.3,
        stock: 2,
        stockStatus: "lowstock"
    },
    {
        id: 36,
        name: "Iron Chelated (Fe-EDTA 12%) 500g",
        category: "chemical",
        price: 290,
        oldPrice: 350,
        emoji: "🧂",
        desc: "Chelated iron micro-nutrient compound that rapidly cures iron chlorosis and yellowing leaves in horticultural crops.",
        rating: 4.5,
        stock: 16,
        stockStatus: "instock"
    },
    {
        id: 37,
        name: "Premium Cocopeat Block 5kg",
        category: "organic",
        price: 160,
        oldPrice: 200,
        emoji: "🥥",
        desc: "Low-EC compressed coconut coir dust block. Expands up to 75 liters upon watering, ideal for nurseries and sowing seed plugs.",
        rating: 4.8,
        stock: 40,
        stockStatus: "instock"
    },
    {
        id: 38,
        name: "Hybrid Eggplant (Brinjal) Seeds 50g",
        category: "seeds",
        price: 210,
        oldPrice: 280,
        emoji: "🍆",
        desc: "Early maturing F1 hybrid seeds, producing beautiful high-gloss deep purple blocky eggplants resistant to bacterial wilt.",
        rating: 4.4,
        stock: 25,
        stockStatus: "instock"
    },
    {
        id: 39,
        name: "Neem Oil Concentrated (10000 PPM) 1L",
        category: "organic",
        price: 480,
        oldPrice: 600,
        emoji: "🌱",
        desc: "Cold-pressed highly concentrated neem oil insecticide. Disrupts growth, feeding, and breeding lifecycles of sucking pests.",
        rating: 4.7,
        stock: 11,
        stockStatus: "instock"
    },
    {
        id: 40,
        name: "Soil pH and Moisture Meter 3-in-1",
        category: "tools",
        price: 650,
        oldPrice: 850,
        emoji: "📟",
        desc: "Practical battery-free farm probe. Displays real-time soil pH values, volumetric moisture content, and ambient sunlight lux scores.",
        rating: 4.2,
        stock: 0,
        stockStatus: "outstock"
    }
];

const reviewDatabase = {
    chemical: [
        { stars: "⭐⭐⭐⭐⭐", text: "Gives immediate greening response. Highly recommend for paddy cultivation.", name: "Rajesh K." },
        { stars: "⭐⭐⭐⭐⭐", text: "Very soluble in water, worked perfectly in my drip lines.", name: "Vikas Patil" }
    ],
    organic: [
        { stars: "⭐⭐⭐⭐⭐", text: "Odor-free, cleanly packed and completely dry vermicompost. Excellent for tomatoes.", name: "Spoorthi" },
        { stars: "⭐⭐⭐⭐⭐", text: "Outstanding quality. Soil texture improved noticeably after one month.", name: "Harpreet S." }
    ],
    seeds: [
        { stars: "⭐⭐⭐⭐⭐", text: "Exceptional germination rate! 95% of seeds sprouted within 4 days.", name: "kadamoni" },
        { stars: "⭐⭐⭐⭐", text: "Very uniform crops. Highly resistant to the usual bollworms.", name: "Devender G." }
    ],
    bio: [
        { stars: "⭐⭐⭐⭐⭐", text: "Naturally boosted root efficiency. Saw thick root nodules on my chickpeas.", name: "Arjun P." },
        { stars: "⭐⭐⭐⭐", text: "Excellent biological alternative. Reduces chemical urea dependency.", name: "Srinivas Rao" }
    ],
    tools: [
        { stars: "⭐⭐⭐⭐⭐", text: "Top grade build quality. Battery lasts easily for 6-8 continuous hours.", name: "Manpreet S." },
        { stars: "⭐⭐⭐⭐", text: "Very clean cuts, carbon steel blades are extremely sharp.", name: "Ranganathan" }
    ]
};

const defaultReviews = [
    { stars: "⭐⭐⭐⭐⭐", text: "Extremely satisfied with the delivery and packaging quality.", name: "Farmer Guest" }
];

// ===== STATE CONTROL =====
let currentCategory = "all";
let currentSearch = "";
let currentSort = "default";
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let cardQuantities = {};

// ===== DOM NODES =====
const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const sortSelect = document.getElementById("sortSelect");

const cartBtn = document.getElementById("cartBtn");
const cartSidebar = document.getElementById("cartSidebar");
const closeCart = document.getElementById("closeCart");
const cartItemsEl = document.getElementById("cartItems");
const cartTotalEl = document.getElementById("cartTotal");
const cartCountEl = document.getElementById("cartCount");

const wishlistCountEl = document.getElementById("wishlistCount");
const wishlistNavBtn = document.getElementById("wishlistNavBtn");
const wishlistSidebar = document.getElementById("wishlistSidebar");
const wishlistItemsEl = document.getElementById("wishlistItems");
const closeWishlist = document.getElementById("closeWishlist");

const detailsSidebar = document.getElementById("detailsSidebar");
const detailsBody = document.getElementById("detailsBody");
const closeDetails = document.getElementById("closeDetails");

const checkoutModal = document.getElementById("checkoutModal");
const closeCheckout = document.getElementById("closeCheckout");
const checkoutTotalAmount = document.getElementById("checkoutTotalAmount");
const checkoutForm = document.getElementById("checkoutForm");
const cartCheckoutBtn = document.getElementById("cartCheckoutBtn");

// ===== RENDER SYSTEM =====
function renderProducts() {
    let list = products.filter(p => {
        const matchCat = currentCategory === "all" || p.category === currentCategory;
        const matchSearch = p.name.toLowerCase().includes(currentSearch.toLowerCase()) || 
                            p.desc.toLowerCase().includes(currentSearch.toLowerCase());
        return matchCat && matchSearch;
    });

    if (currentSort === "low") list.sort((a, b) => a.price - b.price);
    if (currentSort === "high") list.sort((a, b) => b.price - a.price);
    if (currentSort === "discount") {
        list.sort((a, b) => {
            const discA = (a.oldPrice - a.price) / a.oldPrice;
            const discB = (b.oldPrice - b.price) / b.oldPrice;
            return discB - discA;
        });
    }

    productGrid.innerHTML = "";

    if (list.length === 0) {
        productGrid.innerHTML = `<p style="grid-column:1/-1; text-align:center; color:var(--text-muted); padding:60px; font-size:1.1rem; font-weight:500;">No farming products match your search or filter settings.</p>`;
        return;
    }

    const imageSrcMap = {
        seeds: "./images/seeds.png",
        organic: "./images/organic.png",
        chemical: "./images/chemical.png",
        bio: "./images/organic.png",
        tools: "./images/tools.png"
    };

    list.forEach(p => {
        const discount = Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100);
        if (!cardQuantities[p.id]) cardQuantities[p.id] = 1;

        const isWished = wishlist.includes(p.id);
        const stockLabels = {
            instock: "In Stock",
            lowstock: "Low Stock",
            outstock: "Out of Stock"
        };

        const imageSrc = imageSrcMap[p.category] || "./images/seeds.png";

        const card = document.createElement("article");
        card.className = "product-card";
        card.setAttribute("tabindex", "0");
        card.innerHTML = `
          <div class="badge-stock ${p.stockStatus}">${stockLabels[p.stockStatus]}</div>
          <button class="wishlist-heart-btn" title="Add to Wishlist" aria-label="Add to Wishlist">${isWished ? "❤️" : "🤍"}</button>
          <div class="product-img" aria-hidden="true" style="background-image: url('${imageSrc}'); background-size: cover; background-position: center; height: 160px; display: flex; align-items: center; justify-content: center; position: relative;">
              ${p.isPopular ? `<span class="popular-badge" style="position: absolute; bottom: 8px; left: 8px; background: var(--accent); color: var(--text-main); padding: 3px 8px; border-radius: 6px; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; box-shadow: var(--shadow-sm); letter-spacing: 0.5px; z-index: 5;">🔥 Popular</span>` : ''}
              <span class="emoji-badge" style="position: absolute; bottom: 8px; right: 8px; background: rgba(255,255,255,0.85); border-radius: 50%; width: 34px; height: 34px; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; box-shadow: var(--shadow-sm);">${p.emoji}</span>
          </div>
          <h3 class="product-name">${p.name}</h3>
          <div class="product-price">
            <span class="price-new">₹${p.price}</span>
            <span class="price-old">₹${p.oldPrice}</span>
          </div>
          <div class="discount">${discount}% OFF</div>

          <div class="card-buttons">
            <button class="add-cart-btn" ${p.stockStatus === "outstock" ? "disabled" : ""}>
              ${p.stockStatus === "outstock" ? "No Stock" : "Add to Cart"}
            </button>
            <button class="inline-details-btn">Details</button>
          </div>
        `;

        // Wishlist heart button trigger
        card.querySelector(".wishlist-heart-btn").onclick = (e) => {
            e.stopPropagation();
            toggleWishlist(p.id);
        };

        // Add to cart click
        card.querySelector(".add-cart-btn").onclick = (e) => {
            e.stopPropagation();
            addToCart(p.id, 1);
        };

        // Details drawer trigger
        card.querySelector(".inline-details-btn").onclick = (e) => {
            e.stopPropagation();
            openDetailsSidebar(p);
        };

        card.onclick = () => openDetailsSidebar(p);
        
        // Accessibility: Support Enter click
        card.onkeydown = (e) => {
            if (e.key === "Enter") {
                openDetailsSidebar(p);
            }
        };

        productGrid.appendChild(card);
    });
}

// ===== DETAILS SIDEBAR LOGIC =====
function openDetailsSidebar(p) {
    const discount = Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100);
    const categoryReviews = reviewDatabase[p.category] || defaultReviews;
    const isWished = wishlist.includes(p.id);

    let reviewsHtml = '';
    categoryReviews.forEach(rev => {
        reviewsHtml += `<div class="review">${rev.stars} "${rev.text}" - <strong>${rev.name}</strong></div>`;
    });

    // Close other drawers to keep layout clean
    cartSidebar.classList.add("hidden");
    wishlistSidebar.classList.add("hidden");
    detailsSidebar.setAttribute("aria-hidden", "false");

    const imageSrcMap = {
        seeds: "./images/seeds.png",
        organic: "./images/organic.png",
        chemical: "./images/chemical.png",
        bio: "./images/organic.png",
        tools: "./images/tools.png"
    };
    const imageSrc = imageSrcMap[p.category] || "./images/seeds.png";

    detailsBody.innerHTML = `
    <div class="product-img" aria-hidden="true" style="background-image: url('${imageSrc}'); background-size: cover; background-position: center; height: 240px; display: flex; align-items: center; justify-content: center; position: relative; border-radius: var(--radius-md);">
        <span class="emoji-badge" style="position: absolute; bottom: 12px; right: 12px; background: rgba(255,255,255,0.85); border-radius: 50%; width: 46px; height: 46px; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; box-shadow: var(--shadow-md);">${p.emoji}</span>
    </div>
    <div>
      <div style="display:flex; justify-content:space-between; align-items:center; gap: 10px;">
        <h2>${p.name}</h2>
        <button id="sidebarHeartBtn" style="background:none; border:none; font-size:1.8rem; cursor:pointer;" aria-label="Toggle Wishlist">${isWished ? "❤️" : "🤍"}</button>
      </div>
      ${p.isPopular ? `<div style="margin-top: 8px;"><span class="sidebar-popular-badge" style="background: var(--accent); color: var(--text-main); padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; display: inline-block;">🔥 Popular Choice</span></div>` : ''}
      <div class="product-price" style="margin:16px 0; align-items: center;">
        <span class="price-new" style="font-size:1.6rem; color:var(--primary); font-weight:700; font-family:var(--font-heading);">₹${p.price}</span>
        <span class="price-old" style="text-decoration:line-through; color:var(--text-muted); margin:0 12px; font-size: 1.1rem;">₹${p.oldPrice}</span>
        <span class="discount" style="color:var(--danger); font-weight:700; font-size: 0.95rem; margin-bottom:0;">${discount}% OFF</span>
      </div>
      <p style="color:var(--text-muted); line-height:1.6; margin-bottom:16px; font-size: 0.95rem;">${p.desc}</p>
      <p style="margin-bottom:20px; font-weight: 500; font-size: 0.95rem;">
        Germination/Rating: ⭐ <strong>${p.rating} / 5</strong> | Sacks/Packs Available: <span style="color: var(--primary); font-weight:700;">${p.stock}</span>
      </p>
      
      <div class="card-qty-row" style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; background: var(--primary-light); padding: 12px 18px; border-radius: var(--radius-sm); border: 1px dashed var(--primary);">
        <span style="font-weight: 700; color: var(--primary); font-size: 0.95rem;">Select Quantity:</span>
        <div class="card-qty-controls" style="display: flex; align-items: center; gap: 14px;">
          <button id="sidebarDecBtn" style="width: 32px; height: 32px; font-weight: 700; border: 1px solid var(--primary); background: white; color: var(--primary); cursor: pointer; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 1.1rem;">-</button>
          <span id="sidebarQtyDisplay" style="font-weight: 700; font-size: 1.1rem; min-width: 20px; text-align: center;">${cardQuantities[p.id]}</span>
          <button id="sidebarIncBtn" style="width: 32px; height: 32px; font-weight: 700; border: 1px solid var(--primary); background: white; color: var(--primary); cursor: pointer; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 1.1rem;">+</button>
        </div>
      </div>

      <div class="sidebar-action-buttons">
        <button class="add-cart-btn" id="sidebarAdd" style="padding:14px; font-size: 0.95rem;" ${p.stockStatus === "outstock" ? "disabled" : ""}>
          ${p.stockStatus === "outstock" ? "Out of Stock" : "Add Selected to Cart"}
        </button>
        <button class="buy-now" id="sidebarBuy" ${p.stockStatus === "outstock" ? "disabled" : ""}>Buy Now</button>
        <button class="back-btn" id="sidebarBack">← Back to Catalog</button>
      </div>

      <div class="reviews">
        <h4>Recent Verified Farmer Reviews</h4>
        ${reviewsHtml}
      </div>
    </div>
  `;

    // Quantity selectors in details sidebar
    document.getElementById("sidebarIncBtn").onclick = () => {
        cardQuantities[p.id]++;
        document.getElementById("sidebarQtyDisplay").textContent = cardQuantities[p.id];
    };

    document.getElementById("sidebarDecBtn").onclick = () => {
        if (cardQuantities[p.id] > 1) {
            cardQuantities[p.id]--;
            document.getElementById("sidebarQtyDisplay").textContent = cardQuantities[p.id];
        }
    };

    // Wishlist toggle from details sidebar
    document.getElementById("sidebarHeartBtn").onclick = () => {
        toggleWishlist(p.id);
        openDetailsSidebar(p); // Re-render details sidebar panel to update heart state
    };

    // Add selected quantity to cart
    document.getElementById("sidebarAdd").onclick = () => {
        addToCart(p.id, cardQuantities[p.id]);
        cardQuantities[p.id] = 1; // Reset back to default
    };

    // Direct Buy Now operation
    document.getElementById("sidebarBuy").onclick = () => {
        addToCart(p.id, cardQuantities[p.id]);
        cardQuantities[p.id] = 1;
        detailsSidebar.classList.add("hidden");
        detailsSidebar.setAttribute("aria-hidden", "true");
        cartSidebar.classList.remove("hidden");
        cartSidebar.setAttribute("aria-hidden", "false");
    };



    // Go back
    document.getElementById("sidebarBack").onclick = () => {
        detailsSidebar.classList.add("hidden");
        detailsSidebar.setAttribute("aria-hidden", "true");
    };

    detailsSidebar.classList.remove("hidden");
}

closeDetails.onclick = () => {
    detailsSidebar.classList.add("hidden");
    detailsSidebar.setAttribute("aria-hidden", "true");
};

// ===== WISHLIST SIDEBAR ENGINE =====
function toggleWishlist(id) {
    const idx = wishlist.indexOf(id);

    if (idx > -1) {
        wishlist.splice(idx, 1);
    } else {
        wishlist.push(id);
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    updateWishlistCount();
    renderProducts();
    renderWishlist();
}

function updateWishlistCount() {
    wishlistCountEl.textContent = wishlist.length;
}

function renderWishlist() {
    if (wishlist.length === 0) {
        wishlistItemsEl.innerHTML = `
          <div class="empty-cart">
             <span style="font-size: 3rem; display: block; margin-bottom: 12px;">❤️</span>
             Your wishlist is currently empty. Click hearts on products to save them!
          </div>
        `;
        return;
    }

    wishlistItemsEl.innerHTML = "";
    const savedProducts = products.filter(p => wishlist.includes(p.id));

    savedProducts.forEach(item => {
        const row = document.createElement("div");
        row.className = "wishlist-item";
        row.innerHTML = `
          <div class="wishlist-item-emoji" aria-hidden="true">${item.emoji}</div>
          <div class="wishlist-item-info">
            <h4>${item.name}</h4>
            <p>₹${item.price}</p>
            <div class="wishlist-action-row">
               <button class="wishlist-to-cart-btn" ${item.stockStatus === "outstock" ? "disabled" : ""}>
                 ${item.stockStatus === "outstock" ? "Out of Stock" : "🛒 Add to Cart"}
               </button>
            </div>
          </div>
          <button class="remove-btn" title="Remove Item" aria-label="Remove Item">🗑️</button>
        `;

        // Transfer from Wishlist to Cart
        row.querySelector(".wishlist-to-cart-btn").onclick = () => {
            if (item.stockStatus !== "outstock") {
                addToCart(item.id, 1);
            }
        };

        // Remove from Wishlist
        row.querySelector(".remove-btn").onclick = () => {
            toggleWishlist(item.id);
        };

        wishlistItemsEl.appendChild(row);
    });
}

wishlistNavBtn.onclick = () => {
    detailsSidebar.classList.add("hidden");
    detailsSidebar.setAttribute("aria-hidden", "true");
    cartSidebar.classList.add("hidden");
    cartSidebar.setAttribute("aria-hidden", "true");
    
    wishlistSidebar.classList.remove("hidden");
    wishlistSidebar.setAttribute("aria-hidden", "false");
};

closeWishlist.onclick = () => {
    wishlistSidebar.classList.add("hidden");
    wishlistSidebar.setAttribute("aria-hidden", "true");
};

// ===== CART CORE LOGIC =====
function addToCart(id, explicitQty = 1) {
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty += explicitQty;
    } else {
        const p = products.find(p => p.id === id);
        cart.push({
            ...p,
            qty: explicitQty
        });
    }
    saveCart();
    renderCart();

    // Elegant bump micro-animation on adding
    cartBtn.style.transform = "scale(1.15)";
    setTimeout(() => cartBtn.style.transform = "", 250);
}

function changeQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
    saveCart();
    renderCart();
}

function removeItem(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
    renderCart();
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function renderCart() {
    const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);
    cartCountEl.textContent = totalItems;

    if (cart.length === 0) {
        cartItemsEl.innerHTML = `
           <div class="empty-cart">
             <span style="font-size: 3rem; display: block; margin-bottom: 12px;">🛒</span>
             Your shopping cart is empty. Add crops, seeds, and fertilizers to get started!
           </div>
        `;
        cartTotalEl.textContent = "0";
        return;
    }

    cartItemsEl.innerHTML = "";
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.qty;
        const el = document.createElement("div");
        el.className = "cart-item";
        el.innerHTML = `
          <div class="cart-item-emoji" aria-hidden="true">${item.emoji}</div>
          <div class="cart-item-info">
            <h4>${item.name}</h4>
            <p>₹${item.price} × ${item.qty} = ₹${item.price * item.qty}</p>
            <div class="qty-controls">
              <button data-act="dec" aria-label="Decrease quantity">−</button>
              <span>${item.qty}</span>
              <button data-act="inc" aria-label="Increase quantity">+</button>
            </div>
          </div>
          <button class="remove-btn" title="Remove Item" aria-label="Remove Item">🗑️</button>
        `;
        el.querySelector('[data-act="inc"]').onclick = () => changeQty(item.id, 1);
        el.querySelector('[data-act="dec"]').onclick = () => changeQty(item.id, -1);
        el.querySelector('.remove-btn').onclick = () => removeItem(item.id);
        cartItemsEl.appendChild(el);
    });
    
    cartTotalEl.textContent = total.toLocaleString('en-IN');
}

cartBtn.onclick = () => {
    detailsSidebar.classList.add("hidden");
    detailsSidebar.setAttribute("aria-hidden", "true");
    wishlistSidebar.classList.add("hidden");
    wishlistSidebar.setAttribute("aria-hidden", "true");
    
    cartSidebar.classList.remove("hidden");
    cartSidebar.setAttribute("aria-hidden", "false");
};

closeCart.onclick = () => {
    cartSidebar.classList.add("hidden");
    cartSidebar.setAttribute("aria-hidden", "true");
};

// ===== CHECKOUT ROUTINE =====
cartCheckoutBtn.onclick = () => {
    if (cart.length === 0) {
        alert("Your cart is empty! Add high quality organic goods first. 🛒");
        return;
    }
    const finalAmt = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
    checkoutTotalAmount.textContent = finalAmt.toLocaleString('en-IN');
    
    cartSidebar.classList.add("hidden");
    cartSidebar.setAttribute("aria-hidden", "true");
    
    checkoutModal.classList.remove("hidden");
    checkoutModal.setAttribute("aria-hidden", "false");
};

closeCheckout.onclick = () => {
    checkoutModal.classList.add("hidden");
    checkoutModal.setAttribute("aria-hidden", "true");
};

checkoutForm.onsubmit = e => {
    e.preventDefault();
    
    const nameVal = document.getElementById("checkoutName").value.trim();
    const phoneVal = document.getElementById("checkoutPhone").value.trim();
    const addrVal = document.getElementById("checkoutAddress").value.trim();
    
    // Validations
    if (!nameVal) {
        alert("Please enter your full name.");
        return;
    }
    if (!/^\d{10}$/.test(phoneVal)) {
        alert("Please enter a valid 10-digit mobile number linked to your UPI.");
        return;
    }
    if (addrVal.length < 15) {
        alert("Please write a detailed shipping address (including Village/Taluk/Pincode) for accurate freight delivery.");
        return;
    }

    const submitBtn = document.getElementById("submitPaymentBtn");
    submitBtn.textContent = "Processing Rural Freight Order...";
    submitBtn.disabled = true;

    // Simulate safe UPI verification gateways
    setTimeout(() => {
        alert(`🎉 Om Sri Sai Traders - Order Confirmed Successfully!\n\nThank you ${nameVal}! Your payment was authenticated. Our agricultural logistics dispatch team will contact you on +91 ${phoneVal} within 24 hours to schedule delivery to your rural hub.`);
        cart = [];
        saveCart();
        renderCart();
        checkoutForm.reset();
        
        submitBtn.textContent = "Verify & Confirm Order";
        submitBtn.disabled = false;
        checkoutModal.classList.add("hidden");
        checkoutModal.setAttribute("aria-hidden", "true");
    }, 2000);
};

// ===== CATEGORY SWITCH EVENTS =====
document.querySelectorAll(".cat-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentCategory = btn.getAttribute("data-category");
        renderProducts();
    });
});

// ===== SEARCH ACTIONS =====
searchInput.addEventListener("input", e => {
    currentSearch = e.target.value;
    renderProducts();
});

searchBtn.onclick = () => {
    currentSearch = searchInput.value;
    renderProducts();
};

searchInput.onkeydown = (e) => {
    if (e.key === "Enter") {
        currentSearch = searchInput.value;
        renderProducts();
    }
};

// ===== SORT SELECT CHANGE =====
sortSelect.onchange = e => {
    currentSort = e.target.value;
    renderProducts();
};

// ===== BANNER SLIDER LOGIC =====
const slidesContainer = document.getElementById("slides");
const slideElements = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevSlide");
const nextBtn = document.getElementById("nextSlide");
let activeSlideIndex = 0;
const slideCount = slideElements.length;

function showSlide(index) {
    if (index >= slideCount) activeSlideIndex = 0;
    else if (index < 0) activeSlideIndex = slideCount - 1;
    else activeSlideIndex = index;
    
    slidesContainer.style.transform = `translateX(-${activeSlideIndex * 100}%)`;
    
    slideElements.forEach((slide, idx) => {
        if (idx === activeSlideIndex) {
            slide.classList.add("active-slide");
        } else {
            slide.classList.remove("active-slide");
        }
    });
}

nextBtn.onclick = () => {
    showSlide(activeSlideIndex + 1);
    resetBannerAutoplay();
};

prevBtn.onclick = () => {
    showSlide(activeSlideIndex - 1);
    resetBannerAutoplay();
};

let autoplayInterval = setInterval(() => {
    showSlide(activeSlideIndex + 1);
}, 5000);

function resetBannerAutoplay() {
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(() => {
        showSlide(activeSlideIndex + 1);
    }, 5000);
}

// ===== INITIAL INITIALIZATION RUN =====
updateWishlistCount();
renderProducts();
renderWishlist();
renderCart();
showSlide(0);
