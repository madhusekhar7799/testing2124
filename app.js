const form = document.querySelector("#formel");
const input = document.querySelector("#nameel");
const input1 = document.querySelector("#emailel");
const input2 = document.querySelector("#mobileel");
const input3 = document.querySelector("#Passwordel");
const tasks = document.querySelector(".tasks");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userData = input.value;
    const userData1 = input1.value;
    const userData2 = input2.value;
    const userData3 = input3.value;



    if (!userData) {
        // alert("Please provide the name!")
        input.style.border="1px solid red"
        return false;
    }else{
        input.style.border="1px solid green"
    }

    if (!userData1) {
        alert("Please provide an email!")
        return false;
    }

    if (!userData2) {
        alert("Please provide an phone number!")
        return false;
    }

    if (!userData3) {
        alert("Please provide an password!")
        return false;
    }

    const task = document.createElement("div");
    task.classList.add("task","mb-3");

    const content = document.createElement("div")
    content.classList.add("content")

    const newname = document.createElement("input")
    newname.classList.add("text","form-control","mb-2")
    newname.value = userData;
    newname.setAttribute("readonly", "readonly");
    newname.type = "text"

    const email = document.createElement("input")
    email.classList.add("text","form-control","mb-2")
    email.value = userData1;
    email.setAttribute("readonly", "readonly");
    email.type = "email"


    const mobile = document.createElement("input")
    mobile.classList.add("text","form-control","mb-2")
    mobile.value = userData2;
    mobile.setAttribute("readonly", "readonly");
    mobile.type = "tel"

    const password = document.createElement("input")
    password.classList.add("text","form-control","mb-2")
    password.value = userData3;
    password.setAttribute("readonly", "readonly");
    password.type = "password"

    content.appendChild(newname);
    content.appendChild(email)
    content.appendChild( mobile)
    content.appendChild(password)
    task.appendChild(content);
    tasks.appendChild(task);

    const actions = document.createElement("div");
    actions.classList.add("actions");

    const task_edit = document.createElement("button");
    task_edit.classList.add("edit","btn","btn-secondary")
    task_edit.innerHTML = "Edit";

    const task_delete = document.createElement("button");
    task_delete.classList.add("delete","btn", "btn-info","mx-3")
    task_delete.innerHTML = "Delete";

    actions.appendChild(task_edit)
    actions.appendChild(task_delete)
    task.appendChild(actions)

    input.value = "";
    input1.value = "";
    input2.value = "";
    input3.value = "";
    
    

    // Edit user data 
    task_edit.addEventListener("click", () => {
        if (task_edit.innerHTML == "Edit") {
            newname.removeAttribute("readonly")
            email.removeAttribute("readonly")
            mobile.removeAttribute("readonly")
            password.removeAttribute("readonly")
            
            task_edit.innerHTML = "Save"
            newname.focus()
            email.focus()
            mobile.focus()
            password.focus()

        } else {
            newname.setAttribute("readonly", "readonly");
            email.setAttribute("readonly", "readonly");
            mobile.setAttribute("readonly", "readonly");
            password.setAttribute("readonly", "readonly");


     
            task_edit.innerHTML = "Edit"


            newname.remove.focus()
            email.remove.focus()
            mobile.remove.focus()
            password.remove.focus()

        }

      
    })

// Delete user data 
task_delete.addEventListener("click",() =>{
        tasks.removeChild(task); 
} )

})
    

