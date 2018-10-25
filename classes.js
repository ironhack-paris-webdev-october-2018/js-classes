// Class - template for creating objects of new custom type
// --------------------------------------------------------
// - Camel case but the FIRST LETTER is typically uppercase (CoverSong, StreetCar)
// - Name is typically SINGULAR (Song, not Songs)

class Song {
  // constructor is a special method that gets called WHEN YOU CREATE THE OBJECT
  // (used for defining the objects' initial structure)
  constructor(songTitle, artistName, year) {
    console.log("Creating a new Song...", songTitle);
    // "this" is the generic name you use to REFER TO THE OBJECT
    this.title = songTitle;
    this.artist = artistName;
    this.releaseYear = year;
  }

  // define all the methods
  play() {
    // use "this" instead on the object name
    console.log("PLAYING '" + this.title + "' by " + this.artist);
  }

  favorite() {
    // use "this" instead on the object name
    console.log("Added '" + this.title + "' to your FAVORITES.");
  }
}

var songA = new Song("Unfinished Sympathy", "Massive Attack", 1991);
var songB = new Song("Currency", "The Black Angels", 2017);
var songC = new Song("Auditorium", "Mos Def", 2009);
songC.duration = 274000;
songC.album = "The Ecstatic";

console.log("CLASS SONG -----------------------------------");

console.log(songA);
console.log(songB);
console.log(songC);

songA.play();
songA.favorite();

songB.play();
songB.favorite();

songC.play();
songC.favorite();
