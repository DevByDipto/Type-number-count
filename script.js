// work-1==========
const header = document.querySelector(".header");
let count = 0;
let colors = ["red", "yellow", "brown", "blue", "green", "black"];

function updatedNum() {
  header.innerText = `${count}+`;
  header.style.color = `${colors[count]}`;
  count = count + 1;
  if (count > 5) {
    clearInterval(autoUpdate);
  }
}

let autoUpdate = setInterval(() => {
  updatedNum()
}, 1000);

//work-2===========
const name = document.querySelector(".name");
let farword = true;
function typejs() {
  if (farword) {
    name.innerHTML = "";
    name.innerHTML += name.dataset.text.slice(0, count);
    count++;
    if (count > name.dataset.text.length) farword = false;
  } else {
    count--;
    name.innerHTML = name.dataset.text.slice(0, count);
    if (count == 0) farword = true;
  }
}

// function typejs() {
//   name.innerHTML += name.dataset.text.charAt(count);
//   count++;
//   console.log(count);
//   if (count > name.dataset.text.length) {
//     clearInterval(firstInterval);
//     let secondInterval = setInterval(() => {
//       typejsTwo();
//     }, 1000);
//     function typejsTwo() {
//       count--;
//       text = name.innerHTML;
//       name.innerHTML = text.replace(`${name.dataset.text.charAt(count)}`, "");
//       if (count < 0) {
//         clearInterval(secondInterval);
//         firstInterval = setInterval(() => {
//           typejs()
//         }, 1000)
//       }
//     }
//   }
// }

let firstInterval = setInterval(() => {
  typejs()
}, 1000);

// work-3==========

const counters = document.querySelectorAll(".counter");
[...counters].forEach((element) => {
  let count = 0;

  function updatedCount() {
    element.innerText = `${count}`;
    count++;

    console.log(element.dataset.number);
    if (count > element.dataset.number) {
      clearInterval(autoUpdateCounter);
    }
  }

  let autoUpdateCounter = setInterval(() => {
    updatedCount();
  }, element.dataset.speed);
});