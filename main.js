const colorInputs = document.querySelectorAll(".colors input");
const gradientBox = document.querySelector(".gradient-box");

const selectMenu = document.querySelector(".select-box select");
const textarea = document.querySelector("textarea");
const refreshBtn = document.querySelector(".refresh");
const copyBtn = document.querySelector(".copy");

const getRandomColor = () => {
    const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    return `#${randomHex}`;
}

const generateGradient = (isRandom) => {
    if (isRandom) {
        // console.log(getRandomColor())
        colorInputs[0].value = getRandomColor();
        colorInputs[1].value = getRandomColor();
    }
    // console.log("Color update...")
    const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
    // console.log(gradient)
    gradientBox.style.background = gradient;
    textarea.value = `background: ${gradient}`;
}

const copyCode = () => {
    navigator.clipboard
    .writeText(textarea.value);
    copyBtn.innerHTML = "Code Copied";
    setTimeout(() => copyBtn.innerHTML = "Copy Code", 1600);
}

colorInputs.forEach(input => {
    input.addEventListener("input", () => generateGradient(false));
});

selectMenu.addEventListener("change", () => generateGradient(false));
refreshBtn.addEventListener("click", () => generateGradient(true));
copyBtn.addEventListener("click", copyCode);