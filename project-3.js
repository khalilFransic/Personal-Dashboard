
const content = document.getElementById("content");
const buttons = document.querySelectorAll(".options button");
const optionshide = document.getElementById("optionsIcon");
const sideBar = document.querySelector(".sideBar");
const profilee = document.querySelector(".create-profile");
const welcome = document.querySelector(".welcome");
const body=document.querySelector("body");
 let check1=true;




async function loadpages(page) {
    try {
        const res = await fetch(`${page}.html`);
        content.innerHTML = await res.text();
    } catch (error) {
        content.innerHTML = "<h1>Page not found</h1>";
        console.log(error);
        return;
    }

    try {
        const module = await import(`./${page}.js`);
        module.init?.();
    } catch (error) {
        console.log(`No JS for ${page}`, error);
    }
}
buttons.forEach(button => {
    button.addEventListener("click", () => {

        const page = button.dataset.page;
        loadpages(page);

    });
});

    optionshide.addEventListener("click", () => {
        body.classList.toggle("sidebar-open");
       
        // if (sideBar.className.includes("active")) {
        //     document.body.style.gridTemplateColumns = "250px 1fr ";
        //     document.body.style.gridTemplateRows = "80px 1fr"
        // } else {
        //     document.body.style.gridTemplateColumns = "0 1fr ";
        // }
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

function initDashboard() {
    const title = document.querySelector(".advice-Bar h2");
    const dateText = document.querySelector(".advice-Bar p");
    if (!title) return;

    const hour = new Date().getHours();
    let greeting;
    if (hour < 12) {
        greeting = "Good Morning";
    } else if (hour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good evening";
    }
    title.textContent = `${greeting}, khalil`;
 
}
