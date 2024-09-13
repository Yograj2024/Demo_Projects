
let sideBar=document.getElementsByClassName("sideBarHide")[0];
let list=document.getElementById("list");

document.getElementsByClassName("menuIcon")[0].addEventListener("click",()=>{
    sideBar.classList.add("show")
    document.body.style.overflow="hidden";
});

let hide=function(){
    sideBar.classList.remove("show")
    document.body.style.overflow="auto";
}

document.getElementById("clsoeIcon").addEventListener("click",hide)

list.addEventListener("click",(e)=>{
    if(e.target.tagName==="A"){
        hide();
        return;
    }
});
