import "./styles.css";
import home_content from "./home.js";
// import menu_content from "./menu";
// import about_content from "./about";

const content = document.getElementById("content");
content.appendChild(home_content);
// content.appendChild(menu_content);
// content.appendChild(about_content);

function clear_content() {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }}
const home_btn = document.getElementById("home-btn");
home_btn.addEventListener("click", () => {
    clear_content();
    content.appendChild(home_content);
});

