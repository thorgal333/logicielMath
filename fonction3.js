module.exports = {
    
    tab : [1,4,	3,3,4,2,2,2,4,1],
    //Recherche le nombre d'occurrence des nombres compris entre 1 et 5 dans un tableau
    calcul : function calcul() 
    {
        let lesNombres = [];
		for(let j = 1; j < 6; j++)
		{
			let nb = 0;
			for(let i=0; i < this.tab.length; i++)
			{
				if (j == this.tab[i])nb ++;
			}
			lesNombres.push(nb);
		}
		return lesNombres;
    }
}