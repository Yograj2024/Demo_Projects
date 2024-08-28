
let listbar=document.getElementById("menuList");
console.log(listbar)
let list=document.getElementById("list");

document.getElementsByClassName("menuIcon")[0].addEventListener("click",()=>{
    listbar.classList.add("show");
    console.log(listbar);
    document.body.style.overflow="hidden";
});

let remove=function (){
    listbar.classList.remove("show");
    document.body.style.overflow="auto";
}

document.getElementById("clsoeIcon").addEventListener("click",remove)

list.addEventListener("click",(e)=>{
    if(e.target.tagName==="A"){
        remove();
        return;
    }
})