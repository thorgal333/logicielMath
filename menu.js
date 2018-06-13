let readLine = require('readline');
let rl = readLine.createInterface(process.stdin, process.stdout)
let fonction1 = require('./fonction1');
let fonction2 = require('./fonction2');
let fonction3 = require('./fonction3');
let fonction4 = require('./fonction4');
let fonction5 = require('./fonction5');
let fonction6 = require('./fonction6');



rl.write("fonction 1 : Somme d'un tableau \n");
rl.write("fonction 2 : Minimum d'un tableau \n");
rl.write("fonction 3 : Présence 1 à 5 \n");
rl.write("fonction 4 : Suite de Syracuse \n");
rl.write("fonction 5 : Etoile \n");
rl.write("fonction 6 : Puissance \n");

rl.question('Quelle fonction désirez-vous ?', function(numero){

    switch(numero)
    {
        case '1' :
        rl.write('Somme du tableau: ' + fonction1.calcul() + '\n');
        break;
        case '2' :
        rl.write('Minimum du tableau: '  + fonction2.calcul() + '\n');
        break;
        case '3' :
        rl.write('Présence dans le tableau: \n');
        let tab1 = fonction3.calcul();
        for (let index = 0; index < tab1.length ; index++) {
            const element = tab1[index];
            rl.write((index+1) + ' : ' + element + '\n');          
        }
        break;
        case '4' :
        rl.write('Suite de Syracuse: \n');
        let tab2 = fonction4.calcul(155);
        for (let index = 0; index < tab2.length ; index++) {
            const element = tab2[index];
            rl.write(element + '\n');          
        }
        break;
        case '5' :
        rl.write('Dessin: \n');
        fonction5.calcul(rl)
        break;
        case '6' :
        rl.write('Puissance: '  + fonction6.calcul(5,3) + '\n');
        break;
    }
    //Affichage avec write 
	rl.close() 
})

