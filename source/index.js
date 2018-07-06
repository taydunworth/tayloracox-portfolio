import "./style/style.sass";
import "./style/style.css";
import * as work from "./work.js";

const allWork = work.workItems;

// Work
for (let i = 0; i < allWork.length; i++) {
  const workList = document.querySelector(".work-list");
  const workListItem = document.createElement("li");
  const workDiv = document.createElement("div");
  const hoverDiv = document.createElement("div");
  const workTitle = document.createElement("h4");
  const workImage = document.createElement("img");
  const workButton = document.createElement("a");
  const boxButton = document.createElement("a");

  workTitle.innerHTML = allWork[i].title;
  workButton.innerHTML = "Learn More";
  workButton.href = allWork[i].url;
  boxButton.href = allWork[i].url;

  workDiv.style.backgroundImage = `url(${allWork[i].img})`;

  workDiv.appendChild(hoverDiv);
  workDiv.appendChild(workImage);
  hoverDiv.appendChild(workTitle);
  hoverDiv.appendChild(workButton);
  boxButton.appendChild(workDiv);
  workListItem.appendChild(boxButton);
  workList.appendChild(workListItem);

  workDiv.classList.add("work-box");
  workButton.classList.add("btn");
  // hoverDiv.classList.add("hover-off");
  hoverDiv.classList.add("work-details");
  //
  // workDiv.addEventListener("mouseover", function() {
  //   hoverDiv.classList.add("hover-on");
  //   hoverDiv.classList.remove("hover-off");
  // })
  //
  // workDiv.addEventListener("mouseout", function() {
  //   hoverDiv.classList.add("hover-off");
  //   hoverDiv.classList.remove("hover-on");
  // })
}

// Accordion

const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
