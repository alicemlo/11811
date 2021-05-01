const Buzzwords = {
  slug: "/buzzwords",
  name: 'Buzzwords',

  async render(){
    lastStory = this.slug

    return `
      <section class="buzzwords">
<article class="ct-buzz">
  <h4>Künstliche Intelligenz</h4>
  <div class="flex">
    
    <div class="component">
      <h4>Big Data</h4>
      <div class="component">
        <h5>Data Mining</h5>
      </div>
    </div>
    
    <div class="component">
      <h4>Algorithmen</h4>
    </div>
    
    <div class="component">
      <h4>Turing Test</h4>
    </div>
    
    <div class="component">
      <h4>Robotics</h4>
    </div>
    
    <div class="component">
      <h4>Machine Learning</h4>
      <div class="component">
        <h5>Lernmethoden</h5>
      </div>
      <div class="component">
        <h5>Neuronale Netze</h5>
      </div> 
      <div class="component">
        <h5>Deep Learning</h5>
      </div>
      <div class="component">
        <h5>Reinforcement Lerning</h5>
      </div>       
    </div>
    
        
    <div class="component">
      <h4>Language Processing</h4>
    </div>
    
    
    <div class="component">
      <h4>Bildverarbeitung</h4>
    </div>
    
    <div class="component">
      <h4>Superintelligenz</h4>
    </div>
  </div>
</article>

<div class="ct-hover">
  <div class="hover"></div>
</div>
      </section>
    `;
  },

  after_render: async () => {
    const cps = document.querySelectorAll('.component')
    const hoverCt = document.querySelector('.ct-hover')
    hoverItem = document.querySelector('.hover')
    document.onmousemove = (e) =>{
      hoverCt.style.top = e.y+10+'px';
      hoverCt.style.left = e.x+10+'px';
    }
    cps.forEach(item =>{
      let title = item.firstElementChild.innerText;
      let content = buzzwords.find(item => item.title === title)
      let cp = new BuzzComponent(item, title, content?.content);
      cp.run();
    })
  }
};

let hoverItem;

class BuzzComponent{
  constructor(item, title, content) {
    this.item = item;
    this.title = title;
    this.content = content || 'ist not defined';
  }

  event(){
    this.item.onmouseover = () => this.showContent()
    // this.item.onmouseleave = () => this.hideContent()

  }

  showContent(){
    hoverItem.innerHTML = this.content;
  }

  hideContent(){
    hoverItem.innerHTML=''
  }

  run(){
    this.event()
  }

}


const buzzwords = [
  {
    title: 'Künstliche Intelligenz',
    content:
      `
        <p></p>
      `
  },
  {
    title: 'Big Data',
    content:
      `
        <p></p>
      `
  },
  {
    title: 'Data Mining',
    content:
      `
        <p></p>
      `
  },
  {
    title: 'Robotics',
    content:
      `
        <p></p>
      `
  },
  {
    title: 'Bildverarbeitung',
    content:
      `
        <p></p>
      `
  },
  {
    title: 'Language Processing',
    content:
      `
        <p></p>
      `
  },
  {
    title: 'Machine Learning',
    content:
      `
        <p></p>
      `
  },
  {
    title: 'Neuronale Netze',
    content:
      `
        <p></p>
      `
  },
  {
    title: 'Deep Learning',
    content:
      `
        <p></p>
      `
  },
  {
    title: 'Reinforcement Learning',
    content:
      `
        <p></p>
      `
  },
  {
    title: 'Superintelligenz',
    content:
      `
        <p></p>
      `
  }
]



export default Buzzwords;
