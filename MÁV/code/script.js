// A teljes lista
const cuccok = [
  { nev: "Ellenőr II. - Ellenőr I.", kategoria: "parolin", ev: 1975,   kep: "parolin_pics/ellenor2_ellenor1.png", szakcsoport: "III." },
  { nev: "Főellenőr I.", kategoria: "parolin", ev: 1975,   kep: "parolin_pics/foellenor1.png", szakcsoport: "III." },
  { nev: "Főellenőr II.", kategoria: "parolin", ev: 1975,   kep: "parolin_pics/foellenor2.png", szakcsoport: "III." },
  { nev: "Felügyelő", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/felugyelo_regi.png", szakcsoport: "II." },
  { nev: "Felvigyázó I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/felvi1.png", szakcsoport: "IV." },
  { nev: "Főfelügyelő", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fofelugyelo_regi.png", szakcsoport: "II." },
  { nev: "Főintéző II. - Főintéző I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fointezo2_fointezo1.png", szakcsoport: "II." },
  { nev: "Főtanácsos II. - Főtanácsos I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fotanacsos1_2.png", szakcsoport: "I." },
  { nev: "Főtanácsos II. - Főtanácsos I. (fehér)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fotanacsos1_2_feher.png", szakcsoport: "I./a" },
  { nev: "Főtiszt", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fotiszt_regi.png", szakcsoport: "III." },
  { nev: "Intéző II. - Intéző I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/intezo2_intezo1.png", szakcsoport: "II." },
  { nev: "Karszalag", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/Karszalag.png" },
  { nev: "Mérnök Főintéző I. / Titkár I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/mernok_fointezo1_titkar1.png", szakcsoport: "I." },
  { nev: "Mérnök Főintéző II. / Titkár II.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/mernok_fointezo2_titkar2.png", szakcsoport: "I." },
  { nev: "Mérnök Főtiszt / Fogalmazó", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/mernok_fotiszt_fogalmazo.png", szakcsoport: "I." },
  { nev: "Mérnök Intéző / Segédtitkár", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/mernok_intezo_segedtitkar.png", szakcsoport: "I." },
  { nev: "Munkás I. / Kezelő I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/munkas1_kezelo1.png", szakcsoport: "V." },
  { nev: "Munkás II. / Kezelő II.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/munkas2_kezelo2.png", szakcsoport: "V." },
  { nev: "Felvigyázó III.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/felvi3.png", szakcsoport: "IV." },
  { nev: "Felvigyázó IV. / Felvigyázó III.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/felvi4_felvi3.png", szakcsoport: "IV." },
  { nev: "Munkás IV. - Munkás III. / Kezelő IV. - Kezelő III.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/munkas4_3_kezelo4_3.png", szakcsoport: "V." },
  { nev: "Sapkajelvény", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/Sapkajelveny.png" },
  { nev: "Segédellenőr II. / Segédellenőr I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/segedellenor2_segedellenor1.png", szakcsoport: "III." },
  { nev: "Segédfelvigyázó II. / Segédfelvigyázó I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/segedfel2_1.png", szakcsoport: "IV." },
  { nev: "Segédfelvigyázó III.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/segedfel3.png", szakcsoport: "IV." },
  { nev: "Segédfelvigyázó IV.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/segedfelvigyazo4.png", szakcsoport: "IV." },
  { nev: "Segédtiszt I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/segedtiszt1.png", szakcsoport: "III." },
  { nev: "Segédtiszt II.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/segedtiszt2.png", szakcsport: "III."},
  { nev: "Segédtisztképző Tanfolyam Hallgató", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/segedtisztkepzo.png" },
  { nev: "Segédmunkás II. / Segédmunkás I.  Segédkezelő II. / Segédkezelő I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/sm1_2_sk1_2.png", szakcsoport: "V." },
  { nev: "Segédmunkás III. / Segédkezelő III.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/sm3_sk3.png", szakcsoport: "V." },
  { nev: "Segédmunkás IV. / Segédkezelő IV.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/segedmunkas4_segedkezelo4.png", szakcsoport: "V." },
  { nev: "Szaktechnikus Főintéző I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/szaktechnikus_fointezo1.png", szakcsoport: "I./a" },
  { nev: "Szaktechnikus / Főintéző II.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/szaktechnikus_fointezo2.png", szakcsoport: "I./a" },
  { nev: "Szaktechnikus / Főtiszt", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/szaktechnikus_fotiszt.png", szakcsoport: "I./a" },
  { nev: "Szaktechnikus / Intéző", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/szaktechnikus_intezo.png", szakcsoport: "I./a" },
  { nev: "Tanácsos II. - Tanácsos I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/tanacsos1_tanacsos2.png", szakcsoport: "I./a" },
  { nev: "Tanácsos II. - Tanácsos I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/tanacsos2_tanacsos1.png", szakcsoport: "I." },
  { nev: "Tiszt", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/tiszt_regi.png", szakcsoport: "II." },
  { nev: "Tisztképző Tanfolyam Hallgató", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/tisztkepzo.png" },
  { nev: "Igazgatóhelyettes", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/igazgatohelyettes.png" },
  { nev: "Igazgató", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/igazgato.png" },
  { nev: "Főigazgató", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/foigazgato.png" },
  { nev: "Vezérigazgató", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/vezerigazgato.png" },
  { nev: "Állomáselöljáró", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/allomaseloljaro.png", szakcsoport: "III." },
  { nev: "Állomásfelvigyázó", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/allomasfelvigyazo.png", szakcsoport: "III." },
  { nev: "Állomásfelvigyázó gyakornok", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/allomasfelvigyazo_gyakornok.png", szakcsoport: "III." },
  { nev: "Ellenőr (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/ellenor.png", szakcsoport: "III." },
  { nev: "Főállomáselöljáró", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/foallomaseloljaro.png", szakcsoport: "III." },
  { nev: "Felügyelő (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/felugyelo.png", szakcsoport: "II." },
  { nev: "Főellenőr (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/foellenor.png", szakcsoport: "III." },
  { nev: "Főfelügyelő (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fofelugyelo.png", szakcsoport: "II." },
  { nev: "Fogalmazó gyakornok<br>Mérnök gyakornok", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fogalmazo_gyakornok.png", szakcsoport: "I." },
  { nev: "Fogalmazó<br>Mérnök", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fogalmazo.png", szakcsoport: "I." },
  { nev: "Főhivatalsegéd,<br>Munkás", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fohivatalseged.png", szakcsoport: "V." },
  { nev: "Főintéző (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fointezo.png", szakcsoport: "II." },
  { nev: "Főjegykiadó", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fojegykiado.png", szakcsoport: "IV." },
  { nev: "Főmunkamester (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fomunkamester.png", szakcsoport: "IV." },
  { nev: "Vezető főmunkamester (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fomunkavezeto.png", szakcsoport: "IV." },
  { nev: "Főtanácsos (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fotanacsos.png", szakcsoport: "I." },
  { nev: "Főtiszt (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/fotiszt.png", szakcsoport: "II." },
  { nev: "Hivatalsegéd gyakornok,<br>Kisegítő munkás", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/hivatalseged_gyakornok.png", szakcsoport: "V." },
  { nev: "Hivatalsegéd<br>Segédmunkás", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/hivatalseged.png", szakcsoport: "V." },
  { nev: "Intéző (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/intezo.png", szakcsoport: "II." },
  { nev: "Jegykiadó gyakornok", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/jegykiado_gyakornok.png", szakcsoport: "IV." },
  { nev: "Jegykiadó", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/jegykiado.png", szakcsoport: "IV." },
  { nev: "Munkafelvigyázó (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/munkafelvigyazo.png", szakcsoport: "V." },
  { nev: "Munkamester (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/munkamester.png", szakcsoport: "IV." },
  { nev: "Munkavezető (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/munkavezeto.png", szakcsoport: "V." },
  { nev: "Segédtitkár<br>Üzemmérnök", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/segedtitkar.png", szakcsoport: "I." },
  { nev: "Tanácsos (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/tanacsos.png", szakcsoport: "I." },
  { nev: "Tiszt gyakornok (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/tiszt_gyakornok.png", szakcsoport: "II." },
  { nev: "Tisztképző szaktanfolyam hallgató", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/tisztkepzo_szaktanf_halg.png" },
  { nev: "Tiszt (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/tiszt.png", szakcsoport: "II." },
  { nev: "Titkár<br>Főmérnök", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/titkar.png", szakcsoport: "I." },
  { nev: "Vezető főellenőr (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/foellenor.png", szakcsoport: "III." },
  { nev: "Vezető hivatalsegéd,<br>Vezetőmunkás", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/vezeto_hivatalseged.png", szakcsoport: "V." },
  { nev: "Vezető jegykiadó", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/vezeto_jegykiado.png", szakcsoport: "IV." },
  { nev: "Vezető titkár<br>Vezető főmérnök", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/vezeto_titkar.png", szakcsoport: "I." },
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
  const szakcsoport = document.getElementById('szakcsoport').value;

  // 1) szűrés
  let szurt = cuccok.filter(c =>
    (kategoria === '' || c.kategoria === kategoria) &&
    (kulcsszo  === '' || c.nev.toLowerCase().includes(kulcsszo)) &&
    (szakcsoport === '' || c.szakcsoport === szakcsoport)
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
  document.getElementById('szakcsoport').value = '';
  megjelenites(cuccok);
}

// Oldal betöltésekor első körben mutassa az összeset
window.onload = () => {
  megjelenites(cuccok);

  document.getElementById('kategoria').addEventListener('change', szures);
  document.getElementById('kulcsszo').addEventListener('input', szures);
  document.getElementById('rendezes').addEventListener('change', szures);
};
