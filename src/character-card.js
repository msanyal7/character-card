import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js"

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class CharacterCard extends LitElement {
  static properties = {
   characterName:{
    type: String,
    reflect: true,
  },
  nickName: {
   type: String,
  },
  characterBio: {
    type: String,
  },
 backColor: {
    type: String,
    reflect: true,
    attribute: "back-color",
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
  changeColor:{
   type: Boolean,
   reflect: false,
  },
  memeImg:{
    type: String
  },
 }


static styles= css`
    :host {
      display: inline-block;
      vertical-align: text-top;
    }
    
    :host([back-color="lightgreen"]) .card {
      background-color: var(--character-card-back-color, lightgreen);
      color: black;
    }
    :host([back-color="lightblue"]) .card {
      background-color: var(--character-card-back-color, lightblue);
      color: black;
    }
     .card{
      background-color: #ffb6c1;
      width: 400px;
      max-width: 400px;
      height:auto;
      padding-top:15px
      
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

    .meme{
        width: 300px;
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
    this.nickName = 'Nick Name: Pusheenie';
    this.characterBio = "Pusheen, an adorable household name cat. Pusheen "
    + "goes on many adventures and helps people learn about the cat life.";
    this.topMeme= "xxx";
    this.bottomMeme="hhh";
    this.pusheenImg = "http://aepicos.com/codepen/images/pusheen1.png";
    this.opened = false; 
    this.changeColor= false;
    this.memeImg="https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F001%2F878%2F329%2Fdfa.jpg";
  }

  toggleEvent(){
    const state = this.shadowRoot.querySelector('details').getAttribute('open') === "" ? true :  false;
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
    <!--
      <div class = "buttons">
        <button btn>Details!</button> 
        <button id="btn2">Change Color </button>
        <button class = "btn1"> Make Copy!</button> 
        <button class="modifytitle">Change Name</button>
          <button id="deletelastcard">Delete</button>
      </div> -->
      <div class = "card">
        <!-- Title/Header Code -->
        <h4 class = "title">${this.characterName}</h4>
        <h5 class = "subtitle">${this.nickName}</h5>
      <!-- Image Code -->
      <div class ="meme">
       <meme-maker
        image-url="${this.pusheenImg}"
        ></meme-maker>
         </meme-maker>
     </div>
        <details class = 'details'>
          <summary>Poosh</summary>
         <p> ${this.characterBio}</p>
         <slot></slot>
        </details>
     </div>
      </div>
    `;
  }

}

customElements.define('character-card', CharacterCard);