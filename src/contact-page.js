import {switchToHomePage, switchToMenuPage, switchToContactPage} from "./index.js";

const switchToContact = () => {
    const content = document.querySelector("#content");

    const contactPage = document.createElement('div');
    contactPage.classList.add("contact-page");

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
    contactPage.appendChild(siteInfo)

    const picture = document.createElement('div');
    picture.classList.add("picture");
    contactPage.appendChild(picture);

    content.appendChild(contactPage);
}

export default switchToContact;