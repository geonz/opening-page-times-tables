var maxFact = 10;
var minFact=1;
   

 function createMultImage()
{
 // make the string of text and variables that you want to be displayed
 let multPicHTML="";
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


function addBorder()
{
numId=0;
 for (let num=1; num<=maxFact*maxFact; num++)
 {
    numId++;
    
   document.getElementById("d"+numId).style.border="thin solid #0000FF";
  
 }
}

function addHeader()
{
  headHTML="";
   for (let num=1;num<=maxFact; num++ )
{
  headHTML +='  <div     id="d'+num + '" >' +num + ' </div>';}


  chartHead.innerHTML=headHTML;

}
function addSide()
 {
  let sideHTML="";
   for (let num=1; num<=maxFact; num++)
  
  {sideHTML+='  <div      >' +num + ' </div>';}
    
   
   chartSide.innerHTML=sideHTML;
 }

 createMultImage();
addBorder();

addHeader();
  addSide();