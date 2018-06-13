

module.exports = {
    
    //	Affiche un triangle avec des étoiles
    calcul : function calcul(rl) 
    {

        for(let i=0; i < 6; i++)
		{
			for(let j =0;  j < i+1; j++)
			{
				rl.write('*');
			}
			rl.write('\n');
        }
        rl.close();
    }
}