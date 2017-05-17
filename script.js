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