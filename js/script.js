
/* =========================================
VOID JAVASCRIPT
========================================= */


// ========================================
// CURSOR GLOW
// ========================================

const cursor = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (event) => {

cursor.animate(

{
left: `${event.clientX}px`,
top: `${event.clientY}px`
},

{
duration: 500,
fill: "forwards"
}

);

});


// ========================================
// MAGNETIC BUTTONS
// ========================================

const magneticButtons =
document.querySelectorAll(".magnetic");

magneticButtons.forEach(button => {

button.addEventListener("mousemove", (event) => {

const rect =
button.getBoundingClientRect();

const x =
event.clientX - rect.left - rect.width / 2;

const y =
event.clientY - rect.top - rect.height / 2;

button.style.transform =
`translate(${x * 0.15}px, ${y * 0.15}px)`;

});


button.addEventListener("mouseleave", () => {

button.style.transform =
"translate(0,0)";

});

});


// ========================================
// SCROLL REVEAL
// ========================================

const revealElements =
document.querySelectorAll(".reveal");


const observer =
new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if (entry.isIntersecting) {

entry.target.classList.add(
"visible"
);

}

});

},

{
threshold: 0.15
}

);


revealElements.forEach(element => {

observer.observe(element);

});


// ========================================
// PRODUCT MODAL
// ========================================

const modal =
document.getElementById("productModal");

const modalClose =
document.getElementById("modalClose");

const modalTitle =
document.getElementById("modalTitle");

const modalDescription =
document.getElementById("modalDescription");

const modalPrice =
document.getElementById("modalPrice");


const products = {

headphones: {

title: "VOID HEADPHONES",

description:
"Immersive wireless audio with adaptive noise cancellation, spatial sound and a futuristic titanium-inspired design.",

price: "R2,499"

},

laptop: {

title: "VOID LAPTOP X",

description:
"A high-performance laptop designed for creators, developers and people who demand serious power.",

price: "R24,999"

},

watch: {

title: "VOID WATCH",

description:
"A minimal smart wearable that brings your notifications, health data and digital life directly to your wrist.",

price: "R5,999"

},

keyboard: {

title: "VOID KEYS",

description:
"A precision mechanical keyboard with premium switches, customizable lighting and a minimal industrial design.",

price: "R1,499"

}

};


document
.querySelectorAll(".product-card")
.forEach(card => {

card.addEventListener("click", () => {

const product =
products[card.dataset.product];

if (!product) return;

modalTitle.textContent =
product.title;

modalDescription.textContent =
product.description;

modalPrice.textContent =
product.price;

modal.classList.add("active");

document.body.style.overflow =
"hidden";

});

});


modalClose.addEventListener("click", closeModal);


modal.addEventListener("click", (event) => {

if (event.target === modal) {

closeModal();

}

});


function closeModal() {

modal.classList.remove("active");

document.body.style.overflow =
"";

}


document.addEventListener("keydown", (event) => {

if (event.key === "Escape") {

closeModal();

}

});


// ========================================
// WATCH EXPERIENCE BUTTON
// ========================================

const watchButton =
document.getElementById("watchButton");


watchButton.addEventListener("click", () => {

document.body.style.transition =
"filter 1s ease";

document.body.style.filter =
"invert(.85) hue-rotate(180deg)";

setTimeout(() => {

document.body.style.filter =
"";

}, 1000);

});


// ========================================
// PARALLAX HERO
// ========================================

const hero =
document.querySelector(".hero");

const heroProduct =
document.querySelector(".hero-product");


document.addEventListener("mousemove", (event) => {

if (!heroProduct) return;

const x =
(window.innerWidth / 2 - event.clientX)
/ 50;

const y =
(window.innerHeight / 2 - event.clientY)
/ 50;

heroProduct.style.transform =
`translate(${x}px, ${y}px)`;

});


// ========================================
// PRODUCT CARD TILT
// ========================================

const cards =
document.querySelectorAll(".product-card");


cards.forEach(card => {

card.addEventListener("mousemove", (event) => {

const rect =
card.getBoundingClientRect();

const x =
event.clientX - rect.left;

const y =
event.clientY - rect.top;

const centerX =
rect.width / 2;

const centerY =
rect.height / 2;

const rotateX =
((y - centerY) / centerY) * -3;

const rotateY =
((x - centerX) / centerX) * 3;

card.style.transform =
`perspective(800px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

});


card.addEventListener("mouseleave", () => {

card.style.transform =
"";

});

});


// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

const navbar =
document.querySelector(".navbar");


window.addEventListener("scroll", () => {

if (window.scrollY > 50) {

navbar.style.background =
"rgba(5,5,7,.85)";

} else {

navbar.style.background =
"linear-gradient(rgba(5,5,7,.85), transparent)";

}

});


// ========================================
// STAGGER PRODUCT ANIMATION
// ========================================

const productCards =
document.querySelectorAll(".product-card");


productCards.forEach((card, index) => {

card.style.transitionDelay =
`${index * 80}ms`;

});
