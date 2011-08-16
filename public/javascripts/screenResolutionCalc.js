function screenResolutionCalculator(diagonal_Inches,pixel_Height,pixel_Width){

  var diagonalInches ;
  var pixelHeight  ; 
  var pixelWidth ;
  var ratio ;
  var widthInches=0;
  var heightInches=0;
  
  this.initialize = function(){
    this.setDimensions(diagonal_Inches,pixel_Height,pixel_Width);
  }

  this.getDiagonal = function(){
    return diagonalInches;
  }
  
  this.getPixelWidth = function(){
    return pixelWidth;
  }
  

  this.getPixelHeight = function(){
    return pixelHeight;
  }

  this.getWidthInches=function(){

    return parseFloat(widthInches.toFixed(2));
    
  }
  
  this.getHeightInches=function(){
    return parseFloat(heightInches.toFixed(2));
  }
  
  this.setDimensions=function(diagonal,pxHeigh,pxWidth){
    diagonalInches = diagonal_Inches;
    pixelHeight = pixel_Height;
    pixelWidth = pixel_Width;
    ratio = pixelHeight/pixelWidth;
    
    widthInches = Math.sqrt((diagonalInches*diagonalInches)/(1+(ratio*ratio)));
    heightInches=widthInches*ratio;
  }
  
  this.initialize();

}