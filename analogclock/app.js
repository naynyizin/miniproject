const body = document.querySelector("body"),
    hourHand = document.querySelector(".hour"),
    minuteHand = document.querySelector(".minute"),
    secondHand = document.querySelector(".second"),
    modeSwitch = document.querySelector(".switch-mode");

if (localStorage.getItem("mode") === "Dark Mode") {
    body.classList.add("dark");
    modeSwitch.textContent = "Light Mode";
}

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    const isDark = body.classList.contains("dark");
    modeSwitch.textContent = isDark ? "Light Mode" : "Dark Mode";
    localStorage.setItem("mode", isDark ? "Dark Mode" : "Light Mode");
});

const updateTime = () => {
    let date = new Date(),
        second = (date.getSeconds() / 60) * 360,
        minute = (date.getMinutes() / 60) * 360,
        hour = (date.getHours() / 12) * 360;

    secondHand.style.transform = `rotate(${second}deg)`;
    minuteHand.style.transform = `rotate(${minute}deg)`;
    hourHand.style.transform = `rotate(${hour}deg)`;
};

setInterval(updateTime, 1000);
