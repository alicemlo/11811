class Term {
  constructor(parent, data) {
    this.parent = parent;
    this.data = data;
  }
  init(){
    this.parent.classList.add('randomised')
    this.data.content.forEach(item => {
      const el = document.createElement('BUTTON')
      el.innerText = item
      el.classList.add('disabled')
      this.parent.appendChild(el)
    })
  }
  create(){
    console.log("term create")
  }
  run(){
    this.init();
    this.create();
  }
}

const dataTerms = [
  {
    name: "collection-0",
    content: ['Netflix Algorithmus', 'Sprachverarbeitung', 'Hund oder Katze', 'Roboter', 'Assistenzsysteme', 'Marketing', 'Deep Learning',
    'Suchmaschinen', 'Bots', 'Smart Home', 'Marketing', 'Prognosen', 'Übersetzungstools', 'AlphaGo']
  },
  {
    name: "collection-1",
    content: ['Überwachted Lernen', 'Unüberwachtes Lernen', 'Deep Learning', 'Reinforcement Learning', 'Semi-Supervised Learning' ]
  }

]
