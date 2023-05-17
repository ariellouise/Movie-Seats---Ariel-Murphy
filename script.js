//the object is each movie title
//the seats contain an object to see if it is selected or not so it is an array
const movieData = {
  "Roadrunner: A Film About Anthony Bourdain": {
    price: 9,
    seats: [
      [
        { occupied: true },
        { occupied: false },
        { occupied: false },
        { occupied: false },
        { occupied: true },
        { occupied: true },
        { occupied: false },
        { occupied: false },
      ],
      [
        { occupied: false },
        { occupied: false },
        { occupied: false },
        { occupied: true },
        { occupied: true },
        { occupied: true },
        { occupied: true },
        { occupied: false },
      ],
    ],
  },
};

console.log(
  movieData["Roadrunner: A Film About Anthony Bourdain"[1][4].seats.occupied]
);

document.getElementById("movieSelector").onchange = (evt) => {
  console.log(evt.target.value);
  const selectedMovieSeats = movieData[evt.target.value].seats;
  //object is movieData, array is seats
  console.log(selectedMovieSeats);
  let generatedHTML = ""; //javascript placeholder that holds html that shows up
  //get each seat of the selected movie seats >
  for (const seat of selectedMovieSeats) {
    //loop over all of the array of seats
    if (seat.occupied) {
      generatedHTML += "<div>"; //had to check code before here
      for (const seat of row) {
        if (seat.occupied === true) {
          generatedHTML +=
            '<span class="material-symbols-outlined occupied"> event_seat </span>';
        } else {
          generatedHTML +=
            '<span class="material-symbols-outlined"> event_seat </span>';
        }
      }
    }
    generatedHTML += "<div>";
  }
  console.log(generatedHTML);
  document.getElementById("seats").innerHTML = generatedHTML;
};

//the function is Event
//document is in the DOM, GEBId is the function built into the DOM that lets you grab the selector, the selector is in quotes because it is the string that belongs to that ID,  The onchange property comes from the document object model, and setting all of that equal to a new function with the parameter of (evt).... this method of formatting gives more control over the scope with '=>'
//You now can select a movie and it will give you that movie.
