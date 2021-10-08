// Array for text button titles and header string text, and a starter string for the actual header.
const headerStates = ["GIVE ", "ME ", "ORANGE ", "YOU ", "EAT "];
let headerString = "GIVE ";

// Sets button title from the specified index in the headerStates array, then sets callback function for that button.
// Logs that button at the index has been set.
function setButton(index)
{
    document.getElementById(`button${index}`).innerHTML = headerStates[index];

    document.getElementById(`button${index}`).onclick = () => {
        headerString += headerStates[index];
        document.getElementById("header").innerHTML = headerString;
    }

    console.log(`Set button${index}`);
}

// Sets the header starter string then iterates through the buttons to initialize.
for (let i = 0; i < headerStates.length; i++)
{
    document.getElementById("header").innerHTML = headerString;
    setButton(i);
}

// Variables for auto sentence generation
let autoGenerate = false;
let repeatingWords = false;
let lastWord = "GIVE ";

// Sets callback for "Generate For Me" button
document.getElementById("autobutton").onclick = () =>
{
  if (autoGenerate)
  {
    autoGenerate = false;
    console.log("Auto generation toggled off");
  }
  else
  {
    autoGenerate = true;
    console.log("Auto generation toggled on");
  }
}

// Sets callback for "Toggle Repeating Words" button
document.getElementById("repeatbutton").onclick = () =>
{
  if (repeatingWords)
  {
    repeatingWords = false;
    console.log("Repeating words toggled off");
  }
  else
  {
    repeatingWords = true;
    console.log("Repeating words toggled on");
  }
}

function autoAddToHeaderString()
{
  let newWord = headerStates[Math.floor(Math.random() * 5)];

  while (newWord === lastWord)
  {
    newWord = headerStates[Math.floor(Math.random() * 5)];
  }

  if(autoGenerate)
  {
    if (repeatingWords)
    {
      headerString += headerStates[Math.floor(Math.random() * 5)];
      document.getElementById("header").innerHTML = headerString;
    }
    else
    {
      headerString += newWord;
      document.getElementById("header").innerHTML = headerString;
    }
  }

  lastWord = newWord;
}

setInterval(autoAddToHeaderString, 250);
