// Swap content to details
displayDetails = (game) => {
    const bod = document.querySelector('#content-section');
    bod.innerHTML = '<h2 class="details-title">' + game.getName +'<h2>';
    loadDisplay(game);
}

loadList = () => {
    const bod = document.querySelector('#content-section');
    const listContainer = document.createElement("div");
    bod.appendChild(listContainer);
    // Each game displayed as: [Img Name] --- [Details-Button]
    for (i = 0; i < gameList.length; i++){
        
        listItem = document.createElement("div");
        bod.appendChild(listItem);

        listItemLeft = document.createElement("div");
        listItemName = document.createElement("p");
        listItemImg = document.createElement("img");
        listItemButton = document.createElement("a");

        // assign all game attributes and link to details
        listItemName.textContent = gameList[i].getName;
        listItemImg.src = gameList[i].getImage;
        listItemButton.addEventListener("click", displayDetails.bind(this,gameList[i]));
        
        listItemLeft.appendChild(listItemImg);
        listItemLeft.appendChild(listItemName);
        
        listItem.appendChild(listItemLeft);
        listItem.appendChild(listItemButton);

        listItem.classList.add('list-container__list-item');
        listContainer.appendChild(listItem);
        listContainer.classList.add('list-container');
    }
};
  