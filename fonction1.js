module.exports = {
    
    tab : [5, 78, 23, 13, 12, 56],
    // Calcule la somme d'un tableau
    calcul : function calcul() 
    {
        let result = 0;
		for(let i=0; i < this.tab.length; i++)
		{
			result += this.tab[i];
		}
		return result;
    }
}