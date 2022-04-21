

class Game {
    constructor(name, image, description) {
      this.name = name;
      this.image = image;
      this.description = description;
    }

    get getName() {
        return this.name;
      }
    
    set setName(value) {
        if (typeof value === 'string') {
          this.name = value;
        } else {
          console.error('Name needs to be a string');
        }
    }

    get getImage() {
        return this.image;
      }
    
    set setImage(value) {
        if (typeof value === 'string') {
          this.image = value;
        } else {
          console.error('Image url/src needs to be a string');
        }
    }

    get getDescription() {
        return this.description;
      }
    
    set setDescription(value) {
        if (typeof value === 'string') {
          this.description = value;
        } else {
          console.error('Description needs to be a string');
        }
    }
}
  
// List of Game objects

const urlAPI = "https://626036e492df0bc0f34165f4.mockapi.io/steam";
    
async function getUsers() {
  try {
      let res = await fetch(urlAPI);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}

/*fetch('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0.')
.then((response) => {
  return response.json();
})
.then((myJson) => {
  console.log(myJson);
});
*/

export let gameList = [];

export async function renderUsers() {
  
  let users = await getUsers();

  users.forEach(user => {
      var game = new Game(user.name, user.image,user.description);
      gameList.push(game);
  });
}

(() => {
  renderUsers();
})();