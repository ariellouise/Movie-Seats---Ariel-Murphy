const movieData = {
  //the object is each movie title
  //the seats contain an object to see if it is selected or not so it is an array
  "Roadrunner: A Film About Anthony Bourdain": {
    price: 9,
    seats: [
      { occupied: true },
      { occupied: false },
      { occupied: false },
      { occupied: false },
      { occupied: true },
      { occupied: true },
      { occupied: false },
      { occupied: false },
    ],
  },
};

document.getElementById("movieSelector").onchange = (evt) => {
  console.log(evt.target.value);
  const selectedMovieSeats = movieData[evt.target.value].seats;
  console.log(selectedMovieSeats);
  let generatedHTML = "";
  //get each seat of the selected movie seats >
  for (const seat of selectedMovieSeats) {
    generatedHTML +=
      '<span class="material-symbols-outlined"> event_seat </span>';
  }
  console.log(generatedHTML);
  document.getElementById("seats").innerHTML = generatedHTML;
};
//the function is event
//document is in the DOM, GEBId is the function built into the DOM that lets you grab the selector, the selector is in quotes because it is the string that belongs to that ID,  The onchange property comes from the document object model, and setting all of that equal to a new function with the parameter of (evt).... this method of formatting gives more control over the scope with '=>'
//You now can select a movie and it will give you that movie
//Wegot selectedMovieSeats from
