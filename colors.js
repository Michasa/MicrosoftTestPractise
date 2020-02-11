function deleteMe() {
  let divLastChild = myDiv.lastChild;
  if (divLastChild.innerText == "Just wanted to say...You are beautiful") {
    myDiv.removeChild(divLastChild);
    console.log(":(");
  } else {
    console.log("cant take back something you never said...");
  }
}

function drawIt(event) {
  var x = event.clientX;
  var y = event.clientY;
  var color = document.getElementById("color").value;

  let canvas = document.getElementById("my_canvas");
  let context2 = canvas.getContext("2d");
  context2.beginPath();
  context2.moveTo(0, 0);
  context2.quadraticCurveTo(67, 90, x, y);
  context2.strokeStyle = color;
  context2.lineWidth = Math.round(Math.random() * 10);
  context2.stroke();
}

function clearDrawing() {
  window.event.returnValue = false;
  let canvas = document.getElementById("my_canvas");
  let context2 = canvas.getContext("2d");
  context2.clearRect(0, 0, 500, 500);
  console.log("poof, gone boss");
}
