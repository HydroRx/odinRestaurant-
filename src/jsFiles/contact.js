import { renderNav } from "./renderNav";
export function loadContactPage() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  renderNav();
  content.innerHTML += `
    <main class="contact">
       <div class="contact-container">
          <h2>Get in Touch with Us</h2>
          <p>Your experience at Coffee Hut is incredibly important to us. Whether you have a question, a suggestion, or just want to say hello, we’re here to help. Reach out to us through any of the methods below:</p>
          
          <div class="contact-info">
            <h3>Contact Details</h3>
            <p>Email: <a href="mailto:support@coffeehut.com">support@coffeehut.com</a></p>
            <p>Phone: <a href="tel:+9876543210">+98 765 432 10</a></p>
            <p>Address: 456 Brew Lane, Caffeine City, JavaLand</p>
          </div>
      </div>
    </main>
  `;
}
