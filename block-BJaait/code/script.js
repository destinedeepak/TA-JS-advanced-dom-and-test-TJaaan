const listRoot = document.querySelector(".list-root");
const draggables = document.querySelectorAll(".draggable");

let listData = localStorage.getItem("listData") ?
 JSON.parse(localStorage.getItem("listData")) : [];

function createUI(root){
    root.innerHTML = ""
listData.forEach( singleList =>{
    let listEle = document.createElement("p");
    listEle.classList.add("draggable");
    listEle.setAttribute("draggable",true);
    listEle.innerText = singleList.title;

    listEle.addEventListener("dragstart", handleDragStart);
    listEle.addEventListener("dragend", handleDragEnd);

    root.append(listEle);
})
} 

document.querySelector("input").addEventListener("keyup",(event)=>{
    if(event.keyCode === 13 && event.target.value){
        listData.push({title: event.target.value});
        localStorage.setItem("listData",JSON.stringify(listData));
        event.target.value =""
        createUI(listRoot);
    }
})

function handleDragStart(event){
    event.target.classList.add("dragging")
}

function handleDragEnd(event){
    event.target.classList.remove("dragging")
}

listRoot.addEventListener("dragover", (event) => {
    event.preventDefault();
    const afterEle = getAfterElement(event.clientY)
    const draggable = document.querySelector(".dragging");
    if(!afterEle){
        listRoot.append(draggable)
    }else{
        listRoot.insertBefore(draggable, afterEle);
    }
})

function getAfterElement(mousePosition){
   const draggableElements = Array.from(document.querySelectorAll(".draggable:not(.dragging)"));

   return draggableElements.reduce((closest, eachChild)=>{
       const box = eachChild.getBoundingClientRect();
       const offset = mousePosition - box.top - box.height/2;
       if(offset < 0 && offset > closest.offset){
           return {offset:offset, element: eachChild}
       }
       return closest;
   },{offset :Number.NEGATIVE_INFINITY}).element;
}

createUI(listRoot);