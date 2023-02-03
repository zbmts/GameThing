class Room {
  constructor(name) {
    this._name = name;
    this._description = "";
    this._linkedRooms = {};
    this._character = "";
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get character() {
    return this._character
  }

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }

  set description(value) {
    if (value.length < 4) {
      alert("description is too short.");
      return;
    }
    this._description = value;
  }

  set character(value) {
    this._character = value;
  }


  describe() {
    return "Looking around the " + this._name + " you can see " + this._description;
  }


  linkRoom(direction, roomToLink) {
    this._linkedRooms[direction] = roomToLink;
  }

  /**
   * a method to produce friendly description of linked rooms
   * 
   * @returns {array} descriptions of what rooms are in which direction
   * @author Neil Bizzell
   * @version 1.0
   */
  getDetails() {
    const entries = Object.entries(this._linkedRooms);
    let details = []
    for (const [direction, room] of entries) {
      let text = " The " + room._name + " is to the " + direction;
      details.push(text);
    }
    return details;
  }

  //method to move to a new room
  move(direction) {
    if (direction in this._linkedRooms) {
      return this._linkedRooms[direction];
    } else {
      alert("You can't go that way",);
      alert(this._name)
      return this;
    }
  }
}

class Item {
  constructor(name) {
    this._name = name,
      this._description = ""
  }

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }

  set description(value) {
    if (value.length < 4) {
      alert("Decription is too short.");
      return;
    }
    this._name = value;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  describe() {
    return "The " + this._name + " is " + this._description;
  }


}

class Character {
  constructor(name) {
    this._name = name,
      this._description = ""
    this._conversation = ""
  }
  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }

  set description(value) {
    if (value.length < 4) {
      alert("Decription is too short.");
      return;
    }
    this._description = value;
  }

  set conversation(value) {
    if (value.length < 4) {
      alert("conversation is too short.");
      return;
    }
    this._conversation = value;
  }
  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get conversation() {
    return this._conversation;
  }

  describe() {
    return "You have met " + this._name + ", " + this._name + " is " + this._description;
  }

  converse() {
    return this._name + " says " + "'" + this._conversation + "'";
  }
}

class Enemy extends Character {
  constructor(name) {
    super(name);
    this._weakness = "";
  }

  set weakness(value) {
    if (value.length < 4) {
      alert("Decription is too short.");
      return;
    }
    this._weakness = value;
  }

  fight(item) {
    if (item = this_weakness) {
      return true;
    } else {
      return false;
    }
  }

}

const Kitchen = new Room("kitchen");
Kitchen.description = "A large kitchen with a spacious, open floor plan with high-end appliances, large island a with sink and seating and a variety of storage options";
const Lounge = new Room("lounge");
Lounge.description = "A mid size lounge with 2 sofas, a big tv and a small fireplace";
const Bathroom = new Room("Bathroom");
Bathroom.description = "Someone is in the room. This is awkward";
const Hall = new Room("hall");
Hall.description = "A normal size hall with white walls";
const ScaryRoom = new Room("dark room");
ScaryRoom.description = "Blood on the walls and a safe on the floor maybe type 'crack' and see if you can open";
const HomeLibrary = new Room("Home Library");
HomeLibrary.description = "So many books in this libary";
const HomeOffice = new Room("Home Office");
HomeOffice.description = "A room with a desk, pc and a small little plant";
const Theater = new Room("Theater");
Theater.description = "What a fancy room to have inside a house";


Hall.linkRoom("west", Kitchen);
Hall.linkRoom("east", ScaryRoom);
Hall.linkRoom("north", Bathroom);
Bathroom.linkRoom("south", Hall);
Kitchen.linkRoom("north", Lounge);
Kitchen.linkRoom("east", Hall);
Lounge.linkRoom("south", Kitchen);
Lounge.linkRoom("east", HomeLibrary);
HomeLibrary.linkRoom("west", Lounge);
HomeLibrary.linkRoom("east", HomeOffice);
HomeOffice.linkRoom("west", HomeLibrary);
HomeOffice.linkRoom("south", Theater);
Theater.linkRoom("north", HomeOffice);
Theater.linkRoom("south", ScaryRoom);
ScaryRoom.linkRoom("north", Theater);
ScaryRoom.linkRoom("west", Hall);


const John = new Character("John");
John.conversation = "Can't you see im in here! You creep";
John.description = "a gamer";
const Dog = new Character("Barry");
Dog.conversation = "Woof Woof which translates to will you pet me?";
Dog.description = "a Dog";
const Tom = new Character("Tom");
Tom.conversation = "Do you like jazz?";
Tom.description = "a wizard";
const Sarah = new Character("Sarah");
Sarah.conversation = "Howdy partner";
Sarah.description = "a friendly cowgirl";
const Jack = new Character("Jack");
Jack.conversation = "Wheres me pirate ship";
Jack.description = "a pirate";
const Lily = new Character("Lily");
Lily.conversation = "Shhhh a movie is on";
Lily.description = "a mermaid";
const Mark = new Character("Mark");
Mark.conversation = "I wish i had skin!";
Mark.description = "a skeleton";

Bathroom.character = John;
Kitchen.character = Dog;
ScaryRoom.character = Tom;
HomeOffice.character = Mark;
HomeLibrary.character = Sarah;
Lounge._character = Jack;
Theater.character = Lily;



function displayRoomInfo(room) {
  let occupantMsg = ""
  if (room.character === "") {
    occupantMsg = ""
  } else {
    occupantMsg = room.character.describe() + ". " + room.character.converse()
  }

  textContent = "<p>" + room.describe() + "</p>" + "<p>" +
    occupantMsg + "</p>" + "<p>" + room.getDetails() + "</p>";

  document.getElementById("textarea").innerHTML = textContent;
  document.getElementById("buttonarea").innerHTML = '><input type="text" id="usertext" />';
  document.getElementById("usertext").focus();
}
function startGame() {
  currentRoom = Hall
  displayRoomInfo(currentRoom);
  
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      command = document.getElementById("usertext").value;
      const directions = ["north", "south", "east", "west"]
      if (currentRoom === Kitchen && command.toLowerCase() === "yes") {
        document.getElementById("usertext").value = ""
        alert("You win!");
        location.reload();
      } else if (currentRoom === ScaryRoom && command.toLowerCase() === "no") {
        document.getElementById("usertext").value = ""
        alert("Tom turned you into a frog... you lose");
        location.reload();
      } else if (currentRoom === ScaryRoom && command.toLowerCase() === "yes") {
        document.getElementById("usertext").value = ""
        alert("Tom smiled and tells you the code to the safe is '547'");
      } else if (currentRoom === ScaryRoom && command.toLowerCase() === "crack") {
        document.getElementById("usertext").value = ""
        let attempts = 3;
        let success = false;
        while (attempts > 0 && !success) {
          let guess = prompt("Enter the combination to crack the safe:");
          if (guess === "547") {
            alert("You cracked the safe! No rewards yet!");
            success = true;
          } else {
            attempts--;
            alert(`Incorrect combination. You have ${attempts} attempts left.`);
          }
        }
        if (!success) {
          alert("You have used all your attempts. The safe remains locked.");
        }
      } else if (directions.includes(command.toLowerCase())) {
        currentRoom = currentRoom.move(command)
        displayRoomInfo(currentRoom);
      } else {
        document.getElementById("usertext").value = ""
        alert("that is not a valid command please try again")
      }
    }
  });
  
}
