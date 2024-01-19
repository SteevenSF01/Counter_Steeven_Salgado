let number = document.querySelector(".count1");
let number2 = document.querySelector(".count2");
let number3 = document.querySelector(".count3");

let counter = 0;
let counter2 = 0;
let counter3 = 0;

let twitter = setInterval(() => {
  counter += 100;
  number.innerText = counter;
  if (counter == 12000) {
    clearInterval(twitter);
  }
}, 3);
let youtube = setInterval(() => {
  counter2 += 40;
  number2.innerText = counter2;
  if (counter2 == 5000) {
    clearInterval(youtube);
  }
}, 3);
let facebook = setInterval(() => {
  counter3 += 60;
  number3.innerText = counter3;
  if (counter3 == 7500) {
    clearInterval(facebook);
  }
}, 3);