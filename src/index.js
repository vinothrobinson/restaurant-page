// Creation of the div that holds the different screens
const content = document.querySelector("#content");

// Creation of DOM Elements for the main page
const homePage = document.createElement('div');
homePage.classList.add("home-page");

const siteInfo = document.createElement('div');
siteInfo.classList.add("site-info");
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