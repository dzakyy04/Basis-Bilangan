const colors = [
    '#ff1900',
    '#ffe600',
    '#00ffe1',
    '#00ff15'
]

function createOne() {
    const section = document.querySelector(".background section.sec1");
    const createOne = document.createElement("p");
    let one = document.querySelectorAll("section.sec1 p");
    for (let i = 0; i < one.length; i++) {
        one[i].classList.add("fa-solid");
        one[i].classList.add("fa-1");
    }

    let size = Math.random() * 50;

    createOne.style.fontSize = 10 + size + "px";

    createOne.style.top = Math.random() * innerHeight + "px";
    createOne.style.left = Math.random() * innerWidth + "px";

    const fontColor = colors[Math.floor(Math.random() * colors.length)];
    createOne.style.color = fontColor;
    createOne.style.textShadow = `0px 0px 15px ${fontColor}`;

    section.appendChild(createOne);

    setTimeout(() => {
        createOne.remove()
    }, 5000)
}

setInterval(createOne, 150);

function createZero() {
    const section = document.querySelector(".background section.sec2");
    const createZero = document.createElement("p");
    let zero = document.querySelectorAll("section.sec2 p");
    for (let i = 0; i < zero.length; i++) {
        zero[i].classList.add("fa-solid");
        zero[i].classList.add("fa-0");
    }

    let size = Math.random() * 50;

    createZero.style.fontSize = 10 + size + "px";

    createZero.style.top = Math.random() * innerHeight + "px";
    createZero.style.left = Math.random() * innerWidth + "px";

    const fontColor = colors[Math.floor(Math.random() * colors.length)];
    createZero.style.color = fontColor;
    createZero.style.textShadow = `0px 0px 15px ${fontColor}`;

    section.appendChild(createZero);

    setTimeout(() => {
        createZero.remove()
    }, 5000)
}

setInterval(createZero, 150);