import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js"

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class CharacterCard extends LitElement {
  static properties = {
   characterName:{
    type: String,
    reflect: true,
  },
  characterBio: {
    type: String,
  },
  accentColor:{
    type: String,
    reflect: true,
    attribute: "accent-color",
  },
  opened: {
    type: Boolean,
    reflect: true,
   },
  topMeme:{
    type: String
  },
  bottomMeme: {
   type: String 
  },
  pusheenImg:{
    type: String
  },

 }


static styles= css`
    :host {
      display: inline-block;
      vertical-align: text-top;
    }
    :host([accent-color="blue"]) .card {
      background-color: var(--character-card-accent-color, blue);
     }

    button{
      text-transform: uppercase;
      padding: 5px;
      background-color: grey;
      color: pink; 
      margin: 5px; 
    }
    .image
    {
      height: auto;
      max-width: 100%;
      margin: 5px;
      
    }
    .card{
      background-color: #ffb6c1;
      width: 400px;
      max-width: 400px;
      height:auto;
      padding-top:15px
      
    }
    h4{
      padding: 4px; 
      margin: 5px;
      font-size: 60px;
      font-family: cursive;
      color: black; 
    }
    p{
      margin: 10px;
       font-family: cursive;
      color: black;
    }
    .buttons button:focus,
    .buttons button:hover {
      background-color: #ADD8E6(200,0,50,.5);
    }
    
    
    @media only screen and (max-width: 600px) and (min-width: 500px){
      .btn{
        display:none; 
      }
    }
    
    @media screen and (max-width: 600px){
      //.card{
        
    }
    .basic{
      background-color: #CBC3E3;
      color: black;
    }
  
  `;

  
   
  

 


  constructor() {
    super();
    this.characterName = 'Pusheen';
    this.characterBio = "Pusheen, an adorable household name cat. Pusheen"
    + "goes on many adventures and helps people learn about the cat life.";
    this.topMeme= "xxx";
    this.bottom="hhh";
    this.pusheenImg = "http://aepicos.com/codepen/images/pusheen1.png";
    this.opened = false; 
  }

  toggleEvent(){
    const state = this.shadowRoot.querySelector('details').getAttribute('open') === "" 
    ? true : 
    false;
    this.opened= state;
    cosnole.log(this.opened);
  }

  updated(changedProperties){
    changedProperties.forEach((oldValue, propName)=>{
      if(propName === "opened"){
        this.dispatchEvent(new CustomEvent('opened-changed', {
          composed: true,
          bubbles: true,
          cancelable: false,
          detail:{
            value: this[propName]
          }
        }));
        console.log(`${propName} changed. oldValue: ${oldValue}`);
      }
    });
  }

  render() {
    return html`
      <div class = "buttons">
        <button btn>Details!</button> 
        <button id="btn2">Change Color </button>
        <button class = "btn1"> Make Copy!</button> 
        <button class="modifytitle">Change Name</button>
          <button id="deletelastcard">Delete</button>
      </div>
      <div class = "card">
        <!-- Title/Header Code -->
        <h4 class = "title">${this.characterName}</h4>
      <!-- Image Code -->
      <img class="image"
            src = "http://aepicos.com/codepen/images/pusheen1.png">
        <details class = 'details'>
          <summary>Poosh</summary>
          ${this.characterBio}
        </details>
        </section>
      </div>
    `;
  }

}

customElements.define('character-card', CharacterCard);

