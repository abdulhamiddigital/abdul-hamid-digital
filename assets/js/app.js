/* ====== UBAH DATA TOKO DI SINI ====== */
const CONFIG={
  nama:"ABDUL HAMID DIGITAL",
  wa:"6281234567890",            // ganti: nomor WhatsApp format 62xxxxxxxxxx (tanpa + dan 0 depan)
  email:"email@contoh.com",      // ganti dengan email Anda
  saweria:"https://saweria.co/abdulhamiddigital",
  shopeepay:"https://app.u.shopeepay.co.id/u/4Dya9vK9kf9kvV1spJiap",
  sosmed:[["YouTube","#"],["Instagram","#"],["TikTok","#"]]
};
const rp=n=>n?"Rp"+Number(n).toLocaleString("id-ID"):"Gratis";
const wa=t=>`https://wa.me/${CONFIG.wa}?text=${encodeURIComponent(t)}`;
const pages=[["index.html","Beranda"],["toko.html","Toko"],["preorder.html","Pre-Order"],["tentang.html","Tentang & CV"],["donasi.html","Donasi"]];
const here=location.pathname.split("/").pop()||"index.html";
document.body.insertAdjacentHTML("afterbegin",`<header class="top"><div class="wrap"><a class="logo" href="index.html">ABDUL HAMID <b>DIGITAL</b></a><nav>${pages.map(([u,t])=>`<a href="${u}" class="${u===here?"on":""}">${t}</a>`).join("")}</nav></div></header>`);
document.body.insertAdjacentHTML("beforeend",`<footer><div class="wrap"><span>© ${new Date().getFullYear()} ${CONFIG.nama}</span><span><a href="${wa("Halo, saya ingin konsultasi.")}">WhatsApp</a> · <a href="mailto:${CONFIG.email}">Email</a> ${CONFIG.sosmed.map(([n,u])=>`· <a href="${u}">${n}</a>`).join(" ")}</span></div></footer>`);
async function loadProducts(){try{return await (await fetch("data/products.json")).json()}catch(e){return[]}}
function card(p){const pre=p.status==="preorder";
 return `<article class="card"><span class="badge">${p.format}</span><h3>${p.nama}</h3><p>${p.deskripsi}</p><div class="meta">${p.kategori}${pre?" · Pre-order":""}</div><div class="price">${rp(p.harga)}</div><a class="btn wa" target="_blank" rel="noopener" href="${wa(`Halo, saya mau ${pre?"pre-order":"beli"}: ${p.nama} (${rp(p.harga)}).`)}">${pre?"Pre-order":"Beli"} lewat WhatsApp</a></article>`}
