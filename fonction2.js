module.exports = {
    
    tab : [53, 56, 2, 130, 45, 58],

    //Cherche la valeur minimum d'un tableau
    calcul : function calcul() 
    {
        let min = this.tab[0];
		for(let i=1; i < this.tab.length; i++)
		{
			if (this.tab[i] < min) min = this.tab[i];
		}
		return min;
    }
}