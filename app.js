

var button = document.getElementById("parseBtn");
// I set up a button to run the function that will parse the Preamble when I'm ready for it to be parsed
var preambleNow = document.getElementById('preamble').innerText.toLowerCase().replace(/[^\w\s]|_/g, "");
/* Because the StartsWith and EndsWith methods are case sensitive, I needed to find a way to covert all the text to lowercase since Tranquility is capitalized in the Preamble.
I also needed to remove the commas to make the methods work as well. This replace method accomplishes that goa.
 */

var tStartCounter = 0;
var eEndCounter = 0;
var bothCounter = 0;
button.addEventListener("click", parseText);


function parseText () {
  console.log("Hi Christian!")
  var preambleArray = preambleNow.split(" ");
  console.log("this is the preamble now", preambleArray)
  console.log("here's the length of the preamble", preambleArray.length);

    for (var i = 0; i < preambleArray.length; i++)

    if (preambleArray[i].startsWith("t")){
        tStartCounter += 1;
      }


    for (var i = 0; i < preambleArray.length; i++)

      if  (preambleArray[i].endsWith("e")) {
        eEndCounter += 1;
      }


      for (var i = 0; i < preambleArray.length; i++)


      if (preambleArray[i].startsWith("t") && preambleArray[i].endsWith("e")) {
        bothCounter+= 1;
      }







   console.log(eEndCounter);
   console.log(tStartCounter);
   console.log(bothCounter);
  document.getElementById('endE').innerText = eEndCounter;
  document.getElementById('startT').innerText = tStartCounter;
  document.getElementById('both').innerText = bothCounter;




};



