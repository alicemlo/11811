const Buzzwords = {
  slug: "/buzzwords",
  name: 'Buzzwords',

  async render() {
    lastStory = this.slug

    return `
      <section class="buzzwords">
<div class="container">
  <article class="ct-buzz no-comp">
    <div class="flex">
        <div class="component no-mw">
          <h4>Algorithmus</h4>
        </div>
    </div>
  </article>
  
  <article class="ct-buzz no-comp">
    <div class="flex">
        <div class="component">
          <h4>Data Science</h4>
          <div class="component">
              <h5>Data Modelling</h5>
            </div>
          </div>
    </div>
  </article>
    
  <article class="ct-buzz no-comp">
    <div class="flex">
      <div class="component">
        <h4>Big Data</h4>
        <div class="component">
          <h5>Data Mining</h5>
        </div>
        <div class="component">
          <h5>Text Mining</h5>
        </div>
      </div>
    </div>
  </article>
  
  <article class="ct-buzz">
    <h4>Künstliche Intelligenz</h4>
    
    <div class="flex">
          
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
        <div class="component">
          <h5>Zielvariable</h5>
        </div>  
        <div class="component">
          <h5>Clusteranalyse</h5>
        </div>     
      </div>
      
      <div class="component">
        <h4>Musteranalyse</h4>
        <div class="component">
          <h5>Language Processing</h5>
        </div>
        <div class="component">
          <h5>Bildverarbeitung</h5>
        </div>
      </div>   
 

      <div class="component">
        <h4>Turing Test</h4>
      </div>
      

      <div class="component">
        <h4>Robotik</h4>
      </div>
      
      <div class="component">
        <h4>Superintelligenz</h4>
      </div>
    </div>
  </article>
</div>

<aside>
  <div class="definition">
    <i class="keyword">Keywords</i>
    <div class="def-content"></div>
  </div>
</aside>

      </section>

    `;
  },

  after_render: async () => {
    getButtonsOnPage()

    const cps = document.querySelectorAll('.component')
    const ct = document.querySelector('section .container')
    const buzz = new Event('buzz');
    const def = document.querySelector('.definition')
    defContainer = document.querySelector('.def-content')
    keyword = document.querySelector('.keyword')
    def.classList.add('inactive')

    cps.forEach(item => {
      let title = item.firstElementChild.innerText;
      let content = COLLECTION_BUZZWORDS.find(item => item.title === title)
      let cp = new BuzzComponent(item, title, content?.content || '', content?.keyword || '');
      cp.run()
    })
    ct.onclick = (e) => {
      let el=e.target
      if(e.target.tagName==='H5' || e.target.tagName==='H4') el = e.target.parentElement
      else resetDefContainer()
      document.querySelectorAll('.active-buzz').forEach(item => item.classList.remove('active-buzz'))
      el.dispatchEvent(buzz);
    }
    const resetDefContainer = () => {
      def.classList.add('inactive')
      defContainer.innerHTML = ''
      keyword.innerHTML = ''
    }
  }
};

let defContainer, keyword;

class BuzzComponent {
  constructor(item, title, content, keyword) {
    this.item = item;
    this.title = title;
    this.keyword = keyword;
    this.content = content || 'ist not defined';
  }
  showContent() {
    this.item.addEventListener('buzz', ()  => {
      this.item.classList.add('active-buzz')
      document.querySelector('.definition').classList.remove('inactive')
      defContainer.innerHTML = this.content;
      keyword.innerText = '- '+this.keyword;
    }, false);
  }

  run(){
    this.showContent()
  }
}


export default Buzzwords;
