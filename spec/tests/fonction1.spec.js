const fonction1 = require('../../fonction1');
 
describe("tests de la somme du tableau.", function() {
 
 
    it("Somme du tableau 1", function() {
      let value = fonction1.calcul();
      expect(value).toBe(187);
    });

  
})