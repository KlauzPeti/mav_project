const cuccok = [
    { nev: "Parolin 1975", kategoria: "parolin", ev: 1975, allapot: "hasznalt", kep: "munkas1 kezelo1.jpg" },
    { nev: "Parolin 1985", kategoria: "parolin", ev: 1985, allapot: "hasznalt", kep: "Karszalag.jpg" },
    { nev: "MÁV telefon 1982", kategoria: "telefon", ev: 1982, allapot: "gyujtoi", kep: "munkas4-3 kezelo4,3.jpg" },
    { nev: "Kalauz ruha", kategoria: "ruha", ev: 1990, allapot: "hasznalt", kep: "Karszalag.jpg" },
    { nev: "Jegykiadó gép", kategoria: "mav", ev: 1985, allapot: "gyujtoi", kep: "Sapkajelveny.jpg" },
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
  