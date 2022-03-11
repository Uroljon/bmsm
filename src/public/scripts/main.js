document.querySelector('.menu .accordion-body .list-group').addEventListener("click", (e)=>{

    let id = e.target.getAttribute("data-target");
    e.target.parentElement.querySelector(".active").classList.remove("active")
    e.target.classList.add("active");
    document.querySelector('.info-item.active')?.classList.remove("active");
    document.querySelector(`#${id}`).classList.add("active");

    if(id==="news_update"){
        fetch("/news/get_all").then(data=>{
            data.json().then(news=>{
                news.news.forEach(item=>{
                    
                })
            });
        })
    }
});
document.querySelectorAll('.reset_form').forEach(form=>{
    form.addEventListener("click", (e)=>{
        document.querySelector(`#${e.target.getAttribute("data-target")}`).reset();
    })
});