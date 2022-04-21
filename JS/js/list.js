export * from "./details.js";
import { loadDisplay } from "./details.js";
export * from "./info.js";
import { gameList } from "./info.js";

// Swap content to details
export const displayDetails = (game) => {
    const bod = document.querySelector('#content-section');
    bod.innerHTML = '<h2 class="details-title">' + game.getName +'<h2>';
    loadDisplay(game);
}

export const loadList = () => {
    const bod = document.querySelector('#content-section');
    const listContainer = document.createElement("div");
    bod.appendChild(listContainer);
    // Each game displayed as: [Img Name] --- [Details-Button]
    for (let i = 0; i < gameList.length; i++){
        
        let listItem = document.createElement("div");
        bod.appendChild(listItem);

        let listItemLeft = document.createElement("div");
        let listItemName = document.createElement("p");
        let listItemImg = document.createElement("img");
        let listItemButton = document.createElement("a");

        // assign all game attributes and link to details
        listItemName.textContent = gameList[i].getName;
        listItemImg.src = gameList[i].getImage;
        listItemButton.addEventListener("click", displayDetails.bind(this,gameList[i])); // () => func(game[i]) falla
        
        listItemLeft.appendChild(listItemImg);
        listItemLeft.appendChild(listItemName);
        
        listItem.appendChild(listItemLeft);
        listItem.appendChild(listItemButton);

        listItem.classList.add('list-container__list-item');
        listItemName.classList.add('list-container__name');
        listItemImg.classList.add('list-container__image');
        listItemButton.classList.add('list-container__button');
        listItemLeft.classList.add('list-container__left');
        listContainer.appendChild(listItem);
        listContainer.classList.add('list-container');
    }
};
  