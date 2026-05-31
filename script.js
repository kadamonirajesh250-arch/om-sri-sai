// ===== LUXURIOUS GOLD PRODUCT DATA (40 EXQUISITE ITEMS) =====
const products = [
    // --- 24K Swiss Coins & Bars (Investment Group) ---
    {
        id: 1,
        name: "24K Swiss Valcambi Mint Gold Coin 2g",
        category: "coins",
        weight: 2,
        karat: "24K",
        makingCharge: 2, // ultra low investment making charges
        emoji: "🪙",
        desc: "999.9% fine pure gold minted coin by Valcambi Switzerland. Features security assay card and serial number representation.",
        rating: 4.9,
        stock: 45,
        stockStatus: "instock",
        image: "./images/gold_coin.png",
        isPopular: true
    },
    {
        id: 2,
        name: "24K BIS Hallmarked Laxmi Gold Coin 5g",
        category: "coins",
        weight: 5,
        karat: "24K",
        makingCharge: 2.5,
        emoji: "🪙",
        desc: "Exquisite pure gold coin minted with sacred Goddess Lakshmi emblem. Ideal for family wealth, gifting, and festive puja storage.",
        rating: 4.8,
        stock: 30,
        stockStatus: "instock",
        image: "./images/gold_coin.png",
        isPopular: false
    },
    {
        id: 3,
        name: "24K MMTC-PAMP Lotus Gold Coin 10g",
        category: "coins",
        weight: 10,
        karat: "24K",
        makingCharge: 2,
        emoji: "🪙",
        desc: "MMTC-PAMP certified 999.9 pure gold coin embossed with the iconic lotus flower. Highly liquid asset for retail investors.",
        rating: 4.9,
        stock: 22,
        stockStatus: "instock",
        image: "./images/gold_coin.png",
        isPopular: true
    },
    {
        id: 4,
        name: "24K Sovereign Bullion Gold Bar 20g",
        category: "coins",
        weight: 20,
        karat: "24K",
        makingCharge: 1.5,
        emoji: "🪙",
        desc: "Individually serial-numbered investment grade gold cast bar. Composed of 20 grams of accredited 999.9 pure gold.",
        rating: 4.7,
        stock: 12,
        stockStatus: "instock",
        image: "./images/gold_coin.png",
        isPopular: false
    },
    {
        id: 5,
        name: "24K Kundan Refinery Gold Bar 50g",
        category: "coins",
        weight: 50,
        karat: "24K",
        makingCharge: 1.2, // wholesale making charges
        emoji: "🪙",
        desc: "Certified gold bar produced by Kundan Gold Refinery. Sealed in anti-counterfeit blister pack with NABL accreditation.",
        rating: 4.9,
        stock: 5,
        stockStatus: "lowstock",
        image: "./images/gold_coin.png",
        isPopular: true
    },
    {
        id: 6,
        name: "24K Swiss Pamp Gold Mint Bar 100g",
        category: "coins",
        weight: 100,
        karat: "24K",
        makingCharge: 1, // lowest possible premium
        emoji: "🪙",
        desc: "Ultimate asset reserve. Pamp Swiss certified 100 grams gold bar featuring Lady Fortuna. Shipped under armored vault transport.",
        rating: 5.0,
        stock: 2,
        stockStatus: "lowstock",
        image: "./images/gold_coin.png",
        isPopular: true
    },
    {
        id: 7,
        name: "24K Rose Gold Invest Coin 8g",
        category: "coins",
        weight: 8,
        karat: "24K",
        makingCharge: 3,
        emoji: "🪙",
        desc: "Unique collector's gold coin with premium matte mirror finish, 24K purity with certified luxury protective assay sleeve.",
        rating: 4.6,
        stock: 15,
        stockStatus: "instock",
        image: "./images/gold_coin.png"
    },

    // --- 22K Royal Necklaces (Bridal Group) ---
    {
        id: 8,
        name: "Royal Maharani Kundan Gold Choker 45g",
        category: "necklaces",
        weight: 45,
        karat: "22K",
        makingCharge: 12, // typical premium making charge for handmade choker
        emoji: "📿",
        desc: "A breathtaking traditional Indian bridal choker set with intricately carved kundan stones, filigree work, and dangling gold beads.",
        rating: 4.9,
        stock: 3,
        stockStatus: "lowstock",
        image: "./images/gold_necklace.png",
        isPopular: true
    },
    {
        id: 9,
        name: "Antique Temple Nakshi Gold Necklace 32g",
        category: "necklaces",
        weight: 32,
        karat: "22K",
        makingCharge: 11,
        emoji: "📿",
        desc: "Divine temple design necklace carved with motifs of Goddess Lakshmi in Nakshi goldcraft. Blessed wedding heirloom look.",
        rating: 4.8,
        stock: 5,
        stockStatus: "lowstock",
        image: "./images/gold_necklace.png",
        isPopular: false
    },
    {
        id: 10,
        name: "Modern Lightweight Collar Gold Necklace 14g",
        category: "necklaces",
        weight: 14,
        karat: "22K",
        makingCharge: 8,
        emoji: "📿",
        desc: "Sleek, minimalist laser-cut gold collar necklace. Perfect for cocktail dinners, modern ensembles, and corporate high-fashion.",
        rating: 4.5,
        stock: 15,
        stockStatus: "instock",
        image: "./images/gold_necklace.png",
        isPopular: false
    },
    {
        id: 11,
        name: "Imperial Ruby Floral Gold Haram 65g",
        category: "necklaces",
        weight: 65,
        karat: "22K",
        makingCharge: 13,
        emoji: "📿",
        desc: "Magnificent long layered gold Haram decorated with handpicked cabochon Burmese rubies and delicate floral branch patterns.",
        rating: 5.0,
        stock: 2,
        stockStatus: "lowstock",
        image: "./images/gold_necklace.png",
        isPopular: true
    },
    {
        id: 12,
        name: "Classic Mangalsutra Gold Chain 12g",
        category: "necklaces",
        weight: 12,
        karat: "22K",
        makingCharge: 7,
        emoji: "📿",
        desc: "Traditional married gold neck chain with black onyx beads and a beautiful textured V-shaped pendant, hallmarked by BIS.",
        rating: 4.7,
        stock: 20,
        stockStatus: "instock",
        image: "./images/gold_necklace.png"
    },
    {
        id: 13,
        name: "Traditional Mango Gold Mala (Haaram) 55g",
        category: "necklaces",
        weight: 55,
        karat: "22K",
        makingCharge: 12,
        emoji: "📿",
        desc: "Authentic South Indian paisley mango-shaped gold units lined together in a majestic necklace chain. The gold is polished to a deep warm luster.",
        rating: 4.8,
        stock: 0,
        stockStatus: "outstock",
        image: "./images/gold_necklace.png"
    },
    {
        id: 14,
        name: "Contemporary Gold Mesh Choker 18g",
        category: "necklaces",
        weight: 18,
        karat: "22K",
        makingCharge: 9,
        emoji: "📿",
        desc: "Delicately woven gold wire mesh collar. Gives an extremely premium textured metallic glow with comfortable lightweight wear.",
        rating: 4.6,
        stock: 8,
        stockStatus: "instock",
        image: "./images/gold_necklace.png"
    },

    // --- 22K Rings (Rings Group) ---
    {
        id: 15,
        name: "Kundan Heritage Floral Gold Ring 6g",
        category: "rings",
        weight: 6,
        karat: "22K",
        makingCharge: 9,
        emoji: "💍",
        desc: "Stunning handcrafted gold ring featuring a central Kundan setting bordered by exquisite micro enamel work (Meenakari).",
        rating: 4.7,
        stock: 25,
        stockStatus: "instock",
        image: "./images/gold_ring.png",
        isPopular: true
    },
    {
        id: 16,
        name: "Royal VVS Solitaire Diamond Gold Band 8g",
        category: "rings",
        weight: 8,
        karat: "22K",
        makingCharge: 10,
        emoji: "💍",
        desc: "Brilliant certified VVS solitaire diamond nestled on a premium thick polished 22 Karat gold band. Lifetime value guarantee.",
        rating: 4.9,
        stock: 12,
        stockStatus: "instock",
        image: "./images/gold_ring.png",
        isPopular: true
    },
    {
        id: 17,
        name: "Burmese Ruby Crown Gold Ring 7g",
        category: "rings",
        weight: 7,
        karat: "22K",
        makingCharge: 10,
        emoji: "💍",
        desc: "Beautiful princess crown tiara design ring centered with an intense red natural oval ruby, framed by textured gold filigree.",
        rating: 4.8,
        stock: 8,
        stockStatus: "instock",
        image: "./images/gold_ring.png"
    },
    {
        id: 18,
        name: "Men's Imperial Matte Gold Band 10g",
        category: "rings",
        weight: 10,
        karat: "22K",
        makingCharge: 6,
        emoji: "💍",
        desc: "Bold masculine design ring with combined matte and high-polished facets. Solid gold weight providing absolute durability.",
        rating: 4.6,
        stock: 14,
        stockStatus: "instock",
        image: "./images/gold_ring.png"
    },
    {
        id: 19,
        name: "Adjustable Peacock Gold Ring 5g",
        category: "rings",
        weight: 5,
        karat: "22K",
        makingCharge: 8,
        emoji: "💍",
        desc: "Dynamic open-shank adjustable ring depicting a majestic royal peacock with fine laser etchings and micro polished beads.",
        rating: 4.5,
        stock: 35,
        stockStatus: "instock",
        image: "./images/gold_ring.png"
    },
    {
        id: 20,
        name: "Classic Sleek Wedding Gold Ring 3g",
        category: "rings",
        weight: 3,
        karat: "22K",
        makingCharge: 5, // low making charges for simple band
        emoji: "💍",
        desc: "Simple, timeless high-dome polished gold wedding band. Highly comfortable inner fit for daily continuous wear.",
        rating: 4.7,
        stock: 0,
        stockStatus: "outstock",
        image: "./images/gold_ring.png"
    },
    {
        id: 21,
        name: "Luxury Emerald Cut Gold Ring 9g",
        category: "rings",
        weight: 9,
        karat: "22K",
        makingCharge: 11,
        emoji: "💍",
        desc: "Bespoke emerald cut solitaire crystal center set on a multi-tiered gold claw structure. Exudes premium royal brilliance.",
        rating: 4.8,
        stock: 4,
        stockStatus: "lowstock",
        image: "./images/gold_ring.png"
    },

    // --- 22K Designer Earrings (Earrings Group) ---
    {
        id: 22,
        name: "Imperial Kundan Bridal Jhumkas 24g",
        category: "earrings",
        weight: 24,
        karat: "22K",
        makingCharge: 12,
        emoji: "✨",
        desc: "Traditional bridal double-dome gold jhumkas. Encrusted with precious uncut kundan stones and hanging seed pearl clusters.",
        rating: 4.9,
        stock: 4,
        stockStatus: "lowstock",
        image: "./images/gold_earrings.png",
        isPopular: true
    },
    {
        id: 23,
        name: "Royal Nakshi Lakshmi Stud Earrings 10g",
        category: "earrings",
        weight: 10,
        karat: "22K",
        makingCharge: 9,
        emoji: "✨",
        desc: "Charming round ear studs carved with the image of Goddess Lakshmi sitting on a lotus, decorated with deep gold filigree borders.",
        rating: 4.7,
        stock: 18,
        stockStatus: "instock",
        image: "./images/gold_earrings.png"
    },
    {
        id: 24,
        name: "Modern Gold Chandelier Drops 14g",
        category: "earrings",
        weight: 14,
        karat: "22K",
        makingCharge: 10,
        emoji: "✨",
        desc: "Cascade multi-tier hanging earrings. Reflects light beautiful with every movement, crafted under micro-laser tech.",
        rating: 4.6,
        stock: 10,
        stockStatus: "instock",
        image: "./images/gold_earrings.png",
        isPopular: false
    },
    {
        id: 25,
        name: "Lightweight Gold Hoop Earrings 6g",
        category: "earrings",
        weight: 6,
        karat: "22K",
        makingCharge: 7,
        emoji: "✨",
        desc: "Elegant and stylish standard gold hoops. Features fine diamond-cut texturing on the outer surface to maximize sparkle.",
        rating: 4.5,
        stock: 40,
        stockStatus: "instock",
        image: "./images/gold_earrings.png"
    },
    {
        id: 26,
        name: "Traditional Gold Chandbali Earrings 18g",
        category: "earrings",
        weight: 18,
        karat: "22K",
        makingCharge: 11,
        emoji: "✨",
        desc: "Crescent moon shape chandelier earrings decorated with fine gold enamel beads. Captures majestic Mughal royalty.",
        rating: 4.8,
        stock: 6,
        stockStatus: "lowstock",
        image: "./images/gold_earrings.png",
        isPopular: true
    },
    {
        id: 27,
        name: "Simple Gold Ear Studs 4g",
        category: "earrings",
        weight: 4,
        karat: "22K",
        makingCharge: 6,
        emoji: "✨",
        desc: "Dainty four-petal flower daily wear gold studs with high quality screw-backs for absolute safety.",
        rating: 4.4,
        stock: 0,
        stockStatus: "outstock",
        image: "./images/gold_earrings.png"
    },
    {
        id: 28,
        name: "Burmese Ruby Drop Gold Earrings 8g",
        category: "earrings",
        weight: 8,
        karat: "22K",
        makingCharge: 9.5,
        emoji: "✨",
        desc: "Dangling tear-drop earrings set with natural oval Burmese rubies hanging inside polished gold arches.",
        rating: 4.7,
        stock: 12,
        stockStatus: "instock",
        image: "./images/gold_earrings.png"
    },

    // --- 22K Traditional Bangles (Bangles Group) ---
    {
        id: 29,
        name: "Heavy Royal Antique Kada Bangles 48g (Pair)",
        category: "bangles",
        weight: 48,
        karat: "22K",
        makingCharge: 11,
        emoji: "💫",
        desc: "Magnificent pair of solid antique gold Kada bracelets with elephant head terminals and detailed Nakshi repoussé work.",
        rating: 5.0,
        stock: 2,
        stockStatus: "lowstock",
        image: "./images/gold_bangle.png",
        isPopular: true
    },
    {
        id: 30,
        name: "Filigree Mesh Gold Bangle Set 36g (4 Pcs)",
        category: "bangles",
        weight: 36,
        karat: "22K",
        makingCharge: 10,
        emoji: "💫",
        desc: "Set of four beautifully coordinated gold bangles with continuous intricate filigree net lace structures. Elegant bridal staple.",
        rating: 4.8,
        stock: 5,
        stockStatus: "lowstock",
        image: "./images/gold_bangle.png",
        isPopular: true
    },
    {
        id: 31,
        name: "Chased Geometric Gold Bracelet 18g",
        category: "bangles",
        weight: 18,
        karat: "22K",
        makingCharge: 8,
        emoji: "💫",
        desc: "Unisex sleek gold cuff bracelet featuring abstract linear diamond chasing patterns and dynamic hook clasp.",
        rating: 4.6,
        stock: 14,
        stockStatus: "instock",
        image: "./images/gold_bangle.png"
    },
    {
        id: 32,
        name: "Flexible Charm Gold Link Bracelet 12g",
        category: "bangles",
        weight: 12,
        karat: "22K",
        makingCharge: 9,
        emoji: "💫",
        desc: "High quality linked charm gold bracelet with dangling leaf pendants and adjustable O-ring clasp fitting.",
        rating: 4.4,
        stock: 20,
        stockStatus: "instock",
        image: "./images/gold_bangle.png"
    },
    {
        id: 33,
        name: "Solid High Polish Gold Kada 28g",
        category: "bangles",
        weight: 28,
        karat: "22K",
        makingCharge: 7,
        emoji: "💫",
        desc: "Traditional solid gold round Kada with high mirror finish. Offers classic style, perfect for single wrist wear.",
        rating: 4.7,
        stock: 8,
        stockStatus: "instock",
        image: "./images/gold_bangle.png"
    },
    {
        id: 34,
        name: "Designer Wave Cut Gold Bangles 22g (Pair)",
        category: "bangles",
        weight: 22,
        karat: "22K",
        makingCharge: 9,
        emoji: "💫",
        desc: "Exquisite pair of wave-patterned gold bangles with textured diamond-cut highlights on the crests. High sparkle.",
        rating: 4.5,
        stock: 12,
        stockStatus: "instock",
        image: "./images/gold_bangle.png"
    },
    {
        id: 35,
        name: "Traditional Polki Kada Bangle 30g",
        category: "bangles",
        weight: 30,
        karat: "22K",
        makingCharge: 12,
        emoji: "💫",
        desc: "Luxury single openable Kada bangle decorated with raw Polki stones and bordered by fine red velvet backing and gold wires.",
        rating: 4.9,
        stock: 3,
        stockStatus: "lowstock",
        image: "./images/gold_bangle.png",
        isPopular: true
    },

    // --- Extra premium collection ---
    {
        id: 36,
        name: "Grand Royal Gold Rajwadi Choker 95g",
        category: "necklaces",
        weight: 95,
        karat: "22K",
        makingCharge: 14,
        emoji: "📿",
        desc: "The pinnacle of royal craftsmanship. Grand bridal Rajwadi necklace lined with rich antique carvings, gold pearls, and Kundan stones.",
        rating: 5.0,
        stock: 1,
        stockStatus: "lowstock",
        image: "./images/gold_necklace.png",
        isPopular: true
    },
    {
        id: 37,
        name: "Handcrafted Jali Kada Bangle 25g",
        category: "bangles",
        weight: 25,
        karat: "22K",
        makingCharge: 10,
        emoji: "💫",
        desc: "Beautiful single gold bangle featuring high quality traditional Jali (grid) cutouts and robust snap lock closure.",
        rating: 4.6,
        stock: 15,
        stockStatus: "instock",
        image: "./images/gold_bangle.png"
    },
    {
        id: 38,
        name: "Marquise Diamond Gold Band 5g",
        category: "rings",
        weight: 5,
        karat: "22K",
        makingCharge: 11,
        emoji: "💍",
        desc: "Sophisticated modern ring with 3 marquise cut micro diamonds lined beautifully inside robust gold claws.",
        rating: 4.7,
        stock: 0,
        stockStatus: "outstock",
        image: "./images/gold_ring.png"
    },
    {
        id: 39,
        name: "Traditional Gold Jhumkas 12g",
        category: "earrings",
        weight: 12,
        karat: "22K",
        makingCharge: 9,
        emoji: "✨",
        desc: "Standard medium dome gold jhumka earrings featuring floral studs and micro golden chain danglers. High trust BIS standard.",
        rating: 4.8,
        stock: 22,
        stockStatus: "instock",
        image: "./images/gold_earrings.png"
    },
    {
        id: 40,
        name: "24K Sovereign Bullion Gold Bar 10g",
        category: "coins",
        weight: 10,
        karat: "24K",
        makingCharge: 1.8,
        emoji: "🪙",
        desc: "Pure Swiss minted 24K gold investment bar. Comes individually serial numbered in tamper-proof security card casing.",
        rating: 4.9,
        stock: 40,
        stockStatus: "instock",
        image: "./images/gold_coin.png",
        isPopular: true
    }
];

// ===== REVIEWS GENERATION UTILITY =====
const reviewDatabase = {
    coins: [
        { stars: "⭐⭐⭐⭐⭐", text: "Completely certified 999.9 pure gold with serial number. Very high trust!", name: "Rajesh K." },
        { stars: "⭐⭐⭐⭐⭐", text: "Low making charges, excellent packaging. Swiss mint quality is top notch.", name: "Vikas Patil" }
    ],
    necklaces: [
        { stars: "⭐⭐⭐⭐⭐", text: "Bought this bridal necklace for my daughter. Intricate detailing, absolutely magnificent!", name: "Anjali S." },
        { stars: "⭐⭐⭐⭐⭐", text: "The filigree craftsmanship is stellar. High trust in government hallmark stamp.", name: "Harpreet S." }
    ],
    rings: [
        { stars: "⭐⭐⭐⭐⭐", text: "Solitaire diamond is extremely clear and sparkles beautifully in the gold claw.", name: "kadamoni" },
        { stars: "⭐⭐⭐⭐⭐", text: "Polished to perfection, comfortable daily ring. Excellent support helpline.", name: "Devender G." }
    ],
    earrings: [
        { stars: "⭐⭐⭐⭐⭐", text: "Exquisite Jhumkas! The gold pearls give an amazingly elegant bridal look.", name: "Spoorthi" },
        { stars: "⭐⭐⭐⭐⭐", text: "Matches my necklace set perfectly. Very robust screw-backs so no fear of losing them.", name: "Srinivas Rao" }
    ],
    bangles: [
        { stars: "⭐⭐⭐⭐⭐", text: "Solid weight and highly polished. The antique Nakshi carvings are incredible.", name: "Manpreet S." },
        { stars: "⭐⭐⭐⭐⭐", text: "Wave cuts reflect light like diamonds. Exceptional bridal bangles.", name: "Ranganathan" }
    ]
};

const defaultReviews = [
    { stars: "⭐⭐⭐⭐⭐", text: "Extremely pleased with safe armored secure delivery and certified gold hallmark.", name: "Royal Customer" }
];

// ===== STATE CONTROL =====
let liveRate24k = 7450;
let liveRate22k = 6830;

let currentCategory = "all";
let currentSearch = "";
let currentSort = "default";
let cart = JSON.parse(localStorage.getItem("gold_cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("gold_wishlist")) || [];
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

const invoiceGoldValEl = document.getElementById("invoiceGoldVal");
const invoiceMakingValEl = document.getElementById("invoiceMakingVal");
const invoiceGstValEl = document.getElementById("invoiceGstVal");

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
const checkoutLayout = document.getElementById("checkoutLayout");
const checkoutTitle = document.getElementById("checkoutTitle");

// Live Rate display elements
const rate24kValEl = document.getElementById("rate24kVal");
const rate22kValEl = document.getElementById("rate22kVal");
const trend24kEl = document.getElementById("trend24k");
const trend22kEl = document.getElementById("trend22k");

// Calculator elements
const calcWeightEl = document.getElementById("calcWeight");
const calcPurityEl = document.getElementById("calcPurity");
const calcResultEl = document.getElementById("calcResult");

// ===== DYNAMIC PRICING ENGINE =====
function getDynamicPrices(p) {
    const rate = p.karat === "24K" ? liveRate24k : liveRate22k;
    const baseVal = Math.round(p.weight * rate);
    const makingVal = Math.round(baseVal * (p.makingCharge / 100));
    const gstVal = Math.round((baseVal + makingVal) * 0.03);
    const total = baseVal + makingVal + gstVal;

    // Simulate standard retail showroom pricing (higher rates and making charges)
    const oldRate = rate * 1.04;
    const oldBaseVal = Math.round(p.weight * oldRate);
    const oldMakingVal = Math.round(oldBaseVal * ((p.makingCharge + 6) / 100));
    const oldGstVal = Math.round((oldBaseVal + oldMakingVal) * 0.03);
    const oldTotal = oldBaseVal + oldMakingVal + oldGstVal;

    return {
        baseVal,
        makingVal,
        gstVal,
        total,
        oldTotal
    };
}

// ===== REAL-TIME GOLD RATE TICKER SIMULATION =====
function startLiveGoldTicker() {
    setInterval(() => {
        // Fluctuate price slightly between -₹15 and +₹15
        const change24k = Math.floor(Math.random() * 31) - 15;
        const change22k = Math.floor(Math.random() * 25) - 12;

        liveRate24k += change24k;
        liveRate22k += change22k;

        // Render Rates & Trends in header
        rate24kValEl.textContent = `₹${liveRate24k.toLocaleString("en-IN")}/g`;
        rate22kValEl.textContent = `₹${liveRate22k.toLocaleString("en-IN")}/g`;

        if (change24k >= 0) {
            trend24kEl.textContent = "▲";
            trend24kEl.style.color = "#4ade80";
        } else {
            trend24kEl.textContent = "▼";
            trend24kEl.style.color = "#f87171";
        }

        if (change22k >= 0) {
            trend22kEl.textContent = "▲";
            trend22kEl.style.color = "#4ade80";
        } else {
            trend22kEl.textContent = "▼";
            trend22kEl.style.color = "#f87171";
        }

        // Live update Calculator estimate
        updateEstimator();

        // Dynamically update product catalog card listings in real-time
        renderProducts();

        // Update Cart price totals dynamically in drawer based on live rates!
        updateCartTotal();
    }, 8000);
}

// Live price estimator logic
function updateEstimator() {
    if (!calcWeightEl || !calcPurityEl || !calcResultEl) return;
    const weight = Math.max(1, Number(calcWeightEl.value) || 0);
    const purity = calcPurityEl.value;
    const rate = purity === "24k" ? liveRate24k : liveRate22k;
    const base = weight * rate;
    const making = base * 0.05; // Standard 5% making charge
    const gst = (base + making) * 0.03;
    const total = Math.round(base + making + gst);
    calcResultEl.textContent = `₹${total.toLocaleString("en-IN")}`;
}

if (calcWeightEl && calcPurityEl) {
    calcWeightEl.addEventListener("input", updateEstimator);
    calcPurityEl.addEventListener("change", updateEstimator);
}

// ===== RENDER CATALOG SYSTEM =====
function renderProducts() {
    let list = products.filter(p => {
        const matchCat = currentCategory === "all" || p.category === currentCategory;
        const matchSearch = p.name.toLowerCase().includes(currentSearch.toLowerCase()) || 
                            p.desc.toLowerCase().includes(currentSearch.toLowerCase()) ||
                            p.karat.toLowerCase().includes(currentSearch.toLowerCase());
        return matchCat && matchSearch;
    });

    if (currentSort === "low") {
        list.sort((a, b) => getDynamicPrices(a).total - getDynamicPrices(b).total);
    } else if (currentSort === "high") {
        list.sort((a, b) => getDynamicPrices(b).total - getDynamicPrices(a).total);
    } else if (currentSort === "discount") {
        list.sort((a, b) => {
            const pA = getDynamicPrices(a);
            const pB = getDynamicPrices(b);
            const discA = (pA.oldTotal - pA.total) / pA.oldTotal;
            const discB = (pB.oldTotal - pB.total) / pB.oldTotal;
            return discB - discA;
        });
    } else if (currentSort === "weight") {
        list.sort((a, b) => a.weight - b.weight);
    }

    productGrid.innerHTML = "";

    if (list.length === 0) {
        productGrid.innerHTML = `<p style="grid-column:1/-1; text-align:center; color:var(--text-muted); padding:60px; font-size:1.1rem; font-weight:500;">No exquisite gold products match your search or filters.</p>`;
        return;
    }

    list.forEach(p => {
        const prices = getDynamicPrices(p);
        const discount = Math.round(((prices.oldTotal - prices.total) / prices.oldTotal) * 100);
        if (!cardQuantities[p.id]) cardQuantities[p.id] = 1;

        const isWished = wishlist.includes(p.id);
        const stockLabels = {
            instock: "BIS Hallmarked",
            lowstock: "Limited Mint",
            outstock: "Sold Out"
        };

        const imageSrc = p.image || "./images/gold_coin.png";

        const card = document.createElement("article");
        card.className = "product-card";
        card.setAttribute("tabindex", "0");
        card.innerHTML = `
          <div class="badge-stock ${p.stockStatus}">${stockLabels[p.stockStatus]}</div>
          <div class="karat-badge">${p.karat} Gold</div>
          <button class="wishlist-heart-btn" title="Add to Wishlist" aria-label="Add to Wishlist">${isWished ? "❤️" : "🤍"}</button>
          
          <div class="product-img" aria-hidden="true">
              <img src="${imageSrc}" alt="${p.name}" style="height: 160px; object-fit: contain; width: 100%; transition: var(--transition);" />
          </div>
          
          <h3 class="product-name">${p.name}</h3>
          
          <div class="product-info-row">
            <span>⚖️ Net Weight: ${p.weight}g</span>
            <span>Making: ${p.makingCharge}%</span>
          </div>

          <div class="product-price">
            <span class="price-new">₹${prices.total.toLocaleString("en-IN")}</span>
            <span class="price-old">₹${prices.oldTotal.toLocaleString("en-IN")}</span>
            <span class="f-assured-badge" title="Flipkart Assured High Quality Gold">
                <span class="f-assured-text">f-assured</span><span class="f-assured-plus">★</span>
            </span>
          </div>
          <div class="discount">${discount}% Showroom Saving</div>

          <div class="card-buttons">
            <button class="add-cart-btn" ${p.stockStatus === "outstock" ? "disabled" : ""}>
              ${p.stockStatus === "outstock" ? "No Stock" : "Add to Bag"}
            </button>
            <button class="inline-details-btn">Details</button>
          </div>
        `;

        // Wishlist trigger
        card.querySelector(".wishlist-heart-btn").onclick = (e) => {
            e.stopPropagation();
            toggleWishlist(p.id);
        };

        // Add to cart trigger
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
    const prices = getDynamicPrices(p);
    const discount = Math.round(((prices.oldTotal - prices.total) / prices.oldTotal) * 100);
    const categoryReviews = reviewDatabase[p.category] || defaultReviews;
    const isWished = wishlist.includes(p.id);

    let reviewsHtml = '';
    categoryReviews.forEach(rev => {
        reviewsHtml += `<div class="review">${rev.stars} "${rev.text}" - <strong>${rev.name}</strong></div>`;
    });

    // Close other panels
    cartSidebar.classList.add("hidden");
    wishlistSidebar.classList.add("hidden");
    detailsSidebar.setAttribute("aria-hidden", "false");

    const imageSrc = p.image || "./images/gold_coin.png";

    detailsBody.innerHTML = `
    <div class="product-img" aria-hidden="true" style="padding: 15px; background: white;">
        <img src="${imageSrc}" alt="${p.name}" style="max-height: 240px; object-fit: contain; width: 100%;" />
    </div>
    <div>
      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap: 10px;">
        <h2 style="font-size: 1.4rem;">${p.name}</h2>
        <button id="sidebarHeartBtn" style="background:none; border:none; font-size:1.8rem; cursor:pointer;" aria-label="Toggle Wishlist">${isWished ? "❤️" : "🤍"}</button>
      </div>
      
      <div style="margin-top: 8px; display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
        <span style="background: var(--primary); color: var(--accent); padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; font-weight: 800; border: 1px solid rgba(212, 175, 55, 0.4);">${p.karat} Gold purity</span>
        <span class="f-assured-badge" style="margin-left: 0;">
            <span class="f-assured-text">f-assured</span><span class="f-assured-plus">★</span>
        </span>
      </div>

      <div class="product-price" style="margin:16px 0; align-items: center;">
        <span class="price-new" style="font-size:1.7rem; color:var(--primary); font-weight:800; font-family:var(--font-heading);">₹${prices.total.toLocaleString("en-IN")}</span>
        <span class="price-old" style="text-decoration:line-through; color:var(--text-muted); margin:0 12px; font-size: 1.1rem;">₹${prices.oldTotal.toLocaleString("en-IN")}</span>
        <span class="discount" style="color:var(--success); font-weight:700; font-size: 0.95rem; margin-bottom:0;">${discount}% Showroom Saving</span>
      </div>

      <!-- Live Detailed Invoice Breakdown preview -->
      <div class="details-invoice-preview">
        <h4>📄 Dynamic Price Breakdown (Live Rate)</h4>
        <div class="invoice-preview-row">
            <span>Base Gold Price (${p.weight}g @ ${p.karat}):</span>
            <strong>₹${prices.baseVal.toLocaleString("en-IN")}</strong>
        </div>
        <div class="invoice-preview-row">
            <span>Making Charges (${p.makingCharge}%):</span>
            <strong>₹${prices.makingVal.toLocaleString("en-IN")}</strong>
        </div>
        <div class="invoice-preview-row">
            <span>Govt. Jewellery GST Tax (3%):</span>
            <strong>₹${prices.gstVal.toLocaleString("en-IN")}</strong>
        </div>
        <div class="invoice-preview-row total-row">
            <span>Total Valuation Price:</span>
            <strong>₹${prices.total.toLocaleString("en-IN")}</strong>
        </div>
      </div>
      
      <p style="color:var(--text-muted); line-height:1.6; margin:16px 0; font-size: 0.92rem;">${p.desc}</p>
      
      <div class="card-qty-row" style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; background: var(--primary-light); padding: 12px 18px; border-radius: var(--radius-sm); border: 1px dashed var(--accent);">
        <span style="font-weight: 700; color: var(--primary); font-size: 0.9rem;">Select Quantity:</span>
        <div class="card-qty-controls" style="display: flex; align-items: center; gap: 14px;">
          <button id="sidebarDecBtn" style="width: 32px; height: 32px; font-weight: 700; border: 1px solid var(--primary); background: white; color: var(--primary); cursor: pointer; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 1.1rem;">-</button>
          <span id="sidebarQtyDisplay" style="font-weight: 700; font-size: 1.1rem; min-width: 20px; text-align: center;">${cardQuantities[p.id]}</span>
          <button id="sidebarIncBtn" style="width: 32px; height: 32px; font-weight: 700; border: 1px solid var(--primary); background: white; color: var(--primary); cursor: pointer; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 1.1rem;">+</button>
        </div>
      </div>

      <div class="sidebar-action-buttons">
        <button class="add-cart-btn" id="sidebarAdd" style="padding:14px; font-size: 0.95rem;" ${p.stockStatus === "outstock" ? "disabled" : ""}>
          ${p.stockStatus === "outstock" ? "Out of Stock" : "Add Selected to Bag"}
        </button>
        <button class="buy-now" id="sidebarBuy" ${p.stockStatus === "outstock" ? "disabled" : ""}>Secure Buy Now</button>
        <button class="back-btn" id="sidebarBack">← Return to Ornaments</button>
      </div>

      <div class="reviews">
        <h4>Recent Verified Custodian Reviews</h4>
        ${reviewsHtml}
      </div>
    </div>
  `;

    // Sidebar Quantity controls
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

    // Sidebar Wishlist Toggle
    document.getElementById("sidebarHeartBtn").onclick = () => {
        toggleWishlist(p.id);
        openDetailsSidebar(p); // re-render to update heart icon
    };

    // Add selected to cart
    document.getElementById("sidebarAdd").onclick = () => {
        addToCart(p.id, cardQuantities[p.id]);
        cardQuantities[p.id] = 1; // reset default
    };

    // Buy now triggers cart instantly
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

// ===== WISHLIST DRAWER LOGIC =====
function toggleWishlist(id) {
    const idx = wishlist.indexOf(id);
    if (idx > -1) {
        wishlist.splice(idx, 1);
    } else {
        wishlist.push(id);
    }
    localStorage.setItem("gold_wishlist", JSON.stringify(wishlist));
    updateWishlistCount();
    renderProducts();
    renderWishlist();
}

function updateWishlistCount() {
    wishlistCountEl.textContent = wishlist.length;
}

function renderWishlist() {
    wishlistItemsEl.innerHTML = "";
    if (wishlist.length === 0) {
        wishlistItemsEl.innerHTML = `<p class="empty-cart">Your gold wishlist is currently empty. Star items to track them here!</p>`;
        return;
    }

    wishlist.forEach(id => {
        const p = products.find(prod => prod.id === id);
        if (!p) return;

        const prices = getDynamicPrices(p);
        const itemEl = document.createElement("div");
        itemEl.className = "wishlist-item";
        itemEl.innerHTML = `
            <div class="wishlist-item-emoji">${p.emoji}</div>
            <div class="wishlist-item-info">
                <h4>${p.name}</h4>
                <p>₹${prices.total.toLocaleString("en-IN")} <span style="font-size:0.75rem; color:var(--text-muted); font-weight:normal;">(${p.weight}g)</span></p>
                <div class="wishlist-action-row">
                    <button class="wishlist-to-cart-btn" ${p.stockStatus === "outstock" ? "disabled" : ""}>Move to Bag</button>
                </div>
            </div>
            <button class="remove-btn" aria-label="Remove item">×</button>
        `;

        // Move to cart trigger
        itemEl.querySelector(".wishlist-to-cart-btn").onclick = () => {
            addToCart(p.id, 1);
            toggleWishlist(p.id);
        };

        // Remove from wishlist trigger
        itemEl.querySelector(".remove-btn").onclick = () => {
            toggleWishlist(p.id);
        };

        wishlistItemsEl.appendChild(itemEl);
    });
}

// Open Wishlist
wishlistNavBtn.onclick = () => {
    cartSidebar.classList.add("hidden");
    detailsSidebar.classList.add("hidden");
    wishlistSidebar.classList.remove("hidden");
    wishlistSidebar.setAttribute("aria-hidden", "false");
    renderWishlist();
};

closeWishlist.onclick = () => {
    wishlistSidebar.classList.add("hidden");
    wishlistSidebar.setAttribute("aria-hidden", "true");
};

// ===== SHOPPING CART DRAWER LOGIC =====
function addToCart(id, qty) {
    const item = cart.find(i => i.productId === id);
    if (item) {
        item.quantity += qty;
    } else {
        cart.push({ productId: id, quantity: qty });
    }
    localStorage.setItem("gold_cart", JSON.stringify(cart));
    updateCartCount();
    renderCart();
    updateCartTotal();

    // Visual trigger: open the cart sidebar instantly so user sees their gold added!
    cartSidebar.classList.remove("hidden");
    cartSidebar.setAttribute("aria-hidden", "false");
    wishlistSidebar.classList.add("hidden");
    detailsSidebar.classList.add("hidden");
}

function updateCartCount() {
    const totalQty = cart.reduce((acc, curr) => acc + curr.quantity, 0);
    cartCountEl.textContent = totalQty;
}

function renderCart() {
    cartItemsEl.innerHTML = "";
    if (cart.length === 0) {
        cartItemsEl.innerHTML = `<p class="empty-cart">Your shopping bag is currently empty. Explore our exquisite gold catalog!</p>`;
        return;
    }

    cart.forEach(item => {
        const p = products.find(prod => prod.id === item.productId);
        if (!p) return;

        const prices = getDynamicPrices(p);
        const itemEl = document.createElement("div");
        itemEl.className = "cart-item";
        itemEl.innerHTML = `
            <div class="cart-item-emoji">${p.emoji}</div>
            <div class="cart-item-info">
                <h4>${p.name}</h4>
                <p>₹${prices.total.toLocaleString("en-IN")}</p>
                <div class="qty-controls">
                    <button class="dec-qty">-</button>
                    <span>${item.quantity}</span>
                    <button class="inc-qty">+</button>
                </div>
            </div>
            <button class="remove-btn" aria-label="Remove item">×</button>
        `;

        // Inc quantity trigger
        itemEl.querySelector(".inc-qty").onclick = () => {
            item.quantity++;
            localStorage.setItem("gold_cart", JSON.stringify(cart));
            updateCartCount();
            renderCart();
            updateCartTotal();
        };

        // Dec quantity trigger
        itemEl.querySelector(".dec-qty").onclick = () => {
            if (item.quantity > 1) {
                item.quantity--;
            } else {
                cart = cart.filter(i => i.productId !== item.productId);
            }
            localStorage.setItem("gold_cart", JSON.stringify(cart));
            updateCartCount();
            renderCart();
            updateCartTotal();
        };

        // Remove trigger
        itemEl.querySelector(".remove-btn").onclick = () => {
            cart = cart.filter(i => i.productId !== item.productId);
            localStorage.setItem("gold_cart", JSON.stringify(cart));
            updateCartCount();
            renderCart();
            updateCartTotal();
        };

        cartItemsEl.appendChild(itemEl);
    });
}

function updateCartTotal() {
    let grandBase = 0;
    let grandMaking = 0;
    let grandGst = 0;
    let grandTotal = 0;

    cart.forEach(item => {
        const p = products.find(prod => prod.id === item.productId);
        if (!p) return;
        const prices = getDynamicPrices(p);
        grandBase += prices.baseVal * item.quantity;
        grandMaking += prices.makingVal * item.quantity;
        grandGst += prices.gstVal * item.quantity;
        grandTotal += prices.total * item.quantity;
    });

    // Render detailed invoice values in Cart Footer
    if (invoiceGoldValEl) invoiceGoldValEl.textContent = grandBase.toLocaleString("en-IN");
    if (invoiceMakingValEl) invoiceMakingValEl.textContent = grandMaking.toLocaleString("en-IN");
    if (invoiceGstValEl) invoiceGstValEl.textContent = grandGst.toLocaleString("en-IN");
    cartTotalEl.textContent = grandTotal.toLocaleString("en-IN");

    // Checkout Modal amounts
    if (checkoutTotalAmount) checkoutTotalAmount.textContent = grandTotal.toLocaleString("en-IN");

    // Enable/Disable Checkout Button
    if (cartCheckoutBtn) {
        cartCheckoutBtn.disabled = cart.length === 0;
    }
}

// Open Cart
cartBtn.onclick = () => {
    wishlistSidebar.classList.add("hidden");
    detailsSidebar.classList.add("hidden");
    cartSidebar.classList.remove("hidden");
    cartSidebar.setAttribute("aria-hidden", "false");
    renderCart();
    updateCartTotal();
};

closeCart.onclick = () => {
    cartSidebar.classList.add("hidden");
    cartSidebar.setAttribute("aria-hidden", "true");
};

// ===== SECURE CHECKOUT & PAYMENT MODAL FLOW =====
cartCheckoutBtn.onclick = () => {
    cartSidebar.classList.add("hidden");
    checkoutModal.classList.remove("hidden");
};

closeCheckout.onclick = () => {
    checkoutModal.classList.add("hidden");
};

// On Submit: Show beautiful secure success billing state!
checkoutForm.onsubmit = (e) => {
    e.preventDefault();

    if (!checkoutForm.checkValidity()) {
        checkoutForm.reportValidity();
        return;
    }

    const name = document.getElementById("checkoutName").value;
    const phone = document.getElementById("checkoutPhone").value;
    const address = document.getElementById("checkoutAddress").value;

    const totalValStr = cartTotalEl.textContent;
    const orderIdStr = "OMSAI-" + Math.floor(100000 + Math.random() * 900000);

    // Update Title & content area to a jaw-dropping premium success receipt screen!
    checkoutTitle.innerHTML = `🎉 Order Successful! — <span>Om Sri Sai Gold Palace</span>`;
    checkoutLayout.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 20px 0;">
            <div class="success-checkmark">✨</div>
            <h3 style="font-size: 1.8rem; color: var(--primary); margin-bottom: 8px;">Order Confirmed & Securely Vaulted!</h3>
            <p style="color: var(--text-muted); font-size: 1rem; margin-bottom: 20px;">
                Thank you for your business, <strong>${name}</strong>. Your shipment has been fully insured and logged under Order ID: <strong style="color:var(--accent); background:var(--primary); padding:3px 8px; border-radius:6px;">${orderIdStr}</strong>.
            </p>
            <div style="background: var(--primary-light); border: 1px dashed var(--accent); border-radius: var(--radius-md); padding: 24px; text-align: left; max-width: 550px; margin: 0 auto; box-shadow: var(--shadow-sm);">
                <h4 style="border-bottom: 2px solid var(--accent); padding-bottom: 6px; color: var(--primary); margin-bottom: 12px; font-size: 1.1rem; display: flex; justify-content: space-between;">
                    <span>Official Insured Invoice Receipt</span>
                    <span style="font-size: 0.8rem; opacity: 0.75; font-weight: normal; color: var(--text-muted);">Dated: 2026-05-30</span>
                </h4>
                <p style="margin-bottom: 6px; font-size: 0.95rem;">🤵 <strong>Recipient:</strong> ${name}</p>
                <p style="margin-bottom: 6px; font-size: 0.95rem;">📞 <strong>UPI Contact:</strong> ${phone}</p>
                <p style="margin-bottom: 12px; font-size: 0.95rem;">📍 <strong>Delivery Vault Address:</strong> ${address}</p>
                <table style="width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 0.9rem;">
                    <tr style="border-bottom: 1px solid var(--border-color); font-weight: bold; color: var(--primary);">
                        <td style="padding: 6px 0;">Gold Ornament / Coin Details</td>
                        <td style="text-align: right; padding: 6px 0;">Final Certified Price</td>
                    </tr>
                    ${cart.map(item => {
                        const p = products.find(prod => prod.id === item.productId);
                        const prices = getDynamicPrices(p);
                        return `
                            <tr style="border-bottom: 1px solid #f1f3f1;">
                                <td style="padding: 6px 0;">${p.name} <span style="font-size:0.75rem; color:var(--text-muted);">(${p.weight}g, ${p.karat})</span> x ${item.quantity}</td>
                                <td style="text-align: right; padding: 6px 0;">₹${(prices.total * item.quantity).toLocaleString("en-IN")}</td>
                            </tr>
                        `;
                    }).join('')}
                    <tr style="font-weight: 800; font-size: 1.15rem; color: var(--primary);">
                        <td style="padding-top: 12px;">Total Payable Paid:</td>
                        <td style="text-align: right; padding-top: 12px; color: var(--primary);">₹${totalValStr}</td>
                    </tr>
                </table>
                <div style="margin-top: 16px; font-size: 0.75rem; color: var(--text-muted); text-align: center; border-top: 1px dashed var(--border-color); padding-top: 10px; line-height: 1.4;">
                    🛡️ This gold invoice has been certified by the Indian Bureau of Standards (BIS Hallmark registry) and is fully backed by transit vault indemnity insurance.
                </div>
            </div>
            <button class="submit-payment-btn" id="finishCheckoutBtn" style="margin-top: 24px; max-width: 250px; display: block; margin-left: auto; margin-right: auto;">Continue Shopping</button>
        </div>
    `;

    // Clear cart
    cart = [];
    localStorage.removeItem("gold_cart");
    updateCartCount();
    updateCartTotal();

    // Hook click back to store
    document.getElementById("finishCheckoutBtn").onclick = () => {
        // Reset checkout modal back to normal form state in case they open it again
        checkoutModal.classList.add("hidden");
        // Reload page to refresh DOM structure cleanly
        location.reload();
    };
};

// ===== CATEGORIES ACTION LOGIC =====
const catButtons = document.querySelectorAll(".cat-btn");
catButtons.forEach(btn => {
    btn.onclick = () => {
        catButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentCategory = btn.getAttribute("data-category");
        renderProducts();
    };
});

// ===== SEARCH ACTIONS =====
function executeSearch() {
    currentSearch = searchInput.value.trim();
    renderProducts();
}

searchBtn.onclick = executeSearch;
searchInput.onkeyup = (e) => {
    if (e.key === "Enter") {
        executeSearch();
    } else {
        currentSearch = searchInput.value.trim();
        renderProducts(); // Dynamic search as you type!
    }
};

// ===== SORT ACTIONS =====
sortSelect.onchange = () => {
    currentSort = sortSelect.value;
    renderProducts();
};

// ===== FLIPKART BANNER CAROUSEL SYSTEM =====
const slides = document.getElementById("slides");
const slideItems = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevSlide");
const nextBtn = document.getElementById("nextSlide");
let slideIdx = 0;
let autoSlideInterval;

function showSlide(index) {
    if (index >= slideItems.length) slideIdx = 0;
    else if (index < 0) slideIdx = slideItems.length - 1;
    else slideIdx = index;

    slides.style.transform = `translateX(-${slideIdx * 100}%)`;

    slideItems.forEach((slide, i) => {
        if (i === slideIdx) {
            slide.classList.add("active-slide");
        } else {
            slide.classList.remove("active-slide");
        }
    });
}

function nextSlide() {
    showSlide(slideIdx + 1);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

if (prevBtn && nextBtn) {
    prevBtn.onclick = () => {
        stopAutoSlide();
        showSlide(slideIdx - 1);
        startAutoSlide();
    };

    nextBtn.onclick = () => {
        stopAutoSlide();
        showSlide(slideIdx + 1);
        startAutoSlide();
    };
}

// ===== INITIAL START ENGINE =====
window.onload = () => {
    updateCartCount();
    updateWishlistCount();
    updateEstimator();
    renderProducts();
    startLiveGoldTicker();
    startAutoSlide();
};
