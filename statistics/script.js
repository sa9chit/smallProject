let box = document.querySelectorAll(".Box");

let arrPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [0, 4, 8],
  [0, 1, 2],
  [1, 4, 7],
  [2, 5, 8],
  [6, 4, 2],
];
let confirm = true;

box.forEach((val) => {
  val.addEventListener("click", (boxVal, index) => {
    if (confirm) {
      val.innerHTML = "O";
      confirm = false;
    } else {
      val.innerHTML = "X";
      confirm = true;
    }
val.disabled = true
    checkPattern();
  });
});

let checkPattern = () => {
  for (const pattern of arrPattern) {
    let vl1 = box[pattern[0]].innerText
    let vl2 = box[pattern[1]].innerText
    let vl3 = box[pattern[2]].innerText
console.log(vl1,vl2,vl3)
console.log(box[pattern[0]],box[pattern[1]],box[pattern[2]])
    if(vl1 != "" && vl1 === vl2 && vl2 === vl3){
      console.log("winner")
    }

  }
};

