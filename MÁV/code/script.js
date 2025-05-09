const cuccok = [
    { nev: "Ellenőr II. - Ellenőr I.", kategoria: "parolin", ev: 1975, allapot: "hasznalt", kep: "parolin_pics/ellenor1_2.jpg" },
    { nev: "Felügyelő", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/felugyelo.jpg" },
    { nev: "Felvigyázó I.", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/felvigyazo1.jpg" },
    { nev: "MÁV telefon 1982", kategoria: "telefon", ev: 1982, allapot: "gyujtoi", kep: "parolin_pics/felvigyazo3.jpg" },
    { nev: "Kalauz ruha", kategoria: "ruha", ev: 1990, allapot: "hasznalt", kep: "parolin_pics/foellenor1.jpg" },
    { nev: "Jegykiadó gép", kategoria: "mav", ev: 1985, allapot: "gyujtoi", kep: "parolin_pics/foellenor2.jpg" },
    { nev: "Főfelügyelő", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/fofelugyelo.jpg" },
    { nev: "Főintéző II. - Főintéző I.", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/fointezo2_fointezo1.jpg" },
    { nev: "Főtanácsos II. - Főtanácsos I.", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/fotanacsos1_2.jpg" },
    { nev: "Főtanácsos II. - Főtanácsos I.", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/fotanacsos1_2_feher.jpg" },
    { nev: "Főtiszt", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/fotiszt.jpg" },
    { nev: "Intéző II. - Intéző I.", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/intezo2_intezo1.jpg" },
    { nev: "Karszalag", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/Karszalag.jpg" },
    { nev: "Mérnök Főintéző I.<br>Titkár I.", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/mernok_fointezo1_titkar1.jpg" },
    { nev: "Mérnök Főintéző II.<br>Titkár II.", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/mernok_fointezo2_titkar2.jpg" },
    { nev: "Mérnök Főtiszt<br>Fogalmazó", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/mernok_fotiszt_fogalmazo.jpg" },
    { nev: "Mérnök Intéző<br>Segédtitkár", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/mernok_intezo_segedtitkar.jpg" },
    { nev: "Munkás I.<br>Kezelő I.", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/munkas1 kezelo1.jpg" },
    { nev: "Munkás II.<br>Kezelő II.", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/munkas2_kezelo2.jpg" },
    { nev: "Felvigyázó IV. Felvigyázó III.", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/felvi4_felvi3.jpg" },
    { nev: "Munkás IV. - Munkás III.<br>Kezelő IV. - Kezelő III.", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/munkas4-3 kezelo4,3.jpg" },
    { nev: "Sapkajelvény", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/Sapkajelveny.jpg" },
    { nev: "Segédellenőr II.<br>Segédellenőr I.", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/segedellenor2_1.jpg" },
    { nev: "Segédfelvigyázó II.<br>Segédfelvigyázó I.", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/segedfel2_1.jpg" },
    { nev: "Segédfelvigyázó III.", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/segedfel3.jpg" },
    { nev: "Segédfelvigyázó IV.", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/segedfel4.jpg" },
    { nev: "Segédtiszt I.", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/segedtiszt1.jpg" },
    { nev: "Segédtiszt II.", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/segedtiszt2.jpg" },
    { nev: "Segédtisztképző Tanf. Hallg.", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/segedtisztkepzo.jpg" },
    { nev: "Segédmunkás II. - Segédmunkás I.<br>Segédkezelő II. - Segédkezelő I.", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/sm1,2_sk1,2.jpg" },
    { nev: "Segédmunkás III.<br>Segédkezelő II.", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/sm3_sk3.jpg" },
    { nev: "Segédmunkás IV.<br>Segédkezelő IV.", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/sm4_sk4.jpg" },
    { nev: "Szaktechnikus Főintéző I.", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/szaktechnikus_fointezo1.jpg" },
    { nev: "Szaktechnikus<br>Főintéző II.", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/szaktechnikus_fointezo2.jpg" },
    { nev: "Szaktechnikus<br>Főtiszt", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/szaktechnikus_fotiszt.jpg" },
    { nev: "Szaktechnikus<br>Intéző", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/szaktechnikus_intezo.jpg" },
    { nev: "Tanácsos II. - Tanácsos I.", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/tanacsos1_tanacsos2.jpg" },
    { nev: "Tanácsos II. - Tanácsos I.", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/tanacsos2_tanacsos1.jpg" },
    { nev: "Tiszt", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/tiszt.jpg" },
    { nev: "Tisztképző Tanf. Hallg.", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "parolin_pics/tisztkepzo.jpg" },
    { nev: "MÁV telefon 1982", kategoria: "telefon", ev: 1982, allapot: "gyujtoi", kep: "parolin_pics/munkas4-3 kezelo4,3.jpg" },
    { nev: "Kalauz ruha", kategoria: "ruha", ev: 1990, allapot: "hasznalt", kep: "parolin_pics/Karszalag.jpg" },
    { nev: "Jegykiadó gép", kategoria: "mav", ev: 1985, allapot: "gyujtoi", kep: "parolin_pics/Sapkajelveny.jpg" },
  ];
  
  function megjelenites(lista) {
    const div = document.getElementById('cuccLista');
    div.innerHTML = '';
    lista.forEach(cucc => {
      div.innerHTML += `
        <div class="card">
          <img src="${cucc.kep}" alt="${cucc.nev}">
          <div class="card-info">
            <h3>${cucc.nev}</h3>
            <p><strong>Kategória:</strong> ${cucc.kategoria}</p>
            <p><strong>Állapot:</strong> ${cucc.allapot}</p>
            <p><strong>Év:</strong> ${cucc.ev}</p>
          </div>
        </div>
      `;
    });
  }
  
  function szures() {
    const kategoria = document.getElementById('kategoria').value;
    const allapot = document.getElementById('allapot').value;
    const szurt = cuccok.filter(c =>
      (kategoria === '' || c.kategoria === kategoria) &&
      (allapot === '' || c.allapot === allapot)
    );
    megjelenites(szurt);
  }
  
  function resetSzurok() {
    document.getElementById('kategoria').value = '';
    document.getElementById('allapot').value = '';
    megjelenites(cuccok);
  }
  
  window.onload = () => megjelenites(cuccok);
  
