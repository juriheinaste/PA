// Tsüklid

// fot tsükkel
// üldtsükkel
let arv;
for (arv = 1; arv <=10; arv ++) {
    lause = 'arv = ';
    if(arv < 10) {
        lause = lause + ' ';
    }
    lause = lause + arv;
    if(arv % 2 == 0){
        lause = lause + ' - paaris';
    } else {
        lause = lause + ' - paaritu';
        //continue; - jätab selle tehte console.log välja
    }
    console.log(lause);
    if(arv >= 5){
        //break; - viib tehte selle arvuni ja siis lõpetab väljastamise
    }
}