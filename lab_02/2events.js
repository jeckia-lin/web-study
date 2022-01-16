var checklist = document.getElementById("checklist");
var items = checklist.querySelectorAll("li");
for(var i =0;i <items.length;i++){
    items[i].addEventListener("click",editItem);
}
function editItem(){
    var input = this.querySelectorAll("input");
    input.focus()
    
}