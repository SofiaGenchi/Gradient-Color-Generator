const colorInputs = document.querySelectorAll(".colors input");
const gradientBox = document.querySelector(".gradient-box");

const generateGradient = () => {
    // console.log("Color update...")
    const gradient = `linear-gradient(to top left, ${colorInputs[0].value}, ${colorInputs[1].value})`;
    // console.log(gradient)
    gradientBox.style.background = gradient;
}

colorInputs.forEach(input => {
    input.addEventListener("input", generateGradient);
})