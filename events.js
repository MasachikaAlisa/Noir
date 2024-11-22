document.getElementById('river').onclick = function(){
    alert("river clicked");
}

//EVENTLISTENER they can make many event to listener like mouse,drage event etc.

//    FIRST EVENT CLICK AND MANY MORE SEARCH ON MDN REFERNCE

document.getElementById('japan').addEventListener('click', function(e){
  //  alert("japan clicked again");
  console.log(e);
  
}, false);
  

//ATTACHEVENT() 
//JQUERY - oneventlistener
 
//type, timestamp, defaultPrevented, target, toelement,
//srcElemnet, currenttarget, clientx, clienty, screenx,
//screeny, altkey, ctrlkey, shiftkey, keycode
 
//  event propogation have two contact
 // eventbubbling important in markettrand
 //eventcapturing

 document.getElementById('IMAGES').addEventListener('click', function(e){
     console.log("clicked inside the ul of page ");      
 }, false)

 document.getElementById('river').addEventListener('click', function(e){
   console.log("river clicked");
    e.stopPropagation() // it is used for stop upper elemet not show            
 }, false)
   
   //  bubble is down to up
   // first images then ul and then li is  inside to outside called eventpropagation bubbling.

   document.getElementById('google').addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    console.log("google clicked");
   }, false)

 
// SMALL PROJECT 
document.querySelector('#IMAGES').addEventListener('click', function(e){
    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
        let removeIt = e.target.parentNode  // remove method of element
        removeIt.remove()
    }
    
    // removeIt.parentNode.removeChild(removeIt)
})

