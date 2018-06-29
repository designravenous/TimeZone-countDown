let div = document.createElement("div");
let countDownDate = new Date('Jul 17, 2018 00:00:00').getTime();

function Time() {
      document.body.appendChild(div);
      let now = new Date().getTime();
      let distance = countDownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      (div as HTMLElement).innerHTML = "Melinda Turning 30" + "</br>"+"Days: " + days + " Hours: " + hours + " Minutes:" + minutes + " Seconds: " + seconds;

  
}
setInterval(Time, 300);
