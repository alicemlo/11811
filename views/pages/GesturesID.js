// Import utils to extract id from url.
import { parseRequestUrl } from '../../services/utils.js';

const gestureViews = {
  swipe:{
    id: 'swipe',
    name: "Swipen",
    interactions: 'Diese Geste verwendest du, um auf eine andere Seite zu swipen. Du kannst nach rechts oder nach links swipen',
    instruction: '1. Hand während dem Swipen immer offen lassen. 2. Von Links nach Rechts swipen'
  },
  click: {
    id: 'swipe',
    name: "Klicken",
    interactions: '',
    instruction: 'instruction.. '
  }
}

const GestureView = {
  render: async () => {
    return /*html*/ `
      <section class="gestures fixed">
       <article>
       <h1 id="g-name"></h1>
       <h3 id="g-interaction"></h3>
       <br>
       <h2>Anleitung: </h2>
       <h3 id="g-instruction"></h3>
       
      </article>
      </section>
    `;
  },
  after_render: async () => {
    const params = parseRequestUrl();
    const view = gestureViews[params.id]
    // if(!view) redirect to gestures

    let name = document.getElementById('g-name')
    let interaction = document.getElementById('g-interaction')
    let instruction = document.getElementById('g-instruction')
    name.innerText=view.name
    interaction.innerText=view.interactions
    instruction.innerText=view.instruction

  }
};
export default GestureView;
