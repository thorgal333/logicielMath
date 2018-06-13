module.exports = {

    tab: [1, 4, 3, 3, 4, 2, 2, 2, 4, 1],
    //Calcule les 20 premiers termes de la suite de Syracuse
    calcul: function calcul(nombre) {
        let lesNombres = [];
        for (let i = 0; i < 20; i++)
        {
            if (nombre % 2 == 0) {
                nombre = nombre / 2;
            }
            else {
                nombre = (nombre * 3) + 1;
            }
            lesNombres.push(nombre);
        }

        return lesNombres;
    }
}