const fonction4 = require('../../fonction4');
 
describe("Suite de Syracuse.", function() {
    let values = fonction4.calcul(155);
 
    it("Premier terme de la suite de Syracuse", function() {   
      expect(values[0]).toBe(466);
    });

    it("Second terme de la suite de Syracuse", function() {
        expect(values[1]).toBe(233);
      });

  
})