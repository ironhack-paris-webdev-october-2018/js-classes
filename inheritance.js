// Inheritance - making a copy of a class with some customizations
// ---------------------------------------------------------------
// CoverSong inherits from Song
class CoverSong extends Song {
  // replace the Song constructor with this one
  constructor(songTitle, coverArtist, coverYear, oldArtist) {
    // call the Song constructor with "super" (as in "superclass")
    super(songTitle, coverArtist, coverYear);
    // Song constructor: constructor(songTitle, artistName, year) {

    // add an extra property that the Song constructor didn't have
    // (this is why we are defining a new constructor)
    this.originalArtist = oldArtist;
  }

  compare() {
    console.log("The " + this.originalArtist + " version is better, man.");
  }
}


var coverA =
  new CoverSong("Knockin' on Heaven's Door", "Guns'N'Roses", 1990, "Bob Dylan");

console.log("COVER SONG -------------------------------------");
console.log(coverA);

coverA.play();
coverA.favorite();
coverA.compare();
