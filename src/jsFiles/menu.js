import { renderNav } from "./renderNav";

export function loadMenuPage() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  renderNav();
  content.innerHTML += `
      <main class="menu">
        <div class="card">
          <h2>Coffee Kinds</h2>
          <ul>
            <li><span>Coffee</span> <span>€4.75</span></li>
            <li><span>Black Coffee</span> <span>€3.00</span></li>
            <li><span>Espresso</span> <span>€2.50</span></li>
            <li><span>Macchiato</span> <span>€3.75</span></li>
            <li><span>Mocha</span> <span>€5.25</span></li>
          </ul>

        </div>

       <div class="card">
          <h2>Light Beverages</h2>
          <ul>
            <li><span>Cola</span> <span>€2.00</span></li>
            <li><span>Sprite</span> <span>€2.00</span></li>
            <li><span>Fanta</span> <span>€2.00</span></li>
            <li><span>Iced Tea</span> <span>€3.25</span></li>
            <li><span>Lemonade</span> <span>€2.50</span></li>
          </ul>
        </div>

        <div class="card">
          <h2>Food</h2>
          <ul>
            <li><span>Breakfast</span> <span>€5.00</span></li>
            <li><span>Muffin</span> <span>€2.75</span></li>
            <li><span>Croissant</span> <span>€2.50</span></li>
            <li><span>Bagel with Cream Cheese</span> <span>€3.50</span></li>
            <li><span>Cookie</span> <span>€1.50</span></li>
          </ul>
        </div>

        <div class="card">
          <h2>Specialty Drinks</h2>
          <ul>
            <li><span>Vanilla Bean Latte</span> <span>€5.50</span></li>
            <li><span>Caramel Macchiato</span> <span>€5.75</span></li>
            <li><span>Hazelnut Mocha</span> <span>€6.00</span></li>
            <li><span>Pumpkin Spice Latte (seasonal)</span> <span>€5.75</span></li>
            <li><span>Peppermint Mocha (seasonal)</span> <span>€6.25</span></li>
          </ul>
        </div>

      </main>

        `;
}
