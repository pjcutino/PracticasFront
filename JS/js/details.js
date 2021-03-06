export const loadDisplay = (game) => {
    const bod = document.querySelector('#content-section');
    
    const detailsDisplayContainer = document.createElement("div");
    detailsDisplayContainer.classList.add('details-content');

    const detailsDisplay = document.createElement("div");
    detailsDisplay.classList.add('details-content__details-display');
    
    detailsDisplayContainer.appendChild(detailsDisplay);
    bod.appendChild(detailsDisplayContainer);

    let detailsDisplayImg = document.createElement("img");
    let detailsDisplayDescription = document.createElement("p");

    detailsDisplayImg.classList.add('details-content__image');
    detailsDisplayDescription.classList.add('details-content__description');

    // assign game attributes
    detailsDisplayImg.src = game.getImage;
    detailsDisplayDescription.textContent = game.getDescription;
    
    detailsDisplay.appendChild(detailsDisplayImg);
    detailsDisplay.appendChild(detailsDisplayDescription);
    
}