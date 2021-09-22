var forclass = document.getElementsByClassName("video");
//Make the DIV element draggagle:
dragElement(document.getElementById("magnetictool"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement2(document.getElementById("sand"));

function dragElement2(elmnt2) {
  var pos12 = 0,
    pos22 = 0,
    pos32 = 0,
    pos42 = 0;
  if (document.getElementById(elmnt2.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt2.id + "header").onmousedown = dragMouseDown2;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt2.onmousedown = dragMouseDown2;
  }

  function dragMouseDown2(e2) {
    e2 = e2 || window.event;
    e2.preventDefault();
    // get the mouse cursor position at startup:
    pos32 = e2.clientX;
    pos42 = e2.clientY;
    document.onmouseup = closeDragElement2;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag2;
  }

  function elementDrag2(e2) {
    e2 = e2 || window.event;
    e2.preventDefault();
    // calculate the new cursor position:
    pos12 = pos32 - e2.clientX;
    pos22 = pos42 - e2.clientY;
    pos32 = e2.clientX;
    pos42 = e2.clientY;
    // set the element's new position:
    elmnt2.style.top = elmnt2.offsetTop - pos22 + "px";
    elmnt2.style.left = elmnt2.offsetLeft - pos12 + "px";
  }

  function closeDragElement2() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement3(document.getElementById("iron"));

function dragElement3(elmnt3) {
  var pos13 = 0,
    pos23 = 0,
    pos33 = 0,
    pos43 = 0;
  if (document.getElementById(elmnt3.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt3.id + "header").onmousedown = dragMouseDown3;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt3.onmousedown = dragMouseDown3;
  }

  function dragMouseDown3(e3) {
    e3 = e3 || window.event;
    e3.preventDefault();
    // get the mouse cursor position at startup:
    pos33 = e3.clientX;
    pos43 = e3.clientY;
    document.onmouseup = closeDragElement3;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag3;
  }

  function elementDrag3(e3) {
    e3 = e3 || window.event;
    e3.preventDefault();
    // calculate the new cursor position:
    pos13 = pos33 - e3.clientX;
    pos23 = pos43 - e3.clientY;
    pos33 = e3.clientX;
    pos43 = e3.clientY;
    // set the element's new position:
    elmnt3.style.top = elmnt3.offsetTop - pos23 + "px";
    elmnt3.style.left = elmnt3.offsetLeft - pos13 + "px";
  }

  function closeDragElement3() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var magnetictool = document.getElementById("magnetictool");
var sand = document.getElementById("sand");
var iron = document.getElementById("iron");
var boxes = document.querySelectorAll(".tool");

boxes.forEach(function (el) {
  if (el.addEventListener) {
    el.addEventListener("click", clickHandler);
  } else {
    el.attachEvent("onclick", clickHandler);
  }
});

var detectOverlap = (function () {
  function getPositions(elem) {
    var pos = elem.getBoundingClientRect();
    return [
      [pos.left, pos.right],
      [pos.top, pos.bottom],
    ];
  }

  function comparePositions(p1, p2) {
    var r1, r2;
    if (p1[0] < p2[0]) {
      r1 = p1;
      r2 = p2;
    } else {
      r1 = p2;
      r2 = p1;
    }
    return r1[1] > r2[0] || r1[0] === r2[0];
  }

  return function (a, b) {
    var pos1 = getPositions(a),
      pos2 = getPositions(b);
    return (
      comparePositions(pos1[0], pos2[0]) && comparePositions(pos1[1], pos2[1])
    );
  };
})();

function clickHandler(e) {
  var elem = e.target,
    elems = document.querySelectorAll(".tool"),
    elemList = Array.prototype.slice.call(elems),
    within = elemList.indexOf(elem),
    touching = [];
  if (within !== -1) {
    elemList.splice(within, 1);
  }
  for (var i = 0; i < elemList.length; i++) {
    if (detectOverlap(elem, elemList[i])) {
      touching.push(elemList[i].id);
    }
  }
  if (touching.length) {
    var check1 = elem.id + " touches " + touching.join(" and ") + ".";
    var check2 = elem.id + " touches " + touching.join(" and ") + ".";
    var value1 = "sand touches iron.";
    var value2 = "magnetictool touches iron.";
    console.log(elem.id + " touches " + touching.join(" and ") + ".");
    if (value1 == check1) {
      iron.src = "assets/images/ironAndSand.png";
      sand.style.display = "none";
    } else if (value2 == check2) {
      magnetictool.src = "assets/images/magnetictoolAndIron.png";
      iron.src = "assets/images/sand2.png";
    }
  } else {
    console.log(elem.id + " touches nothing.");
  }
}
function hide1() {
  document.getElementById("stepsVideo").style.display = "none";
  document.getElementById("conclusionVideo").style.display = "block";
  console.log("hide1 success");
}
function hide2() {
  document.getElementById("conclusionVideo").style.display = "none";
  document.getElementById("stepsVideo").style.display = "block";
  console.log("hide2 success");
}
function hide3() {
  document.getElementById("conclusionVideo").style.display = "none";
  document.getElementById("stepsVideo").style.display = "none";
  document.getElementById("containerofhelp").style.display = "none";
}
function hide4() {
  document.getElementById("conclusionVideo").style.display = "none";
  document.getElementById("stepsVideo").style.display = "none";
  document.getElementById("containerofhelp").style.display = "block";
}
function hide5() {
  document.getElementById("conclusionVideo").style.display = "none";
  document.getElementById("stepsVideo").style.display = "none";
  document.getElementById("containerofhelp").style.display = "none";
}
