function screenResolutionCalculator(diagonal_Inches,pixel_Width,pixel_Height){

  var diagonalInches ;
  var pixelHeight  ; 
  var pixelWidth ;
  var ratio ;
  var widthInches=0;
  var heightInches=0;
  
  this.initialize = function(){
    this.setDimensions(diagonal_Inches,pixel_Width,pixel_Height);
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
  
  this.setDimensions=function(diagonal,pxWidth, pxHeight){
    diagonalInches = diagonal;
    pixelHeight = pxHeight;
    pixelWidth = pxWidth;
    ratio = pixelHeight/pixelWidth;
    
    widthInches = Math.sqrt((diagonalInches*diagonalInches)/(1+(ratio*ratio)));
    heightInches= widthInches*ratio;
  }
  
  this.setDiagonal = function(dInches){
    this.setDimensions(dInches,pixelWidth,pixelHeight);
  }
  
  this.setPixelWidth = function(pWidth){
    this.setDimensions(diagonalInches, pWidth,pixelHeight);
  }
  
  this.setPixelHeight = function(pHeight){
    this.setDimensions(diagonalInches,pixelWidth,pHeight);
  }
  
  
  this.initialize();

}