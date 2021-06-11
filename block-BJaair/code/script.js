let form = document.querySelector("form");
let root = document.querySelector(".card-root");
let categories = document.querySelectorAll("h3");
let titles = document.querySelectorAll("h2");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    event.preventDefault();

    let category = form.category.value;
    let title = form.title.value;

    let oneCard = document.createElement("div");
    oneCard.classList.add("each-card");

    let h3 = document.createElement("h3");
    h3.innerText = category;
    let h2 = document.createElement("h2");
    h2.innerText = title;
    oneCard.append(h3, h2);

    root.append(oneCard);
}



function handelDoubleClick(elements){
    elements.forEach(ele=>{
        ele.addEventListener("dblclick", editCategory)
    })
    function editCategory(event){
        let categoryInnerText = event.target.innerText;
        let h3Ele =event.target;
        h3Ele.innerHTML = `<input id="category" type="text" value="${categoryInnerText}">`;
        document.querySelector("#category").addEventListener("blur",(event)=>{
            console.log()
            h3Ele.innerHTML = `<h3>${event.target.value}</h3>`;
            console.log(event.target)
        })
    }
}
handelDoubleClick(categories);
handelDoubleClick(titles);
