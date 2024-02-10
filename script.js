let element = document.querySelector(".input-text");
let ul = document.querySelector(".list-items");
let butt = document.querySelector(".btn");
let val = element.getAttribute("value");
console.log("the value is ", val);
butt.onclick=function addTask() {
  if (element.value !== "") {
    let listchild = document.createElement("li");
    listchild.innerHTML = element.value;
    ul.appendChild(listchild);
    element.value = "";
    let crossIcon = document.createElement("span");
    crossIcon.innerHTML = "\u00d7";
    listchild.appendChild(crossIcon);
    listchild.addEventListener("click", () => {
      listchild.classList.toggle("checked");
    });
    crossIcon.addEventListener("click", () => {
      listchild.remove();
    });
  } else {
    console.log("the value is null", val);
    alert("enter your work.");
  }
}
