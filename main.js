const colorInputs = document.querySelectorAll(".colors input");
const gradientBox = document.querySelector(".gradient-box");

const selectMenu = document.querySelector(".select-box select");
const textarea = document.querySelector("textarea");

const generateGradient = () => {
    // console.log("Color update...")
    const gradient = `linear-gradient(${selectMenu.value}, ${colorInputs[0].value}, ${colorInputs[1].value})`;
    // console.log(gradient)
    gradientBox.style.background = gradient;
    textarea.value = `background: ${gradient}`;
}

colorInputs.forEach(input => {
    input.addEventListener("input", generateGradient);
});

selectMenu.addEventListener("change", generateGradient);