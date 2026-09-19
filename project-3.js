

const content = document.getElementById("content");
const buttons = document.querySelectorAll(".options button");
const optionshide = document.getElementById("optionsIcon");
const sideBar = document.querySelector(".sideBar");
const profilee = document.querySelector(".create-profile");
const welcome = document.querySelector(".welcome");
 let check1=true;




function loadpages(page) {
    fetch(`${page}.html`).then(Response => Response.text()).then(data => { content.innerHTML = data; }).catch(error => {
        content.innerHTML = "<h1>Page not found</h1>";
        console.log(error);
    })
}
buttons.forEach(button => {
    button.addEventListener("click", () => {

        const page = button.dataset.page;
        loadpages(page);

    });
});

optionshide.addEventListener("click", () => {
    sideBar.classList.toggle("active");
    if (sideBar.className.includes("active")) {
        document.body.style.gridTemplateColumns = "250px 1fr ";
        document.body.style.gridTemplateRows = "80px 1fr"
    } else {
        document.body.style.gridTemplateColumns = "0 1fr ";
    }
});

function profile() {
    profilee.classList.add("active");
    welcome.classList.add("remove");
}

function check(){
   check1=true;
    const inputs=document.querySelectorAll(".create-profile input")
inputs.forEach( 
    input=>{
    if(input.value.trim()===""){
     create_error_message(input);
     check1=false;
     }
    else 
    clear_error_message(input)
        }
    )
    if(check1===true){
        profilee.classList.remove("active");
    }
}

function create_error_message(input){
    const para=input.nextElementSibling;
    if(para.classList.contains('error')){
    para.textContent="please fill in the gap";
     }
}
function clear_error_message(input){
   const para=input.nextElementSibling;
   para.classList.remove("error");
   if(!para.classList.contains("error")){
    para.textContent="";
   }
}