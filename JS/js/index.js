export * from "./list.js";
import { loadList } from "./list.js";
export * from "./info.js";
import { renderUsers } from "./info.js";

// Swap content to list
const displayList = () => {
  const bod = document.querySelector('#content-section');
  if(document.querySelector(".list-container")){
    window.alert("Already here!");
  }else{
    bod.innerHTML = '<h2 class="list-title">GAME LIST<h2>';
    loadList();
  }
}

(() => {
    const hamburger = document.getElementById("menu-toggle");
    const listLink = document.getElementById("list-link");
    const listLinkDrop = document.getElementById("list-link-drop");
    const navbarSection = document.getElementById("navbar-section");
    const menu = document.getElementById("menu");
    const nodes = menu.getElementsByTagName("a");

    const addListeners = () => {
      // Nav color
      navbarSection.addEventListener("mouseover", mouseoverNav);
      navbarSection.addEventListener("mouseout", mouseoutNav);

      // Dropdown toggle
      hamburger.addEventListener("click", dropLinks);

      // Swap content to list
      listLink.addEventListener("click", displayList);
      listLinkDrop.addEventListener("click", displayList);
    }

    // Drop-down hamburguer
    let open = false;
    menu.style.maxHeight = 0;

    const dropLinks = () => {
      if (open) {
        menu.style.maxHeight = 0;
        setTimeout(() =>{
          menu.style.transform = `translateY(${-300}px)`;
        }, 300);
        menu.classList.toggle("active");
      } else {
        for (var i = 0; i < nodes.length; i++){
          nodes[i].style.maxHeight = 100 + "%";
        }
        menu.style.maxHeight = 300 + "px";
        menu.style.transform = `translateY(${0}px)`;
      }
      open = !open;
    }

    // Pop-up 
    var popup = null;

    const createPopup = () => {
      popup = document.createElement("div");
      popup.classList.add('popup--fadeIn');
      var newParag = document.createElement("p");
      newParag.textContent = "Welcome to Steam!";
      popup.appendChild(newParag);
      var currentDiv = document.querySelector("#content-section");
      document.body.insertBefore(popup, currentDiv);
    }
    const fadeOutPopup = () => {
      popup.classList.remove('popup--fadeIn');
      popup.classList.add('popup--fadeOut');
    }
    const removePopup = () => {
      popup.remove();
    }

    // Popup fade in + fade out
    setTimeout(() =>{
      createPopup();
      setTimeout(() =>{
        fadeOutPopup();
        setTimeout(() =>{
          removePopup();
        }, 3000);
      }, 4000);
    }, 2000);
    

    // Mouse-over color
    var navColor = navbarSection.style.backgroundColor;
    const mouseoverNav = (event) => {
      if (event.target.className == "navbar"){
        event.target.style.backgroundColor = "#450b23";
      }
      else{
        navbarSection.style.backgroundColor = "#450b23";
      }
    }
    const mouseoutNav = (event) => {
      if (event.target.className == "navbar"){
        event.target.style.backgroundColor = navColor;
      }
      else{
        navbarSection.style.backgroundColor = "#450b23";
      }
    }

    // Add listeners
    addListeners();

})();
  
  