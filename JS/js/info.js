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
var gameList = [
    new Game('Katana Zero', './assets/images/VG_Item3.jpg', 'Katana ZERO is a stylish neo-noir, action-platformer featuring breakneck action and instant-death combat. Slash, dash, and manipulate time to unravel your past.'),
    new Game('Hades', './assets/images/VG_Item4.png', 'Hades is a god-like rogue-like dungeon crawler that combines the best aspects of Supergiants critically acclaimed titles, including the fast-paced action of Bastion, the rich atmosphere and depth of Transistor, and the character-driven storytelling of Pyre.'),
    new Game('TUNIC', './assets/images/VG_Item6.jpg', 'Explore a land filled with lost legends, ancient powers, and ferocious monsters in TUNIC, an isometric action game about a small fox on a big adventure. Stranded in a ruined land, and armed with only your own curiosity, you will confront colossal beasts, collect strange and powerful items, and unravel long-lost secrets.')
];