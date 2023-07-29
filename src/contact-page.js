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

    const contactInfo = document.createElement('div')
    contactInfo.classList.add("contact-info");
    contactInfo.innerHTML = `
        <h1 class="contact-title">Contact Us!</h1>
        <p class="contact-item"> Email: rowlettreecafe@gmail.com </p>
        <p class="contact-item"> Phone: 123-456-7890</p>
        <p class="contact-item"> Location: Rowlet's Tree, Pokémon Land</p>
        <img class="icon" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1c80846e-82c1-4488-a31d-4b03d05af719/da24v1y-ae7e1f13-7cf4-4805-8427-4dad49317310.png/v1/fill/w_1024,h_724/rowlet_sleeping_by_lianyadoran_da24v1y-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzI0IiwicGF0aCI6IlwvZlwvMWM4MDg0NmUtODJjMS00NDg4LWEzMWQtNGIwM2QwNWFmNzE5XC9kYTI0djF5LWFlN2UxZjEzLTdjZjQtNDgwNS04NDI3LTRkYWQ0OTMxNzMxMC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.-U2TIVi8ObocEHee3_c2IIHWQHNJPqd6KQsGuBFCVM8">
    `
    siteInfo.appendChild(contactInfo)
    contactPage.appendChild(siteInfo)

    const picture = document.createElement('div');
    picture.classList.add("picture");
    contactPage.appendChild(picture);

    content.appendChild(contactPage);
}

export default switchToContact;