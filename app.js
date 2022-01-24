const container = document.querySelector(".container");
const fireworks = new Fireworks(container, {
  delay: { min: 1, max: 15 },
  particles: 100,
});

const before = new Date();
let after = new Date(2022, 01, 01);

let total = after.getTime() - Date.now() - 2; // bi tre 2s luc load

const dayBlock = document.querySelector(".day span");
const hourBlock = document.querySelector(".hour span");
const minuteBlock = document.querySelector(".min span");
const secondBlock = document.querySelector(".sec span");
const title = document.querySelector(".title");
const clock = document.querySelector(".clock");
const banner = document.querySelector(".banner");
const tiger = document.querySelector(".tiger img");
let flag = 0;
let time = total / 1000;
setInterval(countDown, 1000);

function countDown() {
  let day = Math.floor(time / 86400);
  let timeH = time % 86400;
  let hour = Math.floor(timeH / 3600);
  let timeM = timeH % 3600;
  let min = Math.floor(timeM / 60);
  let sec = Math.floor(timeM % 60);

  if (time >= 0 && flag == 0) {
    dayBlock.innerText = `${day < 10 ? "0" + day : day}`;
    hourBlock.innerText = `${hour < 10 ? "0" + hour : hour}`;
    minuteBlock.innerText = `${min < 10 ? "0" + min : min}`;
    secondBlock.innerText = `${sec < 10 ? "0" + sec : sec}`;
    time--;
  }
  if (day == 0 && hour == 0 && min == 0 && sec == 0 && flag == 0) {
    fireworks.start();
    after = new Date(2023, 01, 01);
    total = after.getTime() - Date.now();
    time = total / 1000;
    banner.classList.add("active");
    title.classList.add("active");
    clock.classList.add("active");
    tiger.style.transform = "translateY(0)";
    setTimeout(function () {
      fireworks.stop();
      title.classList.remove("active");
      clock.classList.remove("active");
      banner.classList.remove("active");
      tiger.style.transform = "translateY(400px)";
    }, 333333);
    // flag++;
  }
  //   if (flag > 0) {
  //     dayBlock.innerText = `${day < 10 ? "0" + day : day}`;
  //     hourBlock.innerText = `${hour < 10 ? "0" + hour : hour}`;
  //     minuteBlock.innerText = `${min < 10 ? "0" + min : min}`;
  //     secondBlock.innerText = `${sec < 10 ? "0" + sec : sec}`;
  //     time++;
  //   }
}
