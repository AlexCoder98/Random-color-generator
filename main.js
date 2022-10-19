const btn = document.querySelector("[data-click-btn]");

btn.addEventListener("click", () => {
    const coloredDiv = btn.closest("#container").querySelector(".colored-container");
    const colorNumber = btn.closest("#container").querySelector(".color-number");

    let redRandomColor = Math.floor(Math.random() * 255);
    let greenRandomColor = Math.floor(Math.random() * 255);
    let blueRandomColor = Math.floor(Math.random() * 255);

    colorNumber.innerHTML = `rgb (${redRandomColor}, ${greenRandomColor}, ${blueRandomColor})`;

    coloredDiv.style.display = "block";
    coloredDiv.style.backgroundColor = `rgb(${redRandomColor},${greenRandomColor},${blueRandomColor})`;
});