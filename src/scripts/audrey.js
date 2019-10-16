// console.log("you're doing great! the turtle and the hare! keep going!")

const audrey = document.getElementById("audrey")

console.log("width", audrey.style.width);
console.log("height", audrey.style.width);

document.addEventListener("scroll", function () {
    audrey.style.width = `${((1/3) * window.scrollY)}px`;
    // console.log("width", audrey.style.width);
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */


    audrey.style.height = `${((1/4) * window.scrollY)}px`;
    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
})