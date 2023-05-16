document.getElementById(movieSelector).onchange = (evt) => {
  console.log(evt.target.value);
};
//this is an event listener
//the function is event
//document is in the DOM, GEBId is the function built into the DOM that lets you grab the selector, the selector is in quotes because it is the string that belongs to that ID,  The onchange property comes from the document object model, and setting all of that equal to a new function with the parameter of (evt).... this method of formatting gives more control over the scope with '=>'
//You now can select a movie and it will give you that movie
