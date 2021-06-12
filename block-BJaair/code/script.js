
let data = localStorage.getItem('data')
 ? JSON.parse(localStorage.getItem('data'))
 : [] ;

let form = document.querySelector("form");
let root = document.querySelector(".card-root");



function handleSubmit(event){
    event.preventDefault();
    let category = form.category.value;
    let title = form.title.value;

    if(category && title){
        data.push({category:category, title:title})
        localStorage.setItem("data", JSON.stringify(data));
        form.category.value ="";
        form.title.value="";
        creatUI()
    }
}

function creatUI(){
    root.innerHTML = "";
    let fragmnet = new DocumentFragment();
   data.forEach((ele,index) => {
    let oneCard = document.createElement("div");
    oneCard.classList.add("each-card");

    let h3 = document.createElement("h3");
    h3.innerText = ele.category;
    h3.addEventListener("click", (event)=>{handleDoubleclick(event, index , "category")})
    let h2 = document.createElement("h2");
    h2.addEventListener("click", (event)=>{handleDoubleclick(event,index, "title")})
    h2.innerText = ele.title;
    oneCard.append(h3, h2);
     
    fragmnet.append(oneCard);
   })
   root.append(fragmnet);
}

function handleDoubleclick(event, id, label){
    let eleInnerText = event.target.innerText;
    let targetElement =event.target;
    targetElement.innerHTML = `<input id="replacedInput" type="text" value="${eleInnerText}">`;

    document.querySelector("#replacedInput").addEventListener("keyup",(event)=>{
       if(event.keyCode === 13){
        targetElement.innerText = event.target.value;
        data[id][label] = event.target.value;
        localStorage.setItem("data", JSON.stringify(data));
       }
    })

    document.querySelector("#replacedInput").addEventListener("blur",(event)=>{
        targetElement.innerText = event.target.value;
        data[id][label] = event.target.value;
        localStorage.setItem("data", JSON.stringify(data));
    })
}


creatUI()