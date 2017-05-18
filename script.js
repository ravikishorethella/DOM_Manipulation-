//// DOM Manipulation
//
//// we are going to cover different ways of 
//
////    1. changing an element's style
////    2. adding/removing classes
////    3. changing the content of a tag
////    4. changing attributes(src,href,etc)
//
////applying all the styles in html head section and we will see how to call that in js
//// applying the .big class fro the p tag
//
//var p = document.querySelector("p");
//// if we want to add the classlist to p tag then we can use the following
//p.classList.add("big");
//
////to remove the class list we can use 
//p.classList.remove("big");
//
////toggle is also a method which will be very helpful
//p.classList.toggle("big");

////=======================================================================================================
//
//// textContent 
//// returns a string of all the text contained in a given element
//
////lets work on the p tag
//
//var tag = document.querySelector("p");
//
////retrieving the textContent
//tag.textContent // we have a strong tag in the p tag but this will just return the whole text as a single string 
//
////alter the textContent
//tag.textContent = "good !!!"; // the whole paragraph will change to good !!!
//// this helps us to change the text of the paragraph
//
//
////============================================================================================================

//// innerHTML
//// similar to textContent, except it returns a string of all the HTML contained in a given element
//
////lets work on the p tag
//
//var tag = document.querySelector("p");
//
//tag.innerHTML
//// this returns whatever is present in the p tag
//
////=============================================================================================================

//// Attributes
//// we use the getAttribute() and setAttribute() to read and write attributes like src and href
//
//// we will work on the a tag present in the index.html
//
//// first we need to select the a tag
//var a = document.querySelector("a");
//
//// we need to get the attribute of the a tag
//a.getAttribute("href"); // this gives us the web address that we have specified
//
//// change the href attribute
//a.setAttribute("href","http://www.ashokthella.me");
//


//// similarly for the image tag also we need to select the img and change the src
//// first select the img tag
//var img = document.querySelector("img");
//img.setAttribute("src","img src that you want to change");

////=============================================================================================================

////                     DOM events
//
//// we use some events to make the site interactive
//
//// let us add a event for the h1 tag. When the user clicks on the h1 text a small alert message will be pop up and we can also change the background color of the h1. 
//
//// we need to select the tag on ehich we are planning to make changes
//var h1 = document.querySelector("h1");
//
//// add a listener event
//h1.addEventListener("click",function(){
//   alert("you clicked the h1");
//    h1.style.background = "orange";
//});

////=============================================================================================================

//// we can also add a listener to ul 
//
//document.querySelector("ul").addEventListener("click",function(){
//   console.log("you clicked the ul");
//    //so if there are 4 li elemets then irrespective of the li you click this event will be called  
//});

////=============================================================================================================

//// we can also select the only li elements
//
//var lis = document.querySelectorAll("li");
//
//// for every li we need to change the different styles
////iterate 
//
//for(var i=0;i<lis.length;i++){
//    lis[i].addEventListener("click",function(){
//        this.style.color = "red";
//    });
//}

////=============================================================================================================

////            color changer
//
//// now if a user clicks on a button then he should see the background color changing
//
////forst select the button tag
//var button = document.querySelector("button");
//var isBlue = false;
//
//// add the event listener
//button.addEventListener("click",function(){
//    
//    // if white 
//       //make it blue
//    //else 
//       //make it white
//    if(isBlue){
//      document.body.style.background = "blue";  
//        isBlue = false;
//    } else{
//        document.body.style.background = "white";
//        isBlue = true;
//    }
    
//});


//or 

//var button = document.querySelector("button");
//
//// add the event listener
//button.addEventListener("click",function(){
//        document.body.classList.toggle("blue");
//});


////================================================================================================================

// working on the ul tag li elements
// if the user wants to see the color changing on hovering the li elements

//select the li. here all the li's will be selected 
var lis = document.querySelectorAll("li");

// add the event listener. and also iterate the loop through the var lis
for (var i=0; i<lis.length;i++){
    
    // when the li elements are hovered
    lis[i].addEventListener("mouseover",function(){
        // the commented code will work
         this.style.color = "red";
        //this.classList.add("selected");
    });
    
    // when the li elements are not hovered
    lis[i].addEventListener("mouseout",function(){         
        this.style.color = "black";
    });
    
    //when user clicks on the todo list then it should show the striking on the list element
    lis[i].addEventListener("click",function(){
        // the commented code will work
        this.style.textDecoration = "line-through";
        //this.classList.toggle("done");
    });
}