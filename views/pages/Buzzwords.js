const Buzzwords = {
  slug: "/buzzwords",
  name: 'Buzzwords',

  async render() {
    lastStory = this.slug

    return `
      <section class="buzzwords">
<div class="container">
  <article class="ct-buzz no-comp" data-id="alg-12345">
    <div class="flex" data-id="alg-12345">
        <div class="component no-mw gclick" data-id="alg-12345">
          <h4 data-id="alg-12345">Algorithmus</h4>
        </div>
    </div>
  </article>
  
  <article class="ct-buzz no-comp">
    <div class="flex" data-id="datas-23455">
        <div class="component gclick" data-id="datas-23455">
          <h4 data-id="datas-23455">Data Science</h4>
          <div class="component gclick" data-id="datam-34592">
              <h5 data-id="datam-34592">Data Modelling</h5>
            </div>
          </div>
    </div>
  </article>
    
  <article class="ct-buzz no-comp">
    <div class="flex" data-id="bigd-23455">
      <div class="component gclick" data-id="bigd-23455">
        <h4 data-id="bigd-23455">Big Data</h4>
        <div class="component gclick" data-id="datam-43435">
          <h5 data-id="datam-43435">Data Mining</h5>
        </div>
        <div class="component gclick" data-id="textm-12339">
          <h5 data-id="textm-12339">Text Mining</h5>
        </div>
      </div>
    </div>
  </article>
  
  <article class="ct-buzz">
    <h4>Künstliche Intelligenz</h4>
    
    <div class="flex">
          
      <div class="component gclick" data-id="machl-43435">
        <h4 data-id="machl-43435">Machine Learning</h4>
        <div class="component gclick" data-id="lernm-43435">
          <h5 data-id="lernm-43435">Lernmethoden</h5>
        </div>
        <div class="component gclick" data-id="neuron-43435">
          <h5 data-id="neuron-43435">Neuronale Netze</h5>
        </div> 
        <div class="component gclick" data-id="deepl-43435">
          <h5 data-id="deepl-43435">Deep Learning</h5>
        </div>
        <div class="component gclick" data-id="reinfl-43435">
          <h5 data-id="reinfl-43435">Reinforcement Lerning</h5>
        </div>        
        <div class="component gclick" data-id="zielv-43435">
          <h5 data-id="zielv-43435">Zielvariable</h5>
        </div>  
        <div class="component gclick" data-id="cluste-43435">
          <h5 data-id="cluste-43435">Clusteranalyse</h5>
        </div>     
      </div>
      
      <div class="component gclick" data-id="mustera-43435">
        <h4 data-id="mustera-43435">Musteranalyse</h4>
        <div class="component gclick" data-id="langp-43435">
          <h5 data-id="langp-43435">Language Processing</h5>
        </div>
        <div class="component gclick" data-id="bildv-43435">
          <h5 data-id="bildv-43435">Bildverarbeitung</h5>
        </div>
      </div>   
 

      <div class="component gclick" data-id="turin-43435">
        <h4 data-id="turin-43435">Turing Test</h4>
      </div>
      

      <div class="component gclick" data-id="robot-43435">
        <h4 data-id="robot-43435">Robotik</h4>
      </div>
      
      <div class="component" data-id="superi-43435">
        <h4 data-id="superi-43435" class="gclick">Superintelligenz</h4>
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
    gesturalInteractionEnabled = true
    gestureLabelingEnabled = false

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
