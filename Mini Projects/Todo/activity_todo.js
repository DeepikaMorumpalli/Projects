let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = input.value;

    let del = document.createElement("button");
    del.innerText = "Delete";
    del.classList.add("delete");
    
    item.appendChild(del); 
    ul.appendChild(item);
    input.value="";
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});

// this code will not be appplicable for newly created list items.
// to overcome the above problem we use event bubbling concept
/*let delBtns = document.querySelectorAll(".delete");
for(delBtn of delBtns){
    delBtn.addEventListener("click", function(){
        let par = this.parentElement;
        par.remove();
    });
}*/