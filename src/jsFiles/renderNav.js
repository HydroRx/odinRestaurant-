import coffeeBeans from "../assets/coffee-grains-svgrepo-com.svg";

export function renderNav() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <nav>
      <div class="navBar">
        <abbr title="coffee hehe ☕">
          <p>The <span>Coffee</span> House</p>
        </abbr>
        <img
          src="${coffeeBeans}"
          class="logo-image"
          alt="coffee beans"
        />
        <ul class="nav-links">
          <li><a href="#home" id="home">Home</a></li>
          <li><a href="#menu" id="menu">Menu</a></li>
          <li><a href="#contact" id="contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  `;
}
