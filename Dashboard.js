
function getgreeting(){
let hour=new Date().getHours();
    if (hour<12){
        return "Good Morning"
    }
    else if(hour<18 ){
        return "Good Afternoon"
    }
    else{
        return"Good evening"
    }
}
function getDate(){
     return new Date().toLocaleDateString("en-US",{ weekday: "long", month: "long", day: "numeric" })
}
function addTasks(){
    document.querySelector("")
}
console.log("top level")

export function init(){
    const Elements={
    welcome:document.querySelector(".advice-Bar h2"),
    Date:document.querySelector(".advice-Bar p"),
    Add:document.querySelector(".add"),
    AddRow:document.querySelector(".add-tasks"),
    InputV:document.querySelector(".tasks  label input")

}
    Elements.welcome.textContent=`${getgreeting()}, Khalil`;
    Elements.Date.textContent=getDate();


    function addTheTasks() {
    Elements.Add.addEventListener("click", () => {
        if (Elements.Add.textContent == "+") {
            Elements.AddRow.classList.add("active");
            Elements.Add.textContent = "Done";
            Elements.InputV.focus();
        }
        else if (Elements.Add.textContent === "Done" && Elements.InputV.value.trim() !== "") {
            getTheValue();
            
            Elements.AddRow.classList.remove("active");
            Elements.Add.textContent = "+";
            Elements.InputV.value = "";
        }
    });
}

function getTheValue() {
    let inputValue = Elements.InputV.value;
    const pText = document.createElement("p");
    pText.textContent = inputValue;
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    label.appendChild(checkbox);
    label.appendChild(pText); 
    Elements.AddRow.appendChild(label); 
}

addTheTasks();
    
}