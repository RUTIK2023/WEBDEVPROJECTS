

const task=document.getElementById('input');
const listcontainer=document.getElementById('list-container');


function AddTask() {
    if(task.value ===""){
        alert("You must add task!");
    }
    else{

       
        let li=document.createElement("li");
        li.innerHTML=task.value;
        listcontainer.appendChild(li);


        // cross symbol.
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    task.value = '';
    saveData();
}   

// remove events..
listcontainer.addEventListener('click',function(e){
        if(e.target.tagName==="LI"){
            e.target.classList.toggle("checked");
            saveData();
        }
        else if(e.target.tagName==="SPAN"){
            e.target.parentElement.remove();
            saveData();
        }
},false);

// store data..

function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}

function showData() {
    listcontainer.innerHTML=localStorage.getItem("data");
}
showData();