import "./styles.css";
import { loadHomePage } from "./jsFiles/home";
import { loadMenuPage } from "./jsFiles/menu";
import { loadContactPage } from "./jsFiles/contact";

document.addEventListener("DOMContentLoaded", () => {
  loadHomePage();
});

document.body.addEventListener("click", (e) => {
  const target = e.target;

  if (target.tagName === "A" || target.tagName === "BUTTON") {
    e.preventDefault();

    const id = target.id;

    switch (id) {
      case "home":
        loadHomePage();
        break;
      case "menu":
      case "menu-home":
        loadMenuPage();
        break;
      case "contact":
      case "contact-home":
        loadContactPage();
        break;
      default:
        console.warn(`Unhandled ID: ${id}`);
        break;
    }
  }
});
