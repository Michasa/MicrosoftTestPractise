function showInput() {
  console.log("show it!");
  document.getElementById("nameInput").style.display = "block";
}

function saveName(callbackFunc) {
  event.preventDefault(); // stops page refreshing
  console.log("hide it!");
  document.getElementById("nameInput").style.display = "none";
  let name = document.getElementById("userName").value;
  window.localStorage.setItem("userName", name);
  callbackFunc();
}

function updateUserName() {
  let userName = window.localStorage.getItem("userName");
  let nameSpace = document.querySelector("span#user");
  nameSpace.innerText = userName || "New User";
}

function everythingInCache() {
  let localStorage = Object.entries(window.localStorage);

  localStorage.forEach(item => {
    let li = document.createElement("li");
    li.innerText = `${item[0]}:${item[1]}`;
    document.querySelector("ul#cacheStuff").appendChild(li);
  });
}
