//Title
//Author- Drop down menu
//Letter - Blank Space for Writing
//Topics - 5 Radio Buttons: 1. Business 2. Friendly 3. Family 4. Congratulations 5. Condolences
//Recipient - drop down menu
//Send Letter Button
//When the pen pal is done with a letter, they hit a button, and it gets saved to the API database
//New letter get rendered to the list below the form
//New letter displays 5 attributes

import { PenPalSociety } from "./penpalsociety.js";

const mainContainer = document.querySelector("#container");
//above code helps the html
const render = () => {
  mainContainer.innerHTML = PenPalSociety();
};

render();

// mainContainer.addEventListener("stateChanged", (customEvent) => {
//   render();
// });
