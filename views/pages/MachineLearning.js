const MachineLearning = {
  slug: "/machine-learning",
  name: 'Machine Learning',

  async render() {
    lastStory = this.slug
    return `
<section class="machine-learning">
  <article class="ct-ml story-1">
  
  <div class="ct-fixed">    
    <span class="progress-bar"></span>
    <div class="chapter"><p><span class="expand-info" data-info=": Künstliche Intelligenz">Kapitel 1</span></p></div>
  </div>
  
  <div class="ct-content">
    <div class="content">
      <div class="col-1">
        <h1>Wieso du über Machine Learning Bescheid wissen solltest</h1>
        <p>
          Künstliche Intelligenz und Machine Learning gewinnt immer mehr an Relevanz und wird auch immer häufiger auch für Anwendungen in
          unserem Alltag angewendet - ohne dass uns das wirklich bewusst ist. Zum Beispiel der Netflix Algorithmus.
        </p>
        <p>
          Mittlerweile ist KI ein Hype, um dem gleichzeitig sehr viel Unwissenheit und Halbwahrheiten bestehen. Ziel dieser Webseite ist es,
          dir das Thema KI und insbesondere Machine Learning möglichst anschaulich näher zu bringen. Die Basics verstehst du auch, wenn du
          kein Informatik Nerd bist.
        </p>
      </div>
      <div class="col-2 randomised" style="padding: 2rem">
        <button class="disabled">
          Netflix Algorithmus
        </button>
        <button class="disabled">
          Sprachverarbeitung
        </button>
        <button class="disabled">
          Hund oder Katze
        </button>
        <button class="disabled">
          Roboter
        </button>
        <button class="disabled">
          Assistenzsysteme (bsp. Fahrassistenz)
        </button>
        <button class="disabled">
          Marketing
        </button>
        <button class="disabled">
          Deep Learning
        </button>
        <button class="disabled">
          Smart Home
        </button>
        <button class="disabled">
          Prognosen
        </button>
        <button class="disabled">
          Bots
        </button>
        <button class="disabled">
          Kundenanalyse
        </button>
        <button class="disabled">
          Maschinelle Übersetzungstools
        </button>
        <button class="disabled">
          Schachgegner
        </button>
      </div>
    </div>
  
    <div class="content">
      <div class="col-1">
        <h3><a href="#/buzzwords">-> du willst die zuerst einen Überblick über die wichtigsten Begriffe verschafffen?</a></h3>
      </div>
    </div>
  
  
    <div class="content">
      <div class="col-1">
        <h1>Was ist Intelligenz?</h1>
        <p>Damit man weiss, wie man Intelligenz künstlich erschaffen kann, muss zuerst geklärt sein, wie man Intelligenz definiert.</p>
        <p>
          Jedoch ist dies nicht ganz so einfach, da sich diese Defintion immer wieder verändert. Wir selber verstehen noch nicht ganz, was Intelligenz ist.
          Grunsätzlich beschreibt Intelligenz jedoch ein lernfähiges System, dass an das menschliche Denken herankommt. Wir Menschen lernen zum Beispiel aus den Erfahrungen, 
          die wir in unserer Vergangenheit erlebt haben. Künstlich generierte Intelligenz basiert genau auf diesem Prinzip. 
        </p>
        <p>
          Um ein intelligentes System künstlich zu generieren, braucht es Machine Learning (ML). Dieses System lernt anhand von ganz viel Beispieldaten. 
          Wie das genau abläuft und welche Lernmethoden existiern, wird im nächsten Kapitel genauer dargestellt. 
        </p>
      </div>
    </div>
  
      <div class="content">
      <div class="col-1">
        <h1>Für was brauchen wir künstliche generierte Intelligenz?</h1>
        <p>Schlussendlich bringt uns KI Effizienz. Um dir das zu veranschaulichen, stelle dir folgendes Szenario vor:</p>
        <p>
           Du erhälst den Auftrag, eine Wetterprognose an deinen Wohnort für die nächste Woche zu erstellen. Als Ausgangslage erhältst du ausführliche Wetterdaten der letzten 10 Jahre.
           Dir steht ausserdem ein Computer für die Auswertung zur Verfügung. 
        </p>
        <p>
           1. Heransgehensweise (die langsame Variante): 
           Du analysierst die Wetterdaten sehr genau an und erkennst Muster und Häufigkeiten. Dir fällt aus, dass es im Sommer wärmer ist wie im Winter oder dass nach einem langsamen Aufstieg des Luftdrucks sonniges Wetter folgt. 
           Du stellst also ganz viele solcher Regeln und Gesetzmässigkeiten auf, anhand deren du dir eine Prognose für die kommenden Tage aufstellen kannst. Du beschreibst einem Computer diese Regeln, damit der Rechner die die genauen Zahlen ausrechnen kann.
        </p>
        <p>
           2. Heransgehensweise (der effiziente Weg):
           Du gehst direkt an den Computer und generierst dein eigenes künstliches Modell. Dafür übergibst du dem System deine Daten. Es braucht jetzt eine Weile, bis das Modell fertig trainiert ist. 
           Sobald es die Wetterdaten analysiert hat und daraus gelernt hat, kann es dir innert Sekunden eine Wetterprognose aufstellen. Ausserdem bleibt es weiterhin lernfähig: Die Prognosen werden immer besser, weil es seine Vorhersage wieder mit den 
           den echten Daten vergleichen kann und so seinen Algorithmus ständig anpasst. Aus diesem Prozess hast du vielleicht nicht gelernt, dass auf eine klare Nacht ein kalter Morgen folgt, jedoch konntest du in dieser Zeit viel effiziereter anderes lernen.  
      </div>
    </div>
    
    <div class="content">
      <div class="col-1">
        <h1>Gebiete von KI</h1>
        <p>
          Künstliche Intelligenz ist ein riesiges Feld, dass in viele kleinere Bereiche aufgeteilt werden kann. Um dir das kurz zu
          veranschaulichen, stelle ich dir drei der relevanten Teilgebiete von KI auf:
        </p>
      </div>
      <div class="col-2">
        <div class="robotics gen-btn-text" data-title="Robotics">
          Bsp. Roboter, der Unkraut jätten kann.
        </div>
        <div class="visual-intelligence gen-btn-text" data-title="Visuelle Intelligenz">
          Visuelle Intelligenz kann man auch als intelligente Bildverarbeitung beschreiben: Ein Algorithmus ist dabei fähig, Formen bzw.
          Muster auf Bildern zu erkennen. Ein einfach Beispiel dafür ist die Unterscheidung zwischen Hund und Katze (Objekterkennung) auf
          einem Bild. Visuelle Intelligenz kann aber auch für Gesichtserkennung eingesetzt werden.
        </div>
        <div class="language-processing gen-btn-text" data-title="Sprachliche Intelligenz">
          Auch bekannt unter Natural Language Processing. Gemeint ist die maschinelle Verarbeitung von natürlicher Sprache: Texte aber auch
          gesprochene Sprache wird vom Algorithmus erkannt und analysiert. -> Eher neu und am Anfang der Entwicklung, Sinn / Kontext, ..
        </div>
      </div>
    </div>
  
  </div>
  </article>
  
  <article class="ct-ml story-2">
  
  <div class="ct-fixed">
    <span class="progress-bar"></span>
    <div class="chapter"><p><span class="expand-info" data-info=": Machine Learning">Kapitel 2</span></p></div>
  </div>
  
  <div class="ct-content">
    <div class="content">
      <div class="col-1">
        <h1>Wie wird ein System intelligent?</h1>
        <p>
          Hier kommt Machine Learning ins Spiel. Denn durch maschinelles Lernen entstehen intelligete Modelle bzw. Algorithmen, die uns
          bespielsweise intelligente Bilderkennung ermöglichen. -> Grobe Funktionsweise, Übersicht über Lernmethoden.
        </p>
        <p>
          Damit eine Maschine lernen kann, braucht es als Ausgangslage Daten. Diese Daten werden auch Input genannt. Diese stellen wir dem System
          zur Verfügung. Anhand dieses Inputs, kann das System einen eigenen Algorithmus programmieren, welcher anhand des Inputs einen Ergebnis (Output) ausgeben kann.
        </p>
      </div>
    </div>
  
    <div class="content">
      <div class="col-1">
        <h1>Dieser Prozess in einem sehr einfachen Beispiel zusammengefasst</h1>
        <p>
          Ziel: Du möchtest ein System generieren, dass dir vorhersagen kann, ob du einen Song magst oder nicht. 
        </p>
        <p>
          Ausganslage: Du hörst dir 14 Songs an und kannst sie jeweils mit "gut" oder "schlecht" bewerten. 
        </p>
        <p>
          -> Songs bewerten
        </p>
      </div>
      <div class="col-2">
        <div class="svg-songs"></div>
        <div class="info"></div>
      </div>
    </div>
  
    <div class="content">
      <div class="col-1">
        <h1>Lernmethoden</h1>
        <p>
          Machine Learning ist aber noch viel breiter als wie das vorheige Beispiel veranschaulicht hat. Es gibt ganz viele Lernmethoden,
          die ein System intelligent machen können. Ich werde dir 2 Kategorien vorstellen:
        </p>
        <p>
          Am einfachsten zu verstehen ist überwachtest Lernen. Da werde ich dir zeigen, wie deine Gesten erkannt werden.
        </p>
        <p>
          Am Beispiel vom Netflix Filmempfehlungs Algorithmus werde ich die erklären, was unüberwachtes Lernen ist.
        </p>
      </div>
      <div class="col-2">
        <button>
          Überwachtes Lernen
        </button>
        <button>
          Unüberwachtes Lernen
        </button>
        <button class="disabled">
          Deep Learning
        </button>
        <button class="disabled">
          Reinforcement Learning
        </button>
        <button class="disabled">
          Semi-Supervised Learning
        </button>
      </div>
    </div>
  
  
    <div class="content">
      <div class="col-1">
        <h1>Überwachtes Lernen</h1>
        <p> 
        ...
        </p>

      </div>
      <div class="col-2">
      </div>
    </div>
    
    <div class="content">
      <div class="col-1">
        <h1>Unüberwachtes Lernen</h1>
        <p>
        ...
        </p>

      </div>
      <div class="col-2">
      </div>
    </div>
  
  </div>
  
  </article>
  
  <article class="ct-ml story-3">
  
  <div class="ct-fixed">
    <span class="progress-bar"></span>
    <div class="chapter"><p><span class="expand-info" data-info=": Datenproblematik">Kapitel 3</span></p></div>
  </div>
  
  <div class="ct-content">
    <div class="content">
      <div class="col-1">
        <h1>Ohne Daten geht gar nichts</h1>
        <p>
          Machine Learning basiert auf Daten. Je mehr Daten vorhanden, desto bessere können Modelle trainiert werden. Datensammlung, Big
          Data, Privatsphäre und Datenverwaltung haben wird ja heute schon nicht im Griff.
        </p>
        <p>
          Ausserdem kommt es auch nicht allein auf die Menge der Daten an. Databias Beispiele...
        </p>
      </div>
    </div>
  
    <div class="content">
      <div class="col-1">
        <h1>Big Data und Privatsphäre</h1>
        <p>
          Zielkonflikt
        </p>
      </div>
      <div class="col-2">
      </div>
    </div>
  
    <div class="content">
      <div class="col-1">
        <h1>Databias und Ethik</h1>
        <p>
          Bsp. Hautfarbe, Gender.
          "Die KI ist nur so gut wie ihre Trainingsdaten."
        </p>
      </div>
      <div class="col-2">
      </div>
    </div>
  
  </div>
  </article>
  
  <article class="ct-ml story-4">
  
  <div class="ct-fixed">
    <span class="progress-bar" data-width="60"></span>
    <div class="chapter"><p><span class="expand-info" data-info=": Zukunft">Kapitel 4</span></p></div>
  </div>
  
  <div class="ct-content">
    <div class="content">
      <div class="col-1">
        <h1>Wieso brauchen wie ML</h1>
        <p>
          ...
        </p>
      </div>
    </div>
  
    <div class="content">
      <div class="col-1">
        <h1>Potenzial, Prognose</h1>
        <p>
          ...
        </p>
      </div>
    </div>
  
    <div class="content">
      <div class="col-1">
        <h1>Werden wir in Zukunft alle arbeitslos sein?</h1>
        <p>
          ...
        </p>
      </div>
    </div>
  
  </div>
  
  </article>

</section>
    `;
  },
  after_render: async () => {
    // progress bar
    let container = document.querySelectorAll('.ct-ml')
    let progressBars = document.querySelectorAll('.progress-bar')

    container.forEach((item, index) => {
      let box = item.getBoundingClientRect()
      iteral.push({index: index, progressBar: progressBars[index], width: 0, y0: box.top, y1: box.top + box.height,})
    })

    setProgressbar(window.scrollY)
    window.onscroll = () => {
      setProgressbar(window.scrollY)
    }

    // songs
    let svgSong = document.querySelector('.svg-songs')
    let svg1 = new SvgKlickItem('svg-songs', svgSong,SVG__SONG, ['klick','klick', 'alksdm'] )
    svg1.run()

    // gen-btn-text
    let genBtnTex = document.querySelectorAll('.gen-btn-text')
    genBtnTex.forEach(btn => {
      let ct = btn.parentElement.previousElementSibling
      let parent = btn.parentElement;
      let title = btn.getAttribute('data-title')
      let item = new GenBtnText(title, ct, parent, btn);
      item.run()
    })
  }
};


class SvgKlickItem{
  constructor(id, container, source, indications) {
    this.id = id;
    this.container = container;
    this.base = source
    this.indications = indications;
    this.btn = document.createElement('BUTTON')
    this.reset = document.createElement('BUTTON')
    this.btn.classList.add('btn-svg')
    this.reset.innerText='Zurücksetzen'
    this.index = -1
    this.layers = null
    this.length = null
  }
  create(){
    this.btn.innerText=this.indications[this.index+1]
    this.container.innerHTML = this.base
    this.container.appendChild(this.reset)
    this.container.appendChild(this.btn)
    this.btn.onclick = () => this.update(this.index++)
    this.reset.onclick = () => this.update(this.index=-1)
    this.layers = document.querySelectorAll(`.${this.id}-layer`)
    this.length = this.layers.length
  }
  update(){
    this.layers.forEach(layer => layer.classList.remove('visible'))
    if(this.index>this.length) this.index=0
    let it = this.layers[this.index]
    if(it) it.classList.add('visible')
  }
  run(){
    this.create()
  }
}

let iteral = [];


function setProgressbar(pos) {
  let active = iteral.find(item => {
    return pos >= item.y0 && pos <= item.y1
  })
  if (active?.progressBar) {
    let width = 100 / (active.y1 - active.y0) * (pos - active.y0)
    active.progressBar.style.width = width + '%';
  }
}


class GenBtnText {
  constructor(title, container, parent, self) {
    this.title = title
    this.container = container
    this.parent = parent
    this.self = self;
    this.el = document.createElement('BUTTON');
    this.text = this.self.innerHTML;
  }

  hide() {
    this.self.classList.add('invisible')
  }

  create() {
    this.el.innerText = this.title;
    this.el.classList.add('btn-gen-btn-text')
    this.container.appendChild(this.el)
  }

  event() {
    this.el.onclick = () => this.click()
  }

  click() {
    Array.from(this.container.children).forEach(btn => {
      if (btn.tagName === 'BUTTON') btn.classList.remove('active')
    })
    this.parent.innerHTML = this.text
    this.el.classList.add('active')
  }

  run() {
    this.hide();
    this.create();
    this.event()
  }
}


export default MachineLearning;
