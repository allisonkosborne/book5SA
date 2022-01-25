import { Authors } from "./Authors.js";

export const PenPalSociety = () => {
  let html = `
    <h1>Pen Pal Society</h1>
    <section class="form">

    <form>
   
    <label for="author">Author</label>   
    ${Authors()}
        <input type="text" name="Letter" size="100"> 

        <label for="recipient">Recipient</label>
        <select name="author" id="authors">
            <optgroup label="authors">
            <option value="robert">Robert</option>
            <option value="ash">Ash</option>
            <option value="chaneice">Chaneice</option>
            <option value="kyle">Kyle</option>
            <option value="michelle">Michelle</option>
            </optgroup>
        </select>  

        
    
            <br><br>
            <input type="submit" value="Send Letter">
    </form> 
      
      </section>
      `;
  return html;
};
