const TrainModel = {
  slug: "/train-model",
  name: 'Train Model',

  async render(){
    lastStory = this.slug
    return `
      <section class="section-create">
   
<article class="create ct-col">

  <div class="col-1"></div>

  <div class="col-2"></div>

</article>

      </section>
    `;
  },
  after_render: async () => {
    mobileLinkEnabled = false
    swipeRightEnabled = true
    swipeLeftEnabled = false
    gesturalInteractionEnabled = true
    gestureLabelingEnabled = false

    const container = document.querySelector('article.create')
    const col1 = document.querySelector('.col-1')
    const col2 = document.querySelector('.col-2')

    const trainModel = new CollectionTrainModel(container, col1, col2)
    trainModel.run();
  }

};

function appendChildren(parent, nodeList){
  nodeList.forEach(item => {
    parent.appendChild(item);
  })
}


class CollectionTrainModel{
  constructor(ctParent, ctCol1, ctCol2) {
    this.ctParent = ctParent
    this.ctCol1 = ctCol1
    this.ctCol2 = ctCol2
    this.index = 0
    this.data = COLLECTION_TRAIN_MODEL

    this.ctTitle = document.createElement('H1')
    this.ctText = document.createElement('P')
    this.ctInfo = document.createElement('P')
    this.ctButton = document.createElement('BUTTON')
  }

  init(){
    this.ctTitle.classList.add('col-1-title')
    this.ctText.classList.add('col-1-text')
    this.ctInfo.classList.add('col-1-info')
    this.ctButton.classList.add('col-1-event')
    this.ctButton.classList.add('gclick')
    this.ctButton.setAttribute('data-id', generateRandomID())

    appendChildren(this.ctCol1, [this.ctTitle, this.ctText, this.ctInfo, this.ctButton])
  }

  create(){
    this.setContent()
    this.ctButton.onclick = () => this.update();
  }

  update(){
    const content = this.data[this.index]
    if(this.index >= this.data.length-1) {
      window.location.hash = `/machine-learning`
    }
    else if(content.getState()) this.setContent(this.index++)
  }

  setContent(){
    const content = this.data[this.index]

    if(content.preInit) content.preInit()

    this.ctTitle.innerText = content.title
    this.ctText.innerText = content.text
    this.ctInfo.innerHTML = content.info
    this.ctButton.innerText = content.event
    if(content.class) this.ctCol2.classList.add(content.class)

    if(content.col2) this.ctCol2.innerHTML = content.col2
    if(content.setInit) content.setInit()
  }

  run(){
    this.init();
    this.create();
  }

}


export default TrainModel;
