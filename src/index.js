import switchToMenu from "./menu-page";
import switchToContact from "./contact-page";
import switchToHome from "./home-page";

// Creation of the div that holds the different screens
const content = document.querySelector("#content");

function switchToHomePage() {
    content.replaceChildren()
    switchToHome();
}

function switchToMenuPage() {
    content.replaceChildren()
    switchToMenu();
}

function switchToContactPage() {
    content.replaceChildren()
    switchToContact();
}

switchToHomePage();

export {switchToHomePage, switchToMenuPage, switchToContactPage}