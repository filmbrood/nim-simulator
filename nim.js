// Array for text button titles and header string text, and a starter string for the actual header.
const headerStates = ["GIVE ", "ME ", "ORANGE ", "YOU "];
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

    console.log(`Set button%{index}`);
}

// Sets the header starter string then iterates through the buttons to initialize.
for (let i = 0; i < 4; i++)
{
    document.getElementById("header").innerHTML = headerString;
    setButton(i);
}

let autoGenerate = false;

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

function autoAddToHeaderString()
{
  if(autoGenerate)
  {
    headerString += headerStates[Math.floor(Math.random() * 4)];
    document.getElementById("header").innerHTML = headerString;
  }
}

setInterval(autoAddToHeaderString, 250);
