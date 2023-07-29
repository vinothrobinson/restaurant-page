import {switchToHomePage, switchToMenuPage, switchToContactPage} from "./index.js";

const switchToHome = () => {
    // Creation of the div that holds the different screens
    const content = document.querySelector("#content");

    // Creation of DOM Elements for the main page
    const homePage = document.createElement('div');
    homePage.classList.add("home-page");

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
    // Styling for home page
    const restaurantName = document.createElement('h1');
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Rowlet Tree Cafe"
    const comments = document.createElement('p');
    comments.classList.add("comments");
    comments.textContent = "Eat delicious Pokémon themed food!"
    siteInfo.appendChild(restaurantName);
    siteInfo.appendChild(comments);
    const hours = document.createElement('div');

    hours.classList.add("hours");
    hours.innerHTML = `
        <h2 class="hour-title">Hours</h2>
        <p class="time">Sunday: 10:00 AM to 10:00 PM </p>
        <p class="time">Monday: 10:00 AM to 8:00 PM </p>
        <p class="time">Tuesday: 10:00 AM to 8:00 PM </p>
        <p class="time">Wednesday: 10:00 AM to 8:00 PM </p>
        <p class="time">Thursday: 10:00 AM to 8:00 PM </p>
        <p class="time">Friday: 10:00 AM to 10:00 PM </p>
        <p class="time">Saturday: 10:00 AM to 10:00 PM </p>
        `
    siteInfo.appendChild(hours)
    homePage.appendChild(siteInfo);

    const picture = document.createElement('div');
    picture.classList.add("picture");
    homePage.appendChild(picture);

    content.appendChild(homePage);
}

export default switchToHome;