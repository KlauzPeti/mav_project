// A teljes lista
const cuccok = [
  { nev: "Ellenőr II. - Ellenőr I.", kategoria: "parolin", szolgalati_ido: 16-20,   kep: "parolin_pics/parolin_piros/ellenor2_ellenor1.png", szakcsoport: "III." },
  { nev: "Főellenőr I.", kategoria: "parolin", szolgalati_ido: 26-30,   kep: "parolin_pics/parolin_piros/foellenor1.png", szakcsoport: "III." },
  { nev: "Főellenőr II.", kategoria: "parolin", szolgalati_ido: 21-25,   kep: "parolin_pics/parolin_piros/foellenor2.png", szakcsoport: "III." },
  { nev: "Felügyelő", kategoria: "parolin", szolgalati_ido: 21-25,   kep: "parolin_pics/parolin_piros/felugyelo_regi.png", szakcsoport: "II." },
  { nev: "Felvigyázó I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_piros/felvi1.png", szakcsoport: "IV." },
  { nev: "Főfelügyelő", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_piros/fofelugyelo_regi.png", szakcsoport: "II." },
  { nev: "Főintéző II. - Főintéző I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_piros/fointezo2_fointezo1.png", szakcsoport: "II." },
  { nev: "Főtanácsos II. - Főtanácsos I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_piros/fotanacsos1_2.png", szakcsoport: "I." },
  { nev: "Főtanácsos II. - Főtanácsos I. (fehér)", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_piros/fotanacsos1_2_feher.png", szakcsoport: "I./a" },
  { nev: "Főtiszt", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_piros/fotiszt_regi.png", szakcsoport: "III." },
  { nev: "Intéző II. - Intéző I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_piros/intezo2_intezo1.png", szakcsoport: "II." },
  { nev: "Karszalag", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/egyeb/Karszalag.png" },
  { nev: "Mérnök Főintéző I. / Titkár I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_piros/mernok_fointezo1_titkar1.png", szakcsoport: "I." },
  { nev: "Mérnök Főintéző II. / Titkár II.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_piros/mernok_fointezo2_titkar2.png", szakcsoport: "I." },
  { nev: "Mérnök Főtiszt / Fogalmazó", kategoria: "parolin", szolgalati_ido: 0-5,   kep: "parolin_pics/parolin_piros/mernok_fotiszt_fogalmazo.png", szakcsoport: "I." },
  { nev: "Mérnök Intéző / Segédtitkár", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_piros/mernok_intezo_segedtitkar.png", szakcsoport: "I." },
  { nev: "Munkás I. / Kezelő I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_piros/munkas1_kezelo1.png", szakcsoport: "V." },
  { nev: "Munkás II. / Kezelő II.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_piros/munkas2_kezelo2.png", szakcsoport: "V." },
  { nev: "Felvigyázó III.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_piros/felvi3.png", szakcsoport: "IV." },
  { nev: "Felvigyázó IV. / Felvigyázó III.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_piros/felvi4_felvi3.png", szakcsoport: "IV." },
  { nev: "Munkás IV. - Munkás III. / Kezelő IV. - Kezelő III.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_piros/munkas4_3_kezelo4_3.png", szakcsoport: "V." },
  { nev: "Sapkajelvény", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/egyeb/Sapkajelveny.png" },
  { nev: "Segédellenőr II. / Segédellenőr I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_piros/segedellenor2_segedellenor1.png", szakcsoport: "III." },
  { nev: "Segédfelvigyázó II. / Segédfelvigyázó I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_piros/segedfel2_1.png", szakcsoport: "IV." },
  { nev: "Segédfelvigyázó III.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_piros/segedfel3.png", szakcsoport: "IV." },
  { nev: "Segédfelvigyázó IV.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_piros/segedfelvigyazo4.png", szakcsoport: "IV." },
  { nev: "Segédtiszt I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_piros/segedtiszt1.png", szakcsoport: "III." },
  { nev: "Segédtiszt II.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_piros/segedtiszt2.png", szakcsport: "III."},
  { nev: "Segédtisztképző Tanfolyam Hallgató", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_piros/segedtisztkepzo.png" },
  { nev: "Segédmunkás II. / Segédmunkás I.  Segédkezelő II. / Segédkezelő I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_piros/sm1_2_sk1_2.png", szakcsoport: "V." },
  { nev: "Segédmunkás III. / Segédkezelő III.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_piros/sm3_sk3.png", szakcsoport: "V." },
  { nev: "Segédmunkás IV. / Segédkezelő IV.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_piros/segedmunkas4_segedkezelo4.png", szakcsoport: "V." },
  { nev: "Szaktechnikus Főintéző I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_piros/szaktechnikus_fointezo1.png", szakcsoport: "I./a" },
  { nev: "Szaktechnikus / Főintéző II.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_piros/szaktechnikus_fointezo2.png", szakcsoport: "I./a" },
  { nev: "Szaktechnikus / Főtiszt", kategoria: "parolin", szolgalati_ido: 0-5,   kep: "parolin_pics/parolin_piros/szaktechnikus_fotiszt.png", szakcsoport: "I./a" },
  { nev: "Szaktechnikus / Intéző", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_piros/szaktechnikus_intezo.png", szakcsoport: "I./a" },
  { nev: "Tanácsos II. - Tanácsos I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_piros/tanacsos1_tanacsos2.png", szakcsoport: "I./a" },
  { nev: "Tanácsos II. - Tanácsos I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_piros/tanacsos2_tanacsos1.png", szakcsoport: "I." },
  { nev: "Tiszt", kategoria: "parolin", szolgalati_ido: 0-5,   kep: "parolin_pics/parolin_piros/tiszt_regi.png", szakcsoport: "II." },
  { nev: "Tisztképző Tanfolyam Hallgató", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_piros/tisztkepzo.png" },
  { nev: "Igazgatóhelyettes", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_piros/igazgatohelyettes.png" },
  { nev: "Igazgató", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_piros/igazgato.png" },
  { nev: "Főigazgató", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_piros/foigazgato.png" },
  { nev: "Vezérigazgató", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_piros/vezerigazgato.png" },
  { nev: "Állomáselöljáró", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_zold/allomaseloljaro_zold.png", szakcsoport: "III." },
  { nev: "Állomásfelvigyázó", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_zold/allomasfelvigyazo_zold.png", szakcsoport: "III." },
  { nev: "Állomásfelvigyázó gyakornok", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_zold/allomasfelvigyazo_gyakornok_zold.png", szakcsoport: "III." },
  { nev: "Ellenőr (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_zold/ellenor_zold.png", szakcsoport: "III." },
  { nev: "Főállomáselöljáró", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_zold/foallomaseloljaro_zold.png", szakcsoport: "III." },
  { nev: "Felügyelő (műszaki)", kategoria: "vallap", szolgalati_ido: 21-25,   kep: "parolin_pics/vallapok_zold/felugyelo_zold.png", szakcsoport: "II." },
  { nev: "Főellenőr (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_zold/foellenor_zold.png", szakcsoport: "III." },
  { nev: "Főfelügyelő (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_zold/fofelugyelo_zold.png", szakcsoport: "II." },
  { nev: "Fogalmazó gyakornok<br>Mérnök gyakornok", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_zold/fogalmazo_gyakornok_zold.png", szakcsoport: "I." },
  { nev: "Fogalmazó<br>Mérnök", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_zold/fogalmazo_zold.png", szakcsoport: "I." },
  { nev: "Főhivatalsegéd,<br>Munkás", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_zold/fohivatalseged_zold.png", szakcsoport: "V." },
  { nev: "Főintéző (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_zold/fointezo_zold.png", szakcsoport: "II." },
  { nev: "Főjegykiadó", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_zold/fojegykiado_zold.png", szakcsoport: "IV." },
  { nev: "Főmunkamester (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_zold/fomunkamester_zold.png", szakcsoport: "IV." },
  { nev: "Vezető főmunkamester (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_zold/fomunkavezeto_zold.png", szakcsoport: "IV." },
  { nev: "Főtanácsos (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_zold/fotanacsos_zold.png", szakcsoport: "I." },
  { nev: "Főtiszt (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_zold/fotiszt_zold.png", szakcsoport: "II." },
  { nev: "Hivatalsegéd gyakornok,<br>Kisegítő munkás", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_zold/hivatalseged_gyakornok_zold.png", szakcsoport: "V." },
  { nev: "Hivatalsegéd<br>Segédmunkás", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_zold/hivatalseged_zold.png", szakcsoport: "V." },
  { nev: "Intéző (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_zold/intezo_zold.png", szakcsoport: "II." },
  { nev: "Jegykiadó gyakornok", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_zold/jegykiado_gyakornok_zold.png", szakcsoport: "IV." },
  { nev: "Jegykiadó", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_zold/jegykiado_zold.png", szakcsoport: "IV." },
  { nev: "Munkafelvigyázó (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_zold/munkafelvigyazo_zold.png", szakcsoport: "V." },
  { nev: "Munkamester (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_zold/munkamester_zold.png", szakcsoport: "IV." },
  { nev: "Munkavezető (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_zold/munkavezeto_zold.png", szakcsoport: "V." },
  { nev: "Segédtitkár<br>Üzemmérnök", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_zold/segedtitkar_zold.png", szakcsoport: "I." },
  { nev: "Tanácsos (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_zold/tanacsos_zold.png", szakcsoport: "I." },
  { nev: "Tiszt gyakornok (műszaki)", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_zold/tiszt_gyakornok_zold.png", szakcsoport: "II." },
  { nev: "Tisztképző szaktanfolyam hallgató", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_zold/tisztkepzo_szaktanf_halg_zold.png" },
  { nev: "Tiszt (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_zold/tiszt_zold.png", szakcsoport: "II." },
  { nev: "Titkár<br>Főmérnök", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_zold/titkar_zold.png", szakcsoport: "I." },
  { nev: "Vezető főellenőr (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_zold/foellenor_zold.png", szakcsoport: "III." },
  { nev: "Vezető hivatalsegéd,<br>Vezetőmunkás", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_zold/vezeto_hivatalseged_zold.png", szakcsoport: "V." },
  { nev: "Vezető jegykiadó", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_zold/vezeto_jegykiado_zold.png", szakcsoport: "IV." },
  { nev: "Vezető titkár<br>Vezető főmérnök", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_zold/vezeto_titkar_zold.png", szakcsoport: "I." },
  { nev: "Állomáselöljáró", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_piros/allomaseloljaro.png", szakcsoport: "III." },
  { nev: "Állomásfelvigyázó", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_piros/allomasfelvigyazo.png", szakcsoport: "III." },
  { nev: "Állomásfelvigyázó gyakornok", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_piros/allomasfelvigyazo_gyakornok.png", szakcsoport: "III." },
  { nev: "Ellenőr (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_piros/ellenor.png", szakcsoport: "III." },
  { nev: "Főállomáselöljáró", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_piros/foallomaseloljaro.png", szakcsoport: "III." },
  { nev: "Felügyelő (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_piros/felugyelo.png", szakcsoport: "II." },
  { nev: "Főellenőr (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_piros/foellenor.png", szakcsoport: "III." },
  { nev: "Főfelügyelő (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_piros/fofelugyelo.png", szakcsoport: "II." },
  { nev: "Fogalmazó gyakornok<br>Mérnök gyakornok", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_piros/fogalmazo_gyakornok.png", szakcsoport: "I." },
  { nev: "Fogalmazó<br>Mérnök", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_piros/fogalmazo.png", szakcsoport: "I." },
  { nev: "Főhivatalsegéd,<br>Munkás", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_piros/fohivatalseged.png", szakcsoport: "V." },
  { nev: "Főintéző (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_piros/fointezo.png", szakcsoport: "II." },
  { nev: "Főjegykiadó", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_piros/fojegykiado.png", szakcsoport: "IV." },
  { nev: "Főmunkamester (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_piros/fomunkamester.png", szakcsoport: "IV." },
  { nev: "Vezető főmunkamester (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_piros/fomunkavezeto.png", szakcsoport: "IV." },
  { nev: "Főtanácsos (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_piros/fotanacsos.png", szakcsoport: "I." },
  { nev: "Főtiszt (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_piros/fotiszt.png", szakcsoport: "II." },
  { nev: "Hivatalsegéd gyakornok,<br>Kisegítő munkás", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_piros/hivatalseged_gyakornok.png", szakcsoport: "V." },
  { nev: "Hivatalsegéd<br>Segédmunkás", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_piros/hivatalseged.png", szakcsoport: "V." },
  { nev: "Intéző (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_piros/intezo.png", szakcsoport: "II." },
  { nev: "Jegykiadó gyakornok", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_piros/jegykiado_gyakornok.png", szakcsoport: "IV." },
  { nev: "Jegykiadó", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_piros/jegykiado.png", szakcsoport: "IV." },
  { nev: "Munkafelvigyázó (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_piros/munkafelvigyazo.png", szakcsoport: "V." },
  { nev: "Munkamester (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_piros/munkamester.png", szakcsoport: "IV." },
  { nev: "Munkavezető (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_piros/munkavezeto.png", szakcsoport: "V." },
  { nev: "Segédtitkár<br>Üzemmérnök", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_piros/segedtitkar.png", szakcsoport: "I." },
  { nev: "Tanácsos (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_piros/tanacsos.png", szakcsoport: "I." },
  { nev: "Tiszt gyakornok (műszaki)", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_piros/tiszt_gyakornok.png", szakcsoport: "II." },
  { nev: "Tisztképző szaktanfolyam hallgató", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_piros/tisztkepzo_szaktanf_halg.png" },
  { nev: "Tiszt (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_piros/tiszt.png", szakcsoport: "II." },
  { nev: "Titkár<br>Főmérnök", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_piros/titkar.png", szakcsoport: "I." },
  { nev: "Vezető főellenőr (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_piros/foellenor.png", szakcsoport: "III." },
  { nev: "Vezető hivatalsegéd,<br>Vezetőmunkás", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_piros/vezeto_hivatalseged.png", szakcsoport: "V." },
  { nev: "Vezető jegykiadó", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_piros/vezeto_jegykiado.png", szakcsoport: "IV." },
  { nev: "Vezető titkár<br>Vezető főmérnök", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_piros/vezeto_titkar.png", szakcsoport: "I." },
  { nev: "Állomáselöljáró", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_skek/allomaseloljaro_skek.png", szakcsoport: "III." },
  { nev: "Állomásfelvigyázó", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_skek/allomasfelvigyazo_skek.png", szakcsoport: "III." },
  { nev: "Állomásfelvigyázó gyakornok", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_skek/allomasfelvigyazo_gyakornok_skek.png", szakcsoport: "III." },
  { nev: "Ellenőr (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_skek/ellenor_skek.png", szakcsoport: "III." },
  { nev: "Főállomáselöljáró", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_skek/foallomaseloljaro_skek.png", szakcsoport: "III." },
  { nev: "Felügyelő (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_skek/felugyelo_skek.png", szakcsoport: "II." },
  { nev: "Főellenőr (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_skek/foellenor_skek.png", szakcsoport: "III." },
  { nev: "Főfelügyelő (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_skek/fofelugyelo_skek.png", szakcsoport: "II." },
  { nev: "Fogalmazó gyakornok<br>Mérnök gyakornok", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_skek/fogalmazo_gyakornok_skek.png", szakcsoport: "I." },
  { nev: "Fogalmazó<br>Mérnök", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_skek/fogalmazo_skek.png", szakcsoport: "I." },
  { nev: "Főhivatalsegéd,<br>Munkás", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_skek/fohivatalseged_skek.png", szakcsoport: "V." },
  { nev: "Főintéző (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_skek/fointezo_skek.png", szakcsoport: "II." },
  { nev: "Főjegykiadó", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_skek/fojegykiado_skek.png", szakcsoport: "IV." },
  { nev: "Főmunkamester (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_skek/fomunkamester_skek.png", szakcsoport: "IV." },
  { nev: "Vezető főmunkamester (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_skek/fomunkavezeto_skek.png", szakcsoport: "IV." },
  { nev: "Főtanácsos (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_skek/fotanacsos_skek.png", szakcsoport: "I." },
  { nev: "Főtiszt (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_skek/fotiszt_skek.png", szakcsoport: "II." },
  { nev: "Hivatalsegéd gyakornok,<br>Kisegítő munkás", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_skek/hivatalseged_gyakornok_skek.png", szakcsoport: "V." },
  { nev: "Hivatalsegéd<br>Segédmunkás", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_skek/hivatalseged_skek.png", szakcsoport: "V." },
  { nev: "Intéző (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_skek/intezo_skek.png", szakcsoport: "II." },
  { nev: "Jegykiadó gyakornok", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_skek/jegykiado_gyakornok_skek.png", szakcsoport: "IV." },
  { nev: "Jegykiadó", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_skek/jegykiado_skek.png", szakcsoport: "IV." },
  { nev: "Munkafelvigyázó (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_skek/munkafelvigyazo_skek.png", szakcsoport: "V." },
  { nev: "Munkamester (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_skek/munkamester_skek.png", szakcsoport: "IV." },
  { nev: "Munkavezető (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_skek/munkavezeto_skek.png", szakcsoport: "V." },
  { nev: "Segédtitkár<br>Üzemmérnök", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_skek/segedtitkar_skek.png", szakcsoport: "I." },
  { nev: "Tanácsos (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_skek/tanacsos_skek.png", szakcsoport: "I." },
  { nev: "Tiszt gyakornok (műszaki)", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_skek/tiszt_gyakornok_skek.png", szakcsoport: "II." },
  { nev: "Tisztképző szaktanfolyam hallgató", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_skek/tisztkepzo_szaktanf_halg_skek.png" },
  { nev: "Tiszt (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_skek/tiszt_skek.png", szakcsoport: "II." },
  { nev: "Titkár<br>Főmérnök", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_skek/titkar_skek.png", szakcsoport: "I." },
  { nev: "Vezető főellenőr (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_skek/foellenor_skek.png", szakcsoport: "III." },
  { nev: "Vezető hivatalsegéd,<br>Vezetőmunkás", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_skek/vezeto_hivatalseged_skek.png", szakcsoport: "V." },
  { nev: "Vezető jegykiadó", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_skek/vezeto_jegykiado_skek.png", szakcsoport: "IV." },
  { nev: "Vezető titkár<br>Vezető főmérnök", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_skek/vezeto_titkar_skek.png", szakcsoport: "I." },
  { nev: "Állomáselöljáró", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_barna/allomaseloljaro_barna.png", szakcsoport: "III." },
  { nev: "Állomásfelvigyázó", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_barna/allomasfelvigyazo_barna.png", szakcsoport: "III." },
  { nev: "Állomásfelvigyázó gyakornok", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_barna/allomasfelvigyazo_gyakornok_barna.png", szakcsoport: "III." },
  { nev: "Ellenőr (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_barna/ellenor_barna.png", szakcsoport: "III." },
  { nev: "Főállomáselöljáró", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_barna/foallomaseloljaro_barna.png", szakcsoport: "III." },
  { nev: "Felügyelő (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_barna/felugyelo_barna.png", szakcsoport: "II." },
  { nev: "Főellenőr (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_barna/foellenor_barna.png", szakcsoport: "III." },
  { nev: "Főfelügyelő (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_barna/fofelugyelo_barna.png", szakcsoport: "II." },
  { nev: "Fogalmazó gyakornok<br>Mérnök gyakornok", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_barna/fogalmazo_gyakornok_barna.png", szakcsoport: "I." },
  { nev: "Fogalmazó<br>Mérnök", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_barna/fogalmazo_barna.png", szakcsoport: "I." },
  { nev: "Főhivatalsegéd,<br>Munkás", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_barna/fohivatalseged_barna.png", szakcsoport: "V." },
  { nev: "Főintéző (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_barna/fointezo_barna.png", szakcsoport: "II." },
  { nev: "Főjegykiadó", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_barna/fojegykiado_barna.png", szakcsoport: "IV." },
  { nev: "Főmunkamester (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_barna/fomunkamester_barna.png", szakcsoport: "IV." },
  { nev: "Vezető főmunkamester (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_barna/fomunkavezeto_barna.png", szakcsoport: "IV." },
  { nev: "Főtanácsos (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_barna/fotanacsos_barna.png", szakcsoport: "I." },
  { nev: "Főtiszt (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_barna/fotiszt_barna.png", szakcsoport: "II." },
  { nev: "Hivatalsegéd gyakornok,<br>Kisegítő munkás", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_barna/hivatalseged_gyakornok_barna.png", szakcsoport: "V." },
  { nev: "Hivatalsegéd<br>Segédmunkás", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_barna/hivatalseged_barna.png", szakcsoport: "V." },
  { nev: "Intéző (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_barna/intezo_barna.png", szakcsoport: "II." },
  { nev: "Jegykiadó gyakornok", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_barna/jegykiado_gyakornok_barna.png", szakcsoport: "IV." },
  { nev: "Jegykiadó", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_barna/jegykiado_barna.png", szakcsoport: "IV." },
  { nev: "Munkafelvigyázó (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_barna/munkafelvigyazo_barna.png", szakcsoport: "V." },
  { nev: "Munkamester (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_barna/munkamester_barna.png", szakcsoport: "IV." },
  { nev: "Munkavezető (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_barna/munkavezeto_barna.png", szakcsoport: "V." },
  { nev: "Segédtitkár<br>Üzemmérnök", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_barna/segedtitkar_barna.png", szakcsoport: "I." },
  { nev: "Tanácsos (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_barna/tanacsos_barna.png", szakcsoport: "I." },
  { nev: "Tiszt gyakornok (műszaki)", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_barna/tiszt_gyakornok_barna.png", szakcsoport: "II." },
  { nev: "Tisztképző szaktanfolyam hallgató", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_barna/tisztkepzo_szaktanf_halg_barna.png" },
  { nev: "Tiszt (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_barna/tiszt_barna.png", szakcsoport: "II." },
  { nev: "Titkár<br>Főmérnök", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_barna/titkar_barna.png", szakcsoport: "I." },
  { nev: "Vezető főellenőr (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_barna/foellenor_barna.png", szakcsoport: "III." },
  { nev: "Vezető hivatalsegéd,<br>Vezetőmunkás", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_barna/vezeto_hivatalseged_barna.png", szakcsoport: "V." },
  { nev: "Vezető jegykiadó", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_barna/vezeto_jegykiado_barna.png", szakcsoport: "IV." },
  { nev: "Vezető titkár<br>Vezető főmérnök", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_barna/vezeto_titkar_barna.png", szakcsoport: "I." },
  { nev: "Állomáselöljáró", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_fekete/allomaseloljaro_fekete.png", szakcsoport: "III." },
  { nev: "Állomásfelvigyázó", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_fekete/allomasfelvigyazo_fekete.png", szakcsoport: "III." },
  { nev: "Állomásfelvigyázó gyakornok", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_fekete/allomasfelvigyazo_gyakornok_fekete.png", szakcsoport: "III." },
  { nev: "Ellenőr (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_fekete/ellenor_fekete.png", szakcsoport: "III." },
  { nev: "Főállomáselöljáró", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_fekete/foallomaseloljaro_fekete.png", szakcsoport: "III." },
  { nev: "Felügyelő (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_fekete/felugyelo_fekete.png", szakcsoport: "II." },
  { nev: "Főellenőr (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_fekete/foellenor_fekete.png", szakcsoport: "III." },
  { nev: "Főfelügyelő (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_fekete/fofelugyelo_fekete.png", szakcsoport: "II." },
  { nev: "Fogalmazó gyakornok<br>Mérnök gyakornok", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_fekete/fogalmazo_gyakornok_fekete.png", szakcsoport: "I." },
  { nev: "Fogalmazó<br>Mérnök", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_fekete/fogalmazo_fekete.png", szakcsoport: "I." },
  { nev: "Főhivatalsegéd,<br>Munkás", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_fekete/fohivatalseged_fekete.png", szakcsoport: "V." },
  { nev: "Főintéző (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_fekete/fointezo_fekete.png", szakcsoport: "II." },
  { nev: "Főjegykiadó", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_fekete/fojegykiado_fekete.png", szakcsoport: "IV." },
  { nev: "Főmunkamester (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_fekete/fomunkamester_fekete.png", szakcsoport: "IV." },
  { nev: "Vezető főmunkamester (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_fekete/fomunkavezeto_fekete.png", szakcsoport: "IV." },
  { nev: "Főtanácsos (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_fekete/fotanacsos_fekete.png", szakcsoport: "I." },
  { nev: "Főtiszt (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_fekete/fotiszt_fekete.png", szakcsoport: "II." },
  { nev: "Hivatalsegéd gyakornok,<br>Kisegítő munkás", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_fekete/hivatalseged_gyakornok_fekete.png", szakcsoport: "V." },
  { nev: "Hivatalsegéd<br>Segédmunkás", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_fekete/hivatalseged_fekete.png", szakcsoport: "V." },
  { nev: "Intéző (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_fekete/intezo_fekete.png", szakcsoport: "II." },
  { nev: "Jegykiadó gyakornok", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_fekete/jegykiado_gyakornok_fekete.png", szakcsoport: "IV." },
  { nev: "Jegykiadó", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_fekete/jegykiado_fekete.png", szakcsoport: "IV." },
  { nev: "Munkafelvigyázó (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_fekete/munkafelvigyazo_fekete.png", szakcsoport: "V." },
  { nev: "Munkamester (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_fekete/munkamester_fekete.png", szakcsoport: "IV." },
  { nev: "Munkavezető (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_fekete/munkavezeto_fekete.png", szakcsoport: "V." },
  { nev: "Segédtitkár<br>Üzemmérnök", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_fekete/segedtitkar_fekete.png", szakcsoport: "I." },
  { nev: "Tanácsos (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_fekete/tanacsos_fekete.png", szakcsoport: "I." },
  { nev: "Tiszt gyakornok (műszaki)", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_fekete/tiszt_gyakornok_fekete.png", szakcsoport: "II." },
  { nev: "Tisztképző szaktanfolyam hallgató", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_fekete/tisztkepzo_szaktanf_halg_fekete.png" },
  { nev: "Tiszt (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_fekete/tiszt_fekete.png", szakcsoport: "II." },
  { nev: "Titkár<br>Főmérnök", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_fekete/titkar_fekete.png", szakcsoport: "I." },
  { nev: "Vezető főellenőr (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_fekete/foellenor_fekete.png", szakcsoport: "III." },
  { nev: "Vezető hivatalsegéd,<br>Vezetőmunkás", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_fekete/vezeto_hivatalseged_fekete.png", szakcsoport: "V." },
  { nev: "Vezető jegykiadó", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_fekete/vezeto_jegykiado_fekete.png", szakcsoport: "IV." },
  { nev: "Vezető titkár<br>Vezető főmérnök", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_fekete/vezeto_titkar_fekete.png", szakcsoport: "I." },
  { nev: "Állomáselöljáró", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_lila/allomaseloljaro_lila.png", szakcsoport: "III." },
  { nev: "Állomásfelvigyázó", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_lila/allomasfelvigyazo_lila.png", szakcsoport: "III." },
  { nev: "Állomásfelvigyázó gyakornok", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_lila/allomasfelvigyazo_gyakornok_lila.png", szakcsoport: "III." },
  { nev: "Ellenőr (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_lila/ellenor_lila.png", szakcsoport: "III." },
  { nev: "Főállomáselöljáró", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_lila/foallomaseloljaro_lila.png", szakcsoport: "III." },
  { nev: "Felügyelő (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_lila/felugyelo_lila.png", szakcsoport: "II." },
  { nev: "Főellenőr (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_lila/foellenor_lila.png", szakcsoport: "III." },
  { nev: "Főfelügyelő (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_lila/fofelugyelo_lila.png", szakcsoport: "II." },
  { nev: "Fogalmazó gyakornok<br>Mérnök gyakornok", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_lila/fogalmazo_gyakornok_lila.png", szakcsoport: "I." },
  { nev: "Fogalmazó<br>Mérnök", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_lila/fogalmazo_lila.png", szakcsoport: "I." },
  { nev: "Főhivatalsegéd,<br>Munkás", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_lila/fohivatalseged_lila.png", szakcsoport: "V." },
  { nev: "Főintéző (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_lila/fointezo_lila.png", szakcsoport: "II." },
  { nev: "Főjegykiadó", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_lila/fojegykiado_lila.png", szakcsoport: "IV." },
  { nev: "Főmunkamester (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_lila/fomunkamester_lila.png", szakcsoport: "IV." },
  { nev: "Vezető főmunkamester (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_lila/fomunkavezeto_lila.png", szakcsoport: "IV." },
  { nev: "Főtanácsos (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_lila/fotanacsos_lila.png", szakcsoport: "I." },
  { nev: "Főtiszt (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_lila/fotiszt_lila.png", szakcsoport: "II." },
  { nev: "Hivatalsegéd gyakornok,<br>Kisegítő munkás", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_lila/hivatalseged_gyakornok_lila.png", szakcsoport: "V." },
  { nev: "Hivatalsegéd<br>Segédmunkás", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_lila/hivatalseged_lila.png", szakcsoport: "V." },
  { nev: "Intéző (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_lila/intezo_lila.png", szakcsoport: "II." },
  { nev: "Jegykiadó gyakornok", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_lila/jegykiado_gyakornok_lila.png", szakcsoport: "IV." },
  { nev: "Jegykiadó", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_lila/jegykiado_lila.png", szakcsoport: "IV." },
  { nev: "Munkafelvigyázó (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_lila/munkafelvigyazo_lila.png", szakcsoport: "V." },
  { nev: "Munkamester (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_lila/munkamester_lila.png", szakcsoport: "IV." },
  { nev: "Munkavezető (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_lila/munkavezeto_lila.png", szakcsoport: "V." },
  { nev: "Segédtitkár<br>Üzemmérnök", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_lila/segedtitkar_lila.png", szakcsoport: "I." },
  { nev: "Tanácsos (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_lila/tanacsos_lila.png", szakcsoport: "I." },
  { nev: "Tiszt gyakornok (műszaki)", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_lila/tiszt_gyakornok_lila.png", szakcsoport: "II." },
  { nev: "Tisztképző szaktanfolyam hallgató", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_lila/tisztkepzo_szaktanf_halg_lila.png" },
  { nev: "Tiszt (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_lila/tiszt_lila.png", szakcsoport: "II." },
  { nev: "Titkár<br>Főmérnök", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_lila/titkar_lila.png", szakcsoport: "I." },
  { nev: "Vezető főellenőr (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_lila/foellenor_lila.png", szakcsoport: "III." },
  { nev: "Vezető hivatalsegéd,<br>Vezetőmunkás", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_lila/vezeto_hivatalseged_lila.png", szakcsoport: "V." },
  { nev: "Vezető jegykiadó", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_lila/vezeto_jegykiado_lila.png", szakcsoport: "IV." },
  { nev: "Vezető titkár<br>Vezető főmérnök", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_lila/vezeto_titkar_lila.png", szakcsoport: "I." },
  { nev: "Állomáselöljáró", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_vkek/allomaseloljaro_vkek.png", szakcsoport: "III." },
  { nev: "Állomásfelvigyázó", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_vkek/allomasfelvigyazo_vkek.png", szakcsoport: "III." },
  { nev: "Állomásfelvigyázó gyakornok", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_vkek/allomasfelvigyazo_gyakornok_vkek.png", szakcsoport: "III." },
  { nev: "Ellenőr (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_vkek/ellenor_vkek.png", szakcsoport: "III." },
  { nev: "Főállomáselöljáró", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_vkek/foallomaseloljaro_vkek.png", szakcsoport: "III." },
  { nev: "Felügyelő (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_vkek/felugyelo_vkek.png", szakcsoport: "II." },
  { nev: "Főellenőr (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_vkek/foellenor_vkek.png", szakcsoport: "III." },
  { nev: "Főfelügyelő (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_vkek/fofelugyelo_vkek.png", szakcsoport: "II." },
  { nev: "Fogalmazó gyakornok<br>Mérnök gyakornok", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_vkek/fogalmazo_gyakornok_vkek.png", szakcsoport: "I." },
  { nev: "Fogalmazó<br>Mérnök", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_vkek/fogalmazo_vkek.png", szakcsoport: "I." },
  { nev: "Főhivatalsegéd,<br>Munkás", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_vkek/fohivatalseged_vkek.png", szakcsoport: "V." },
  { nev: "Főintéző (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_vkek/fointezo_vkek.png", szakcsoport: "II." },
  { nev: "Főjegykiadó", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_vkek/fojegykiado_vkek.png", szakcsoport: "IV." },
  { nev: "Főmunkamester (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_vkek/fomunkamester_vkek.png", szakcsoport: "IV." },
  { nev: "Vezető főmunkamester (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_vkek/fomunkavezeto_vkek.png", szakcsoport: "IV." },
  { nev: "Főtanácsos (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_vkek/fotanacsos_vkek.png", szakcsoport: "I." },
  { nev: "Főtiszt (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_vkek/fotiszt_vkek.png", szakcsoport: "II." },
  { nev: "Hivatalsegéd gyakornok,<br>Kisegítő munkás", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_vkek/hivatalseged_gyakornok_vkek.png", szakcsoport: "V." },
  { nev: "Hivatalsegéd<br>Segédmunkás", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_vkek/hivatalseged_vkek.png", szakcsoport: "V." },
  { nev: "Intéző (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_vkek/intezo_vkek.png", szakcsoport: "II." },
  { nev: "Jegykiadó gyakornok", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_vkek/jegykiado_gyakornok_vkek.png", szakcsoport: "IV." },
  { nev: "Jegykiadó", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_vkek/jegykiado_vkek.png", szakcsoport: "IV." },
  { nev: "Munkafelvigyázó (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_vkek/munkafelvigyazo_vkek.png", szakcsoport: "V." },
  { nev: "Munkamester (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_vkek/munkamester_vkek.png", szakcsoport: "IV." },
  { nev: "Munkavezető (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_vkek/munkavezeto_vkek.png", szakcsoport: "V." },
  { nev: "Segédtitkár<br>Üzemmérnök", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_vkek/segedtitkar_vkek.png", szakcsoport: "I." },
  { nev: "Tanácsos (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_vkek/tanacsos_vkek.png", szakcsoport: "I." },
  { nev: "Tiszt gyakornok (műszaki)", kategoria: "vallap", szolgalati_ido: "0-5",   kep: "parolin_pics/vallapok_vkek/tiszt_gyakornok_vkek.png", szakcsoport: "II." },
  { nev: "Tisztképző szaktanfolyam hallgató", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_vkek/tisztkepzo_szaktanf_halg_vkek.png" },
  { nev: "Tiszt (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_vkek/tiszt_vkek.png", szakcsoport: "II." },
  { nev: "Titkár<br>Főmérnök", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_vkek/titkar_vkek.png", szakcsoport: "I." },
  { nev: "Vezető főellenőr (műszaki)", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_vkek/foellenor_vkek.png", szakcsoport: "III." },
  { nev: "Vezető hivatalsegéd,<br>Vezetőmunkás", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_vkek/vezeto_hivatalseged_vkek.png", szakcsoport: "V." },
  { nev: "Vezető jegykiadó", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_vkek/vezeto_jegykiado_vkek.png", szakcsoport: "IV." },
  { nev: "Vezető titkár<br>Vezető főmérnök", kategoria: "vallap", szolgalati_ido: 1985,   kep: "parolin_pics/vallapok_vkek/vezeto_titkar_vkek.png", szakcsoport: "I." },
  { nev: "Ellenőr II. - Ellenőr I.", kategoria: "parolin", szolgalati_ido: 16-20,   kep: "parolin_pics/parolin_kek/ellenor2_ellenor1_kek.png", szakcsoport: "III." },
  { nev: "Felvigyázó I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_kek/felvi1_kek.png", szakcsoport: "IV." },
  { nev: "Felvigyázó III.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_kek/felvi3_kek.png", szakcsoport: "IV." },
  { nev: "Felvigyázó IV. / Felvigyázó III.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_kek/felvi4_felvi3_kek.png", szakcsoport: "IV." },
  { nev: "Főellenőr I.", kategoria: "parolin", szolgalati_ido: 26-30,   kep: "parolin_pics/parolin_kek/foellenor1_kek.png", szakcsoport: "III." },
  { nev: "Főellenőr II.", kategoria: "parolin", szolgalati_ido: 21-25,   kep: "parolin_pics/parolin_kek/foellenor2_kek.png", szakcsoport: "III." },
  { nev: "Főtiszt", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_kek/fotiszt_regi_kek.png", szakcsoport: "III." },
  { nev: "Intéző II. - Intéző I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_kek/intezo2_intezo1_kek.png", szakcsoport: "II." },
  { nev: "Mérnök Főintéző II. / Titkár II.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_kek/mernok_fointezo2_titkar2_kek.png", szakcsoport: "I." },
  { nev: "Mérnök Főtiszt / Fogalmazó", kategoria: "parolin", szolgalati_ido: 0-5,   kep: "parolin_pics/parolin_kek/mernok_fotiszt_fogalmazo_kek.png", szakcsoport: "I." },
  { nev: "Mérnök Intéző / Segédtitkár", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_kek/mernok_intezo_segedtitkar_kek.png", szakcsoport: "I." },
  { nev: "Munkás I. / Kezelő I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_kek/munkas1_kezelo1_kek.png", szakcsoport: "V." },
  { nev: "Munkás II. / Kezelő II.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_kek/munkas2_kezelo2_kek.png", szakcsoport: "V." },
  { nev: "Munkás IV. - Munkás III. / Kezelő IV. - Kezelő III.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_kek/munkas4_3_kezelo4_3_kek.png", szakcsoport: "V." },
  { nev: "Segédellenőr II. / Segédellenőr I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_kek/segedellenor2_segedellenor1_kek.png", szakcsoport: "III." },
  { nev: "Segédfelvigyázó II. / Segédfelvigyázó I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_kek/segedfel2_1_kek.png", szakcsoport: "IV." },
  { nev: "Segédfelvigyázó III.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_kek/segedfel3_kek.png", szakcsoport: "IV." },
  { nev: "Segédfelvigyázó IV.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_kek/segedfelvigyazo4_kek.png", szakcsoport: "IV." },
  { nev: "Segédmunkás IV. / Segédkezelő IV.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_kek/segedmunkas4_segedkezelo4_kek.png", szakcsoport: "V." },
  { nev: "Segédtiszt I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_kek/segedtiszt1_kek.png", szakcsoport: "III." },
  { nev: "Segédtiszt II.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_kek/segedtiszt2_kek.png", szakcsport: "III."},
  { nev: "Segédtisztképző Tanfolyam Hallgató", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_kek/segedtisztkepzo_kek.png" },
  { nev: "Segédmunkás II. / Segédmunkás I.  Segédkezelő II. / Segédkezelő I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_kek/sm1_2_sk1_2_kek.png", szakcsoport: "V." },
  { nev: "Segédmunkás III. / Segédkezelő III.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_kek/sm3_sk3_kek.png", szakcsoport: "V." },
  { nev: "Szaktechnikus / Főintéző II.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_kek/szaktechnikus_fointezo2_kek.png", szakcsoport: "I./a" },
  { nev: "Szaktechnikus / Főtiszt", kategoria: "parolin", szolgalati_ido: 0-5,   kep: "parolin_pics/parolin_kek/szaktechnikus_fotiszt_kek.png", szakcsoport: "I./a" },
  { nev: "Szaktechnikus / Intéző", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_kek/szaktechnikus_intezo_kek.png", szakcsoport: "I./a" },
  { nev: "Tiszt", kategoria: "parolin", szolgalati_ido: 0-5,   kep: "parolin_pics/parolin_kek/tiszt_regi_kek.png", szakcsoport: "II." },
  { nev: "Tisztképző Tanfolyam Hallgató", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_kek/tisztkepzo_kek.png" },
  { nev: "Felügyelő", kategoria: "parolin", szolgalati_ido: 21-25,   kep: "parolin_pics/parolin_kek/felugyelo_regi_kek.png", szakcsoport: "II." },
  { nev: "Mérnök Főintéző I. / Titkár I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_kek/mernok_fointezo1_titkar1_kek.png", szakcsoport: "I." },
  { nev: "Tanácsos II. - Tanácsos I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_kek/tanacsos1_tanacsos2_kek.png", szakcsoport: "I./a" },
  { nev: "Tanácsos II. - Tanácsos I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_kek/tanacsos2_tanacsos1_kek.png", szakcsoport: "I." },
  { nev: "Főtanácsos II. - Főtanácsos I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_kek/fotanacsos1_2_kek.png", szakcsoport: "I." },
  { nev: "Főtanácsos II. - Főtanácsos I. (fehér)", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_kek/fotanacsos1_2_feher_kek.png", szakcsoport: "I./a" },
  { nev: "Szaktechnikus Főintéző I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_kek/szaktechnikus_fointezo1_kek.png", szakcsoport: "I./a" },
  { nev: "Főintéző II. - Főintéző I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_kek/fointezo2_fointezo1_kek.png", szakcsoport: "II." },
  { nev: "Főfelügyelő", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_kek/fofelugyelo_regi_kek.png", szakcsoport: "II." },
  { nev: "Ellenőr II. - Ellenőr I.", kategoria: "parolin", szolgalati_ido: 16-20,   kep: "parolin_pics/parolin_zold/zellenor2_ellenor1.png", szakcsoport: "III." },
  { nev: "Felvigyázó I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_zold/zfelvi1.png", szakcsoport: "IV." },
  { nev: "Felvigyázó III.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_zold/zfelvi3.png", szakcsoport: "IV." },
  { nev: "Felvigyázó IV. / Felvigyázó III.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_zold/zfelvi4_felvi3.png", szakcsoport: "IV." },
  { nev: "Főellenőr I.", kategoria: "parolin", szolgalati_ido: 26-30,   kep: "parolin_pics/parolin_zold/zfoellenor1.png", szakcsoport: "III." },
  { nev: "Főellenőr II.", kategoria: "parolin", szolgalati_ido: 21-25,   kep: "parolin_pics/parolin_zold/zfoellenor2.png", szakcsoport: "III." },
  { nev: "Főtiszt", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_zold/zfotiszt_regi.png", szakcsoport: "III." },
  { nev: "Intéző II. - Intéző I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_zold/zintezo2_intezo1.png", szakcsoport: "II." },
  { nev: "Mérnök Főintéző II. / Titkár II.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_zold/zmernok_fointezo2_titkar2.png", szakcsoport: "I." },
  { nev: "Mérnök Főtiszt / Fogalmazó", kategoria: "parolin", szolgalati_ido: 0-5,   kep: "parolin_pics/parolin_zold/zmernok_fotiszt_fogalmazo.png", szakcsoport: "I." },
  { nev: "Mérnök Intéző / Segédtitkár", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_zold/zmernok_intezo_segedtitkar.png", szakcsoport: "I." },
  { nev: "Munkás I. / Kezelő I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_zold/zmunkas1_kezelo1.png", szakcsoport: "V." },
  { nev: "Munkás II. / Kezelő II.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_zold/zmunkas2_kezelo2.png", szakcsoport: "V." },
  { nev: "Munkás IV. - Munkás III. / Kezelő IV. - Kezelő III.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_zold/zmunkas4_3_kezelo4_3.png", szakcsoport: "V." },
  { nev: "Segédellenőr II. / Segédellenőr I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_zold/zsegedellenor2_segedellenor1.png", szakcsoport: "III." },
  { nev: "Segédfelvigyázó II. / Segédfelvigyázó I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_zold/zsegedfel2_1.png", szakcsoport: "IV." },
  { nev: "Segédfelvigyázó III.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_zold/zsegedfel3.png", szakcsoport: "IV." },
  { nev: "Segédfelvigyázó IV.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_zold/zsegedfelvigyazo4.png", szakcsoport: "IV." },
  { nev: "Segédmunkás IV. / Segédkezelő IV.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_zold/zsegedmunkas4_segedkezelo4.png", szakcsoport: "V." },
  { nev: "Segédtiszt I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_zold/zsegedtiszt1.png", szakcsoport: "III." },
  { nev: "Segédtiszt II.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_zold/zsegedtiszt2.png", szakcsport: "III."},
  { nev: "Segédtisztképző Tanfolyam Hallgató", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_zold/zsegedtisztkepzo.png" },
  { nev: "Segédmunkás II. / Segédmunkás I.  Segédkezelő II. / Segédkezelő I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_zold/zsm1_2_sk1_2.png", szakcsoport: "V." },
  { nev: "Segédmunkás III. / Segédkezelő III.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_zold/zsm3_sk3.png", szakcsoport: "V." },
  { nev: "Szaktechnikus / Főintéző II.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_zold/zszaktechnikus_fointezo2.png", szakcsoport: "I./a" },
  { nev: "Szaktechnikus / Főtiszt", kategoria: "parolin", szolgalati_ido: 0-5,   kep: "parolin_pics/parolin_zold/zszaktechnikus_fotiszt.png", szakcsoport: "I./a" },
  { nev: "Szaktechnikus / Intéző", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_zold/zszaktechnikus_intezo.png", szakcsoport: "I./a" },
  { nev: "Tiszt", kategoria: "parolin", szolgalati_ido: 0-5,   kep: "parolin_pics/parolin_zold/ztiszt_regi.png", szakcsoport: "II." },
  { nev: "Tisztképző Tanfolyam Hallgató", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_zold/ztisztkepzo.png" },
  { nev: "Felügyelő", kategoria: "parolin", szolgalati_ido: 21-25,   kep: "parolin_pics/parolin_zold/felugyelo_regi_zold.png", szakcsoport: "II." },
  { nev: "Mérnök Főintéző I. / Titkár I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_zold/mernok_fointezo1_titkar1_zold.png", szakcsoport: "I." },
  { nev: "Tanácsos II. - Tanácsos I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_zold/tanacsos1_tanacsos2_zold.png", szakcsoport: "I./a" },
  { nev: "Tanácsos II. - Tanácsos I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_zold/tanacsos2_tanacsos1_zold.png", szakcsoport: "I." },
  { nev: "Főtanácsos II. - Főtanácsos I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_zold/fotanacsos1_2_zold.png", szakcsoport: "I." },
  { nev: "Főtanácsos II. - Főtanácsos I. (fehér)", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_zold/fotanacsos1_2_feher_zold.png", szakcsoport: "I./a" },
  { nev: "Szaktechnikus Főintéző I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_zold/szaktechnikus_fointezo1_zold.png", szakcsoport: "I./a" },
  { nev: "Főintéző II. - Főintéző I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_zold/fointezo2_fointezo1_zold.png", szakcsoport: "II." },
  { nev: "Főfelügyelő", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_zold/fofelugyelo_regi_zold.png", szakcsoport: "II." },
  { nev: "Ellenőr II. - Ellenőr I.", kategoria: "parolin", szolgalati_ido: 16-20,   kep: "parolin_pics/parolin_barna/bellenor2_ellenor1.png", szakcsoport: "III." },
  { nev: "Felvigyázó I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_barna/bfelvi1.png", szakcsoport: "IV." },
  { nev: "Felvigyázó III.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_barna/bfelvi3.png", szakcsoport: "IV." },
  { nev: "Felvigyázó IV. / Felvigyázó III.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_barna/bfelvi4_felvi3.png", szakcsoport: "IV." },
  { nev: "Főellenőr I.", kategoria: "parolin", szolgalati_ido: 26-30,   kep: "parolin_pics/parolin_barna/bfoellenor1.png", szakcsoport: "III." },
  { nev: "Főellenőr II.", kategoria: "parolin", szolgalati_ido: 21-25,   kep: "parolin_pics/parolin_barna/bfoellenor2.png", szakcsoport: "III." },
  { nev: "Főtiszt", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_barna/bfotiszt_regi.png", szakcsoport: "III." },
  { nev: "Intéző II. - Intéző I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_barna/bintezo2_intezo1.png", szakcsoport: "II." },
  { nev: "Mérnök Főintéző II. / Titkár II.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_barna/bmernok_fointezo2_titkar2.png", szakcsoport: "I." },
  { nev: "Mérnök Főtiszt / Fogalmazó", kategoria: "parolin", szolgalati_ido: 0-5,   kep: "parolin_pics/parolin_barna/bmernok_fotiszt_fogalmazo.png", szakcsoport: "I." },
  { nev: "Mérnök Intéző / Segédtitkár", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_barna/bmernok_intezo_segedtitkar.png", szakcsoport: "I." },
  { nev: "Munkás I. / Kezelő I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_barna/bmunkas1_kezelo1.png", szakcsoport: "V." },
  { nev: "Munkás II. / Kezelő II.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_barna/bmunkas2_kezelo2.png", szakcsoport: "V." },
  { nev: "Munkás IV. - Munkás III. / Kezelő IV. - Kezelő III.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_barna/bmunkas4_3_kezelo4_3.png", szakcsoport: "V." },
  { nev: "Segédellenőr II. / Segédellenőr I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_barna/bsegedellenor2_segedellenor1.png", szakcsoport: "III." },
  { nev: "Segédfelvigyázó II. / Segédfelvigyázó I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_barna/bsegedfel2_1.png", szakcsoport: "IV." },
  { nev: "Segédfelvigyázó III.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_barna/bsegedfel3.png", szakcsoport: "IV." },
  { nev: "Segédfelvigyázó IV.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_barna/bsegedfelvigyazo4.png", szakcsoport: "IV." },
  { nev: "Segédmunkás IV. / Segédkezelő IV.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_barna/bsegedmunkas4_segedkezelo4.png", szakcsoport: "V." },
  { nev: "Segédtiszt I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_barna/bsegedtiszt1.png", szakcsoport: "III." },
  { nev: "Segédtiszt II.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_barna/bsegedtiszt2.png", szakcsport: "III."},
  { nev: "Segédtisztképző Tanfolyam Hallgató", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_barna/bsegedtisztkepzo.png" },
  { nev: "Segédmunkás II. / Segédmunkás I.  Segédkezelő II. / Segédkezelő I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_barna/bsm1_2_sk1_2.png", szakcsoport: "V." },
  { nev: "Segédmunkás III. / Segédkezelő III.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_barna/bsm3_sk3.png", szakcsoport: "V." },
  { nev: "Szaktechnikus / Főintéző II.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_barna/bszaktechnikus_fointezo2.png", szakcsoport: "I./a" },
  { nev: "Szaktechnikus / Főtiszt", kategoria: "parolin", szolgalati_ido: 0-5,   kep: "parolin_pics/parolin_barna/bszaktechnikus_fotiszt.png", szakcsoport: "I./a" },
  { nev: "Szaktechnikus / Intéző", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_barna/bszaktechnikus_intezo.png", szakcsoport: "I./a" },
  { nev: "Tiszt", kategoria: "parolin", szolgalati_ido: 0-5,   kep: "parolin_pics/parolin_barna/btiszt_regi.png", szakcsoport: "II." },
  { nev: "Tisztképző Tanfolyam Hallgató", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_barna/btisztkepzo.png" },
  { nev: "Felügyelő", kategoria: "parolin", szolgalati_ido: 21-25,   kep: "parolin_pics/parolin_barna/felugyelo_regi_barna.png", szakcsoport: "II." },
  { nev: "Mérnök Főintéző I. / Titkár I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_barna/mernok_fointezo1_titkar1_barna.png", szakcsoport: "I." },
  { nev: "Tanácsos II. - Tanácsos I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_barna/tanacsos1_tanacsos2_barna.png", szakcsoport: "I./a" },
  { nev: "Tanácsos II. - Tanácsos I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_barna/tanacsos2_tanacsos1_barna.png", szakcsoport: "I." },
  { nev: "Főtanácsos II. - Főtanácsos I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_barna/fotanacsos1_2_barna.png", szakcsoport: "I." },
  { nev: "Főtanácsos II. - Főtanácsos I. (fehér)", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_barna/fotanacsos1_2_feher_barna.png", szakcsoport: "I./a" },
  { nev: "Szaktechnikus Főintéző I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_barna/szaktechnikus_fointezo1_barna.png", szakcsoport: "I./a" },
  { nev: "Főintéző II. - Főintéző I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_barna/fointezo2_fointezo1_barna.png", szakcsoport: "II." },
  { nev: "Főfelügyelő", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_barna/fofelugyelo_regi_barna.png", szakcsoport: "II." },
  { nev: "Ellenőr II. - Ellenőr I.", kategoria: "parolin", szolgalati_ido: 16-20,   kep: "parolin_pics/parolin_fekete/ellenor2_ellenor1_fekete.png", szakcsoport: "III." },
  { nev: "Felvigyázó I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_fekete/felvi1_fekete.png", szakcsoport: "IV." },
  { nev: "Felvigyázó III.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_fekete/felvi3_fekete.png", szakcsoport: "IV." },
  { nev: "Felvigyázó IV. / Felvigyázó III.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_fekete/felvi4_felvi3_fekete.png", szakcsoport: "IV." },
  { nev: "Főellenőr I.", kategoria: "parolin", szolgalati_ido: 26-30,   kep: "parolin_pics/parolin_fekete/foellenor1_fekete.png", szakcsoport: "III." },
  { nev: "Főellenőr II.", kategoria: "parolin", szolgalati_ido: 21-25,   kep: "parolin_pics/parolin_fekete/foellenor2_fekete.png", szakcsoport: "III." },
  { nev: "Főtiszt", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_fekete/fotiszt_regi_fekete.png", szakcsoport: "III." },
  { nev: "Intéző II. - Intéző I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_fekete/intezo2_intezo1_fekete.png", szakcsoport: "II." },
  { nev: "Mérnök Főintéző II. / Titkár II.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_fekete/mernok_fointezo2_titkar2_fekete.png", szakcsoport: "I." },
  { nev: "Mérnök Főtiszt / Fogalmazó", kategoria: "parolin", szolgalati_ido: 0-5,   kep: "parolin_pics/parolin_fekete/mernok_fotiszt_fogalmazo_fekete.png", szakcsoport: "I." },
  { nev: "Mérnök Intéző / Segédtitkár", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_fekete/mernok_intezo_segedtitkar_fekete.png", szakcsoport: "I." },
  { nev: "Munkás I. / Kezelő I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_fekete/munkas1_kezelo1_fekete.png", szakcsoport: "V." },
  { nev: "Munkás II. / Kezelő II.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_fekete/munkas2_kezelo2_fekete.png", szakcsoport: "V." },
  { nev: "Munkás IV. - Munkás III. / Kezelő IV. - Kezelő III.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_fekete/munkas4_3_kezelo4_3_fekete.png", szakcsoport: "V." },
  { nev: "Segédellenőr II. / Segédellenőr I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_fekete/segedellenor2_segedellenor1_fekete.png", szakcsoport: "III." },
  { nev: "Segédfelvigyázó II. / Segédfelvigyázó I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_fekete/segedfel2_1_fekete.png", szakcsoport: "IV." },
  { nev: "Segédfelvigyázó III.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_fekete/segedfel3_fekete.png", szakcsoport: "IV." },
  { nev: "Segédfelvigyázó IV.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_fekete/segedfelvigyazo4_fekete.png", szakcsoport: "IV." },
  { nev: "Segédmunkás IV. / Segédkezelő IV.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_fekete/segedmunkas4_segedkezelo4_fekete.png", szakcsoport: "V." },
  { nev: "Segédtiszt I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_fekete/segedtiszt1_fekete.png", szakcsoport: "III." },
  { nev: "Segédtiszt II.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_fekete/segedtiszt2_fekete.png", szakcsport: "III."},
  { nev: "Segédtisztképző Tanfolyam Hallgató", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_fekete/segedtisztkepzo_fekete.png" },
  { nev: "Segédmunkás II. / Segédmunkás I.  Segédkezelő II. / Segédkezelő I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_fekete/sm1_2_sk1_2_fekete.png", szakcsoport: "V." },
  { nev: "Segédmunkás III. / Segédkezelő III.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_fekete/sm3_sk3_fekete.png", szakcsoport: "V." },
  { nev: "Szaktechnikus / Főintéző II.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_fekete/szaktechnikus_fointezo2_fekete.png", szakcsoport: "I./a" },
  { nev: "Szaktechnikus / Főtiszt", kategoria: "parolin", szolgalati_ido: 0-5,   kep: "parolin_pics/parolin_fekete/szaktechnikus_fotiszt_fekete.png", szakcsoport: "I./a" },
  { nev: "Szaktechnikus / Intéző", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_fekete/szaktechnikus_intezo_fekete.png", szakcsoport: "I./a" },
  { nev: "Tiszt", kategoria: "parolin", szolgalati_ido: 0-5,   kep: "parolin_pics/parolin_fekete/tiszt_regi_fekete.png", szakcsoport: "II." },
  { nev: "Tisztképző Tanfolyam Hallgató", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_fekete/tisztkepzo_fekete.png" },
  { nev: "Felügyelő", kategoria: "parolin", szolgalati_ido: 21-25,   kep: "parolin_pics/parolin_fekete/felugyelo_regi_fekete.png", szakcsoport: "II." },
  { nev: "Mérnök Főintéző I. / Titkár I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_fekete/mernok_fointezo1_titkar1_fekete.png", szakcsoport: "I." },
  { nev: "Tanácsos II. - Tanácsos I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_fekete/tanacsos1_tanacsos2_fekete.png", szakcsoport: "I./a" },
  { nev: "Tanácsos II. - Tanácsos I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_fekete/tanacsos2_tanacsos1_fekete.png", szakcsoport: "I." },
  { nev: "Főtanácsos II. - Főtanácsos I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_fekete/fotanacsos1_2_fekete.png", szakcsoport: "I." },
  { nev: "Főtanácsos II. - Főtanácsos I. (fehér)", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_fekete/fotanacsos1_2_feher_fekete.png", szakcsoport: "I./a" },
  { nev: "Szaktechnikus Főintéző I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_fekete/szaktechnikus_fointezo1_fekete.png", szakcsoport: "I./a" },
  { nev: "Főintéző II. - Főintéző I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_fekete/fointezo2_fointezo1_fekete.png", szakcsoport: "II." },
  { nev: "Főfelügyelő", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_fekete/fofelugyelo_regi_fekete.png", szakcsoport: "II." },
  { nev: "Ellenőr II. - Ellenőr I.", kategoria: "parolin", szolgalati_ido: 16-20,   kep: "parolin_pics/parolin_lila/ellenor2_ellenor1_lila.png", szakcsoport: "III." },
  { nev: "Felvigyázó I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_lila/felvi1_lila.png", szakcsoport: "IV." },
  { nev: "Felvigyázó III.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_lila/felvi3_lila.png", szakcsoport: "IV." },
  { nev: "Felvigyázó IV. / Felvigyázó III.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_lila/felvi4_felvi3_lila.png", szakcsoport: "IV." },
  { nev: "Főellenőr I.", kategoria: "parolin", szolgalati_ido: 26-30,   kep: "parolin_pics/parolin_lila/foellenor1_lila.png", szakcsoport: "III." },
  { nev: "Főellenőr II.", kategoria: "parolin", szolgalati_ido: 21-25,   kep: "parolin_pics/parolin_lila/foellenor2_lila.png", szakcsoport: "III." },
  { nev: "Főtiszt", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_lila/fotiszt_regi_lila.png", szakcsoport: "III." },
  { nev: "Intéző II. - Intéző I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_lila/intezo2_intezo1_lila.png", szakcsoport: "II." },
  { nev: "Mérnök Főintéző II. / Titkár II.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_lila/mernok_fointezo2_titkar2_lila.png", szakcsoport: "I." },
  { nev: "Mérnök Főtiszt / Fogalmazó", kategoria: "parolin", szolgalati_ido: 0-5,   kep: "parolin_pics/parolin_lila/mernok_fotiszt_fogalmazo_lila.png", szakcsoport: "I." },
  { nev: "Mérnök Intéző / Segédtitkár", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_lila/mernok_intezo_segedtitkar_lila.png", szakcsoport: "I." },
  { nev: "Munkás I. / Kezelő I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_lila/munkas1_kezelo1_lila.png", szakcsoport: "V." },
  { nev: "Munkás II. / Kezelő II.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_lila/munkas2_kezelo2_lila.png", szakcsoport: "V." },
  { nev: "Munkás IV. - Munkás III. / Kezelő IV. - Kezelő III.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_lila/munkas4_3_kezelo4_3_lila.png", szakcsoport: "V." },
  { nev: "Segédellenőr II. / Segédellenőr I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_lila/segedellenor2_segedellenor1_lila.png", szakcsoport: "III." },
  { nev: "Segédfelvigyázó II. / Segédfelvigyázó I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_lila/segedfel2_1_lila.png", szakcsoport: "IV." },
  { nev: "Segédfelvigyázó III.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_lila/segedfel3_lila.png", szakcsoport: "IV." },
  { nev: "Segédfelvigyázó IV.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_lila/segedfelvigyazo4_lila.png", szakcsoport: "IV." },
  { nev: "Segédmunkás IV. / Segédkezelő IV.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_lila/segedmunkas4_segedkezelo4_lila.png", szakcsoport: "V." },
  { nev: "Segédtiszt I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_lila/segedtiszt1_lila.png", szakcsoport: "III." },
  { nev: "Segédtiszt II.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_lila/segedtiszt2_lila.png", szakcsport: "III."},
  { nev: "Segédtisztképző Tanfolyam Hallgató", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_lila/segedtisztkepzo_lila.png" },
  { nev: "Segédmunkás II. / Segédmunkás I.  Segédkezelő II. / Segédkezelő I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_lila/sm1_2_sk1_2_lila.png", szakcsoport: "V." },
  { nev: "Segédmunkás III. / Segédkezelő III.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_lila/sm3_sk3_lila.png", szakcsoport: "V." },
  { nev: "Szaktechnikus / Főintéző II.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_lila/szaktechnikus_fointezo2_lila.png", szakcsoport: "I./a" },
  { nev: "Szaktechnikus / Főtiszt", kategoria: "parolin", szolgalati_ido: 0-5,   kep: "parolin_pics/parolin_lila/szaktechnikus_fotiszt_lila.png", szakcsoport: "I./a" },
  { nev: "Szaktechnikus / Intéző", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_lila/szaktechnikus_intezo_lila.png", szakcsoport: "I./a" },
  { nev: "Tiszt", kategoria: "parolin", szolgalati_ido: 0-5,   kep: "parolin_pics/parolin_lila/tiszt_regi_lila.png", szakcsoport: "II." },
  { nev: "Tisztképző Tanfolyam Hallgató", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_lila/tisztkepzo_lila.png" },
  { nev: "Felügyelő", kategoria: "parolin", szolgalati_ido: 21-25,   kep: "parolin_pics/parolin_lila/felugyelo_regi_lila.png", szakcsoport: "II." },
  { nev: "Mérnök Főintéző I. / Titkár I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_lila/mernok_fointezo1_titkar1_lila.png", szakcsoport: "I." },
  { nev: "Tanácsos II. - Tanácsos I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_lila/tanacsos1_tanacsos2_lila.png", szakcsoport: "I./a" },
  { nev: "Tanácsos II. - Tanácsos I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_lila/tanacsos2_tanacsos1_lila.png", szakcsoport: "I." },
  { nev: "Főtanácsos II. - Főtanácsos I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_lila/fotanacsos1_2_lila.png", szakcsoport: "I." },
  { nev: "Főtanácsos II. - Főtanácsos I. (fehér)", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_lila/fotanacsos1_2_feher_lila.png", szakcsoport: "I./a" },
  { nev: "Szaktechnikus Főintéző I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_lila/szaktechnikus_fointezo1_lila.png", szakcsoport: "I./a" },
  { nev: "Főintéző II. - Főintéző I.", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_lila/fointezo2_fointezo1_lila.png", szakcsoport: "II." },
  { nev: "Főfelügyelő", kategoria: "parolin", szolgalati_ido: 1985,   kep: "parolin_pics/parolin_lila/fofelugyelo_regi_lila.png", szakcsoport: "II." },
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
          <div class="badge-container">
            ${getBadge(item.kep)}
          </div>
          <h3>${item.nev}</h3>
          <p><strong>Kategória:</strong> ${item.kategoria}</p>
          <p><strong>Év:</strong> ${item.szolgalati_ido}</p>
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
  const szin = document.getElementById('szin')?.value.toLowerCase();
  const szolgalati_ido = document.getElementById('szolgalati_ido').value;

  // 1) szűrés
  let szurt = cuccok.filter(c =>
    (kategoria === '' || c.kategoria === kategoria) &&
    (kulcsszo  === '' || c.nev.toLowerCase().includes(kulcsszo)) &&
    (szakcsoport === '' || c.szakcsoport === szakcsoport)&&
    (szin === '' || c.kep.toLowerCase().includes(szin))&&
    (szolgalati_ido === '' || c.szolgalati_ido === szolgalati_ido)
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
  document.getElementById('szin').value = '';
  document.getElementById('szolgalati_ido').value = '';
  megjelenites(cuccok);
}

// Oldal betöltésekor első körben mutassa az összeset
window.onload = () => {
  megjelenites(cuccok);

  document.getElementById('kategoria').addEventListener('change', szures);
  document.getElementById('kulcsszo').addEventListener('input', szures);
  document.getElementById('rendezes').addEventListener('change', szures);
  document.getElementById('szakcsoport').addEventListener('change', szures);
  document.getElementById('szin')?.addEventListener('change', szures);
  document.getElementById('szolgalati_ido').addEventListener('change', szures);
};

document.getElementById('kategoria').addEventListener('change', function() {
  const kategoriavalasztas = this.value;
  const szinSelect = document.getElementById('szin');

  // Összes lehetséges opció
  const osszes = [
    {value: "", text: "Összes szakszolgálat"},
    {value: "parolin_piros", text: "Forgalmi, kereskedelmi szakszolgálat"},
    {value: "parolin_zold", text: "Pályafenntartási szakszolgálat"},
    {value: "parolin_kek", text: "Vontatási és műhely szakszolgálat"},
    {value: "parolin_barna", text: "Távközlő és biztosítóberendezési szakszolgálat"},
    {value: "parolin_fekete", text: "Egészségügyi szakszolgálat"},
    {value: "parolin_lila", text: "Egyéb szakszolgálat"},
    {value: "vallapok_piros", text: "Forgalmi- és kereskedelmi szakszolgálat"},
    {value: "vallapok_zold", text: "Pályaépítési- pályafenntartási szakszolgálat"},
    {value: "vallapok_vkek", text: "Hídépítési- hídfenntartási szakszolgálat"},
    {value: "vallapok_skek", text: "Vonatmozgósítási- és műhelyi szakszolgálat"},
    {value: "vallapok_barna", text: "Távközlő- és biztosítóberendezési szakszolgálat"},
    {value: "vallapok_fekete", text: "Egészségügyi szakszolgálat"},
    {value: "vallapok_lila", text: "Egyéb szakszolgálat"},
    {value: "egyeb", text: "Egyéb"}
  ];

  let engedelyezett = [];

  // Kategória szerinti engedélyezett szakszolgálatok
  if (kategoriavalasztas === "parolin") {
    engedelyezett = ["parolin_piros", "parolin_kek", "parolin_zold", "parolin_barna", "parolin_fekete", "parolin_lila", "egyeb"];
  } else if (kategoriavalasztas === "vallap") {
    // A vállapok esetén piros és egyéb nincs, de kék is szerepelhet
    engedelyezett = ["vallapok_zold", "vallapok_barna", "vallapok_fekete", "vallapok_lila", "vallapok_skek", "vallapok_vkek", "vallapok_piros"];
  } else {
    // Összes kategória: minden opció elérhető
    engedelyezett = ["parolin_piros", "parolin_kek", "parolin_zold", "parolin_barna", "parolin_fekete", "parolin_lila", "egyeb", "vallapok_zold", "vallapok_barna", "vallapok_fekete", "vallapok_lila", "vallapok_skek", "vallapok_vkek", "vallapok_piros"];
  }
  szinSelect.innerHTML = '';
  osszes.forEach(opt => {
    if (engedelyezett.includes(opt.value) || opt.value === "") {
      const option = document.createElement('option');
      option.value = opt.value;
      option.textContent = opt.text;
      szinSelect.appendChild(option);
    }
  });

  // Frissítés a szűréshez
  szures();
});

document.getElementById('kategoria').addEventListener('change', function() {
  const kategoriavalasztas = this.value;
  const szakcsoportSelect = document.getElementById('szakcsoport');

  // Összes lehetséges opció
  const osszes = [
    {value: "", text: "Összes szakcsoport"},
    {value: "I.", text: "I. szakcsoport"},
    {value: "I./a", text: "I./a szakcsoport"},
    {value: "II.", text: "II. szakcsoport"},
    {value: "III.", text: "III. szakcsoport"},
    {value: "IV.", text: "IV. szakcsoport"},
    {value: "V.", text: "V. szakcsoport"}
  ];

  let engedelyezett = [];

  // Kategória szerinti engedélyezett szakszolgálatok
  if (kategoriavalasztas === "parolin") {
    engedelyezett = ["I.", "I./a", "II.", "III.", "IV.", "V."];
  } else if (kategoriavalasztas === "vallap") {
    // A vállapok esetén piros és egyéb nincs, de kék is szerepelhet
    engedelyezett = ["I.", "II.", "III.", "IV.", "V."];
  } else {
    // Összes kategória: minden opció elérhető
    engedelyezett = ["I.", "I./a", "II.", "III.", "IV.", "V."];
  }
  szakcsoportSelect.innerHTML = '';
  osszes.forEach(opt => {
    if (engedelyezett.includes(opt.value) || opt.value === "") {
      const option = document.createElement('option');
      option.value = opt.value;
      option.textContent = opt.text;
      szakcsoportSelect.appendChild(option);
    }
  });

  // Frissítés a szűréshez
  szures();
});


function getBadge(imagePath) {
  if (imagePath.includes("parolin_pics/parolin_piros"))  return '<span class="badge badge-red">Forgalmi, kereskedelmi</span>';
  if (imagePath.includes("parolin_pics/parolin_kek"))    return '<span class="badge badge-blue">Vontatás és műhely</span>';
  if (imagePath.includes("parolin_pics/parolin_zold"))   return '<span class="badge badge-green">Pályafenttartás</span>';
  if (imagePath.includes("parolin_pics/parolin_barna"))  return '<span class="badge badge-brown">Távközlő és biztosítóberendezési</span>';
  if (imagePath.includes("parolin_pics/parolin_fekete"))  return '<span class="badge badge-black">Egészségügyi</span>';
  if (imagePath.includes("parolin_pics/parolin_lila"))  return '<span class="badge badge-lila">Egyéb </span>';
  if (imagePath.includes("igazgato"))   return '<span class="badge badge-vallap">Vezetőség</span>';
  if (imagePath.includes("egyeb"))   return '<span class="badge badge-egyeb">Egyéb</span>';
  if (imagePath.includes("parolin_pics/vallapok_piros"))   return '<span class="badge badge-red">Forgalmi- és Kereskedelmi</span>';
  if (imagePath.includes("parolin_pics/vallapok_zold"))   return '<span class="badge badge-green">Pályaépítési- Pályafenntartási</span>';
  if (imagePath.includes("parolin_pics/vallapok_vkek"))   return '<span class="badge badge-lblue">Hídépítési- Hídfenntartási</span>';
  if (imagePath.includes("parolin_pics/vallapok_skek"))   return '<span class="badge badge-blue">Vonatmozgosítási- és Műhelyi</span>';
  if (imagePath.includes("parolin_pics/vallapok_barna"))   return '<span class="badge badge-brown">Távközlő- és Biztosítóberendezési</span>';
  if (imagePath.includes("parolin_pics/vallapok_fekete"))   return '<span class="badge badge-black">Egészségügyi</span>';
  if (imagePath.includes("parolin_pics/vallapok_lila"))   return '<span class="badge badge-lila">Egyéb</span>';
  return '';
}
