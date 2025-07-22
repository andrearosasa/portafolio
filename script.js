const roles = ["Data Analyst", "Web Scraper", "Dashboard Builder", "SQL Developer"];
let index = 0;
let charIndex = 0;
let typing = true;

const typingSpan = document.querySelector(".typing-text span");

function typeText() {
    if (typing) {
        if (charIndex < roles[index].length) {
            typingSpan.textContent += roles[index].charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 100);
        } else {
            typing = false;
            setTimeout(typeText, 1500);
        }
    } else {
        if (charIndex > 0) {
            typingSpan.textContent = roles[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeText, 50);
        } else {
            typing = true;
            index = (index + 1) % roles.length;
            setTimeout(typeText, 500);
        }
    }
}

document.addEventListener("DOMContentLoaded", typeText);
