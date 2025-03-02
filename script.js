function getRandomColor() {
    const letters = '0123456789ABCDEF';
     let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
     return color;
}

function changeBackgroundColor() {
document.body.style.backgroundColor = getRandomColor();
}

function updateDate() {
    let dateElements = document.getElementsByClassName("Date");
     let currentDate = new Date().toDateString();
    
       for (let i = 0; i < dateElements.length; i++) {
        dateElements[i].innerText = currentDate;
    }
  }
  setInterval(updateDate, 86400000);
  updateDate(); 

  function completeTask(button, taskName) {
    let userConfirmed = confirm("Board Updated Successfully");
if (!userConfirmed) return; 

    let pendingCountElement = document.getElementById("count");
     let completedCountElement = document.getElementById("check");
    let pendingCount = parseInt(pendingCountElement.innerText);
    let completedCount = parseInt(completedCountElement.innerText);

    if (pendingCount > 0) {
        pendingCountElement.innerText = pendingCount - 1;
    }
    completedCountElement.innerText = completedCount + 1;
     button.disabled = true;
    button.innerText = "Completed!";
    button.classList.add("bg-gray-400", "cursor-not-allowed");

    
    let messageId = button.getAttribute("data-message-id");
    let message = document.getElementById(messageId);
    if (message) {
        message.classList.remove("hidden");
    }
}
function addTaskEventListeners() {
    document.querySelectorAll("[id^='show']").forEach(button => {
        button.addEventListener("click", function () {
            let taskName = button.getAttribute("data-task-name");
            completeTask(button, taskName); 
        });
    });
}

function clearHistory() {

    let activityLog = document.getElementById("activity-log");
    activityLog.innerHTML = ""; 
    activityLog.classList.add("hidden");
}