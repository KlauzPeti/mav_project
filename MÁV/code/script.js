// A teljes lista
const cuccok = [
  { nev: "Ellenőr II. - Ellenőr I.", kategoria: "parolin", ev: 1975,   kep: "parolin_pics/ellenor2_ellenor1.png" },
  { nev: "Főellenőr I.", kategoria: "parolin", ev: 1975,   kep: "parolin_pics/foellenor1.png" },
  { nev: "Főellenőr II.", kategoria: "parolin", ev: 1975,   kep: "parolin_pics/foellenor2.png" },
  { nev: "Felügyelő", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/felugyelo_regi.png" },
  { nev: "Felvigyázó I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/felvigyazo1.jpg" },
  { nev: "Főfelügyelő", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fofelugyelo_regi.png" },
  { nev: "Főintéző II. - Főintéző I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fointezo2_fointezo1.png" },
  { nev: "Főtanácsos II. - Főtanácsos I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fotanacsos1_2.png" },
  { nev: "Főtanácsos II. - Főtanácsos I. (fehér)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fotanacsos1_2_feher.png" },
  { nev: "Főtiszt", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fotiszt_regi.png" },
  { nev: "Intéző II. - Intéző I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/intezo2_intezo1.png" },
  { nev: "Karszalag", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/Karszalag.jpg" },
  { nev: "Mérnök Főintéző I. / Titkár I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/mernok_fointezo1_titkar1.png" },
  { nev: "Mérnök Főintéző II. / Titkár II.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/mernok_fointezo2_titkar2.png" },
  { nev: "Mérnök Főtiszt / Fogalmazó", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/mernok_fotiszt_fogalmazo.png" },
  { nev: "Mérnök Intéző / Segédtitkár", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/mernok_intezo_segedtitkar.png" },
  { nev: "Munkás I. / Kezelő I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/munkas1 kezelo1.jpg" },
  { nev: "Munkás II. / Kezelő II.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/munkas2_kezelo2.jpg" },
  { nev: "Felvigyázó IV. / Felvigyázó III.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/felvi4_felvi3.jpg" },
  { nev: "Munkás IV. - Munkás III. / Kezelő IV. - Kezelő III.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/munkas4-3 kezelo4,3.jpg" },
  { nev: "Sapkajelvény", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/Sapkajelveny.jpg" },
  { nev: "Segédellenőr II. / Segédellenőr I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/segedellenor2_segedellenor1.png" },
  { nev: "Segédfelvigyázó II. / Segédfelvigyázó I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/segedfel2_1.jpg" },
  { nev: "Segédfelvigyázó III.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/segedfel3.jpg" },
  { nev: "Segédfelvigyázó IV.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/segedfel4.jpg" },
  { nev: "Segédtiszt I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/segedtiszt1.png" },
  { nev: "Segédtiszt II.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/segedtiszt2.png" },
  { nev: "Segédtisztképző Tanf. Hallg.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/segedtisztkepzo.jpg" },
  { nev: "Segédmunkás II. / Segédmunkás I. / Segédkezelő II. / Segédkezelő I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/sm1,2_sk1,2.jpg" },
  { nev: "Segédmunkás III. / Segédkezelő II.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/sm3_sk3.jpg" },
  { nev: "Segédmunkás IV. / Segédkezelő IV.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/sm4_sk4.jpg" },
  { nev: "Szaktechnikus Főintéző I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/szaktechnikus_fointezo1.png" },
  { nev: "Szaktechnikus / Főintéző II.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/szaktechnikus_fointezo2.png" },
  { nev: "Szaktechnikus / Főtiszt", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/szaktechnikus_fotiszt.png" },
  { nev: "Szaktechnikus / Intéző", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/szaktechnikus_intezo.png" },
  { nev: "Tanácsos II. - Tanácsos I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/tanacsos1_tanacsos2.png" },
  { nev: "Tanácsos II. - Tanácsos I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/tanacsos2_tanacsos1.png" },
  { nev: "Tiszt", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/tiszt_regi.png" },
  { nev: "Tisztképző Tanf. Hallg.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/tisztkepzo.jpg" },
  { nev: "Igazgatóhelyettes", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/igazgatohelyettes.png" },
  { nev: "Igazgató", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/igazgato.png" },
  { nev: "Főigazgató", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/foigazgato.png" },
  { nev: "Vezérigazgató", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/vezerigazgato.png" },
  { nev: "Állomáselöljáró", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/allomaseloljaro.png" },
  { nev: "Állomásfelvigyázó", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/allomasfelvigyazo.png" },
  { nev: "Állomásfelvigyázó gyakornok", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/allomasfelvigyazo_gyakornok.png" },
  { nev: "Ellenőr (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/ellenor.png" },
  { nev: "Főállomáselöljáró", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/foallomaseloljaro.png" },
  { nev: "Felügyelő (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/felugyelo.png" },
  { nev: "Főellenőr (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/foellenor.png" },
  { nev: "Főfelügyelő (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fofelugyelo.png" },
  { nev: "Fogalmazó gyakornok<br>Mérnök gyakornok", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fogalmazo_gyakornok.png" },
  { nev: "Fogalmazó<br>Mérnök", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fogalmazo.png" },
  { nev: "Főhivatalsegéd,<br>Munkás", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fohivatalseged.png" },
  { nev: "Főintéző (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fointezo.png" },
  { nev: "Főjegykiadó", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fojegykiado.png" },
  { nev: "Főmunkamester (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fomunkamester.png" },
  { nev: "Vezető főmunkamester (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fomunkavezeto.png" },
  { nev: "Főtanácsos (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fotanacsos.png" },
  { nev: "Főtiszt (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fotiszt.png" },
  { nev: "Hivatalsegéd gyakornok,<br>Kisegítő munkás", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/hivatalseged_gyakornok.png" },
  { nev: "Hivatalsegéd<br>Segédmunkás", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/hivatalseged.png" },
  { nev: "Intéző (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/intezo.png" },
  { nev: "Jegykiadó gyakornok", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/jegykiado_gyakornok.png" },
  { nev: "Jegykiadó", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/jegykiado.png" },
  { nev: "Munkafelvigyázó (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/munkafelvigyazo.png" },
  { nev: "Munkamester (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/munkamester.png" },
  { nev: "Munkavezető (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/munkavezeto.png" },
  { nev: "Segédtitkár<br>Üzemmérnök", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/segedtitkar.png" },
  { nev: "Tanácsos (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/tanacsos.png" },
  { nev: "Tiszt gyakornok (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/tiszt_gyakornok.png" },
  { nev: "Tisztképző szaktanfolyam hallgató", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/tisztkepzo_szaktanf_halg.png" },
  { nev: "Tiszt (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/tiszt.png" },
  { nev: "Titkár<br>Főmérnök", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/titkar.png" },
  { nev: "Vezető főellenőr (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/foellenor.png" },
  { nev: "Vezető hivatalsegéd,<br>Vezetőmunkás", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/vezeto_hivatalseged.png" },
  { nev: "Vezető jegykiadó", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/vezeto_jegykiado.png" },
  { nev: "Vezető titkár<br>Vezető főmérnök", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/vezeto_titkar.png" },
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

  // 1) szűrés
  let szurt = cuccok.filter(c =>
    (kategoria === '' || c.kategoria === kategoria) &&
    (kulcsszo  === '' || c.nev.toLowerCase().includes(kulcsszo))
  );

  // 2) rendezés objektum-mappinggel, plusz "asc"/"desc" év szerinti kulcsokkal
  const rendezok = {
    'nev-asc':  (a, b) => a.nev.localeCompare(b.nev, 'hu'),
    'nev-desc': (a, b) => b.nev.localeCompare(a.nev, 'hu'),
    'asc':      (a, b) => a.ev - b.ev,   // ha a <select> még mindig asc=Év ↑
    'desc':     (a, b) => b.ev - a.ev    // ha a <select> még mindig desc=Év ↓
  };

  if (rendezok[rendezes]) {
    szurt.sort(rendezok[rendezes]);
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
