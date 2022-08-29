// Write your code here!
const element = document.getElementById("main");
element.remove();

let newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerHTML=" Hiba is the champion";
document.body.append(newHeader);
//newHeader.textContent = "h1#victory";
// newHeader.append("body");
//newHeader.setAttribute("id","victory");

//main.setAttribute("id","victory");
