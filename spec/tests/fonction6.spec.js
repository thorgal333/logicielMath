const fonction6 = require('../../fonction6');
 
describe("tests de la fonction puissance", function() {
 
 
    it("calcul de 5 à la puissance 3", function() {
      let value = fonction6.calcul(5,3);
      expect(value).toBe(125);
    });

    it("calcul de 3 à la puissance 3", function() {
        let value = fonction6.calcul(3,3);
        expect(value).toBe(27);
      });

})