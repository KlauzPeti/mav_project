// A teljes lista
const cuccok = [
  { nev: "Ellenőr II. - Ellenőr I.", kategoria: "parolin", ev: 1975,   kep: "parolin_pics/uj piros/ellenor2_ellenor1.png", szakcsoport: "III." },
  { nev: "Főellenőr I.", kategoria: "parolin", ev: 1975,   kep: "parolin_pics/uj piros/foellenor1.png", szakcsoport: "III." },
  { nev: "Főellenőr II.", kategoria: "parolin", ev: 1975,   kep: "parolin_pics/uj piros/foellenor2.png", szakcsoport: "III." },
  { nev: "Felügyelő", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/felugyelo_regi.png", szakcsoport: "II." },
  { nev: "Felvigyázó I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/felvi1.png", szakcsoport: "IV." },
  { nev: "Főfelügyelő", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/fofelugyelo_regi.png", szakcsoport: "II." },
  { nev: "Főintéző II. - Főintéző I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/fointezo2_fointezo1.png", szakcsoport: "II." },
  { nev: "Főtanácsos II. - Főtanácsos I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/fotanacsos1_2.png", szakcsoport: "I." },
  { nev: "Főtanácsos II. - Főtanácsos I. (fehér)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/fotanacsos1_2_feher.png", szakcsoport: "I./a" },
  { nev: "Főtiszt", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/fotiszt_regi.png", szakcsoport: "III." },
  { nev: "Intéző II. - Intéző I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/intezo2_intezo1.png", szakcsoport: "II." },
  { nev: "Karszalag", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/egyeb/Karszalag.png" },
  { nev: "Mérnök Főintéző I. / Titkár I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/mernok_fointezo1_titkar1.png", szakcsoport: "I." },
  { nev: "Mérnök Főintéző II. / Titkár II.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/mernok_fointezo2_titkar2.png", szakcsoport: "I." },
  { nev: "Mérnök Főtiszt / Fogalmazó", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/mernok_fotiszt_fogalmazo.png", szakcsoport: "I." },
  { nev: "Mérnök Intéző / Segédtitkár", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/mernok_intezo_segedtitkar.png", szakcsoport: "I." },
  { nev: "Munkás I. / Kezelő I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/munkas1_kezelo1.png", szakcsoport: "V." },
  { nev: "Munkás II. / Kezelő II.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/munkas2_kezelo2.png", szakcsoport: "V." },
  { nev: "Felvigyázó III.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/felvi3.png", szakcsoport: "IV." },
  { nev: "Felvigyázó IV. / Felvigyázó III.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/felvi4_felvi3.png", szakcsoport: "IV." },
  { nev: "Munkás IV. - Munkás III. / Kezelő IV. - Kezelő III.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/munkas4_3_kezelo4_3.png", szakcsoport: "V." },
  { nev: "Sapkajelvény", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/egyeb/Sapkajelveny.png" },
  { nev: "Segédellenőr II. / Segédellenőr I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/segedellenor2_segedellenor1.png", szakcsoport: "III." },
  { nev: "Segédfelvigyázó II. / Segédfelvigyázó I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/segedfel2_1.png", szakcsoport: "IV." },
  { nev: "Segédfelvigyázó III.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/segedfel3.png", szakcsoport: "IV." },
  { nev: "Segédfelvigyázó IV.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/segedfelvigyazo4.png", szakcsoport: "IV." },
  { nev: "Segédtiszt I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/segedtiszt1.png", szakcsoport: "III." },
  { nev: "Segédtiszt II.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/segedtiszt2.png", szakcsport: "III."},
  { nev: "Segédtisztképző Tanfolyam Hallgató", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/segedtisztkepzo.png" },
  { nev: "Segédmunkás II. / Segédmunkás I.  Segédkezelő II. / Segédkezelő I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/sm1_2_sk1_2.png", szakcsoport: "V." },
  { nev: "Segédmunkás III. / Segédkezelő III.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/sm3_sk3.png", szakcsoport: "V." },
  { nev: "Segédmunkás IV. / Segédkezelő IV.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/segedmunkas4_segedkezelo4.png", szakcsoport: "V." },
  { nev: "Szaktechnikus Főintéző I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/szaktechnikus_fointezo1.png", szakcsoport: "I./a" },
  { nev: "Szaktechnikus / Főintéző II.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/szaktechnikus_fointezo2.png", szakcsoport: "I./a" },
  { nev: "Szaktechnikus / Főtiszt", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/szaktechnikus_fotiszt.png", szakcsoport: "I./a" },
  { nev: "Szaktechnikus / Intéző", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/szaktechnikus_intezo.png", szakcsoport: "I./a" },
  { nev: "Tanácsos II. - Tanácsos I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/tanacsos1_tanacsos2.png", szakcsoport: "I./a" },
  { nev: "Tanácsos II. - Tanácsos I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/tanacsos2_tanacsos1.png", szakcsoport: "I." },
  { nev: "Tiszt", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/tiszt_regi.png", szakcsoport: "II." },
  { nev: "Tisztképző Tanfolyam Hallgató", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj piros/tisztkepzo.png" },
  { nev: "Igazgatóhelyettes", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/igazgatohelyettes.png" },
  { nev: "Igazgató", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/igazgato.png" },
  { nev: "Főigazgató", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/foigazgato.png" },
  { nev: "Vezérigazgató", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/vezerigazgato.png" },
  { nev: "Állomáselöljáró", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/allomaseloljaro.png", szakcsoport: "III." },
  { nev: "Állomásfelvigyázó", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/allomasfelvigyazo.png", szakcsoport: "III." },
  { nev: "Állomásfelvigyázó gyakornok", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/allomasfelvigyazo_gyakornok.png", szakcsoport: "III." },
  { nev: "Ellenőr (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/ellenor.png", szakcsoport: "III." },
  { nev: "Főállomáselöljáró", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/foallomaseloljaro.png", szakcsoport: "III." },
  { nev: "Felügyelő (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/felugyelo.png", szakcsoport: "II." },
  { nev: "Főellenőr (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/foellenor.png", szakcsoport: "III." },
  { nev: "Főfelügyelő (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/fofelugyelo.png", szakcsoport: "II." },
  { nev: "Fogalmazó gyakornok<br>Mérnök gyakornok", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/fogalmazo_gyakornok.png", szakcsoport: "I." },
  { nev: "Fogalmazó<br>Mérnök", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/fogalmazo.png", szakcsoport: "I." },
  { nev: "Főhivatalsegéd,<br>Munkás", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/fohivatalseged.png", szakcsoport: "V." },
  { nev: "Főintéző (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/fointezo.png", szakcsoport: "II." },
  { nev: "Főjegykiadó", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/fojegykiado.png", szakcsoport: "IV." },
  { nev: "Főmunkamester (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/fomunkamester.png", szakcsoport: "IV." },
  { nev: "Vezető főmunkamester (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/fomunkavezeto.png", szakcsoport: "IV." },
  { nev: "Főtanácsos (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/fotanacsos.png", szakcsoport: "I." },
  { nev: "Főtiszt (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/fotiszt.png", szakcsoport: "II." },
  { nev: "Hivatalsegéd gyakornok,<br>Kisegítő munkás", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/hivatalseged_gyakornok.png", szakcsoport: "V." },
  { nev: "Hivatalsegéd<br>Segédmunkás", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/hivatalseged.png", szakcsoport: "V." },
  { nev: "Intéző (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/intezo.png", szakcsoport: "II." },
  { nev: "Jegykiadó gyakornok", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/jegykiado_gyakornok.png", szakcsoport: "IV." },
  { nev: "Jegykiadó", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/jegykiado.png", szakcsoport: "IV." },
  { nev: "Munkafelvigyázó (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/munkafelvigyazo.png", szakcsoport: "V." },
  { nev: "Munkamester (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/munkamester.png", szakcsoport: "IV." },
  { nev: "Munkavezető (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/munkavezeto.png", szakcsoport: "V." },
  { nev: "Segédtitkár<br>Üzemmérnök", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/segedtitkar.png", szakcsoport: "I." },
  { nev: "Tanácsos (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/tanacsos.png", szakcsoport: "I." },
  { nev: "Tiszt gyakornok (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/tiszt_gyakornok.png", szakcsoport: "II." },
  { nev: "Tisztképző szaktanfolyam hallgató", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/tisztkepzo_szaktanf_halg.png" },
  { nev: "Tiszt (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/tiszt.png", szakcsoport: "II." },
  { nev: "Titkár<br>Főmérnök", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/titkar.png", szakcsoport: "I." },
  { nev: "Vezető főellenőr (műszaki)", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/foellenor.png", szakcsoport: "III." },
  { nev: "Vezető hivatalsegéd,<br>Vezetőmunkás", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/vezeto_hivatalseged.png", szakcsoport: "V." },
  { nev: "Vezető jegykiadó", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/vezeto_jegykiado.png", szakcsoport: "IV." },
  { nev: "Vezető titkár<br>Vezető főmérnök", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/regi piros/vezeto_titkar.png", szakcsoport: "I." },
  { nev: "Ellenőr II. - Ellenőr I.", kategoria: "parolin", ev: 1975,   kep: "parolin_pics/uj kek/ellenor2_ellenor1_kek.png", szakcsoport: "III." },
  { nev: "Felvigyázó I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj kek/felvi1_kek.png", szakcsoport: "IV." },
  { nev: "Felvigyázó III.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj kek/felvi3_kek.png", szakcsoport: "IV." },
  { nev: "Felvigyázó IV. / Felvigyázó III.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj kek/felvi4_felvi3_kek.png", szakcsoport: "IV." },
  { nev: "Főellenőr I.", kategoria: "parolin", ev: 1975,   kep: "parolin_pics/uj kek/foellenor1_kek.png", szakcsoport: "III." },
  { nev: "Főellenőr II.", kategoria: "parolin", ev: 1975,   kep: "parolin_pics/uj kek/foellenor2_kek.png", szakcsoport: "III." },
  { nev: "Főtiszt", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj kek/fotiszt_regi_kek.png", szakcsoport: "III." },
  { nev: "Intéző II. - Intéző I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj kek/intezo2_intezo1_kek.png", szakcsoport: "II." },
  { nev: "Mérnök Főintéző II. / Titkár II.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj kek/mernok_fointezo2_titkar2_kek.png", szakcsoport: "I." },
  { nev: "Mérnök Főtiszt / Fogalmazó", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj kek/mernok_fotiszt_fogalmazo_kek.png", szakcsoport: "I." },
  { nev: "Mérnök Intéző / Segédtitkár", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj kek/mernok_intezo_segedtitkar_kek.png", szakcsoport: "I." },
  { nev: "Munkás I. / Kezelő I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj kek/munkas1_kezelo1_kek.png", szakcsoport: "V." },
  { nev: "Munkás II. / Kezelő II.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj kek/munkas2_kezelo2_kek.png", szakcsoport: "V." },
  { nev: "Munkás IV. - Munkás III. / Kezelő IV. - Kezelő III.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj kek/munkas4_3_kezelo4_3_kek.png", szakcsoport: "V." },
  { nev: "Segédellenőr II. / Segédellenőr I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj kek/segedellenor2_segedellenor1_kek.png", szakcsoport: "III." },
  { nev: "Segédfelvigyázó II. / Segédfelvigyázó I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj kek/segedfel2_1_kek.png", szakcsoport: "IV." },
  { nev: "Segédfelvigyázó III.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj kek/segedfel3_kek.png", szakcsoport: "IV." },
  { nev: "Segédfelvigyázó IV.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj kek/segedfelvigyazo4_kek.png", szakcsoport: "IV." },
  { nev: "Segédmunkás IV. / Segédkezelő IV.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj kek/segedmunkas4_segedkezelo4_kek.png", szakcsoport: "V." },
  { nev: "Segédtiszt I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj kek/segedtiszt1_kek.png", szakcsoport: "III." },
  { nev: "Segédtiszt II.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj kek/segedtiszt2_kek.png", szakcsport: "III."},
  { nev: "Segédtisztképző Tanfolyam Hallgató", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj kek/segedtisztkepzo_kek.png" },
  { nev: "Segédmunkás II. / Segédmunkás I.  Segédkezelő II. / Segédkezelő I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj kek/sm1_2_sk1_2_kek.png", szakcsoport: "V." },
  { nev: "Segédmunkás III. / Segédkezelő III.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj kek/sm3_sk3_kek.png", szakcsoport: "V." },
  { nev: "Szaktechnikus / Főintéző II.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj kek/szaktechnikus_fointezo2_kek.png", szakcsoport: "I./a" },
  { nev: "Szaktechnikus / Főtiszt", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj kek/szaktechnikus_fotiszt_kek.png", szakcsoport: "I./a" },
  { nev: "Szaktechnikus / Intéző", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj kek/szaktechnikus_intezo_kek.png", szakcsoport: "I./a" },
  { nev: "Tiszt", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj kek/tiszt_regi_kek.png", szakcsoport: "II." },
  { nev: "Tisztképző Tanfolyam Hallgató", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj kek/tisztkepzo_kek.png" },
  { nev: "Ellenőr II. - Ellenőr I.", kategoria: "parolin", ev: 1975,   kep: "parolin_pics/uj zold/zellenor2_ellenor1.png", szakcsoport: "III." },
  { nev: "Felvigyázó I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj zold/zfelvi1.png", szakcsoport: "IV." },
  { nev: "Felvigyázó III.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj zold/zfelvi3.png", szakcsoport: "IV." },
  { nev: "Felvigyázó IV. / Felvigyázó III.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj zold/zfelvi4_felvi3.png", szakcsoport: "IV." },
  { nev: "Főellenőr I.", kategoria: "parolin", ev: 1975,   kep: "parolin_pics/uj zold/zfoellenor1.png", szakcsoport: "III." },
  { nev: "Főellenőr II.", kategoria: "parolin", ev: 1975,   kep: "parolin_pics/uj zold/zfoellenor2.png", szakcsoport: "III." },
  { nev: "Főtiszt", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj zold/zfotiszt_regi.png", szakcsoport: "III." },
  { nev: "Intéző II. - Intéző I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj zold/zintezo2_intezo1.png", szakcsoport: "II." },
  { nev: "Mérnök Főintéző II. / Titkár II.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj zold/zmernok_fointezo2_titkar2.png", szakcsoport: "I." },
  { nev: "Mérnök Főtiszt / Fogalmazó", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj zold/zmernok_fotiszt_fogalmazo.png", szakcsoport: "I." },
  { nev: "Mérnök Intéző / Segédtitkár", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj zold/zmernok_intezo_segedtitkar.png", szakcsoport: "I." },
  { nev: "Munkás I. / Kezelő I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj zold/zmunkas1_kezelo1.png", szakcsoport: "V." },
  { nev: "Munkás II. / Kezelő II.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj zold/zmunkas2_kezelo2.png", szakcsoport: "V." },
  { nev: "Munkás IV. - Munkás III. / Kezelő IV. - Kezelő III.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj zold/zmunkas4_3_kezelo4_3.png", szakcsoport: "V." },
  { nev: "Segédellenőr II. / Segédellenőr I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj zold/zsegedellenor2_segedellenor1.png", szakcsoport: "III." },
  { nev: "Segédfelvigyázó II. / Segédfelvigyázó I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj zold/zsegedfel2_1.png", szakcsoport: "IV." },
  { nev: "Segédfelvigyázó III.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj zold/zsegedfel3.png", szakcsoport: "IV." },
  { nev: "Segédfelvigyázó IV.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj zold/zsegedfelvigyazo4.png", szakcsoport: "IV." },
  { nev: "Segédmunkás IV. / Segédkezelő IV.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj zold/zsegedmunkas4_segedkezelo4.png", szakcsoport: "V." },
  { nev: "Segédtiszt I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj zold/zsegedtiszt1.png", szakcsoport: "III." },
  { nev: "Segédtiszt II.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj zold/zsegedtiszt2.png", szakcsport: "III."},
  { nev: "Segédtisztképző Tanfolyam Hallgató", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj zold/zsegedtisztkepzo.png" },
  { nev: "Segédmunkás II. / Segédmunkás I.  Segédkezelő II. / Segédkezelő I.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj zold/zsm1_2_sk1_2.png", szakcsoport: "V." },
  { nev: "Segédmunkás III. / Segédkezelő III.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj zold/zsm3_sk3.png", szakcsoport: "V." },
  { nev: "Szaktechnikus / Főintéző II.", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj zold/zszaktechnikus_fointezo2.png", szakcsoport: "I./a" },
  { nev: "Szaktechnikus / Főtiszt", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj zold/zszaktechnikus_fotiszt.png", szakcsoport: "I./a" },
  { nev: "Szaktechnikus / Intéző", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj zold/zszaktechnikus_intezo.png", szakcsoport: "I./a" },
  { nev: "Tiszt", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj zold/ztiszt_regi.png", szakcsoport: "II." },
  { nev: "Tisztképző Tanfolyam Hallgató", kategoria: "parolin", ev: 1985,   kep: "parolin_pics/uj zold/ztisztkepzo.png" },
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
  const szin = document.getElementById('szin')?.value.toLowerCase();

  // 1) szűrés
  let szurt = cuccok.filter(c =>
    (kategoria === '' || c.kategoria === kategoria) &&
    (kulcsszo  === '' || c.nev.toLowerCase().includes(kulcsszo)) &&
    (szakcsoport === '' || c.szakcsoport === szakcsoport)&&
    (szin === '' || c.kep.toLowerCase().includes(szin))
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
};
