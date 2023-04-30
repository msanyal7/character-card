import { LitElement, html, css } from 'lit';
import "./character-card.js";
export class pusheenBuddies extends LitElement{
    static get tag(){
        return pusheenBuddies;
    }

      static get styles(){
       return css`
       :host{
        display: block;
       }
       .card {
        border: 1px solid black;
        padding: 10px;
        display: flex;
       }
       .item {
        display: inline-flex;
       }
       `;
      }
    static get properties(){
        return{
            buddies: { type: Array},
            team: {type: String}
        };
    }

    constructor(){
        super ();
        this.poosh =
        this.buddies =[
            {
                "pusheenImg": "http://aepicos.com/codepen/images/pusheen1.png",
                "characterName": "Pusheen",
                "nickName": "Pusheenie",
                "characterBio": "Pusheen, an adorable household name cat. Pusheen goes on many adventures and helps people learn about the cat life."
                
            },
            {
                "pusheenImg": "http://aepicos.com/codepen/images/pusheen1.png",
                "characterName": "Pusheen",
                "nickName": "Pusheenie",
                "characterBio": "Pusheen, an adorable household name cat. Pusheen goes on many adventures and helps people learn about the cat life."
                
            },
            {
                "pusheenImg": "http://aepicos.com/codepen/images/pusheen1.png",
                "characterName": "Pusheen",
                "nickName": "Pusheenie",
                "characterBio": "Pusheen, an adorable household name cat. Pusheen goes on many adventures and helps people learn about the cat life."
                
            }
        
        ];
        this.team = "Pusheen and his friends";
    }

  render(){
    return html`
    <div class = "card">
        ${this.buddies.map((poosh)=> html`
            <div class ="item">
           <character-card
           .title="${poosh.title}"
           .nickName = "${poosh.nickName}"
           .characterBio ="${poosh.characterBio}"
           .pusheenImg = "${poosh.pusheenImg}"
           ></character-card>
           .
            </div>
            `
        )}
    </div>
    `
  }
}
customElements.define(pusheenBuddies.tag, pusheenBuddies)