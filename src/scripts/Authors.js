import { getAuthors } from "./dataAccess.js";

const listAuthors = () => {
  const authorArray = getAuthors();

  let html = "";

  const listItems = authorArray.map((author) => {
    return '<option id="${author.id}" data-emails="${author.email}" name="author-name" value="${author.name}"> ${author.name}</option>';
  });

  html += listItems.join("");

  return html;
};
//above is calling getAuthors and returns that info to the array and saves it there

export const Authors = () => {
  `<select name="author" id="authors">
    <optgroup label="authors">
        ${listAuthors()}
    </optgroup>
  </select>`;
};
//use backticks to hold code - literally just referencing a separate function, don't freak out
