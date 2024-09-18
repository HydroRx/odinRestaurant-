import { renderNav } from "./renderNav";
export function loadHomePage() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  renderNav();
  content.innerHTML += `
    <main class="homepage">
      <h1>Welcome to the Coffee House!</h1>
      <p>
        Step into our cozy café and let the aroma of freshly brewed coffee
        embrace you. Our friendly team is here to serve you exceptional
        coffee, crafted with care and passion. Take a moment to unwind, savor
        the flavors, and create cherished memories in our welcoming space.
      </p>
      <div class="homeButtons">
        <button class="menuButton" id="menu-home">Menu</button>
        <button class="contactButton" id="contact-home">Contact Us</button>
      </div>
    </main>
  `;
}
