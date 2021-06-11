window.addEventListener('scroll', handelScroll)
function handelScroll(){
    const scrollable = document.documentElement.scrollHeight-window.innerHeight;
    const scrolled = window.scrollY;
    console.log("scrolled:",scrolled," scrollable:",scrollable)
    if(scrolled >= scrollable-100){
        quotes.forEach(ele=>{
            let h2 = document.createElement("h2");
            h2.innerText=ele.quoteText;
            let p = document.createElement("p");
            p.innerText=ele.quoteText;
            document.querySelector("main").append(h2,p)
        }) 
    }
}
handelScroll();
