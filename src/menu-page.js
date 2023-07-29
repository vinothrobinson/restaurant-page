import {switchToHomePage, switchToMenuPage, switchToContactPage} from "./index.js";

const switchToMenu = () => {
    const content = document.querySelector("#content");

    const menuPage = document.createElement('div');
    menuPage.classList.add("menu-page");

    const siteInfo = document.createElement('div');
    siteInfo.classList.add("site-info");
    
    // Creating Tabs to switch screens
    const tabs = document.createElement("div");
    tabs.classList.add("tabs");
    const homeButton = document.createElement("button")
    homeButton.classList.add("button-tab")
    homeButton.textContent = "Home"
    homeButton.addEventListener("click", () => {
        switchToHomePage();
    })
    const menuButton = document.createElement("button")
    menuButton.classList.add("button-tab")
    menuButton.textContent = "Menu"
    menuButton.addEventListener("click", () => {
        switchToMenuPage();
    })
    const contactButton = document.createElement("button")
    contactButton.classList.add("button-tab")
    contactButton.textContent = "Contact"
    contactButton.addEventListener("click", () => {
        switchToContactPage();
    })
    tabs.appendChild(homeButton)
    tabs.appendChild(menuButton)
    tabs.appendChild(contactButton)
    siteInfo.appendChild(tabs)

    const foodOptions =  document.createElement('div');
    foodOptions.classList.add("food-options")
    foodOptions.innerHTML = `
        <div class="food-item">
            <h2 class="food-name">Pikachu Burger</h2>
            <img class="food-image" src="https://img.huffingtonpost.com/asset/5b9e35c72100003100c5d420.jpeg?ops=scalefit_720_noupscale">
            <p class=description>This is a burger designed to look like pikachu, it is accompanied by tortilla chips and a salsa dip</p>
            <p class="price">Price: $12.00<p>
        </div>
        <div class="food-item">
            <h2 class="food-name">Snorlax Plate</h2>
            <img class="food-image" src="https://www.moshimoshi-nippon.jp/wp/wp-content/uploads/2019/08/b6bb41e5924867b5fcd56e3bc1aa108e.jpg">
            <p class=description>This is a lunch meal that comes with rice, meat, and an assortment of veggies</p>
            <p class="price">Price: $15.00<p>
        </div>
        <div class="food-item">
            <h2 class="food-name">Pokémon Latte</h2>
            <img class="food-image" src="https://soranews24.com/wp-content/uploads/sites/3/2022/01/pokemon-cafe8.jpg">
            <p class=description>Order custom lattes with the design of any pokemon you wish!</p>
            <p class="price">Price: $10.00<p>
        </div>
        <div class="food-item">
            <h2 class="food-name">Eevee's Royal Milk Tea</h2>
            <img class="food-image" src="https://pbs.twimg.com/media/E2c1kijVEAEyHnQ.jpg">
            <p class=description>An Eevee themed royal milk tea!</p>
            <p class="price">Price: $8.00<p>
        </div>
    `

    siteInfo.appendChild(foodOptions)

    menuPage.appendChild(siteInfo)

    const picture = document.createElement('div');
    picture.classList.add("picture");
    menuPage.appendChild(picture);

    content.appendChild(menuPage);
}

export default switchToMenu;