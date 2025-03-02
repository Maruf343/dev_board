// discoverSomething
document.getElementById("go").addEventListener("click",
    function () {
        window.location.href = "../../blog.html";

    }
)

// update date and time

const today = new Date();
const currentDay = today.toLocaleString('default',{ weekday : 'short'});
const month = today.toLocaleString('default',{ month: 'short'});
const day = today.getDate();
const year = today.getFullYear();

const updatedDate = `${currentDay}, ${month}, ${day}, ${year}`;
document.getElementById("dateTime").innerText = updatedDate;


