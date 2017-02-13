

var button = document.getElementById("parseBtn");
var preambleNow = document.getElementById('preamble').innerText.toLowerCase();
var tStartCounter = 0;
var eEndCounter = 0;
var bothCounter = 0;
var otherWordsCounter = 0;
button.addEventListener("click", parseText);


function parseText () {
  console.log("this is the preamble", preambleNow)
  console.log("This is where you would parse the text");
  var preambleArray = preambleNow.split(" ");
  console.log("this is the preamble now", preambleArray)
  console.log("here's the length of the preamble", preambleArray.length);

    for (var i = 0; i < preambleArray.length; i++)


      // if (preambleArray[i].endsWith("e") || preambleArray[i].endsWith("e,")) {
      //   eEndCounter += 1;
      // }

      // if (preambleArray[i].startsWith("t")){
      //   tStartCounter += 1;
      // }

      if (preambleArray[i].startsWith("t") && preambleArray[i].endsWith("e")) {
        bothCounter+= 1;
      }





   // console.log(eEndCounter);
   // console.log(tStartCounter);
   console.log(bothCounter);
  document.getElementById('endE').innerText = eEndCounter;
  document.getElementById('startT').innerText = tStartCounter;
  document.getElementById('both').innerText = bothCounter;




};



