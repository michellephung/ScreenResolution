describe("Screen Resolution Calculator", function(){
  var calc;
  
  beforeEach(function(){
    calc = new screenResolutionCalculator(15,768,1024);
  });

  describe('properties',function(){
    it("has a diagonal property, in inches",function(){
      expect(calc.getDiagonal()).toEqual(15);
    });
    
    it('has a height property, in pixels', function(){
      expect(calc.getPixelHeight()).toEqual(768);
    }); 
    
    it('has a width property, in pixels', function(){
      expect(calc.getPixelWidth()).toEqual(1024);
    });
    
   
  });
  
  describe('calculates', function(){
    it('calculates height, in inches',function(){
      expect(calc.getHeightInches()).toEqual(9);
    });
    it('calculates width, in inches', function(){
      expect(calc.getWidthInches()).toEqual(12);
    });
  });
  







});