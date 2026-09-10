// let buttonp = document.getElementsByClassName("mode")[0];
// let sideBar = document.getElementsByClassName("sideBar")[0];

// const savedTheme = localStorage.getItem("theme") || "dark";
// updatetheme(savedTheme);


// buttonp.addEventListener("click", () => {
//     let theme = localStorage.getItem("theme") || "dark";
//     theme = theme === "light" ? "dark" : "light";
//     localStorage.setItem("theme", theme)
//     updatetheme(theme);
// });

// function updatetheme(theme) {
//     let text = "";
//     let buttonp = document.querySelector(".mode");
//     let sideBar = document.getElementsByClassName("sideBar")[0];
//     let nav = document.getElementsByClassName("nav")[0];
//     if (theme === "light") {
//         sideBar.classList.remove("light-theme");
//         nav.classList.remove("light-theme");
//         text = "Dark Mode ";
//         buttonp.innerHTML = `<img src="bedtime_16dp_EFEFEF_FILL0_wght600_GRAD0_opsz20 (1).png" alt=""> ${text}`;
//         buttonp.style.cssText = "background-color:black; color:white";

//     } else {
//         text = "Light Mode";
//         buttonp.innerHTML = `<img src="sunny_16dp_000000_FILL0_wght400_GRAD0_opsz20 (1).png" alt=""> ${text}`;
//         buttonp.style.cssText = "background-color:white; color:black";
//         sideBar.classList.add("light-theme");
//         nav.classList.add("light-theme");
//     }
// }

// function Time() {
//     const now = new Date();
//     let hi = document.getElementsByClassName("sayHi")[0];

//     const option = {
//         weekday: "short",
//         day: "numeric",
//         month: "short"
//     };
//     let date = now.toLocaleDateString("en-US", option);
//     let time = now.toLocaleTimeString("en-Us", {
//         hour: "2-digit",
//         minute: "2-digit",
//         second: "2-digit"
//     });

//     document.getElementById("time").innerHTML = `${time}<br>${date}`;
//     if (now.getHours() >= 9 && now.getHours() < 12) {
//         document.getElementsByClassName("sayHi")[0].style.backgroundImage = ' url("images/kdixk-RQozVE2iJfuB7oztCuHFvrwqd3DDfnEPLTKXAwmCUbF-6rMEG23vIFYTaRNQY8tjVwAjoh3fd6F1f2qm5TMAQ21yM30iraFA-lBWfvIRDZHUrbBc7813lAP3cmlYddxZSSSVzoTSkU2C_SgOZpQInlTFhlnncO3wFiafvh8RNB9XsL8QAbcP_KfwNh.jpg") ';
//         hi.textContent = "Good Morining ,user"
//     } else if (now.getHours() >= 12 && now.getHours() < 18) {
//         hi.textContent = "Good Afternoon ,user"
//         document.getElementsByClassName("sayHi")[0].style.backgroundImage = 'url("images/uCZgivu_hTDMRm962yA52ouJ5Vwavm9fITujBcFtjYi3a2gB3rprogLRuHZIHzLD3mjyVQum_lziUdQdmI-UQm9fkx5o-1YGunilRU2DhQl974EZFQ7Y7NDNhJEtLdYtawqVXCUEl9vv_crGqnf758TmXcUoHDZluwVSjqtoP3efIMNju0jtMmm_Yo075Kvd.jpg")';
//     } else {
//         hi.textContent = "Good Night ,user"
//         document.getElementsByClassName("sayHi")[0].style.backgroundImage = 'url("images/iDkilAW4TaYXs7r0EANfB7yktKzt81o4ncDsU66rof71MxiUPX41g4hCtaiqUJcNLQyhmCJ6jEmnNVYwhFalmtQdj8_zRHCmIVBhw4C6F55SZnJjNRzMC-Bz2_00QMHmgBvEdxmNdoXHrHy1GAI46leVtzHzIIoxjfQP5Y8m_4CGOPx36hNv28d6hvmxeSNc.jpg")';
//     }
// }
// Time();
// setInterval(Time, 1000);

// let btn = document.getElementsByClassName("btn");
// window.onscroll = function() {
//     if (window.scrollY >= 400) {
//         btn[0].style.display = "block";
//     } else {
//         btn[0].style.display = "none";
//     }
// }
// btn[0].onclick = function() {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });

// }


// document.getElementById("question").addEventListener("click", () => {

//     Swal.fire({
//         title: "The Internet?",
//         text: "That thing is still around?",
//         icon: "question"
//     });
// })




// let todos = [];
// if (localStorage.getItem("todos")) {
//     todos = JSON.parse(localStorage.getItem("todos"));
// }

// const add = () => {
//     const title = document.getElementById("title").value;
//     const details = document.getElementById("title1").value;

//     if (title.trim() === "") {
//         Swal.fire({
//             icon: "error",
//             title: "Oops...",
//             text: "Something went wrong!",
//             footer: "<a href=\"#\">Why do I have this issue?</a>",
//             heightAuto: false
//         });
//     } else {
//         let task = {
//             title: title,
//             details: details,
//             status: false,
//         }

//         todos.push(task);
//         localStorage.setItem("todos", JSON.stringify(todos));

//         document.getElementById("title").value = "";
//         document.getElementById("title1").value = "";
//         render();
//     }
// };

// const remove = (index) => {
//     todos.splice(index, 1);
//     localStorage.setItem("todos", JSON.stringify(todos));
//     render();
// };

// function toggleStatus(index) {
//     todos[index].status = !todos[index].status;
//     localStorage.setItem("todos", JSON.stringify(todos));
//     render();
// }

// function render() {
//     const list = document.getElementById("list");
//     list.innerHTML = "";

//     todos.forEach((todo, i) => {
//         const originalIndex = todos.indexOf(todo);

//         const li = document.createElement("li");

//         const taskContent = document.createElement("div");
//         taskContent.className = "task-content";

//         const span = document.createElement("span");
//         span.className = "task-title";
//         span.textContent = todo.title;

//         const littleSpan = document.createElement("span");
//         littleSpan.className = "task-details";
//         littleSpan.textContent = todo.details;

//         const del = document.createElement("button");
//         del.className = "delete-btn";
//         del.textContent = "x";

//         taskContent.onclick = () => toggleStatus(originalIndex);
//         del.onclick = () => remove(originalIndex);

//         if (todo.status) {
//             taskContent.classList.add("done");
//         }

//         taskContent.appendChild(span);
//         taskContent.appendChild(littleSpan);

//         li.appendChild(taskContent);
//         li.appendChild(del);

//         list.appendChild(li);
//     });
// }

// render();
console.log("llll")
const content = document.getElementById("content");
const buttons = document.querySelectorAll(".options button");
const optionshide = document.getElementById("optionsIcon");
const sideBar = document.querySelector(".sideBar");

function loadpages(page) {
    fetch(`${page}.html`).then(Response => Response.text()).then(data => { content.innerHTML = data; }).catch(error => {
        content.innerHTML = "<h1>Page not found</h1>";
        console.log(error);
    })
}
buttons.forEach(button => {
    button.addEventListener("click", () => {

        const page = button.dataset.page;
        console.log(page);

        loadpages(page);

    });
});

optionshide.addEventListener("click", () => {
    sideBar.classList.toggle("active");
    if (sideBar.className.includes("active"))
        document.body.style.gridTemplateColumns = 0;
})