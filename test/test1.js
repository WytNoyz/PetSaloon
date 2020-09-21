// Attributes

var links = document.getElementsByTagName('a');


// links[0].setAttribute('target','blank');
// links[0].setAttribute('class','bordered');

var input = document.getElementById('petType');
input.hasAttribute('class');
input.getAttribute('class');


// Create html elements

var h1 = document.createElement('h1');
console.log(h1);

var text = document.createTextNode("Thank you for coming!");
console.log(text);

h1.appendChild(text);
console.log(h1);

var main=document.getElementById("register-main");
main.appendChild(h1);


// hide the element
// input.style.display="none";

// remove the elements
// var txtpetname=document.getElementById("petName");
// var pPetName=document.getElementById("pPetName");
// pPetName.removeChild(txtpetname);

for(var i=1;i<=3;i++){
    var li=document.createElement("li");
    textLi=document.createTextNode("Element "+i);
    li.appendChild(textLi);
    URL.appendChild(li);
}
document.getElementById('petSection').appendChild(ul);
