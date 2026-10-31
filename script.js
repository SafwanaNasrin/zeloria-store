const WHATSAPP_NUMBER="917012455456";
const INSTAGRAM_URL="https://www.instagram.com/_zeloria.store_/";
const products=[
{name:"Daisy Pendant Necklace",category:"Necklaces",price:"₹899",tag:"NECKLACES",image:"images/product-necklace.jpg"},
{name:"Pearl Bloom Earrings",category:"Earrings",price:"₹799",tag:"EARRINGS",image:"images/product-earrings.jpg"},
{name:"Floral Chain Bracelet",category:"Bracelets",price:"₹999",tag:"BRACELETS",image:"images/product-bracelet.jpg"},
{name:"Leaf Crystal Ring",category:"Rings",price:"₹699",tag:"RINGS",image:"images/product-ring.jpg"},
{name:"Butterfly Charm Anklet",category:"Anklets",price:"₹899",tag:"ANKLETS",image:"images/product-anklet.jpg"},
{name:"Classic Floral Set",category:"Sets",price:"₹1,299",tag:"JEWELLERY SETS",image:"images/product-set.jpg"}
];
let active="All";const grid=document.getElementById("productGrid"),search=document.getElementById("search");
function render(){const q=search.value.toLowerCase();const items=products.filter(p=>(active==="All"||p.category===active)&&(p.name.toLowerCase().includes(q)||p.category.toLowerCase().includes(q)));grid.innerHTML=items.length?items.map(p=>`<article class="product-card"><div class="product-info"><span class="tag">${p.tag}</span><h3>${p.name}</h3><p>${p.price}</p></div><img src="${p.image}" alt="${p.name}" loading="lazy"></article>`).join(""):"<p>No matching products found.</p>"}
document.querySelectorAll(".filter").forEach(b=>b.addEventListener("click",()=>{document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");active=b.dataset.filter;render()}));
document.querySelectorAll("[data-filter]").forEach(a=>a.addEventListener("click",()=>{active=a.dataset.filter;document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b.dataset.filter===active));render()}));
search.addEventListener("input",render);document.getElementById("menuToggle").addEventListener("click",()=>document.getElementById("nav").classList.toggle("open"));
const wa="https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent("Hi ZELORIA! I would like to enquire about your jewellery collection.");document.getElementById("whatsappLink").href=wa;document.getElementById("whatsappFloat").href=wa;document.getElementById("instagramLink").href=INSTAGRAM_URL;render();
