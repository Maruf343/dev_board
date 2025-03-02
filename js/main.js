document.getElementById("clearHistory").addEventListener("click",
    function(event){
        event.preventDefault();
        document.getElementById("container").style.display = "none";
    })

// card-1
document.getElementById("1st-button").addEventListener("click",
    function(event){
        event.preventDefault();
        alert("You Click Here");

        const taskAssign = document.getElementById("task-assign").innerText;
        const newAssign = parseInt(taskAssign) - 1;
        document.getElementById("task-assign").innerText = newAssign;
        const taskChecked = document.getElementById("task-checked").innerText;
        const newChecked = parseInt(taskChecked) + 1;
        document.getElementById("task-checked").innerText = newChecked;

    }
)