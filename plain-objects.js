// Song
// ----
// Information about the song we want to store
// (keys or properties of the objects)
// - title
// - artist
// - duration
// - releaseYear
// - album

// Behaviors of songs
// (methods of the objects)
// - favorite
// - play
// - pause

var songA = {
  title: "Unfinished Sympathy",
  artist: "Massive Attack",
  duration: 320000,
  releaseYear: 1991,
  album: "Blue Lines",
  play: function () {
    console.log("PLAYING '" + songA.title + "' by " + songA.artist);
  },
  favorite: function () {
    console.log("Added '" + songA.title + "' to your FAVORITES.");
  },
};

var songB = {};
songB.title = "Currency";
songB.artist = "The Black Angels";
songB.duration = 310000;
songB.releaseYear = 2017;
songB.album = "Death Song";
songB.play = function () {
  console.log("PLAYING '" + songB.title + "' by " + songB.artist);
};
songB.favorite = function () {
  console.log("Added '" + songB.title + "' to your FAVORITES.");
};


console.log("PLAIN OBJECTS ---------------------------------");
console.log(songA);
console.log(songB);

songA.play();
songA.favorite();

songB.play();
songB.favorite();
