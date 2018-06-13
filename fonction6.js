module.exports = {
    
    //Calcule la puissance d'un nombre
    calcul : function calcul(nombre, puissance) 
    {
        let result = 1;
		for(let i = 1; i <= puissance; i++)
		{
			result = result * nombre;
		}
		
		return result;
    }
}