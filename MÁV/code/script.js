// A teljes lista
const cuccok = [
  { nev: "Ellenőr II. - Ellenőr I.", kategoria: "parolin", ev: 1975,   kep: "parolin_pics/ellenor1_2.jpg" },
  { nev: "Felügyelő", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/felugyelo.jpg" },
  { nev: "Felvigyázó I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/felvigyazo1.jpg" },
  { nev: "Főfelügyelő", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fofelugyelo.jpg" },
  { nev: "Főintéző II. - Főintéző I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fointezo2_fointezo1.jpg" },
  { nev: "Főtanácsos II. - Főtanácsos I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fotanacsos1_2.jpg" },
  { nev: "Főtanácsos II. - Főtanácsos I. (fehér)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fotanacsos1_2_feher.jpg" },
  { nev: "Főtiszt", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fotiszt.jpg" },
  { nev: "Intéző II. - Intéző I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/intezo2_intezo1.jpg" },
  { nev: "Karszalag", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/Karszalag.jpg" },
  { nev: "Mérnök Főintéző I. / Titkár I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/mernok_fointezo1_titkar1.jpg" },
  { nev: "Mérnök Főintéző II. / Titkár II.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/mernok_fointezo2_titkar2.jpg" },
  { nev: "Mérnök Főtiszt / Fogalmazó", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/mernok_fotiszt_fogalmazo.jpg" },
  { nev: "Mérnök Intéző / Segédtitkár", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/mernok_intezo_segedtitkar.jpg" },
  { nev: "Munkás I. / Kezelő I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/munkas1 kezelo1.jpg" },
  { nev: "Munkás II. / Kezelő II.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/munkas2_kezelo2.jpg" },
  { nev: "Felvigyázó IV. / Felvigyázó III.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/felvi4_felvi3.jpg" },
  { nev: "Munkás IV. - Munkás III. / Kezelő IV. - Kezelő III.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/munkas4-3 kezelo4,3.jpg" },
  { nev: "Sapkajelvény", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/Sapkajelveny.jpg" },
  { nev: "Segédellenőr II. / Segédellenőr I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/segedellenor2_1.jpg" },
  { nev: "Segédfelvigyázó II. / Segédfelvigyázó I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/segedfel2_1.jpg" },
  { nev: "Segédfelvigyázó III.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/segedfel3.jpg" },
  { nev: "Segédfelvigyázó IV.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/segedfel4.jpg" },
  { nev: "Segédtiszt I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/segedtiszt1.jpg" },
  { nev: "Segédtiszt II.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/segedtiszt2.jpg" },
  { nev: "Segédtisztképző Tanf. Hallg.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/segedtisztkepzo.jpg" },
  { nev: "Segédmunkás II. / Segédmunkás I. / Segédkezelő II. / Segédkezelő I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/sm1,2_sk1,2.jpg" },
  { nev: "Segédmunkás III. / Segédkezelő II.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/sm3_sk3.jpg" },
  { nev: "Segédmunkás IV. / Segédkezelő IV.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/sm4_sk4.jpg" },
  { nev: "Szaktechnikus Főintéző I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/szaktechnikus_fointezo1.jpg" },
  { nev: "Szaktechnikus / Főintéző II.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/szaktechnikus_fointezo2.jpg" },
  { nev: "Szaktechnikus / Főtiszt", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/szaktechnikus_fotiszt.jpg" },
  { nev: "Szaktechnikus / Intéző", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/szaktechnikus_intezo.jpg" },
  { nev: "Tanácsos II. - Tanácsos I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/tanacsos1_tanacsos2.jpg" },
  { nev: "Tanácsos II. - Tanácsos I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/tanacsos2_tanacsos1.jpg" },
  { nev: "Tiszt", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/tiszt.jpg" },
  { nev: "Tisztképző Tanf. Hallg.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/tisztkepzo.jpg" },
];

// Megjelenít egy listát a galériában
function megjelenites(lista) {
  const container = document.getElementById('cuccLista');
  container.innerHTML = '';
  lista.forEach(item => {
    container.innerHTML += `
      <div class="card">
        <div class="img-wrapper">
          <img src="${item.kep}" alt="${item.nev}">
        </div>
        <div class="card-info">
          <h3>${item.nev}</h3>
          <p><strong>Kategória:</strong> ${item.kategoria}</p>
          <p><strong>Év:</strong> ${item.ev}</p>
        </div>
      </div>
    `;
  });
}

// A szűrt + rendezett lista előállítása
function szures() {
  const kategoria = document.getElementById('kategoria').value;
  const kulcsszo  = document.getElementById('kulcsszo').value.toLowerCase();
  const rendezes  = document.getElementById('rendezes').value;

  // 1) Először szűrünk (kategória, állapot, kulcsszó)
  let szurt = cuccok.filter(c =>
    (kategoria === '' || c.kategoria === kategoria) &&
    (kulcsszo  === '' || c.nev.toLowerCase().includes(kulcsszo))
  );

  // 2) Ezután rendezünk a "rendezes" select értéke szerint
  if (rendezes === 'asc') {
    szurt.sort((a, b) => a.nev.localeCompare(b.nev, 'hu'));
  } else if (rendezes === 'desc') {
    szurt.sort((a, b) => b.nev.localeCompare(a.nev, 'hu'));
  }

  // 3) Megjelenítjük a kapott listát
  megjelenites(szurt);
}

// Reset: visszaállít minden szűrőt és a rendezést
function resetSzurok() {
  document.getElementById('kategoria').value = '';
  document.getElementById('kulcsszo').value   = '';
  document.getElementById('rendezes').value  = '';
  megjelenites(cuccok);
}

// Oldal betöltésekor első körben mutassa az összeset
window.onload = () => {
  megjelenites(cuccok);

  document.getElementById('kategoria').addEventListener('change', szures);
  document.getElementById('kulcsszo').addEventListener('input', szures);
  document.getElementById('rendezes').addEventListener('change', szures);
};
