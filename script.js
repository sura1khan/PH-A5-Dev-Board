// let today = new Date();
// console.log(today)

// document.getElementById("date")
// .value = new Date().toISOString().split("T")[0];
function updateDate() {
    document.getElementById("Date").innerText = new Date().toDateString();
  }
  setInterval(updateDate, 86400000);
  updateDate(); 