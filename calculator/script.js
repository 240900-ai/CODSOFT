const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

// Loop through all buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        const value = this.textContent;

        // If-else statements for calculator actions
        if (value === "C") {
            display.value = "";
        }
        else if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        }
        else {
            display.value += value;
        }
    });
}