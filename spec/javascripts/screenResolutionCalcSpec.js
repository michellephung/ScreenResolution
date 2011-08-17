describe("Screen Resolution Calculator", function(){
  var calc = new Array();
  
  beforeEach(function(){
    calc[0] = new screenResolutionCalculator(9.9,640,480);
    calc[1] = new screenResolutionCalculator(12.3,800,600);  
    calc[2] = new screenResolutionCalculator(15,1024,768);
    calc[3] = new screenResolutionCalculator(15.8,1024,768);
    calc[4] = new screenResolutionCalculator(17.8,1152,870);
    calc[5] = new screenResolutionCalculator(19.6,1280,960);

    
  });

  describe('properties',function(){
    it("has a diagonal property, in inches",function(){
      expect(calc[0].getDiagonal()).toEqual(9.9);
      expect(calc[1].getDiagonal()).toEqual(12.3);
      expect(calc[2].getDiagonal()).toEqual(15);
      expect(calc[3].getDiagonal()).toEqual(15.8);
      expect(calc[4].getDiagonal()).toEqual(17.8);
      expect(calc[5].getDiagonal()).toEqual(19.6);
    });
    
    it('has a width property, in pixels', function(){
      expect(calc[0].getPixelWidth()).toEqual(640);
      expect(calc[1].getPixelWidth()).toEqual(800);
      expect(calc[2].getPixelWidth()).toEqual(1024);
      expect(calc[3].getPixelWidth()).toEqual(1024);
      expect(calc[4].getPixelWidth()).toEqual(1152);
      expect(calc[5].getPixelWidth()).toEqual(1280);
    }); 
    
    it('has a height property, in pixels', function(){
      expect(calc[0].getPixelHeight()).toEqual(480);
      expect(calc[1].getPixelHeight()).toEqual(600);
      expect(calc[2].getPixelHeight()).toEqual(768);
      expect(calc[3].getPixelHeight()).toEqual(768);
      expect(calc[4].getPixelHeight()).toEqual(870);
      expect(calc[5].getPixelHeight()).toEqual(960);
      
    });
    
   
  });
  
  
  describe('calculates', function(){
    it('calculates width, in inches',function(){
      expect(calc[0].getWidthInches()).toEqual(7.92);
      expect(calc[1].getWidthInches()).toEqual(9.84);
      expect(calc[2].getWidthInches()).toEqual(12);
      expect(calc[3].getWidthInches()).toEqual(12.64);
      expect(calc[4].getWidthInches()).toEqual(14.2);
      expect(calc[5].getWidthInches()).toEqual(15.68);
      
    });
    it('calculates height, in inches', function(){
      expect(calc[0].getHeightInches()).toEqual(5.94);
      expect(calc[1].getHeightInches()).toEqual(7.38);
      expect(calc[2].getHeightInches()).toEqual(9);
      expect(calc[3].getHeightInches()).toEqual(9.48);
      expect(calc[4].getHeightInches()).toEqual(10.73);
      expect(calc[5].getHeightInches()).toEqual(11.76);
    });
    
    describe('can calculate dynamically',function(){
      it('all variables can be set', function(){
        calc[0].setDimensions(19.6,1280,960);
        expect(calc[0].getWidthInches()).toEqual(15.68);
        expect(calc[0].getHeightInches()).toEqual(11.76);
      });
      
      
      it('diagonal variable can be set',function(){
        calc[1].setDimensions(19.6,1280,960);
        calc[1].setDiagonal(12);
        expect(calc[1].getPixelWidth()).toEqual(1280);
        expect(calc[1].getPixelHeight()).toEqual(960);
        expect(calc[1].getWidthInches()).toEqual(9.6);
        expect(calc[1].getHeightInches()).toEqual(7.2);
        
      });
      
      it('pixel width can be set',function(){
        calc[1].setPixelWidth(1024);
        expect(calc[1].getPixelWidth()).toEqual(1024);
        expect(calc[1].getDiagonal()).toEqual(12.3);
        expect(calc[1].getPixelHeight()).toEqual(600);
        expect(calc[1].getWidthInches()).toEqual(10.61);
        expect(calc[1].getHeightInches()).toEqual(6.22);
        
      });
      
      it('pixel height can be set',function(){
        calc[2].setPixelHeight(540);
        expect(calc[2].getDiagonal()).toEqual(15);
        expect(calc[2].getPixelWidth()).toEqual(1024);
        expect(calc[2].getWidthInches()).toEqual(13.27);
        expect(calc[2].getHeightInches()).toEqual(7);
      });
    });
    

    
    it('computes DPI (dotsPerInch)',function(){
      expect(calc[0].getDotsPerInch()).toEqual(80.81);
      expect(calc[1].getDotsPerInch()).toEqual(81.3);
      expect(calc[2].getDotsPerInch()).toEqual(85.33);
      expect(calc[3].getDotsPerInch()).toEqual(81.01);
      expect(calc[4].getDotsPerInch()).toEqual(81.1);
      expect(calc[5].getDotsPerInch()).toEqual(81.63);
    });
    
    it('computes aspect ratio', function(){
      expect(calc[0].getAspectRatio()).toEqual("4:3");
      expect(calc[1].getAspectRatio()).toEqual("4:3");
      expect(calc[2].getAspectRatio()).toEqual("4:3");
      expect(calc[3].getAspectRatio()).toEqual("4:3");
      expect(calc[4].getAspectRatio()).toEqual("192:145");
      expect(calc[5].getAspectRatio()).toEqual("4:3");

    });
  });
  
 
});