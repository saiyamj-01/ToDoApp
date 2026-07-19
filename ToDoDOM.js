let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");

button.addEventListener("click",function(event){
    console.log("Task Added!!");

    if(input.value == ""){
        event.preventDefault();
        alert("Please type something to add!!");
    }
    else{
        let li = document.createElement("li");
    
        let check = document.createElement("input")
        check.type = "checkbox";
        li.appendChild(check);

        li.append(" " + input.value);
        
        let db = document.createElement("button");
        db.innerText = "Delete";
        db.classList.add("delete");

        li.appendChild(db);
        
        ul.appendChild(li);
        
        input.value = "";
    }

    // // Use This When No Tasks Are present By Default
    // db.addEventListener("click",function(){
    //     let par = this.parentElement;
    //     console.log("Task Deleted!!");
    //     par.remove();
    // })

})

// Event Delegation(Works For Both When Tasks Are Present By Default And When Not Present By Default)
ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let paritem = event.target.parentElement;
        paritem.remove();
        console.log("Task Deleted!!");
    }
})




// // Use This When delete Button Is Present By Default On The Page(It Only Deletes The Default Added Tasks)
// let dbs = document.querySelectorAll(".delete")
// for(d of dbs){
//     d.addEventListener("click",function(){
//         let par = this.parentElement;
//         console.log("Task Deleted!!");
//         par.remove();
//     });
// }

let all = document.getElementById("all");
all.addEventListener("click",function(){
    let items = document.querySelectorAll("li");
    items.forEach(item =>{
        item.style.display = "list-item";
    });
});


active.addEventListener("click",function(){
    let items = document.querySelectorAll("li");
    items.forEach(item =>{
        let check = item.querySelector("input[type='checkbox']");
        if(check.checked){
            item.style.display = "none";
        }
        else{
            item.style.display = "list-item";
        }
    });
});

ul.addEventListener("click",function(){
    if(event.target.type === "checkbox"){
        let li = event.target.parentElement;

        if(event.target.checked){
            li.classList.add("completed");
        }
        else{
            li.classList.remove("completed");
        }
    }
});

document.getElementById("completed").addEventListener("click",function(){
    let items = document.querySelectorAll("li");
    items.forEach(item => {
        let check = item.querySelector("input[type='checkbox']");

        if(check.checked){
            item.style.display = "list-item";
        }
        else{
            item.style.display = "none";
        }
    });
});