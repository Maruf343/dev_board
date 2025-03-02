document.getElementById("clearHistory").addEventListener("click",
    function(event){
        event.preventDefault();
        document.getElementById("container").style.display = "none";
    })

// card-1
document.getElementById("1st-button").addEventListener("click",
    function(event){
        event.preventDefault();
        alert("Board Updated Successfully");

        const taskAssign = document.getElementById("task-assign").innerText;
        const newAssign = parseInt(taskAssign) - 1;
        document.getElementById("task-assign").innerText = newAssign;
        const taskChecked = document.getElementById("task-checked").innerText;
        const newChecked = parseInt(taskChecked) + 1;
        document.getElementById("task-checked").innerText = newChecked;

        const firstHeading = document.getElementById("first-card-work").innerText;
        const time = new Date().toLocaleTimeString();
        const conteiner = document.getElementById("container");
        const div = document.createElement("div");
        div.classList.add("bg-c");
        div.innerHTML =
         `
         <p>You Have completed the task ${firstHeading} at ${time} </p>
        `
        conteiner.appendChild(div);
        document.getElementById("1st-button").disabled = true;

    }
)
// card-2
document.getElementById("2nd-button").addEventListener("click",
    function(event){
        event.preventDefault();
        alert("Board Updated Successfully");

        const taskAssign = document.getElementById("task-assign").innerText;
        const newAssign = parseInt(taskAssign) - 1;
        document.getElementById("task-assign").innerText = newAssign;
        const taskChecked = document.getElementById("task-checked").innerText;
        const newChecked = parseInt(taskChecked) + 1;
        document.getElementById("task-checked").innerText = newChecked;

        const firstHeading = document.getElementById("2nd-card-work").innerText;
        const time = new Date().toLocaleTimeString();
        const conteiner = document.getElementById("container");
        const div = document.createElement("div");
        div.classList.add("bg-c");
        div.innerHTML =
         `
         <p>You Have completed the task ${firstHeading} at ${time} </p>
        `
        conteiner.appendChild(div);
        document.getElementById("2nd-button").disabled = true;

    }
)
// card-3
document.getElementById("3rd-button").addEventListener("click",
    function(event){
        event.preventDefault();
        alert("Board Updated Successfully");

        const taskAssign = document.getElementById("task-assign").innerText;
        const newAssign = parseInt(taskAssign) - 1;
        document.getElementById("task-assign").innerText = newAssign;
        const taskChecked = document.getElementById("task-checked").innerText;
        const newChecked = parseInt(taskChecked) + 1;
        document.getElementById("task-checked").innerText = newChecked;

        const firstHeading = document.getElementById("3rd-card-work").innerText;
        const time = new Date().toLocaleTimeString();
        const conteiner = document.getElementById("container");
        const div = document.createElement("div");
        div.classList.add("bg-c");
        div.innerHTML =
         `
         <p>You Have completed the task ${firstHeading} at ${time} </p>
        `
        conteiner.appendChild(div);
        document.getElementById("3rd-button").disabled = true;

    }
)
// card-4
document.getElementById("4th-button").addEventListener("click",
    function(event){
        event.preventDefault();
        alert("Board Updated Successfully");

        const taskAssign = document.getElementById("task-assign").innerText;
        const newAssign = parseInt(taskAssign) - 1;
        document.getElementById("task-assign").innerText = newAssign;
        const taskChecked = document.getElementById("task-checked").innerText;
        const newChecked = parseInt(taskChecked) + 1;
        document.getElementById("task-checked").innerText = newChecked;

        const firstHeading = document.getElementById("4th-card-work").innerText;
        const time = new Date().toLocaleTimeString();
        const conteiner = document.getElementById("container");
        const div = document.createElement("div");
        div.classList.add("bg-c");
        div.innerHTML =
         `
         <p>You Have completed the task ${firstHeading} at ${time} </p>
        `
        conteiner.appendChild(div);
        document.getElementById("4th-button").disabled = true;

    }
)
// card-5
document.getElementById("5th-button").addEventListener("click",
    function(event){
        event.preventDefault();
        alert("Board Updated Successfully");

        const taskAssign = document.getElementById("task-assign").innerText;
        const newAssign = parseInt(taskAssign) - 1;
        document.getElementById("task-assign").innerText = newAssign;
        const taskChecked = document.getElementById("task-checked").innerText;
        const newChecked = parseInt(taskChecked) + 1;
        document.getElementById("task-checked").innerText = newChecked;

        const firstHeading = document.getElementById("5th-card-work").innerText;
        const time = new Date().toLocaleTimeString();
        const conteiner = document.getElementById("container");
        const div = document.createElement("div");
        div.classList.add("bg-c");
        div.innerHTML =
         `
         <p>You Have completed the task ${firstHeading} at ${time} </p>
        `
        conteiner.appendChild(div);
        document.getElementById("5th-button").disabled = true;

    }
)
// card-6
document.getElementById("6th-button").addEventListener("click",
    function(event){
        event.preventDefault();
        alert("Board Updated Successfully");
        alert("Task has been marked as completed!");

        const taskAssign = document.getElementById("task-assign").innerText;
        const newAssign = parseInt(taskAssign) - 1;
        document.getElementById("task-assign").innerText = newAssign;
        const taskChecked = document.getElementById("task-checked").innerText;
        const newChecked = parseInt(taskChecked) + 1;
        document.getElementById("task-checked").innerText = newChecked;

        const firstHeading = document.getElementById("6th-card-work").innerText;
        const time = new Date().toLocaleTimeString();
        const conteiner = document.getElementById("container");
        const div = document.createElement("div");
        div.classList.add("bg-c");
        div.innerHTML =
         `
         <p>You Have completed the task ${firstHeading} at ${time} </p>
        `
        conteiner.appendChild(div);
        document.getElementById("6th-button").disabled = true;

    }
)