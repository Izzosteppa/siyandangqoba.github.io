// Add dark/light mode toggle
const toggleButton = document.createElement("button");
toggleButton.innerText = "Toggle Dark Mode";
toggleButton.style.position = "fixed";
toggleButton.style.bottom = "10px";
toggleButton.style.right = "10px";
document.body.appendChild(toggleButton);

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

/* Add this to your CSS:
.dark-mode {
    background: #333;
    color: #fff;
}
*/
