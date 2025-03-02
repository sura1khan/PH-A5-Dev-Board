//date
function updateDate() {
    document.getElementById("Date").innerText = new Date().toDateString();
  }
  setInterval(updateDate, 86400000);
  updateDate(); 

 //completing tasks
function completeTask(button) {
    let taskItem = button.parentElement; 
    taskItem.remove();
    let pendingCountElement = document.getElementById("count");
    let pendingCount = parseInt(pendingCountElement.innerText);
    if (pendingCount > 0) {
        pendingCountElement.innerText = pendingCount - 1;
    } 
    let completedCountElement = document.getElementById("check");
    let completedCount = parseInt(completedCountElement.innerText);
    completedCountElement.innerText = completedCount + 1;
}
