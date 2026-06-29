```javascript
const words = [
    "Frontend Developer",
    "UI Designer",
    "Java Developer",
    "Web Designer"
];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {

    currentWord = words[i];

    if (!isDeleting) {
        document.getElementById("typing").innerHTML =
        currentWord.substring(0, j + 1);
        j++;

        if (j === currentWord.length) {
            isDeleting = true;
            setTimeout(type, 1200);
            return;
        }
    }

    else {
        document.getElementById("typing").innerHTML =
        currentWord.substring(0, j - 1);
        j--;

        if (j === 0) {
            isDeleting = false;
            i++;

            if (i === words.length) {
                i = 0;
            }
        }
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();
```
