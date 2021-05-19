class CollectionTerm {
  constructor(parent, data) {
    this.parent = parent;
    this.data = data;
  }
  create(){
    this.parent.classList.add('randomised')
    this.data.content.forEach(item => {
      const el = document.createElement('BUTTON')
      el.innerText = item
      el.classList.add('disabled')
      this.parent.appendChild(el)
    })
  }
  run(){
    this.create();
  }
}

const COLLECTION_TERMS = [
  {
    name: "collection-0",
    content: ['Netflix Algorithmus', 'Sprachverarbeitung', 'Hund oder Katze', 'Roboter', 'Assistenzsysteme', 'Marketing', 'Deep Learning',
    'Suchmaschinen', 'Bots', 'Smart Home', 'Marketing', 'Prognosen', 'Übersetzungstools', 'AlphaGo']
  },
  {
    name: "collection-1",
    content: ['Überwachtes Lernen', 'Unüberwachtes Lernen', 'Deep Learning', 'Reinforcement Learning', 'Semi-Supervised Learning' ]
  }

]
