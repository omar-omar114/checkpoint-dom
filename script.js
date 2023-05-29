var plus = document.querySelectorAll(".plus");
var minus= document.querySelectorAll(".moins");

var like = document.querySelectorAll(".fa-heart");

var delte = document.querySelectorAll(".fa-trash");



//selecting the number of items
for( var i=0; i< plus.length; i++){
     plus[i].addEventListener("click", function() {
          var pr= this.parentElement;
          var child= pr.querySelector("p");
          var numb = Number(child.textContent);
          numb= numb + 1;
          child.textContent= numb;
          
          
     })

}

for( var i=0; i< plus.length; i++){
     minus[i].addEventListener("click", function() {
          var pr= this.parentElement;
          var child= pr.querySelector("p");
          var numb = Number(child.textContent);
          if( numb > 0){
               numb= numb - 1;
               child.textContent= numb;
          }
          
          
          
     })

}

// liking function
for( var i=0; i< like.length; i++){
     like[i].addEventListener("click", function() {
          const currentColor = getComputedStyle(this).getPropertyValue('color');
          console.log(currentColor.toString())
          if ( currentColor.toString() === "rgb(0, 0, 0)"){
               this.style.color= "red";
          }
          else {
               this.style.color = "black"
          }     
     })

}

//deleting items

for( var i=0; i< delte.length; i++){
     delte[i].addEventListener("click", function() {
          var divDirectParent = this.parentElement;
          var divBigParent = divDirectParent.parentElement;
          divBigParent.remove();
     })
}







