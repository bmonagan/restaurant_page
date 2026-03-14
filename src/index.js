import "./styles.css";
import home_content from "./home.js";
import menu_content from "./menu.js";
import about_content from "./about.js";

const content = document.getElementById("content");
content.appendChild(home_content);

function clear_content() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }}
const home_btn = document.getElementById("home-button");
home_btn.addEventListener("click", () => {
    clear_content();
    content.appendChild(home_content);
});

const menu_btn = document.getElementById("menu-button");
menu_btn.addEventListener("click", () => {
    clear_content();
    content.appendChild(menu_content);
});

const about_btn = document.getElementById("about-button");
about_btn.addEventListener("click", () => {
    clear_content();
    content.appendChild(about_content);
});