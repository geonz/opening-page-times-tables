var maxFact = 10;
var minFact=1;
   // this is the max num for the factors
// oingo boingo I need to see what I called this in a more recent thing
 function createMultImage()
{
 // make the string of text and variables that you want to be displayed
 let multPicHTML="";
 let numMax = maxFact*maxFact;  //I don't think I need this.
 numId=0;
 for (let num=1; num<=maxFact; num++)
 {
   for(let fac=minFact; fac<=maxFact;fac++)
   { myFact= fac*num;
   numId++;
     multPicHTML +='  <div class = "item"   id="d'+numId + '" >' + myFact + ' </div>';}
  
 }
 // now make it the HTML
  multPic.innerHTML=multPicHTML;
   
} 
createMultImage();
function addBorder()
{
numId=0;
 for (let num=1; num<=maxFact*maxFact; num++)
 {
    numId++;
    
   document.getElementById("d"+numId).style.border="thin solid #0000FF";
  
 }
}
addBorder();
function addHeader()
{
  headHTML="";
   for (let num=1;num<=maxFact; num++ )
{
  headHTML +='  <div     id="d'+num + '" >' +num + ' </div>';}


  chartHead.innerHTML=headHTML;

}
addHeader();
function addSide()
 {
  let sideHTML="";
   for (let num=1; num<=maxFact; num++)
  
  {sideHTML+='  <div      >' +num + ' </div>';}
    
   
   chartSide.innerHTML=sideHTML;
 }
  addSide();