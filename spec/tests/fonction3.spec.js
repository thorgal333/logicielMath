const fonction3 = require('../../fonction3');
 
describe("Présence dans le tableau .", function() {
 
 
    it("Présence de 1", function() {
      let values = fonction3.calcul();
      expect(values[0]).toBe(2);
    });

    it("Présence de 5", function() {
        let values = fonction3.calcul();
        expect(values[4]).toBe(0);
      });

  
})